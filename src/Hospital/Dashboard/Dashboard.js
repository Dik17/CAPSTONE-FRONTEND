import React from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Reception = () => {
 const navigate=useNavigate();
 const handleReception=()=>{
  navigate('/reception')
 }

 const handleDoctor=()=>{
  navigate('/doctor')
 }
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* <Sidebar /> */}
      <Box
        sx={{
          width: "20%",
          paddingTop: "200px",
          paddingLeft: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "100px",
        }}
      >
     <button onClick={() => navigate(-1)} style={{backgroundColor:'white',border:'white',cursor:'pointer'}}><ArrowBackIcon /></button>   
        <button
          style={{
            height: "150px",
            backgroundColor: "#82A2C5",
            color: "white",
            borderRadius: "2%",
            border: "0",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={handleDoctor}
        >
      Doctor
        </button>
        
        <button
          style={{
            height: "150px",
            backgroundColor: "#82A2C5",
            color: "white",
            borderRadius: "2%",
            border: "0",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={handleReception}
        >
          Reception
        </button>
      </Box>
      <Box sx={{ width: "40%" }}></Box>
      <Box sx={{ marginTop: "20%", width: "40%" }}>
        <img src="https://img.freepik.com/premium-vector/hospital-building-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-medical-clinic-exterior_2175-1516.jpg" style={{ maxWidth: "100%" }} />
      </Box>
    </Box>
  );
};

export default Reception;
