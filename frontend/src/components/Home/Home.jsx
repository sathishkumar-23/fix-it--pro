
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderContent from "../../Header/HeaderContent";
import Nav from "../../nav";
import Footer from "../../Footer/Footer";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faCar, faClock } from "@fortawesome/free-solid-svg-icons";
// import IndiaStatesDropDown from "../Home/IndiaStatesDropDown";

import image1 from "../../../src/assets/AImges/IMG-20240910-WA0004.jpg";
import image2 from "../../../src/assets/AImges/IMG-20240910-WA0005.jpg";
import image3 from "../../../src/assets/AImges/IMG-20240910-WA0006.jpg";
import image4 from "../../../src/assets/AImges/IMG-20240910-WA0007.jpg";
import image5 from "../../../src/assets/AImges/IMG-20240910-WA0008.jpg";
import image6 from "../../../src/assets/AImges/IMG-20240910-WA0009.jpg";

const cards = [
  { image: image1, title: "Burgundy Flemming", subtitle: "Advertising" },
  { image: image2, title: "Nigel Nigel", subtitle: "Sound & Vision" },
  { image: image3, title: "Caspian Bellevedere", subtitle: "Accounting" },
  { image: image4, title: "Another Title", subtitle: "Another Subtitle" },
  { image: image5, title: "Another Title", subtitle: "Another Subtitle" },
  { image: image6, title: "Another Title", subtitle: "Another Subtitle" },
];

const Article = ({ data }) => (
  <figure className="snip1584">
    <img src={data.image} alt={data.title} />
    <figcaption>
      {/* Uncomment if you want to display titles */}
      {/* <h3>{data.title}</h3> */}
      {/* <h5>{data.subtitle}</h5> */}
    </figcaption>
    <a href="#"></a>
  </figure>
);



const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const services = [
    "Periodic Service",
    "Engine Repair",
    "Tyres at Home",
    "Spare Parts",
    "Buy Insurance",
    "Accidental Repair",
    "RSA Services",
    "Bike Batteries",
    "Bike Service at Home",
  ];


// 
const [selectedState, setSelectedState] = useState('');

const handleChange = (event) => {
  setSelectedState(event.target.value);
};

  return (
    <div>
      {/* header content */}
      <HeaderContent />
      {/* header end */}

      {/* nav content */}
      <Nav />
      {/* nav end */}
      {/* slider content */}
      <section>
        <div className="svg-background" data-aos="fade-up">
          <h2 className="fs-1 fw-bold mb-1 text-center p-2" data-aos="zoom-in">
            Your Premier Bike Service in India
          </h2>
          <div className="news" data-aos="fade-up">
            <Slider {...settings}>
              {cards.map((item, index) => (
                <div key={index}>
                  <Article data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <section className="services text-center mb-5" data-aos="fade-up">
            <div className="container">
              <p className="fs-4 fw-bold">
                "Find the top bike mechanics at Fix My Ride for all your needs,
                including bike repairs, doorstep service, engine maintenance,
                engine repairs, EV bike servicing, and more!"
              </p>
            </div>
          </section>
        </div>
      </section>
      {/* slider end */}

      {/* form  */}
      <section>
        <div className="m-3 bg-light">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center fs-2 m-3">Enquiry Form</div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCompany" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCompany"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputModel" className="form-label">
                    Model
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputModel"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <label htmlFor="state-select">Select a state:</label>
                {/* <IndiaStatesDropDown selectedState={selectedState} handleChange={handleChange} /> */}
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary mt-2">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary mt-2 ms-2">
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success mt-2 ms-2"
                  >
                    Add Vehicle
                  </button>
                  <p className="p-1 fw-bold text-warning">
                    By submitting this form you agree to our user agreement,
                    <div>
                      <a href="">privacy policy & terms & conditions</a>
                    </div>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="m-3">
                <h4 className="mb-3 fw-bold fs-2">Quick Response Inquiry</h4>
                <p className="fs-5 text-warning">
                  Ready to get your bike back on the road quickly? We are here
                  to help! Simply fill out our quick and easy inquiry form.
                  Provide your name, phone number, bike brand/model, details of
                  the issue or services required, your state, and for an extra
                  quick response, add ₹199 for Quick Inquiry Charges.
                </p>
                <p className="fs-5 text-warning">
                  Your satisfaction is our priority. Thank you for choosing Fix
                  My Ride – where speed meets quality service.
                </p>
                <div className="p-2">
                  <a href="tel:" className="fs-4 fw-bold text-danger">
                    Call: xxxxxxxxx
                  </a>
                </div>
                <div className="card">
                  <img
                    src={image1}
                    className="card-img-top object-fit-cover"
                    alt="Burgundy Flemming"
                    style={{ height: "400px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* form end */}

      <section>
        <div className="container my-4">
          <h2 className="text-center mb-4">
            The Best Bike Repair Service in India
          </h2>
          <p className="text-center">
            Fix My Ride is your ultimate destination for top-notch bike repair
            services in India. We understand how much your bike means to you and
            the value of your time. That’s why we offer convenient doorstep bike
            servicing—so you never have to compromise your comfort. Simply book
            an appointment, and our highly skilled mechanics will come to you
            for your bike maintenance. If extensive repairs are needed, we also
            provide a hassle-free pick-up and drop-off service, ensuring your
            bike is handled with care and returned to you in perfect condition.
            At Fix My Ride, we aim to deliver more than just a service; we
            strive to create an experience that makes bike maintenance
            effortless and stress-free.
          </p>
        </div>

        <div className="container my-4">
          <h1 className="text-center mb-4">Bike Services</h1>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4 col-sm-6 mb-3" key={index}>
                <div className="service-card p-3 border rounded shadow-sm text-center">
                  <h5 className="fw-bold">{service}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="service-info container">
        <h3 className="text-center mb-4">Bike Mechanic on Call Services</h3>
        <p className="text-center mb-4">
          Fix My Ride makes doorstep bike service extremely simple because it is
          more convenient and less time-consuming. Our online bike mechanic will
          arrive at your place and service your bike as soon as possible.
        </p>
        <div className="features">
          <div className="feature-item">
            <FontAwesomeIcon icon={faClock} size="2x" />
            <h4>Less Time Consuming</h4>
            <p>Now you don't need to spend your time on bike mechanic shops.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faTools} size="2x" />
            <h4>Book Real-Time</h4>
            <p>Simply book services from office, home, or even roadside.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCar} size="2x" />
            <h4>Sit & Relax</h4>
            <p>
              In half an hour, you will get your two-wheel service with no
              efforts.
            </p>
          </div>
        </div>
      </div>

      <div className="light-blue-background">
        <h2 className="fs-1 fw-bold mb-4 text-center p-2">
          How Fix My Ride Works?
        </h2>
        <p className="text-center mb-4">
          Using Fix My Ride is as easy as 1-2-3! First, download our
          user-friendly app. Second, select your service – maintenance, repairs,
          or roadside assistance. Third, choose a convenient time for our
          skilled mechanic to arrive at your doorstep. That's it! Our app
          ensures real-time bookings, and within 30 minutes, our expert will be
          at your service, eliminating the need for tiring visits to a bike
          mechanic shop. Experience the simplicity of Fix My Ride – your
          one-stop solution for quick, reliable, and doorstep two-wheeler
          service.
        </p>

        <div className="steps-container">
          <div className="step">
            <h4>Select Your Bike</h4>
            <p>Select a location and choose from our portfolio of bikes.</p>
          </div>
          <div className="step">
            <h4>Book a Bike Mechanic</h4>
            <p>Book a bike mechanic on call, sit back, and relax.</p>
          </div>
          <div className="step">
            <h4>Live Tracking</h4>
            <p>
              Get real-time tracking of the bike mechanic with status & updates.
            </p>
          </div>
          <div className="step">
            <h4>10 Days Warranty</h4>
            <p>
              Stay assured. 10 days warranty on all bike services & repairs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
