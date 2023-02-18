import React from 'react';
import {Box, TextField, Button, styled, Typography} from '@mui/material';
import logo from '../../../src/static/images/logo.png';
import { useState, useContext} from 'react';
import { API } from '../../service/api';
import { DataContext } from '../../context/dataProvider';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
width:400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width:100, margin: 'auto', display:'flex', padding:'50px 0 0'     
})

const Wrapper = styled(Box)`
padding:25px 35px;
display: flex;
flex:1;
flex-direction:column;
& > div, &> button, & > p{
    margin-top: 20px;
}
`;
// const loginButton = styled(Button)`
// text-transform:none;
// background:#FB641B;
// color:#fff;
// height:48px;
// border-radius:2px;
// `;
// const sugnupButton = styled(Button)`
// text-transform:none;
// background:#fff;
// color:#2874f0;
// height:48px;
// border-radius:2px;
// `;

const Text = styled(Typography)`
color:#878787;
font-size:16px;
`;

const Error = styled(Typography)`
font-size:10
color:#ff6161
line-height:0
margin-top:10
font-weight:600
`

const signUpInitialValues = {
    name: '',
    username: '',
    password: ''
}
const loginInitialValues = {
    username: '',
    password: ''
}
function Login( {isUserAuthenticated}) {
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signUpInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');
    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSugnUp = () => {
        if (account === 'login'){
            toggleAccount ('signup');
        }
        else{
            toggleAccount ('login');
        }
        
    }
    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
    }
    const signupUser = async() => {
        let response = await API.userSignup(signup);
        if (response.isSuccess){
            setError('');
            setSignup(signUpInitialValues);
            toggleAccount('login');
        }else{
            setError('Something went wrong')
        }
    }
    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    const loginUser = async() => {
        let response = await API.userLogin(login);
        if(response.isSuccess){
            setError('')
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`)
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`)
            setAccount({username: response.data.username, name: response.data.name})
            isUserAuthenticated(true);
            navigate('/');
        }else{
            setError("Something went wrong")
        }
    }
  return (
    <Component>
        <Box>
            <Image src={logo} alt="logo" />
        </Box>
        {
            account === 'login' ?
                <Wrapper>
                <TextField variant='standard' value={login.username} label = 'Enter your username' onChange={(e) => onValueChange(e)} name = 'username'/>
                <TextField variant='standard' value={login.password} label = 'Enter your password' onChange={(e) => onValueChange(e)} name = 'password'/>
                {error && <Error>[error]</Error>}
                <Button variant='contained' onClick={() => loginUser()}>Login</Button>
                <Typography style={{textAlign: 'center'}}>OR</Typography>
                <Button variant='outlined' onClick={()=> toggleSugnUp()}>Sign Up</Button>
            </Wrapper>
            :
            <Wrapper>
                <TextField variant='standard' label = 'Enter your Name' name = 'name' onChange={(e)=> onInputChange(e)}/>
                <TextField variant='standard' label = 'Enter a Username' name='username' onChange={(e)=> onInputChange(e)}/>
                <TextField variant='standard' label = 'Enter a Password' name='password' onChange={(e)=> onInputChange(e)}/>
                {error && <Error>[error]</Error>}
                <Button variant='contained' onClick={() => signupUser()}>Sign Up</Button>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <Button variant='outlined' onClick={()=> toggleSugnUp()}>Already have an account</Button>
            </Wrapper>
    
        }
        

    </Component>
  )
}

export default Login