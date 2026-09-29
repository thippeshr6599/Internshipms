import React from "react";
import "../Components-Loginpage/Mainloginpage.css";
import Mainloginlogo from "../assets/Mainlogin/Mainlogin logo.png";
import Loginpagemainimage from "../assets/Mainlogin/loginpagemainimage.png";
import loginbottomcheckmark from "../assets/Mainlogin/login - Shield with checkmark.png";
import loginrisemark from "../assets/Mainlogin/loginrisemark.png";
import Deansapprovedimage from "../assets/Mainlogin/Deansapproved.png";

export const Mainloginpage = () => {
  return (
    <div className="login-container">
      <div className="login-Maincontainer">
        <div className="login-left-content">
          
           <div className="login-mainhead">
              <div className="login-logo">
                 <img src={Mainloginlogo} alt="mainloginlogo" />
              </div>
              <div className="login-mainheader">
                <h3>Internship Management System</h3>
                <p>Learn.Grow.Build Your Future</p>
              </div>
           </div>

           <div className="login-middlecontent">
            <div className="login-maincontent">
            <h2>Connecting academic talent with <br />career-defining corporate internships</h2>
            <p>The verified enterprise portal synchronizing university dean approvals, experiential learning hours <br />and Fortune 500 mentorship agreements</p>
           </div>

           <div className="login-Statistics">
             <div className="login-Stat-card">
                <div className="login-statcard-content">
                    <strong>14,200+</strong>
                   <span>ACTIVE INTERNS</span>
                   <small><img src={loginrisemark} 
                   alt="rise mark" 
                   style={{width:"14px",height:"10px",marginRight:"5px"}}
                    />24% Y/Y</small>
                </div>
             </div>
             <div className="login-Stat-card">
                <div className="login-statcard-content">
                    <strong>98.4%</strong>
                   <span>CREDIT VERIFIED</span>
                   <small> <img src={Deansapprovedimage} 
                   alt="Approved image" 
                   style={{width:"14px",height:"14px",marginRight:"5px"}}
                   />Deans Approved</small>
                </div>
             </div>
             <div className="login-Stat-card">
                <div className="login-statcard-content">
                    <strong>14,200+</strong>
                   <span>ACTIVE INTERNS</span>
                   <small><img src={loginrisemark} 
                   alt="rise mark" 
                   style={{width:"14px",height:"10px",marginRight:"5px"}}
                    />24% Y/Y</small>
                </div>
             </div>
           </div>
           </div>

            <div className="login-imagecontent">
             <img src={Loginpagemainimage} alt="loginpagemainimage" />
             <div>
                <div className="login-bottomcard">
                    <div className="login-bottomrightcard">
                        <img src={loginbottomcheckmark} alt="logincheckmark" />
                    </div>
                    <div className="login-bottomcontent">
                        <strong>
                            “Automated audit trails cut academic credit clearance time from 14 days to under 48 hours.”
                        </strong>
                        <p>
                            Dr. Elena Vance — <span>Dean of Experiential Education, Northeastern Consortium</span>
                        </p>
                    </div>
                </div>
              
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};