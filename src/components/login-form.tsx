import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from "./../assets/marginalia-travel.png";
import travelImg from "./../assets/Illustration.png";
import { Button, Checkbox, FormControlLabel, Link, Typography } from "@mui/material";
import { TextField } from "@mui/material";

import { GoogleLoginProps } from "react-google-login";
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
<h2 style={{fontSize:"20px",margin:"10%"}}>Welcome  to the Travel Planner TravelBoard</h2>
<div style={{bottom:"3%",position:"relative"}}>
<TextField
          id="outlined-helperText"
          label="Email"
          defaultValue="example@gmail.com"
        style={{marginBottom:"4%",width:"66%"}}
        />
        <br />
        <TextField
          disabled
          id="outlined-disabled"
          label="Password"
          defaultValue="*************************"
          style={{width:"66%"}}
        />
</div>
<div style={{position:"relative",left:"-2%",}}>
<FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me" style={{ fontSize:"14px"}} />
        <Link href="#" color="inherit" style={{fontSize:"15px",position:"relative",right:"-5%"}}>
  {'Forgot Password?'}
</Link>
</div>
        
<Button variant="contained" style={{backgroundColor:"black",width:"65%",height:"8%",marginTop:"4%"}}>LOGIN</Button>
<div style={{position:"relative",top:"1%"}}>
<hr style={{width:"29%",position:"absolute",left:"18%"}}/>
<p style={{fontSize:"14px",position:"absolute",left:"48%",}}>Or</p>
<hr style={{width:"29%",position:"absolute",left:"53%",top:"-12%"}}/>
</div>

<p style={{fontSize:"14px",position:"absolute",bottom:"17%",left:"29%",}}>Don't have an account ? <Link href="#" style={{fontSize:"12px",fontWeight:"bold"}}>SIGN UP</Link>
</p>
<div>
<Button size="medium" style={{backgroundColor:"rgba(0,0,0,0.1)",width:"65%",marginTop:"16%",border:"2px solid rgba(0,0,0,0.1)",fontSize:"14px"}}>Sign with google</Button>

</div>

</div>

      </article>
    </div>
  );
};

export default SignIn;
