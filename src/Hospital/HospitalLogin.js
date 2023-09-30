import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const HospitalLoginPage = () => {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [userType, setuserType] = useState("Please Select");

  const handleUsernameChange = (value) => {
    console.log(value);
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    console.log(value);
    setPassword(value);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSelectChange = (value) => {
    console.log(value);
    setuserType(value);
    console.log(userType);
  };

  const onSubmit = () => {
    console.log(userType === "Student");
    const loadPost = async () => {
      // await axios
      //   .get(
      //     "https://b4a5-117-203-246-41.ngrok-free.app//api/students/getstudent/64d5aeae44fb52c19a9779ec"
      //   )
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      // //   });
      // await fetch(
      //   "https://be02-117-203-246-41.ngrok-free.app/api/students/getstudent/64d5aeae44fb52c19a9779ec"
      // )
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .then((error) => {
      //     console.log(error);
      //   });
    };
    loadPost();
    if (userType === 2) {
      navigate("/studenthome");
    } else {
      navigate("/schoolhome");
    }
  };
  const imgStyles = {
    maxHeight: "600px",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "300px",
          alignItems: "center",
          height: "100vh",
          marginRight: "200px",
          marginLeft: "200px",
          //backgroundColor: "#C0C0C0",
        }}
      >
        <Box
          sx={{
            minHeight: "400px",
            minWidth: "400px",
            backgroundColor: "#F1F6F9",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontColor: "#F1F6F9",
              marginBottom: "10px",
              marginTop: "40px",
            }}
          >
            LOGIN
          </Typography>

          <TextField
            //error
            onChange={(e) => {
              handleUsernameChange(e.target.value);
            }}
            error={usernameError}
            id="outlined-error-helper-text"
            label="Username"
            placeholder="Enter Username"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "40px",
            }}
          >
            <TextField
              error={passwordError}
              onChange={(e) => {
                handlePasswordChange(e.target.value);
              }}
              sx={{ width: "300px", marginLeft: "-20px" }}
              label="Password"
              placeholder="Enter password"
              helperText=""
              type={showPassword ? "text" : "password"}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              sx={{ marginLeft: "-48px" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#212A3E",
              height: "42px",
              width: "280px",
              marginTop: "38px",
            }}
          >
            Login
          </Button>
          <Box>
            <Typography sx={{ marginTop: "20px", marginBottom: "50px" }}>
              Are you a new user?{" "}
              <Link to="/hospitalregister">click here!!</Link>
            </Typography>
          </Box>
        </Box>
        <img src="loginpage.avif" style={imgStyles} />
      </Box>
    </>
  );
};

export default HospitalLoginPage;
