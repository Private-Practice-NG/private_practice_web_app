import React from 'react'
import { useState } from 'react'
import './userregister.css'
import hospital_outline_img from '../../../assets/img/icons/hospital-outline.png'
import patient_outline_img from '../../../assets/img/icons/patient-outline.png'
import doctor_outline_img from '../../../assets/img/icons/doctor-outline.png'
import hospital_fill_img from '../../../assets/img/icons/hospital-fill.png'
import patient_fill_img from '../../../assets/img/icons/patient-fill.png'
import doctor_fill_img from '../../../assets/img/icons/doctor-fill.png'

export default function UserRegister() {
    const [userType, setUserType] = useState("patient")

    function changeSelection(usertype) {
        setUserType(usertype);
    }

    function formUserTypeChange(usertype) {
        setUserType(usertype);
    }

    function printForm() {
        if (userType != "hospital") {
            return (
                <form method="POST" action="#" noValidate="">
                    <input type="text" id="register-user-type" value="patient" hidden onChange={formUserTypeChange}/>
                    <div className="platform">
                        <div className="form-group " style={{ marginBottom: 0 }}>
                            <label htmlFor="email" className="control-label" style={{ margin: 0 }}>FULLNAME</label>
                            <input id="email" type="email" className="form-control input" name="email" tabIndex="1" required autoFocus />
                            <div className="invalid-feedback ">
                                Please fill in your email
                            </div>
                        </div>

                        <hr style={{ marginTop: "0.1rem", marginBottom: "0.1rem" }} />

                        <div className="form-group " style={{ marginBottom: 0 }}>
                            <label htmlFor="email" className="control-label" style={{ margin: 0 }}>Email</label>
                            <input id="email" type="email" className="form-control input" name="email" tabIndex="2" required />
                            <div className="invalid-feedback ">
                                Please fill in your email
                            </div>
                        </div>

                        <hr style={{ marginTop: "0.1rem", marginBottom: "0.1rem" }} />

                        <div className="form-group " style={{ marginBottom: 0 }}>
                            <label htmlFor="email" className="control-label" style={{ margin: 0 }}>CONFIRM EMAIL</label>
                            <input id="email" type="email" className="form-control input" name="email" tabIndex="3" required />
                            <div className="invalid-feedback ">
                                Please confirm your email
                            </div>
                        </div>

                        <hr style={{ marginTop: "0.1rem", marginBottom: "0.1rem" }} />

                        <div className="form-group " style={{ marginBottom: 0 }}>
                            <label htmlFor="email" className="control-label" style={{ margin: 0 }}>PASSWORD</label>
                            <input id="email" type="email" className="form-control input" name="email" tabIndex="4" required />
                            <div className="invalid-feedback ">
                                Please fill your password
                            </div>
                        </div>

                        <hr style={{ marginTop: "0.1rem", marginBottom: "0.1rem" }} />

                        <div className="form-group " style={{ margin: 0 }}>
                            <label htmlFor="password" className="control-label " style={{ margin: 0 }}>CONFIRM PASSWORD</label>
                            <input id="password" type="password" className="form-control input" name="password" tabIndex="5" required />
                            <div className="invalid-feedback">
                                please confirm yourpassword
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12 signup-btn-div">
                            <button type="submit" className="btn btn-primary btn-block" >Sign up</button>
                        </div>
                    </div>
                </form>
            );
        } else {
            return (
                <div className="platform">
                    <br />                    
                    <div>
                        To Register A Hospital Contact Us On private.practice.ng@gmail.com
                    </div>
                    <br />
                </div>
            );
        }
    }
    return (
        <div id="user-register">
            <section className="section">
                <div className="section-header" style={{ background: "transparent", borderColor: "transparent", marginBottom: 0 }}>
                    <h1 style={{ marginTop: "20px", paddingLeft: "90px", color: "white", fontSize: "xx-large" }}><span style={{ fontWeight: "bold" }}>PRIVATE</span><span style={{ fontWeight: "lighter" }}>PRACTICE</span></h1>

                </div>
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-md-7 ">
                        </div>
                        <div className="col-md-5 col-lg-4 col-xl-4 ">
                            <div className=" text-white text-center">
                                <h2 style={{ fontSize: "30px", fontWeight: "300" }}>Welcome</h2>
                                <div className="container-fluid">
                                    <div className="row icon-row">
                                        <div className="col-sm-4">
                                            <div className={userType == "hospital" ? "register-option active" : "register-option"} user-type="hospital" onClick={() => { changeSelection("hospital") }} >
                                                <img src={userType != "hospital" ? hospital_outline_img : hospital_fill_img} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4" >
                                            <div className={userType == "patient" ? "register-option active" : "register-option"} user-type="patient" onClick={() => { changeSelection("patient") }}>
                                                <img src={userType != "patient" ? patient_outline_img : patient_fill_img} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className={userType == "doctor" ? "register-option active" : "register-option"} user-type="doctor" onClick={() => { changeSelection("doctor") }}>
                                                <img src={userType != "doctor" ? doctor_outline_img : doctor_fill_img} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="login-form ">
                                {printForm()}

                                <div className="row">
                                    <div className="col-md-12 text-white text-center">
                                        <p> Already have an account? <a href="login-type.html" className="text-white">Login</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mb-auto">

            </div>

            {/* <!-- Start app Footer part --> */}
            <footer className="main-footer text-white" style={{ borderTop: "transparent", padding: "30px", marginTop: 0 }}>
                <div className="footer-left">
                    <a className="text-black" href="#" style={{ paddingRight: 40 }}>Privacy</a>
                    <a className="text-black" href="index.html" style={{ paddingRight: 40 }}>Home</a>
                    <a className="text-black" href="#" style={{ paddingRight: 400 }}>Help</a>
                </div>
                <div className="footer-right">
                    <div style={{ marginRight: 300 }}>
                        <p className="copy" style={{ marginBottom: 0 }}> @2020. Medstation INC.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
