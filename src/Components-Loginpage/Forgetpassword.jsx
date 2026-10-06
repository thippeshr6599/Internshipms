import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-Loginpage/Forgetpassword.css";
import Forgetpasswordcap from "../assets/Mainlogin/Mainlogin logo.png";
import Forgetpasswordmainimage from "../assets/Mainlogin/Forgetpasswordmainimage.png";
import WhiteShield from "../assets/Mainlogin/login - Shield with checkmark.png";
import ForgetpasswordResetIcon from "../assets/Mainlogin/Passwordreseticon.png";
import ForgetpasswordMailicon from "../assets/Mainlogin/Forgetpaswword Emailicon.png";
import ForgetpasswordMobileIcon from "../assets/Mainlogin/Forgetpassword Mobileicon.png";
import ForgetpasswordRightArrow from "../assets/Mainlogin/right-arrow.png";
import ForgetpasswordLeftArrow from "../assets/Mainlogin/Backtologin icon.png";

export const Forgetpassword = () => {

  const [radio, setRadio] = useState("email");

  const navigate = useNavigate();

  const handleSendCode = () => {
    navigate("/OTPforgetpassword", {
      state: {
        method: radio,
        value: radio === "email" ? "j**n@g***l.com" : "+91 9•••• 5678",
      },
    });
  };

  return (
    <div className='Ims-Forgetpassword-container'>
     <div className='Ims-Forgetpassword-innercontainer'>
        <div className='Ims-Forgetpassword-leftcontent'>
           <header className="Ims-Forgetpassword-leftheader">
            <div className="Ims-Forgetpassword-logo-container">
              <img src={Forgetpasswordcap} alt="Graduate-Cap" />
            </div>
            <div className="Ims-Forgetpassword-main-header">
              <h3>Internship Management System</h3>
              <p>Learn • Grow • Build Your Future</p>
            </div>
          </header>

          <div className="Ims-Forgetpassword-middle-content">
            <div className="Ims-Forgetpassword-main-content">
              <h2>
                Secure Account Recovery &<br />
                Identity Protection
              </h2>
              <p>
                Quickly regain access to your verified internship credentials,
                university approvals,
                <br />
                and active corporate placements.
              </p>
            </div>
          </div>

          <div className="Ims-Forgetpassword-image-content">
            <img
              src={Forgetpasswordmainimage}
              alt="Forgetpasswordmainimage"
              className="Ims-Forgetpassword-vector-stock"
            />
              <div className="Ims-Forgetpassword-bottomcard-container">
                 <div className="Ims-Forgetpassword-bottomcard">
                     <div className="Ims-Forgetpassword-bottomrightcard">
                      <img
                       src={WhiteShield}
                       alt="white-shield"
                       className="Ims-Forgetpassword-whiteshield"
                     />
                     </div>
                  <div className="Ims-Forgetpassword-bottomcontent">
                    <strong>
                      All password reset requests are cryptographically signed and logged according to institutional
                      <br /> FERPA & SOC-2 compliance standards.
                      </strong>
                      <p>
                        Campus Identity & Access Management (IAM) Protocol
                        <span>
                         • Verified Institutional Security
                        </span>
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="Ims-Forgetpassword-right">
       <div className="Ims-Forgetpassword-form-wrapper">
        <header className="Ims-Forgetpassowrd-rightheader">
         <div className="Ims-Forgetpassword-iconbox">
          <img
            src={ForgetpasswordResetIcon}
            alt="forgot password"
            className="Ims-Forgetpassword-icon"
          />
        </div>
         <h1>Forgot Password?</h1>

         <p>
          Choose your preferred method to receive a one-time
          <br />
          verification code.
          </p>
         </header>

      <div className="ims-Forgetpassword-selection">

        <p className="ims-Forgetpassword-verificationmethod-title">
          Verification Method
        </p>

        <div className="ims-Forgetpassword-outercontainer">
        <div
          className={
            radio === "email"
              ? "ims-Forgetpassword-option ims-Forgetpassword-active"
              : "ims-Forgetpassword-option ims-Forgetpassword-inactive"
          }
          onClick={() => setRadio("email")}
        >
          <div className="Ims-Forgetpassword-innerconatiner">

            <div className="Ims-Forgetpassword-methodicon">
              <img
                src={ForgetpasswordMailicon}
                alt="mail"
              />
            </div>

            <div className="ims-Forgetpassword-titlecontainer">
              <p className="Ims-Forgetpassword-inputtitle">
                Email Verification
              </p>

              <p className="Ims-Forgetpassword-inputsubtitle">
                j**n@g***l.com
              </p>
            </div>

            <div className="ims-Forgetpassword-radiobtn-conatiner">
              <input
                type="radio"
                name="radio"
                className="Ims-Forgetpassword-radiobtn"
                checked={radio === "email"}
                onChange={() => setRadio("email")}
              />
            </div>

          </div>
        </div>

        {/* Phone */}
        <div
          className={
            radio === "phone"
              ? "ims-Forgetpassword-option ims-Forgetpassword-active"
              : "ims-Forgetpassword-option ims-Forgetpassword-inactive"
          }
          onClick={() => setRadio("phone")}
        >
          <div className="Ims-Forgetpassword-innerconatiner">

            <div className="Ims-Forgetpassword-methodicon">
              <img
                src={ForgetpasswordMobileIcon}
                alt="phone"
              />
            </div>

            <div className="ims-Forgetpassword-titlecontainer">
              <p className="Ims-Forgetpassword-inputtitle">
                SMS / Text Message
              </p>

              <p className="Ims-Forgetpassword-inputsubtitle">
                Send code to +91 9•••• •5678
              </p>
            </div>

            <div className="ims-Forgetpassword-radiobtn-conatiner">
              <input
                type="radio"
                name="radio"
                className="Ims-Forgetpassword-radiobtn"
                checked={radio === "phone"}
                onChange={() => setRadio("phone")}
              />
            </div>

          </div>
        </div>

      </div>

      <button
        className="Ims-Forgetpassword-sendverification"
        onClick={handleSendCode}
      >
        <span>Send Verification Code</span>

        <img
          src={ForgetpasswordRightArrow}
          alt="right arrow"
          className="ims-Forgetpassword-right-arrow"
        />
      </button>

      <div className="ims-Forgetpassword-back-to-login-wrapper">
        <Link
          to="/login"
          className="ims-Forgetpassword-back-to-login"
        >
          <img
            src={ForgetpasswordLeftArrow}
            alt="left arrow"
            className="ims-Forgetpassword-left-arrow-icon"
          />

          <span>Back to Login</span>
        </Link>
      </div>

    </div>
  </div>
</div>
     </div>
    </div>
  )
};
