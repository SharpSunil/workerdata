import React, { useState } from 'react';
import './login.scss';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-parent parent">
      <div className="login-cont cont">
        <div className="login-box">
          <form>
            <div className="input-box">
              <input type="text" placeholder="Enter Your Username" />
            </div>
            <div className="input-box">
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Your Password"
                />
                <span
                  className={`eye-icon ${showPassword ? 'open' : 'closed'}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline /> }
                </span>
              </div>
            </div>
            <div className="btn">Submit</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
