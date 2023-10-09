import React from 'react'
import './Profile.css';
import { Box,Button,Typography } from '@material-ui/core';
import PatientSidebar from '../PatientSidebar';
import { RiEdit2Line } from "react-icons/ri";
const Profile = () => {
  return (
    <>
    <Box style={{display:'flex'}}>
    <PatientSidebar/>
    {/* <Box
                sx={{
                  height: "25%",
                  backgroundColor: "#82A2C5",
                  padding: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRightWidth: "10px",
                  borderRightColor: "black",
                  color: "white",
                }}
              >
              
                <Box
                  sx={{
                    fontSize: "22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                  }}
                >
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                   NAME: Shreya Rana
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               GENDER: FEMALE
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               BLOOD GROUP: O+
                  </Typography>
                </Box>
                
              </Box> */}
              <Box sx={{width:'30%',height:'50%',marginLeft:'200px',marginTop:'200px', border: '1px solid transparent',textAlign:'center',alignItems:'left'}}>
              <Typography sx={{ fontSize: "22px", height: "40px" }}>
                   NAME: 
                   <input style={{marginLeft:'600px'}}></input>
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               GENDER: 
               <input style={{marginLeft:'600px'}}></input>
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               BLOOD GROUP: 
               <input style={{marginLeft:'600px'}}></input>
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               ADDRESS:
               <input style={{marginLeft:'600px'}}></input>
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               CONTACT NUMBER:
               <input style={{marginLeft:'600px'}}></input>
                  </Typography>
                 
                  <Box >
                 <Button variant='contained'  style={{marginRight:'20px',backgroundColor:'#82A2C5',marginTop:'50px',width:'20%'}}>
                  SAVE
                 </Button>
                 </Box>

                 <Box>
                 <Button variant='contained' style={{marginLeft:'600px',marginTop:'-40px',width:'20%',backgroundColor:'#82A2C5'}}>
                  <RiEdit2Line></RiEdit2Line>EDIT
                 </Button>
                 </Box>
                 </Box>
                </Box>
              </>
  )
}

export default Profile;
