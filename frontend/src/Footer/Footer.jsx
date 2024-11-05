import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import logo from "../assets/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-footer text-white p-5">
      <div className="container">
        <div className="row">
          {/* Column 1: About Us */}
          <div className="col-md-4" data-aos="fade-up">
            <h5 className="fs-3 p-2">About Us</h5>
            <img
              src={logo}
              alt="Brand Logo"
              width="80"
              height="80"
              className="rounded-circle"
            />
            <p className="py-3 fs-5 footer-link-color">
              We are a company committed to delivering the best products and services to our customers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <h5 className="fs-3">Quick Links</h5>
            <ul className="list-unstyled">
              {["About Fix My Ride", "Own a Franchise", "Corporates", "Contact", "Frequently Asked Questions", "Refund and Returns Policy", "Privacy Policy", "Terms and Conditions", "User-Agreement"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link-color text-decoration-none fs-5">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <h5 className="fs-3">Our Services</h5>
            <ul className="list-unstyled">
              {["Two-Wheeler Services", "Road Side Assistance", "Yearly AMC Subscriptions", "Buy Insurance", "Batteries at Home", "Tyres at Home", "Accidental Repairs", "EV Bike Services", "Bike Washing Service"].map((service, index) => (
                 <li key={index}>
                 <Link to={`/service/${index}`} className="footer-link-color text-decoration-none fs-5">
                     {service}
                 </Link>
             </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="row mt-4" data-aos="fade-up" data-aos-delay="300">
          <div className="col-md-12 text-center">
            <h5 className="fs-3">Follow Us</h5>
            <a href="#" className="text-white me-3" aria-label="Facebook">
              <i className="fab fa-facebook fs-4"></i>
            </a>
            <a href="#" className="text-white me-3" aria-label="Twitter">
              <i className="fab fa-twitter fs-4"></i>
            </a>
            <a href="#" className="text-white me-3" aria-label="Instagram">
              <i className="fab fa-instagram fs-4"></i>
            </a>
            <a href="#" className="text-white me-3" aria-label="WhatsApp">
              <i className="fab fa-whatsapp fs-4"></i>
            </a>
            <a href="#" className="text-white me-3" aria-label="Threads">
              <i className="fab fa-threads fs-4"></i>
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0 footer-link-color">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
