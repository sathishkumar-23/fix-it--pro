import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "aos/dist/aos.css";
import "./Header.css";
import AOS from "aos";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid navbar-bg border-bottom border-warning">
      <div className="row text-center">
        <div className="col-lg-3 col-md-4 col-sm-12" data-aos="fade-right">
          <div className="text-light p-2 f-family">
            <span className="fs-6">alwaysebethemanRogith@gmail.com</span>
          </div>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12" data-aos="fade-down">
          <div className="p-2 text-capitalize text-light">
            We will give our best support for our clients !!!
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12" data-aos="fade-left">
          <div className="d-flex justify-content-center align-items-center p-2">
            <a href="#" aria-label="Facebook" className="text-light px-2">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-light px-2">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-light px-2">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="WhatsApp" className="text-light px-2">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" aria-label="Threads" className="text-light px-2">
              <i className="fa-brands fa-threads"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
