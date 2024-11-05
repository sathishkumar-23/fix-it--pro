import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HeaderContent from "../../Header/HeaderContent";
import Footer from "../../Footer/Footer";
import Nav from "../../nav";
import BookingForm from '../Booking/BookingFome';
import "./Services.css";

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
  "Air Filter Cleaning",
  "Chain Lubrication",
  "Mirror Adjustment",
  "Spark Plug Cleaning",
  "Vehicle Washing/ Eco Wash",
  "Nut and Bolt Adjustments",
  "Tyre Pressure Check",
  "Self Motor Checking",
  "Vehicle Polishing",
  "Disc Brake Oil Check/Top-Up",
  "Brake Shoe/Pad Roughing",
  "Clutch Cable Lubrication",
  "Carburetor Cleaning",
  "Brake Drum Cleaning & Adjustment",
  "Engine Oil Checking/Replacement",
  "Accelerator Cable Lubrication",
  "Sanitization",
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div>
      <HeaderContent />
      <Nav />
      {/* Services banner image */}
      <div className="banner-section">
        <h1 className="banner-title">Services</h1>
      </div>
      {/* Services content */}
      <div className="m-3 fs-3 fw-bolder">
        <h1 className="m-3 text-info">Our Services</h1>
        
        <div className="container">     
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4 col-sm-6 mb-3" key={index}>
                <div
                  className="service-card p-3 border rounded shadow-sm text-center"
                  data-aos="fade-up"
                >
                  <h5 className="fw-bold">{service}</h5>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      
    <div class="container">
        <div class="text-center fw-bold fs-2">Key Information</div>
        <div class="row">
            <div class="col-12 col-md-4"> 
                <div class="fw-bold">Our Service Locations</div>
                <div>
                    <ul>
                        <li>Pune</li>
                        <li>Greater Noida</li>
                        <li>Delhi</li>
                        <li>Navi Mumbai</li>
                        <li>Chennai</li>
                        <li>Kochi</li>
                        <li>Kolkata</li>
                        <li>Hyderabad</li>
                        <li>Bangalore</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-4"> 
                <div class="fw-bold">Bike Model</div>
                <div>
                    <ul>
                        <li><a href="">Hero Glamour</a></li>
                        <li>Hero HF Deluxe</li>
                        <li>Hero Passion Plus</li>
                        <li>Hero Passion Pro</li>
                        <li>Hero Splendor Plus</li>
                        <li>Honda Activa 5G</li>
                        <li>Honda CB Unicorn</li>
                        <li>Honda Dio</li>
                        <li>Bajaj CT 100</li>
                        <li>Bajaj Platina</li>
                        <li>Bajaj Pulsar 150</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-4"> 
                <div class="fw-bold">By Brand</div>
                <div>
                    <ul>
                        <li>Harley Davidson</li>
                        <li>Hero</li>
                        <li>Hero Electric</li>
                        <li>Honda</li>
                        <li>KTM</li>
                        <li>Bajaj</li>
                        <li>Revolt</li>
                        <li>Royal Enfield</li>
                        <li>Ampere</li>
                        <li>Ather</li>
                        <li>Bounce</li>
                        <li>CFmoto</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   {/* Booking Form Section */}
   <div className="container my-5">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
