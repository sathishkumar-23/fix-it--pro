import React, { useState } from "react";
import HeaderContent from "../../Header/HeaderContent";
import Nav from "../../nav";
import Footer from "../../Footer/Footer";

function MechanicPartner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    area: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }
    // Submit form logic here
    console.log("Form submitted", formData);
  };

  return (
    <div>
      <HeaderContent />
      <Nav />
      <div className="banner-section">
        <h1 className="banner-title">Mechanic Partner</h1>
      </div>
      <div className="vehicle-add-container container">
        <div className="row">
          <h4 className="text-center mb-2">Join Fix My Ride</h4>
          <div className="col-md-6 col-sm-12">
            <div className=" my-3">
              Inquiry for Quick Response! Ready to get your bike back on the road
              quickly? Fill out our form below for a quick response. Your
              satisfaction is our priority at BikeProMech, where speed meets
              quality service.
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <form onSubmit={handleSubmit} className="border p-3">
              <h4>Contact Information</h4>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>

              <label htmlFor="state">Select State</label>
              <select
                name="state"
                id="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
              </select>

              <label htmlFor="city">Select City</label>
              <select
                name="city"
                id="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
              </select>

              <label htmlFor="area">Area Range</label>
              <input
                type="text"
                name="area"
                id="area"
                className="form-control"
                value={formData.area}
                onChange={handleChange}
              />

              <label htmlFor="experience">Experience</label>
              <select
                name="experience"
                id="experience"
                className="form-control"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select Experience</option>
                <option value="exp1">Less than 1 year</option>
                <option value="exp2">1-3 years</option>
                <option value="exp3">3+ years</option>
              </select>

              <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setFormData({})}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MechanicPartner;
