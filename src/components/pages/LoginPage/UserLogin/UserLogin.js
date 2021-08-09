import React, { useState } from 'react'

// Import Css
import './userlogin.css';

// Import Images
import hospital_outline_img from '../../../assets/img/icons/hospital-outline.png';
import patient_outline_img from '../../../assets/img/icons/patient-outline.png';
import doctor_outline_img from '../../../assets/img/icons/doctor-outline.png';
import hospital_fill_img from '../../../assets/img/icons/hospital-fill.png';
import patient_fill_img from '../../../assets/img/icons/patient-fill.png';
import doctor_fill_img from '../../../assets/img/icons/doctor-fill.png';

export default function UserLogin() {
    const [userType, setUserType] = useState("doctor");


    function openForm(usertype) {
        setUserType(usertype);
    }

    return (
        <div className="holder">
            {/* <!-- login-bg --> */}
            <div className="top-gradient">

                <div className="bottom-gradient">
                    <div className="top-text-logo-holder">
                        <h1>Private Practice</h1>
                    </div>
                </div>

                    <div className="signup-option-div" style={{paddingTop:"15%"}}>
                        <div>
                            <div className={userType == "doctor" ? "register-option active" : "register-option"} user-type="doctor">
                                <div onClick={() => { openForm("doctor") }}>
                                    <img src={userType != "doctor" ? doctor_outline_img : doctor_fill_img} />
                                </div>
                            </div>
                            <p className="uers-type-text">Health Practitiona</p>
                        </div>
                        <div>
                            <div className={userType == "patient" ? "register-option active" : "register-option"} user-type="patient">
                                <div onClick={() => { openForm("patient") }}>
                                    <img src={userType != "patient" ? patient_outline_img : patient_fill_img} />
                                </div>
                            </div>
                            <p className="uers-type-text">Patients</p>
                        </div>
                        <div>
                            <div className={userType == "hospital" ? "register-option active" : "register-option"} user-type="hospital">
                                <div onClick={() => { openForm("hospital") }}>
                                    <img src={userType != "hospital" ? hospital_outline_img : hospital_fill_img} />
                                </div>
                            </div>
                            <p className="uers-type-text">Hospital</p>
                        </div>
                    </div>

                    <div className="main-footer text-white" style={{padding: "30px", background: "red"}}>
                        <div className="footer-left">
                            <a className="text-white" href="#" style={{ paddingRight: "40px" }}>Privacy</a>
                            <a className="text-white" href="index.html" style={{ paddingRight: "40px" }}>Home</a>
                            <a className="text-white" href="#" style={{ paddingRight: "40px" }}>Help</a>
                        </div>
                        <div className="footer-right">
                            <div className="footer-div" style={{ marginRight: "300px" }}>
                                <p className="copy"> @2020. Medstation INC.</p>
                            </div>
                        </div>
                    </div>

                
            </div>


        </div>
    )
}
