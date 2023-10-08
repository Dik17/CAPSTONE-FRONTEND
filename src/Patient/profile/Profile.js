import React from 'react'
import './Profile.css';
import { Box,Button,Typography } from '@material-ui/core';
import PatientSidebar from '../PatientSidebar';
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
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               GENDER: 
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               BLOOD GROUP: 
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               ADDRESS:
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               CONTACT NUMBER:
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               BLOOD GROUP: 
                  </Typography>
                  <br/>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
               BLOOD GROUP: 
                  </Typography>
                  <br/>
                 
                  <Box >
                 <Button variant='contained' style={{marginRight:'20px'}}>
                  SAVE
                 </Button>
                 </Box>

                 <Box>
                 <Button variant='contained' style={{marginLeft:'600px',marginTop:'-30px'}}>
                  EDIT
                 </Button>
                 </Box>
                 </Box>
                </Box>
              </>
  )
}

export default Profile;
