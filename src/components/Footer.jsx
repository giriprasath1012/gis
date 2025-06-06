import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className='footer'>

    <div className='footer-details'>
      <div>
          <p> <span>Address</span><br></br><br></br>GOWTHAM INSURANCE SERVICES, <br></br>
              4 Road Corner, 
              Upstairs to City Union Bank,
              Main Road,
              Madathukulam -642113
          </p>
      </div>
      <div>
        <p>
          <span>Email ID:</span> <br></br><br></br>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gowthaminsuranceservices@gmail.com&su=Insurance%20Service%20Enquiry&body=Hi%20Gowtham,%20I%20am%20interested%20in%20your%20insurance%20services.%20Let%20me%20know%20further%20information%20regarding%20this."
          >
            gowthaminsuranceservices@gmail.com
          </a>

        </p>
      </div>
      <div>
        <p>
          <span>Phone No:</span> <br></br><br></br> <a
              href="https://wa.me/919626166642?text=Hi%20Gowtham,%20I%20am%20interested%20in%20your%20insurance%20services.%20Let%20me%20know%20further%20information%20regarding%20this."
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 96261 66642
            </a>
        </p>
      </div>

    </div>
    

    <hr></hr>
    <h4>&copy; {new Date().getFullYear()} Gowtham Insurance Services. All Rights Reserved.</h4>
  </footer>
);

export default Footer;
