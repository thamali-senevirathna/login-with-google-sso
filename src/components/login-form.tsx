import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from "./../assets/marginalia-travel.png";
import travelImg from "./../assets/Illustration.png";
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
          width: "160vh",
          height: "89vh",
          left: "12%",
          top: "5%",
        }}
      >
        {/* Company details component */}
        <div
          className="row col-md-6"
          style={{
            position: "relative",
            width: "52%",
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
              left: "32%",
              top: "4%",
            }}
          />

          {/* Travel Img */}
          <img
            src={travelImg}
            alt=""
            style={{
              width: "80%",
              height: "50%",
              position: "relative",
              left:"5%",
              top:"-7%"
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default SignIn;
