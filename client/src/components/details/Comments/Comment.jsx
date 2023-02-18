import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../../context/dataProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../../service/api';


const Delete = styled(DeleteIcon)`
margin-left: auto;
`
const Component = styled(Box)`
margin-top:30px;
background: #f5f5f5;
padding : 10px;

`
const Container = styled(Box)`
display:flex;
margin-bottom:5px;
`
const Name = styled(Typography)`
font-weight: 600;
font-size:18;
margin-right: 20px;
`
const StyledDAte = styled(Typography)`
color:#878787;
font-size: 14px;
`

const Comment = ({comment, setToggle}) => {
    const {account} = useContext(DataContext);

    const removeComment = async() => {
        const response = await API.deleteComment(comment._id);
        if(response.isSuccess){
            setToggle(prevState => !prevState)
        }
    }
  return (
    <Component>
        <Container>
            <Name>{comment.name}</Name>
            <StyledDAte>{new Date(comment.date).toDateString()}</StyledDAte>
            {comment.name === account.username && <Delete color='error' onClick={() => removeComment()}/>}
        </Container>
        <Box>
            <Typography>{comment.comment}</Typography>
        </Box>
    </Component>
  )
}

export default Comment;