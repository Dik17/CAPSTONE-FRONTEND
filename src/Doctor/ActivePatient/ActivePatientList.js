import React from 'react';
import { Box, Typography,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ActivePatientList = ({ id, name, age }) => {
  return (
    <div>
    <Box sx={{width:'100%',height:'100%',marginTop:'20px',paddingTop:'20px',paddingBottom:'20px', border: '1px solid transparent',textAlign:'center',justifyContent:'center',boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',display:'flex',flexDirection:'row'}}>
      <Typography style={{marginRight:'10%'}}>Name: {name}</Typography>
      <Typography style={{marginRight:'30%'}}>Age: {age} </Typography>
      <Link to='/profile' style={{cursor:'pointer',textDecoration:'none',color:'black',marginRight:'20%'}}>Profile</Link>
    <Link to='/prescription'>  <Button variant='contained' style={{marginRight:'20%'}}>AddPrescription</Button></Link>
      </Box>
    </div>
  )
}

export default ActivePatientList
