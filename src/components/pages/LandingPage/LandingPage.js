import React from 'react'

// Import Components
import LandingPageImageSlider from '../../elements/major/LandingPageImageSlider/LandingPageImageSlider';
import Rating from '../../elements/minor/rating/Rating';

// Import CSS
import "./landingpage.css"

// Import Default Images
import slide_1 from "../../assets/img/slider/sl-1.png";
import slide_2 from "../../assets/img/slider/sl-2.png";
import slide_3 from "../../assets/img/slider/sl-3.png";
import ios_icon_img from "../../assets/img/icons/IOS-Mobile-Icons.png";
import android_icon_img from "../../assets/img/icons/Android-Mobile-Icons.png";
import trigle_img from "../../assets/img/icons/Tri-gle.png";
import search_24_img from "../../assets/img/icons/search-24px.png";
import location_24_img from "../../assets/img/icons/my_location-24px.png";
import hands_img from "../../assets/img/icons/Hands.png";
import cards_img from "../../assets/img/icons/Card.png";
import temp_avater_1_img from "../../assets/img/avatar/avatar-1.png";
import temp_avater_2_img from "../../assets/img/avatar/avatar-2.png";
import temp_avater_3_img from "../../assets/img/avatar/avatar-6.png";
import temp_avater_4_img from "../../assets/img/avatar/avatar-4.png";



export default function LandingPage() {

    let slides = [
        { id: 1, url: slide_1, caption: "The Largest Pool \nof health professionals \nat your fingertips" },
        { id: 2, url: slide_1, caption: "Specialist ready for duty!" },
        { id: 3, url: slide_3, caption: "Higher away!" }
    ]

    let topSpecialists = [
        {
            id: 1,
            fullname: "Dr Charles Amos",
            field: "Surgeon",
            certification: "PhD, MSc.",
            rating: 4,
            imgSrc: temp_avater_1_img
        },
        {
            id: 2,
            fullname: "Dr Synthia",
            field: "Neural Surgeon",
            certification: "PhD, MSc.",
            rating: 3,
            imgSrc: temp_avater_2_img
        },
        {
            id: 3,
            fullname: "Dr Ebube Chiekezie",
            field: "Dentist",
            rating: 5,
            certification: "PhD, MSc.",
            imgSrc: temp_avater_3_img

        },
        {
            id: 4,
            fullname: "Dr Joshua",
            field: "Eye Specialist",
            certification: "PhD, MSc.",
            rating: 2,
            imgSrc: temp_avater_4_img
        }
    ];
    return (
        <div className="landing-page">
            {/*  Start app top navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
                <div className="text-left">
                    <a className="navbar-brand" href="">
                        <span style={{ fontWeight: 900 }}>Private</span>
                        <span style={{ fontWeight: 500, paddingLeft: 0, marginLeft: 0 }}>Practice</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nbar ">
                        <li className="navbar-item-active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span> </a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" href="">About </a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" href="">Contact </a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link btn btn-primary-login" href="/login">Login </a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link btn btn-primary" href="/register">Sign Up </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* IMAGE CAROUSEL */}
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <LandingPageImageSlider images={slides} />
            </div>

            <div className="row secomd-row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-12 text-center mobile-download-icon-div">
                            <a href="#" className="btn"><img src={ios_icon_img}
                                className="app-icon pull-right" /></a>
                            <a href="#" className="btn"><img src={android_icon_img}
                                className="app-icon pull-left" /></a>
                        </div>

                        <div className="col-12 text-center"
                            style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                            <div className="card-landing">
                                <hr className="color-hr" />
                                <br />
                                <img src={trigle_img} className="tri-gle" />
                                <br />
                                <br />
                                <h3>183</h3>
                                <br />
                                <p>
                                    The number of registered<br />health professionals. "We<br />bring you closest to
                                    your<br />health solutions with the<br />greatest ease".
                                </p>

                            </div>

                            <div className="card-landing">
                                <hr className="color-hr" />
                                <br />
                                <img src={trigle_img} className="tri-gle" />
                                <br />
                                <br />
                                <h3>52</h3>
                                <br />
                                <p>
                                    The number of registered<br />hospitals. "We<br />bring you closest to your<br />health
                                    solutions with the<br />greatest ease".
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 our-goals">
                    <div>
                        <h3 className="goals">GOALS</h3>
                        <hr className="horizontal-line-goal" />
                    </div>
                    <div className="row"><span className="col-4 list-number">1</span> <span className="col-8 list-content">To
                        develop and grow the health industry of Nigeria by improving the speed of service for
                        patients and connect specialist to hospitals.</span></div>
                    <br />
                    <div className="row"><span className="col-4 list-number">2</span> <span className="col-8 list-content">To
                        develop and grow the health industry of Nigeria by improving the speed of service for
                        patients and connect specialist to hospitals.</span></div>
                    <br />
                    <div className="row"><span className="col-4 list-number">3</span> <span className="col-8 list-content">To
                        develop and grow the health industry of Nigeria by improving the speed of service for
                        patients and connect specialist to hospitals.</span></div>
                </div>
            </div>
            <hr className="horizontal-line-2" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 info">
                        <h1>HOW IT WORKS</h1>
                    </div>
                    <div className="col-md-9 icons">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <div className="how-to">
                                    <img src={search_24_img} alt="" />
                                </div>
                                <br />
                                <h4 className="how-it-works-option">Find a specialist</h4>
                                <p className="info-p">Use the find a doctor tab and locate a doctor and send a request</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="how-to">
                                    <img src={location_24_img} alt="" />
                                </div>
                                <br />
                                <h4 className="how-it-works-option">Meet your specialist</h4>
                                <p className="info-p">Locate, chat and track your doctors location<br />in real-time through a
                                    map and comms system</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="how-to">
                                    <img src={hands_img} alt="" />
                                </div>
                                <br />
                                <h4 className="how-it-works-option">Recieve Service</h4>
                                <p className="info-p">Meet your doctor, receive your service and mark <br /> request complete.
                                </p>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="how-to">
                                    <img src={cards_img} alt="" />
                                </div>
                                <br />
                                <h4 className="how-it-works-option">Service Payment</h4>
                                <p className="info-p">Pay hourly or fixed-price and receive invoices<br />through MedStation.
                                    Pay for work you authorize.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 sign-up-now-1">
                        <div className="question-holder">
                            <div className="question-div">
                                <h2 className="sign-up-heading1">Are you a health professional?</h2>
                                <p>Sign up today and start working as a freelance</p>
                            </div>
                            <button className="btn">Sign up now</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 sign-up-now-2">
                        <div className="question-holder">
                            <div className="question-div">
                                <h2 className="sign-up-heading2">Do you need more specialist?</h2>
                                <p>Sign up now to get access to all the specialist you need</p>
                            </div>
                            <button className="btn">Sign up now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-p">MEET OUR TOP RATED SPECIALIST</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        topSpecialists.map((specialist) => {
                            return (
                                <div key={specialist.id} className="col-md-3 touchable">
                                    <div className="card">
                                        <div className="card-icon">
                                            <img alt="image" src={specialist.imgSrc}
                                                style={{ display: "block", width: "100%" }} className="card-image" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>{specialist.fullname}</h4>
                                                <p>{specialist.field}</p>
                                                <p>{specialist.certification}</p>
                                                <div>
                                                    <Rating rating={specialist.rating} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={slide_2} width="100%" height="350" alt="" className="img-responsive" />
                    </div>

                    <div className="col-md-6">
                        <h3 className="process"><span style={{ fontWeight: "lighter" }}>THE</span><br /> PROCESS</h3>
                        <div className="process-div">
                            <p style={{ color: "black" }}>
                                lorem Strimen menrtu goeeht ounsk knfkna klsdf knfeo kdfooonnw ksfok kdf kfg ls f mdmfnd
                                kdfnd ls f k gk fk kdf ddflsdfj psdmfd lsd fsddmf dfldjfrg sfgn d ljjdf filrjr kdjdf dsdlf
                                dfjdg kddj jf kelkal dlf sdjf ejr sjd godnf elmd sd rdfjslncoerur eorr od dofje rldjf liejsr
                                eje w sdjf osna ojf odjfnf osjd sodfnls ddfflj r jf oej s;ak d odfnfn lkjcfkdndf dfnssd
                                fljsdf dlf dxflcdx fcsdfcsdlxfjcsd xfcojsd fcsdxfj sdxf;jsdf ddofjna ddfnldf ljddfljjdfkn
                                cdfnddf .lsf slkkd ssk ;dlkfn dd;kks fls sdlsjd sdmf;slsjdf lsjna sjdf ee ;so df;sd f osef
                                ls feeknf fn dfjdf ;esdjf llsddnf rjbdoiuffcbvnsusdb ssoidbsnd sjd sfocv odgnf fdovddbf
                                vosdf csdjfnskf sifsnd fissdf ssodfjfsdfho d foldjf d9fosddf sodd x fdofnssd fo9usdfns
                                dofhsndxf sosdfncss df ssdd fsdjfsodfig og nfjg ihdfkj df oufjd ouudfd ooiijf odnf ojj fd
                                fdjnf dfnsdd ffoddnf d fuddnf iifnd fodudhfnd f dfjjd foodf 9djfd g
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="text-center">
                <div className="footer-wrap">
                    <div className="row footer-divs">
                        <div className="col-md-3 col-sm-6 mb-md-0 mx-auto pl-5 fisrt-footer-section">
                            <p className="footer-links-header-1">MED<span>STATION</span></p>
                            <ul className="footer-list  navbar-nav ml-auto">
                                <li className="nav-item">NO. 12 YDP SHODEINIDE STREET,</li>
                                <li className="nav-item"><p>UTAKO, FCT ABUJA, NIGERIA</p></li>
                                <li className="nav-item"><p>+234 909425757562</p></li>
                                <li className="nav-item">info@medstation.com.ng</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-md-0 mx-auto pl-5 fisrt-footer-section">
                            <p className="footer-links-header-2">ABOUT US</p>
                            <ul className="footer-list  navbar-nav ml-auto about-list">
                                <li className="nav-item">OVERVIEW</li>
                                <li className="nav-item">BUSINESS MODEL</li>
                                <li className="nav-item">OUR PEOPLE</li>
                                <li className="nav-item">THOSE WE SERVE</li>
                                <li className="nav-item">CORPORATE PROFILE</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-md-0 mx-auto pl-5 fisrt-footer-section">
                            <div>
                                <form>
                                    <div className="navbar-nav ml-auto">
                                        <div className="form-group feed-back-div">
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email" />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn newsletter-btn">Join our Newsletter</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <hr className="hr-b4-footer" />
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                            <p>@2020. MedStation Company</p>
                        </div>
                        <div className="social-media-icons">
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-linkedin"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>

            </footer>


            {/* General JS Scripts
            <script src="assets/bundles/lib.vendor.bundle.js"></script>
            <script src="js/CodiePie.js"></script>
    
            JS Libraies 
    
            Page Specific JS File
    
            Template JS File 
            <script src="js/scripts.js"></script>
            <script src="js/custom.js"></script> */}

        </div>
    )
}
