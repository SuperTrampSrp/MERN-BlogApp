import React from 'react';
import {Box, Typography, styled} from '@mui/material';
import logo from '../../../src/static/images/logo.png';



const Image = styled(Box)`
display:flex;
flex-direction:column;
background:'#fff';
align-tems: center;
`

const Banner = () => {
  return (
    <Box sx = {{display:'flex', alignItems:'center', flexDirection:'column', width:'100%', height:'50vh',
    justifyContent:'center'}}>
        <Typography variant='h1' sx = {{color : '#ffff'}}>Blog</Typography>
        <Typography variant='h4' sx = {{color : '#ffff'}}>My Blog Application</Typography>
    </Box>
  )
}

export default Banner