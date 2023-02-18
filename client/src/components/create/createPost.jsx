import { Box, Button, FormControl, TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import blog from '../../static/images/blog.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {API} from '../../service/api';
import {DataContext} from '../../context/dataProvider'



const initialPost = {
  title : "",
  description : '',
  picture : '',
  username : '',
  category : '',
  createdDate : new Date()
}
const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');

  const location = useLocation() ;
  const {account} = useContext(DataContext);
  const navigate = useNavigate();

  const blogImage = post.picture ? post.picture : blog;


  useEffect(() => {
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        // console.log(file);

        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
    }
    getImage();
    post.category = location.search?.split('=')[1] || 'All';
    post.username = account.username;
  },[file])
  const handleChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value})
    // console.log(post)
  }
  const savePost = async() => {
    let response = await API.createPost(post);
    if(response.isSuccess){
      navigate('/');
    }
  }
  return (
    <Box style={{ margin: '50px 100px'}}>
        <img src={blogImage} alt="blog" style={{width: '100%', height: '50vh', objectFit:'cover'}}/> 
        <FormControl style={{display:'flex', flexDirection: 'row', alignItems:'center'}}>
            <label htmlFor="fileInput"><AddCircleIcon style = {{fontSize:'35px'}}/></label>
            <input type="file" id='fileInput' style={{display:'none'}} onChange = {(e) => setFile(e.target.files[0])}/>
            <TextField variant='outlined' style={{flex:'1', margin:'0 30px'}} label = 'Title' onChange={e => handleChange(e)} name = 'title'/>
            <Button variant='contained' onClick={() => savePost()}>Publish</Button>
        </FormControl>
        <TextareaAutosize minRows={5} placeholder =  "Tell Your Story" onChange={e => handleChange(e)} name = 'description' style={{width : '100%',fontSize:'25px',border:'none', borderRadius:'20px', margin:'10px'}}/>
    </Box>
  )
}

export default CreatePost;