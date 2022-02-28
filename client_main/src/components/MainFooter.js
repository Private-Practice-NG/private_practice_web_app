import React from 'react';
import '../assets/styles/css/components/main-footer.css';

const MainFooter = () => {
  return (
    <footer className="main-footer container-fluid">
      <div className="row grid-wrapper">
        <div className="col-lg-4 footer-col-1">
          <div className="platform-name-case">
            <span className="montserrat">private</span>
            <span>practice</span>
          </div>
          <div className="address-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Neque
            minima doloribu.
          </div>
          <div className="phone-line-case">+234 90 9425 7562</div>
          <div className="email case">info@privatepractice.live</div>
        </div>
        <div className="col-lg-4 footer-col-2">
          <div className="section-header">About us</div>
          <ul>
            <a href="google.com">
              {' '}
              <li>overview</li>{' '}
            </a>
            <a href="google.com">
              {' '}
              <li>business model</li>{' '}
            </a>
            <a href="goo">
              {' '}
              <li>our people</li>{' '}
            </a>
            <a href="google.com">
              {' '}
              <li>those we serve</li>{' '}
            </a>
            <a href="google.com">
              <li>coporate profile</li>
            </a>
          </ul>
        </div>
        <div className="col-lg-4 footer-col-3 join-newsletter-case">
          <form action="...">
            <div className="form-input-case">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="yourmail@gmail.com"
              />
              <button type="submit" className="btn">
                Join our newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid footer-base">
        <div>
          <span className="copy-case">&copy;</span>
          <span>2022 privatepractice company.</span>
        </div>
        <div className="social-icons-wrapper">
          <a href="google.com">
            <span className="fab fa-instagram-square icon instagram"></span>
          </a>
          <a href="google.com">
            <span className="fab fa-facebook-square icon facebook-blue"></span>
          </a>
          <a href="google.com">
            <span className="fab fab fa-linkedin icon linkedin"></span>
          </a>
          <a href="google.com">
            <span className="fab fa-twitter-square icon twitter-blue"></span>
          </a>
          <a href="google.com">
            <span className="fab fa-youtube-square icon youtube"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
