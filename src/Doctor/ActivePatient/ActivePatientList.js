import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ActivePatientList = ({ id, name, age }) => {
  return (
    <div>
    <Box sx={{width:'50%',height:'100%',marginLeft:'20%',marginTop:'20px',paddingTop:'20px',paddingBottom:'20px', border: '1px solid transparent',textAlign:'center',justifyContent:'center',boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',display:'flex',flexDirection:'row'}}>
      <Typography style={{marginRight:'300px'}}>Name: {name}</Typography>
      <Typography style={{marginRight:'300px'}}>Age: {age} </Typography>
      <Link to='/profile' style={{cursor:'pointer',textDecoration:'none',color:'black'}}>Profile</Link>
      </Box>
    </div>
  )
}

export default ActivePatientList
