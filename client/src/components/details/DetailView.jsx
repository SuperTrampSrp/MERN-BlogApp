import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import noBlog from '../../static/images/noImage.png'; 
import { Box, styled, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataContext } from '../../context/dataProvider';
import Comments from './Comments/Comments';


const Container = styled(Box)`
margin: 50px 100px;
`
const Heading = styled(Typography)`
font-size: 38px;
font-weight:600;
text-align:center;
margin:50px 0 10px 0;
word-break: break-word;
`
const Image = styled('img')({
  width:'100%',
  height:'50vh',
  objectFit:'cover'
})

const Edit = styled(EditIcon)`
margin:5px;
padding:5px;
border: 1px solid #878787;
border-radius: 10px;

`
const Delete = styled(DeleteIcon)`
margin:5px;
padding:5px;
border: 1px solid #878787;
border-radius: 10px;
`
const Author = styled(Box )`
color: #878787;
margin : 20px 0;
display: flex;
`
const Description = styled(Typography)`
word-break:break-word`
const DetailView = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const {account} = useContext(DataContext);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    }, [])

    const blogImage = post.picture ? post.picture : noBlog ; 

    const deleteBlog = async() => {
        let response = await API.deletePost(post._id)
        if(response.isSuccess){
          navigate('/');
        }
    }
  return (
    <Container>
      <Image src= {blogImage} alt = 'blog'/>
      <Box style = {{float:'right'}}>
        {
          account.username === post.username && 
          <>
          <Link to = {`/update/${post._id}`}><Edit color='primary'/></Link>
          
          <Delete color='error' onClick={() => deleteBlog()}/>
          </>
        }
        
      </Box>
      <Heading>{post.title}</Heading>
      <Author>
        <Typography>Author :<Box component='span' style= {{fontWeight:600}} >{post.username}  </Box></Typography>
        <Typography style = {{marginLeft : 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
      </Author>
      <Typography>{post.description}</Typography>
      <Comments post = {post}/>
    </Container>
  )
}

export default DetailView;