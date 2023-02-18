import React, { useState, useContext, useEffect} from 'react';
import { Box, Button, TextareaAutosize, Typography } from '@mui/material';
import { DataContext } from '../../../context/dataProvider';
import { API } from '../../../service/api';
import Comment from './Comment';

const initialValues = {
    id: '',
    comment : '',
    name : '',
    date : new Date()
}
const Comments = ({post}) => {

    const [comment, setComment] = useState(initialValues);
    const {account} = useContext(DataContext);
    const [toggle, setToggle] = useState(false);

    const [allComments, setAllComments] =useState([]);
    const handleChange = (e) => {
        setComment({...comment, name: account.username, id : post._id, comment: e.target.value})

    }
    const addComment = async(e) => {
        let response = await API.newComment(comment);
        if(response.isSuccess){
            setComment(initialValues);
            setToggle(prevState => !prevState);

        }
    }
    useEffect(() => {
        const getData = async() => {
            const response = await API.getComment(post._id);
            if (response.isSuccess){
                setAllComments(response.data);
            }
        }
        getData();
    },[post, toggle])
    console.log(allComments)
  return (
    <Box>
        <Box style = {{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <TextareaAutosize minRows={3} placeholder = 'Add Your Comment Here' style={{width : '100%'}} onChange = {(e) => handleChange(e)}></TextareaAutosize>
            <Button variant='contained' color='primary' size='medium' style={{marginLeft:'5px'}} onClick = {(e)=>addComment(e)}>Submit</Button>
        </Box>
        <Box>
            {
                allComments && allComments.length > 0 ? allComments.map(comment => (<Comment comment = {comment} setToggle = {setToggle}/>))  : <Typography>No Comments </Typography>
            }
            
        </Box>
    </Box>
  )
}

export default Comments;
