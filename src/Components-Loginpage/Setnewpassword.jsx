import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-Loginpage/Setnewpassword.css";
import Forgetpasswordcap from "../assets/Mainlogin/Mainlogin logo.png";
import Forgetpasswordmainimage from "../assets/Mainlogin/Setnewpassword mainimage.png";
import WhiteShield from "../assets/Mainlogin/login - Shield with checkmark.png";
import ResetIcon from "../assets/Mainlogin/Passwordreseticon.png";
import Check from "../assets/Mainlogin/uncheck.png";
import UnCheck from "../assets/Mainlogin/check.png";
import PasswordIcon from "../assets/Mainlogin/PasswordIcon.png";
import SecureShield from "../assets/Mainlogin/Setnewpassword secureshield.png";
import setnewpasswordrightarrow from "../assets/Mainlogin/right-arrow.png"

export default function Setnewpassword() {

 const initialValue = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const [formValue, setFormValue] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const isPasswordLengthValid = formValue.newPassword.length >= 8;

  const isPasswordMatchValid =
    formValue.confirmNewPassword.length > 0 &&
    formValue.newPassword === formValue.confirmNewPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let newError = {};

    if (!formValue.newPassword.trim()) {
      newError.newPassword = "New password is required *";
    } else if (!passwordRegex.test(formValue.newPassword.trim())) {
      newError.newPassword =
        "Password contains at least 1 ( upper character, Lower character, Special character, Number )";
    }

    if (!formValue.confirmNewPassword.trim()) {
      newError.confirmNewPassword = "Confirm password is required *";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      setFormValue(initialValue);
      navigate("/Passwordresetsucess");
    }
  };
  return (
    <div className='Ims-setnewpassword-container'>
     <div className='Ims-setnewpassword-innercontainer'>
        <div className='Ims-setnewpassword-leftcontent'>
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
                 Set a Strong Master Password
                </h2>
                <p>
                 Protect your internship credentials, academic clearance records, and enterprise
                  <br />communication channels.
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
                        “Automated credential audit enforces strict NIST 800-63B password guidelines and institutional
                           <br />SSO policies.”
                        </strong>
                         <p>
                          Dr. Elena Vance —{" "}
                         <span>
                           Dean of Experiential Education & IAM Security Lead
                        </span>
                        </p>
                    </div>
                </div>
              </div>
            </div>
        </div>

     <div className="Ims-setnewpassword-right">
       <div className="Ims-setnewpassword-form-wrapper">

       <header className="ims-setnewpassword-header">
       <div className="ims-setnewpassword-imgcontainer">
         <img
          src={ResetIcon}
          alt="Reset Icon"
          className="ims-rp-reset-icon"
        />
       </div>

       <h1>Set New Password</h1>

        <p>
          Your new password must be different from
          <br />
          previous passwords.
        </p>
      </header>

      <form
        onSubmit={handleUpdate}
        className="ims-setnewpassword-form-container"
      >

      <div className="ims-setnewpassword-input-container">
        <label htmlFor="new-password">
          New Password
        </label>

        <div className="ims-setnewpassword-input-wrapper">
          <img
            src={PasswordIcon}
            alt="Password Icon"
            className="ims-setnewpassword-password-icon"
          />

          <input
            id="new-password"
            type="password"
            name="newPassword"
            placeholder="Min. 8 characters"
            value={formValue.newPassword}
            onChange={handleChange}
            className={
              errors.newPassword
                ? "ims-setnewpassword-input ims-setnewpassword-input-error"
                : "ims-setnewpassword-input"
            }
          />
        </div>

        {errors.newPassword && (
          <p className="ims-setnewpassword-error-message">
            {errors.newPassword}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="ims-setnewpassword-input-container">
        <label htmlFor="confirm-password">
          Confirm New Password
        </label>

        <div className="ims-setnewpassword-input-wrapper">
          <img
            src={SecureShield}
            alt="Secure Shield"
            className="ims-setnewpassword-shield-icon"
          />

          <input
            id="confirm-password"
            type="password"
            name="confirmNewPassword"
            placeholder="Repeat your password"
            value={formValue.confirmNewPassword}
            onChange={handleChange}
            className={
              errors.confirmNewPassword
                ? "ims-setnewpassword-input ims-setnewpassword-input-error"
                : "ims-setnewpassword-input"
            }
          />
        </div>

        {errors.confirmNewPassword && (
          <p className="ims-setnewpassword-error-message">
            {errors.confirmNewPassword}
          </p>
        )}
      </div>

      {/* Password Rules */}
      <div className="ims-setnewpassword-password-rules">

        <div className="ims-setnewpassword-rule">
          <img
            src={
              isPasswordLengthValid
                ? Check
                : UnCheck
            }
            alt="Checker"
            className="ims-setnewpassword-checker-icon"
          />

          <span>At least 8 characters</span>
        </div>

        <div className="ims-setnewpassword-rule">
          <img
            src={
              isPasswordMatchValid
                ? Check
                : UnCheck
            }
            alt="Checker"
            className="ims-setnewpassword-checker-icon"
          />

          <span>Passwords match</span>
        </div>

      </div>

      {/* Update Button */}
      <button
        type="submit"
        className="ims-setnewpassword-update-button"
      >
        Update Password
        <span className="ims-setnewpassword-arrow">
          <img src={setnewpasswordrightarrow} alt="Right arrow" />
        </span>
      </button>

    </form>

      {/* Back to Login */}
      <Link
        to="/"
        className="ims-setnewpassword-back-login"
       >
        Back to Login
      </Link>

     </div>
     </div>
     </div>
    </div>
  )
}
