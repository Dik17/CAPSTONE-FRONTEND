// import React, { useState } from 'react'
// import './Profile.css';
import { Box,Button,Typography } from '@material-ui/core';
import Sidebar from '../../Hospital/Dashboard/Reception/Sidebar';

import React, { useState } from 'react';

function ProfileDoc() {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Function to handle input value change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Function to start editing
  const startEditing = () => {
    setIsEditing(true);
  };

  // Function to save the edited profile information
  const saveProfile = () => {
    setIsEditing(false);
    // Perform any necessary action with the profileData here (e.g., save to a database).
  };

  return (
    <Box style={{display:'flex'}}>
        <Sidebar/>
    
    <Box sx={{width:'30%',height:'50%',marginLeft:'200px',marginTop:'200px', border: '1px solid transparent',textAlign:'center'}}>
      {isEditing ? (
       
        <div>
        <Typography sx={{ fontSize: "22px", height: "40px" }}>  NAME: 
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            style={{marginLeft:'600px'}}
          />
          </Typography>
          <br />

          <Typography sx={{ fontSize: "22px", height: "40px" }}>    AGE:
          <input
            type="text"
            name="age"
            value={profileData.age}
            onChange={handleInputChange}
            style={{marginLeft:'600px'}}
          />
          </Typography>
          <br />

          <Typography sx={{ fontSize: "22px", height: "40px" }}>    BLOOD GROUP:
          <input
            type="text"
            name="bloodGroup"
            value={profileData.bloodGroup}
            onChange={handleInputChange}
            style={{marginLeft:'600px'}}
          />
          </Typography>
          <br />

          <Button onClick={saveProfile} variant='contained'  style={{marginRight:'20px',backgroundColor:'#82A2C5',marginTop:'50px',width:'20%',marginLeft:'80%'}}>Save</Button>
        </div>
      ) : (
        <Box sx={{width:'100%',height:'100%',marginLeft:'200px',marginTop:'100px',paddingTop:'20px', border: '1px solid transparent',textAlign:'center',justifyContent:'center',boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'}}>
        <Typography sx={{ fontSize: "22px", height: "40px" }}>   NAME: {profileData.name}</Typography>
        <br/>
        <Typography sx={{ fontSize: "22px", height: "40px" }}>  AGE: {profileData.age}</Typography> 
        <br/>
        <Typography sx={{ fontSize: "22px", height: "40px" }}>BLOOD GROUP: {profileData.bloodGroup}  </Typography>  
     
          <Button onClick={startEditing} variant='contained'  style={{marginRight:'20px',backgroundColor:'#82A2C5',marginTop:'50px',width:'20%',marginBottom:'50px'}}>Edit</Button>
          </Box>
        
      )}
      <Box>
        <img src='https://img.freepik.com/premium-vector/vacancies-flat-modern-design-illustration_566886-82.jpg' style={{marginLeft:'150%',height:'80%',width:'80%',marginTop:'-20%'}}></img>
      </Box>
      </Box>
    
    </Box>
  );
}

export default ProfileDoc;
