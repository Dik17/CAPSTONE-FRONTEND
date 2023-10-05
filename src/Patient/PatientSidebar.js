import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoIcon from "@mui/icons-material/Info";
import BlockIcon from "@mui/icons-material/Block";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import TimelineIcon from "@mui/icons-material/Timeline";

const PatientSidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const [uploadView, setUploadView] = useState(false);
  const handleUploadButtonClick = () => {
    setDocumentsView(false);
    setProfileView(false);
    setTrashView(false);
    setUploadView(true);
  };

  const [profileView, setProfileView] = useState(false);
  const handleProfileButtonClick = () => {
    setDocumentsView(false);

    setTrashView(false);
    setUploadView(false);
    setProfileView(true);
  };

  const [documentsView, setDocumentsView] = useState(true);
  const handleDocumentsButtonClick = () => {
    setProfileView(false);
    setTrashView(false);
    setUploadView(false);
    setDocumentsView(true);
  };

  const [trashView, setTrashView] = useState(false);
  const handleTrashButtonClick = () => {
    setProfileView(false);
    setUploadView(false);
    setDocumentsView(false);
    setTrashView(true);
  };

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          width: "18vw",
          backgroundColor: "#82A2C5",
          height: "100vh",
          color: "white",
        }}
      >
        <List>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: "100px",
                height: "100px",
                borderRadius: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ fontSize: "48px", color: "black" }}>
                S
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "18px" }}>Shreyas Rana</Typography>
          </ListItem>
          <ListItem button onClick={handleProfileButtonClick}>
            <ListItemIcon>
              <PermIdentityOutlinedIcon sx={{ color: "#d5d8e1" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem button onClick={handleDocumentsButtonClick}>
            <ListItemIcon>
              <MedicalInformationIcon sx={{ color: "#d5d8e1" }} />
            </ListItemIcon>
            <ListItemText primary="Medical Information" />
          </ListItem>

          <ListItem button onClick={handleTrashButtonClick}>
            <ListItemIcon>
              <TimelineIcon sx={{ color: "#d5d8e1" }} />
            </ListItemIcon>
            <ListItemText primary="TimeLine" />
          </ListItem>
          <ListItem button onClick={handleTrashButtonClick}>
            <ListItemIcon>
              <BlockIcon sx={{ color: "#d5d8e1" }} />
            </ListItemIcon>
            <ListItemText primary="Access Control" />
          </ListItem>
          <ListItem button sx={{ marginTop: "320px" }}>
            <ListItemIcon>
              <InfoIcon sx={{ color: "#d5d8e1" }} />
            </ListItemIcon>

            <ListItemText primary="About Us" sx={{ marginLeft: "-20px" }} />
          </ListItem>
          <ListItem button sx={{}} onClick={handleLogOut}>
            <ListItemText primary="Log Out" />
            <ListItemIcon>
              <LogoutOutlinedIcon
                sx={{ color: "#d5d8e1", marginLeft: "-120px" }}
              />
            </ListItemIcon>
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Service 1" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Service 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>

        {/* Add more items or sections as needed */}
        {/* </Drawer> */}
      </Box>
      {/* {uploadView ? <DocumentUpload1 /> : null}
      {documentsView ? <DocumentsPage /> : null}
      {profileView ? <ProfilePage /> : null}
      {trashView ? <TrashPage /> : null} */}
    </Box>
  );
};

export default PatientSidebar;
