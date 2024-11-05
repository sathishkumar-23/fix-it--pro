import React, { useState } from "react";
import HeaderConternt from "../../Header/HeaderContent";
import Footer from "../../Footer/Footer";
import Nav from "../../nav";
import "../../App.css"; 
import "./Contact.css";

function Contect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    <div>
      <HeaderConternt />
      <Nav />
      {/* Contact banner image */}
      <div className="banner-section">
        <h1 className="banner-title">Contact Us</h1>
      </div>
      <div></div>

      {/* Contact content */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {/* <h2 className="form-title">Get in Touch</h2> */}
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="text-success fw-bold fs-2">Let's get in touch</div>
            <div className="m-3 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </div>
            <div className="m-3 fs-5">92 Cherry Drive Uniondale, NY 11553</div>
            <div className="m-3 fs-5">lorem@ipsum.com</div>
            <div className="m-3 fs-5">123-456-789</div>
            <div className="fs-5  tect-info">
             <span className="fw-bold">Connect with us :</span> 
              <div className=" ">
                <div>
                  <strong>Email:</strong>example@gamil.com
                </div>
                <div><strong>Support:</strong>+91 211-223-2323</div>
                <div><strong>Address:</strong>No:09/2 ,jdfkhjg,dfhk</div>
                <div><strong>Addtional Help</strong>+91 211-223-2323</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location map */}
      <div className="map-section m-3 border ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091877!2d144.95373631531852!3d-37.816279379751675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770c8b9c83eaf0!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1589202271811!5m2!1sen!2sau"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contect;
