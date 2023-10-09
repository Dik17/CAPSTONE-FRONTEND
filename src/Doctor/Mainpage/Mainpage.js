import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Sidebar from "../../Hospital/Dashboard/Reception/Sidebar";
const Mainpage = () => {
  const url =
    "http://localhost:5001/api/doctor/patientinfo/64d1d29b25e5eb5e63e61f2f";

  // const [data, setData] = useState([]);

  // const fetchInfo = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => console.log(d));
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <div>
      <Sidebar />
       <Box>
        <img src="https://t3.ftcdn.net/jpg/02/74/72/96/360_F_274729600_073JyJngzhXQ5NbSlDOdjdcFCBJprzqi.jpg" style={{marginLeft:'65%',height:'35%',width:'35%',marginTop:'-200%'}}></img>
      </Box>
    </div>
  );
};

export default Mainpage;
