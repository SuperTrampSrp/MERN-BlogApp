

import { Grid } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Categories from './categories';
import Posts from './Posts/Posts';

const Home = () => {
  return (
    <>
    <Banner/>
    <Grid container>
      <Grid item xs = {12} sm = {2} lg = {2}>
        <Categories/>
      </Grid>
      <Grid item  xs = {12} sm = {10} lg = {10}>
        <Posts/>
      </Grid>
    </Grid>
    </>
  )
}

export default Home