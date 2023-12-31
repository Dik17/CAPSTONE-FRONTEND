import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Register from "./LandingPageComponent/Register/Register";
import Login from "./LandingPageComponent/Login/Login";
import ProfileDoc from "./Doctor/Profile/ProfileDoc";
import Dashboard from "./Hospital/Dashboard/Dashboard";
import Reception from "./Hospital/Dashboard/Reception/Reception";
import Mainpage from "./Doctor/Mainpage/Mainpage";
import HospitalLoginPage from "./Hospital/HospitalLogin";
import HospitalRegisterPage from "./Hospital/HospitalRegister";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientHome from "./Patient/PatientHome";
import Profile from "./Patient/profile/Profile";
import TimeLineInfo from "./Patient/TimeLineInfo/TimeLineInfo";
import ActivePatientList from "./Doctor/ActivePatient/ActivePatientList";
import PrescriptionForm from "./Doctor/Prescription/PrescriptionForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hospitallogin",
    element: <HospitalLoginPage />,
  },
  {
    path: "/hospitalregister",
    element: <HospitalRegisterPage />,
  },
  {
    path: "/hospital",
    element: <Dashboard />,
  },
  {
    path: "/reception",
    element: <Reception />,
  },
  {
    path: "/doctor",
    element: <Mainpage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/timelineinfo",
    element: <TimeLineInfo/>,
  },
  {
    path: "/profileDoctor",
    element: <ProfileDoc/>,
  },
  
  {
    path: "/activepatient",
    element: <ActivePatientList/>,
  },
  {
    path: "/prescription",
    element: <PrescriptionForm/>,
  },
  { path: "/patient", element: <PatientHome /> },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
