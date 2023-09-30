import React, { useState } from "react";
import axios from "axios";
import { Button, Box, Typography, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ErrorIcon from "@mui/icons-material/Error";

const HospitalRegisterPage = () => {
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const onSubmit = () => {
    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
      return;
    }

    const register_data = {
      username: username,
      email: email,
      password: password,
      role: "patient",
    };

    axios.post(`http://localhost:5001/api/users/register`, { register_data });
    navigate("/hospital").then((res) => {
      console.log(res);
    });
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
        }}
      >
        <Box
          sx={{
            minHeight: "500px",
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
            REGISTER
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

          <TextField
            //error
            onChange={(e) => {
              handleEmailChange(e.target.value);
            }}
            error={emailError}
            id="outlined-error-helper-text"
            label="Email"
            placeholder="Enter email"
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
              error={confirmPasswordError}
              onChange={(e) => {
                handleConfirmPasswordChange(e.target.value);
              }}
              sx={{ width: "300px", marginLeft: "-20px" }}
              label="Confirm Password"
              placeholder="Re-enter password"
              helperText=""
              type={showConfirmPassword ? "text" : "password"}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              edge="end"
              sx={{ marginLeft: "-48px" }}
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          {confirmPasswordError && (
            <Typography
              sx={{
                fontSize: "10px",
                color: "#D8403F",
                marginTop: "4px",
                marginLeft: "-34px",
              }}
            >
              <ErrorIcon
                sx={{
                  color: "#D8403F",
                  fontSize: "12px",
                  marginBottom: "-2px",
                  marginLeft: "2px",
                }}
              />
              {"    "}
              Please ensure that you have entered the same password
            </Typography>
          )}
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
            Register
          </Button>
          <Box>
            <Typography sx={{ marginTop: "20px", marginBottom: "50px" }}>
              Are you a new user? <Link to="/hospitallogin">click here!!</Link>
            </Typography>
          </Box>
        </Box>
        <img src="loginpage.avif" style={imgStyles} />
      </Box>
    </>
  );
};

export default HospitalRegisterPage;
