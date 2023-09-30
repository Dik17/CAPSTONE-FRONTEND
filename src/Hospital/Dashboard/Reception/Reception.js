import React from "react";
import { useNavigate} from "react-router-dom";
import "./Reception.css";
import { Box, Button } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Sidebar from "./Sidebar";

const Reception = () => {
  const navigate=useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#E9ECF3",
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
      <button onClick={() => navigate(-1)} style={{backgroundColor:'#E9ECF3',border:'white',cursor:'pointer'}}><ArrowBackIcon /></button>
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
        >
          Check-In Patient
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
        >
          Check-Out Patient
        </button>
      </Box>
      <Box sx={{ width: "40%" }}></Box>
      <Box sx={{ marginTop: "22%", width: "40%" }}>
        <img src="reception_final.jpg" style={{ maxWidth: "100%" }} />
      </Box>
    </Box>
  );
};

export default Reception;
