import React from 'react';
import '../assets/styles/css/components/main-footer.css';

const MainFooter = () => {
  return (
    <footer class="container-fluid">
      <div class="row grid-wrapper">
        <div class="col-lg-4 footer-col-1">
          <div class="platform-name-case">
            <span class="montserrat">private</span>
            <span>practice</span>
          </div>
          <div class="address-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Neque
            minima doloribu.
          </div>
          <div class="phone-line-case">+234 90 9425 7562</div>
          <div class="email case">info@privatepractice.live</div>
        </div>
        <div class="col-lg-4 footer-col-2">
          <div class="section-header">About us</div>
          <ul>
            <a href="google.com">
              {' '}
              <li>overview</li>{' '}
            </a>
            <a href="google.com">
              {' '}
              <li>business model</li>{' '}
            </a>
            <a href="google.com">
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
        <div class="col-lg-4 footer-col-3 join-newsletter-case">
          <form action="...">
            <div class="form-input-case">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="yourmail@gmail.com"
              />
              <button type="submit" class="btn">
                Join our newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="container-fluid footer-base">
        <div>
          <span class="copy-case">&copy;</span>
          <span>2022 privatepractice company.</span>
        </div>
        <div class="social-icons-wrapper">
          <a href="google.com">
            <span class="fab fa-instagram-square icon instagram"></span>
          </a>
          <a href="google.com">
            <span class="fab fa-facebook-square icon facebook-blue"></span>
          </a>
          <a href="google.com">
            <span class="fab fab fa-linkedin icon linkedin"></span>
          </a>
          <a href="google.com">
            <span class="fab fa-twitter-square icon twitter-blue"></span>
          </a>
          <a href="google.com">
            <span class="fab fa-youtube-square icon youtube"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
