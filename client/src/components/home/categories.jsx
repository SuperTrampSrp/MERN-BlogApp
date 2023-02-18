import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';
import { categoryList } from '../../constants/categories';
import { Link, useSearchParams } from 'react-router-dom';

const StyledLink = styled(Link)`
text-decoration:none;
color :#ffff;
font-style:bold;
`

const Categories = () => {
    const[searchParams] = useSearchParams();
    const category = searchParams.get('category');
  return (
    <>
    <Link to={`/create?category=${category || ''}`} style={{textDecoration : 'none '}}>
        <Button variant="contained" style = {{width:'100%', fontSize:'15px', fontStyle:"oblique", backgroundColor:'#32a840'}} >CREATE BLOG</Button>
    </Link>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                    <StyledLink to = '/'>
                        All Categories
                    </StyledLink>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                {
                    categoryList.map(category => (
                        <TableRow key={category.id}>
                            <TableCell>
                                <StyledLink to = {`/?category=${category.type}`}>
                                {category.type}
                                </StyledLink>
                            </TableCell>
                        </TableRow>
                    ))
                }
        </TableBody>
    </Table>
    </>
  )
}

export default Categories;