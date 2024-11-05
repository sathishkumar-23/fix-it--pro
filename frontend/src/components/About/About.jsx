import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HeaderContent from "../../Header/HeaderContent";
import Footer from "../../Footer/Footer";
import Nav from "../../nav";
import "./About.css"; // Ensure you have this CSS file for styles

function About() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <HeaderContent />
      <Nav />
      {/* About banner image */}
      <div className="banner-section">
        <h1 className="banner-title">About</h1>
      </div>
      {/* About content */}
      <div className="about-heading" data-aos="fade-up">
        FixMyRide
      </div>
      <div className="container">
        <div className="fw-bold text-info fs-3">Who we are</div>
        <div className="mt-4">
          <p className="about-para" data-aos="fade-up" data-aos-delay="200">
            <div className="fw-bold">
              {" "}
              Fix My ride is India's ideal two-wheeler maintenance and repair
              app, providing our clients with two-wheeler service or repair at
              affordable prices at their doorstep.
            </div>
            <div className="mt-3">
              Welcome to BikeProMech, we as your one-stop shop, for all of
              high-quality automotive services located in Bangalore. We fee
              honor for being your trusted partner for wide range of services of
              two-wheelers, having over 12 years of considerable experience in
              the automotive repair industry. At BikeProMech, we understand the
              importance of your vehicle's performance and safety. Our seasoned
              team of professionals brings a wealth of experience, knowledge,
              and a passion for motorcycles to every service we provide. Whether
              it's routine maintenance, complex repairs, or performance
              enhancements, we approach each task with accuracy and dedication.
            </div>
          </p>
        </div>
      </div>
      {/* our vision */}
      <div className="container">
        <div className="text-center mb-2 fw-bold">Our Future vision</div>
        <div className="text-center fw-bold">
          Our vision is to become World’s Largest, Most Trusted Two-Wheeler
          Service Brand with responsible and sustainable solutions.
        </div>
        <div className="m-2">
          Established in 2015 and operational across major cities in India,
          BikePromech is growing for two-wheeler maintenance. From doorstep
          services to roadside assistance and genuine spare parts, we bridge the
          gap between Original Equipment Manufacturer workshops and local
          mechanics, prioritizing trust, efficiency, transparency, and
          convenience. Our mission is to empower bike service professionals,
          simplifying two-wheeler maintenance nationwide. Committed to a
          stress-free, cost-effective experience, we seek partnerships to
          revolutionize the consumer journey. With unique offerings like
          doorstep service, post-service support, and advanced technology
          solutions, we aim to resolve all two-wheeler concerns and redefine the
          service market across Pan India. We aim to solve millions of people
          issues related to two wheels.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
