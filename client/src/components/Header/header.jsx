import React from 'react';
import { AppBar, Typography, styled, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled(Toolbar)`
justify-content:center;
& > a {
    padding : 20px;
    text-decoration: none;
    color: #fff ;
}
`

const Header = () => {
  return (
    <AppBar sx = {{background : '#000428'}}>
        <Container>
            <Link to = '/'>HOME</Link>
            <Link to = '/about'>ABOUT</Link>
            <Link to = '/contact'>CONTACT</Link>
            <Link to = '/login'>LOGOUT</Link>
        </Container>
    </AppBar>
  )
}

export default Header

