import React from "react";
import { useNavigate } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Login = () => {
  const [action, setaction] = useState("login");
  const navigate = useNavigate();
  return (
    <div className="container">
      <form className="form">
        <h1>LEAVE APPLICATION</h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="email-field">
          <label htmlFor="">Email</label>
          <input type="text" name="name" id="" className="email" />
          <MdOutlineEmail className="email-icon" />
        </div>
        <br></br>
        <br></br>
        <div className="padlock-field">
          <label htmlFor="">Password</label>
          <input type="text" name="name" id="" className="password" />
          <GiPadlock className="padlock" />
        </div>
        <br></br>
        <br></br>
        <div className="send">
          <button type="submit" className="submit">
            login
          </button>
        </div>
        <br></br>
        <div className="send">
          <div className="signup">
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
              signup?
            </span>
          </div>
          <br></br>

          <div className="forgot-password">
            lost password?<span>click-here</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
