import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components-Loginpage/Passwordresetsucess.css";
import Forgetpasswordcap from "../assets/Mainlogin/Mainlogin logo.png";
import Forgetpasswordmainimage from "../assets/Mainlogin/Passwordsucess mainimage.png";
import WhiteShield from "../assets/Mainlogin/login - Shield with checkmark.png";
import ResetsuccessRightmark from "../assets/Mainlogin/Passwordresetsuccess rightmark.png";
import Resetsuccesssecuritylock from "../assets/Mainlogin/Resetsucess securitylock.png";

export const Passwordresetsucess = () => {
   const navigate = useNavigate();
  return (
    <div className='Ims-Resetsucess-container'>
     <div className='Ims-Resetsucess-innercontainer'>
        <div className='Ims-Resetsucess-leftcontent'>
             <header className="Ims-Resetsucess-leftheader">
                <div className="Ims-Resetsucess-logo-container">
                  <img src={Forgetpasswordcap} alt="Graduate-Cap" />
                </div>
                <div className="Ims-Resetsucess-main-header">
                  <h3>Internship Management System</h3>
                  <p>Learn • Grow • Build Your Future</p>
                </div>
              </header>
    
              <div className="Ims-Resetsucess-middle-content">
                <div className="Ims-Resetsucess-main-content">
                  <h2>
                   Account Secured & Access
                   <br /> Restored
                  </h2>
                  <p>
                   Quickly regain access to your verified internship credentials, university approvals,
                   <br /> and active corporate placements.
                  </p>
                </div>
              </div>
    
              <div className="Ims-Resetsucess-image-content">
                <img
                  src={Forgetpasswordmainimage}
                  alt="Forgetpasswordmainimage"
                  className="Ims-Resetsucess-vector-stock"
                />
                  <div className="Ims-Resetsucess-bottomcard-container">
                     <div className="Ims-Resetsucess-bottomcard">
                         <div className="Ims-Resetsucess-bottomrightcard">
                          <img
                           src={WhiteShield}
                           alt="white-shield"
                           className="Ims-Resetsucess-whiteshield"
                         />
                         </div>
                      <div className="Ims-Resetsucess-bottomcontent">
                        <strong>
                          “Credential change verified across university registrars, Dean approvals, and
                           <br /> enterprise partner portals.”
                          </strong>
                           <p>
                            Enterprise IAM & Security Operations  —{" "}
                           <span>
                             Zero Trust Protocol Active
                          </span>
                          </p>
                      </div>
                  </div>
                </div>
              </div>
        </div>

        {/* Right-content */}
     <div className='Ims-Resetsuccess-right'>
       <div className='Ims-Resetsuccess-form-wrapper'>
           <div className="Ims-Resetsuccess-circle">
             <img 
             src={ResetsuccessRightmark} 
             alt="Reset success Rightmark" 
             className='Ims-Resetsuccess-Rightmark'
             />
           </div>

      <div className="Ims-Resetsuccess-securitystatus">
        <img 
        src={Resetsuccesssecuritylock} 
        alt="Resetsucees security lock"
        className='Ims-Resetsuccess-securitylock'
        />
        <span>RECOVERY COMPLETED • 256-BIT ENCRYPTED</span>
      </div>

      <h1 className="Ims-Resetsuccess-title">
        Password Reset Successful!
      </h1>

      <p className="Ims-Resetsuccess-description">
        Your account credentials have been securely updated. All
         <br />
        active enterprise and university sessions have been
        <br />
        refreshed.
      </p>

      <button className="Ims-Resetsuccess-backloginbutton"
      onClick={() => {
            navigate("/");
              }} >
        Back to Login
      </button>


       </div>
     </div>
     </div>
    </div>
  )
};
