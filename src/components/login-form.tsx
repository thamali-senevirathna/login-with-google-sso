import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from "./../assets/marginalia-travel.png";
import travelImg from "./../assets/Illustration.png";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

type LogProps = {};

const SignIn: React.FC<LogProps> = () => {
  return (
    <div>
      {/* Main Component */}
      <article
        className="container col-md-6"
        style={{
          backgroundColor: "white",
          position: "absolute",
          width: "145vh",
          height: "89vh",
          left: "16%",
          top: "5%",
        }}
      >
        {/* Company details component */}
        <div
          className="row col-md-6"
          style={{
            position: "relative",
            width: "50%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* Company Logo */}
          <img
            src={companylogo}
            alt=""
            style={{
              position: "relative",
              width: "29%",
              height: "11%",
              alignItems: "center",
              left: "34%",
              top: "4%",
            }}
          />

          {/* Travel Img */}
          <img
            src={travelImg}
            alt=""
            style={{
              width: "75%",
              height: "40%",
              position: "relative",
              left: "7%",
            }}
          />
          <h2 style={{ fontSize: "30px", color: "white" }}>
            The Whole World in one place
          </h2>
          <p style={{fontSize:"13px",color:"white",fontWeight:"11px",marginTop:"-9%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
        </div>

<div style={{width:"75vh",height:"89vh",backgroundColor:"white",position:"absolute",left:"48.40%",top:"0"}}>
<h2 style={{fontSize:"20px",margin:"15%"}}>Welcome  to the Travel Planner TravelBoard</h2>
<TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
<Button variant="contained">Contained</Button>
</div>

      </article>
    </div>
  );
};

export default SignIn;
