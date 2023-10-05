import React from "react";
import "./NavBar.css";
import { FaEnvelope, FaPhone, FaIdCard } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heartimg from "../../Asset/heartimg.jpg";
import ContactForm from "../Contact/ContactForm";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          {/* Your logo */}
          <h2>HELPCARE</h2>
        </div>
        <ul className="nav-links">
          <li className="navLinksStyle">
            <a href="#">Home</a>
          </li>
          <li className="navLinksStyle">
            <a href="#">About</a>
          </li>
          <li className="navLinksStyle">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div>
        <img src={heartimg} style={{ maxWidth: "100%" }} />
        <div className="legend">
          <p style={{ color: "black", fontSize: "70px" }}>
            Save your own health.
          </p>
          <p style={{ color: "black", fontSize: "70px", marginTop: "-60px" }}>
            {" "}
            Get Best Services.
          </p>
          <div style={{ marginTop: "50px" }}>
            {" "}
            <Link to="/hospital">
              {" "}
              <button className="btn1">Hospital</button>
            </Link>
            <Link to="/patient">
              <button className="btn">Patient</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-icon circular-icon">
            <FaIdCard />
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Health Card</p>
          <p style={{ marginTop: "-15px", textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
            inc ididunt utid labore.
          </p>
        </div>

        <div className="card">
          <div className="card-icon circular-icon">
            <FaIdCard />
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            24 Hours Service
          </p>
          <p style={{ marginTop: "-15px", textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
            inc ididunt utid labore.
          </p>
        </div>

        <div className="card">
          <div className="card-icon circular-icon">
            <FaIdCard />
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Health Card</p>
          <p style={{ marginTop: "-15px", textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
            inc ididunt utid labore.
          </p>
        </div>
      </div>

      <div>
        <p
          style={{ fontWeight: "bold", fontSize: "34px", marginLeft: "700px" }}
        >
          About Us
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
        >
          <img
            src="https://nischinto-html.netlify.app/nischinto/assets/img/crutches.png"
            style={{ marginLeft: "200px" }}
          ></img>
          <div style={{ marginLeft: "50px" }}>
            <p style={{ fontWeight: "bold", fontSize: "26px" }}>
              Welcome to helpcare
            </p>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              nemo libero debitis vitae sapiente quos. Oillum abrem deleniti
              adipisci suscipit dignissimos. remaining essentially unchanged. It
              was popularised in the with the . Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Magni nemo libero debitis vitae
              sapiente quos. Oillum abrem deleniti adipisci suscipit
              dignissimos. remaining essentially unchanged. It was popularised
              in the with the . Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magni nemo libero debitis vitae sapiente quos.
              Oillum abrem deleniti adipisci suscipit dignissimos. remaining
              essentially unchanged. It was popularised in the with the . Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p
          style={{ fontWeight: "bold", fontSize: "34px", marginLeft: "700px" }}
        >
          Stay connected with us
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
        >
          <img src="https://nischinto-html.netlify.app/nischinto/assets/img/shape/contact-shape1.svg"></img>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
