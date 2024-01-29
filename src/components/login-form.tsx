import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
type LogProps = {};

const SignIn: React.FC<LogProps> = () => {
  return (
    <div>
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
        <div
          className="row col-md-6"
          style={{
            position: "relative",
            width: "52%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        ></div>
      </article>
    </div>
  );
};

export default SignIn;
