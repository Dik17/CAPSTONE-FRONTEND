import React, { useState, useEffect } from "react";

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
      <img
        src="https://pic.pikbest.com/02/04/68/29V888piCtXe.jpg!w340"
        style={{ minWidth: "40%",marginLeft:'70%',marginTop:'-25%'}}
      />
    </div>
  );
};

export default Mainpage;
