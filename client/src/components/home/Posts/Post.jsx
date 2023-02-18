import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { addElipsis } from '../../../utils/common-utils';
import noImage from '../../../static/images/noImage.png'


const Container = styled(Box)`
border : 1px solid;
border-radius:10px;
margin:10px;
height:350px;
display: flex;
align-items:center;
flex-direction:column;
& > p {
    padding : 0 5px 5px 5px;
}
`
const Text = styled(Typography)`
color:#878787;
font-size:12px;
`
const Heading = styled(Typography)`
color:#878787;
font-size:18px;
`
const Details= styled(Typography)`
color:#878787;
font-size:14px;
word-break:break-word;
`
const Date = styled(Typography)`
color:#878787;
font-size:12px;
`
const Image = styled('img')({
    width : '100%',
    borderRadius:'10px 10px 0 0',
    objectFit:'cover',
    height:150
})

const Post = ({post}) => {
  const blogImage = post.picture ? post.picture : noImage;
  return (
   <Container>
    <Image src={blogImage} alt="post" />
    <Text>{post.category}</Text>
    <Heading>{addElipsis(post.title, 10)}</Heading>
    <Text>{post.username}</Text>
    <Details>{addElipsis(post.description, 100)}</Details>
    <Date>{post.createdDate}</Date>
   </Container>
  )
}

export default Post