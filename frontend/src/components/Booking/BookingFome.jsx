// src/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        customer_name: '',
        bike_model: '',
        booking_date: '',
        contact_info: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/path_to_your_project/api/book.php', formData);
            console.log('Booking successful:', response.data);
            // Optionally, reset the form after successful submission
            setFormData({
                customer_name: '',
                bike_model: '',
                booking_date: '',
                contact_info: ''
            });
        } catch (error) {
            console.error('Error booking:', error);
        }
    };

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Pre Booking Your Service</h2>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="customer_name" className="form-label">Your Name</label>
                        <input 
                            type="text" 
                            name="customer_name" 
                            id="customer_name" 
                            className="form-control" 
                            placeholder="Your Name" 
                            value={formData.customer_name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="bike_model" className="form-label">Bike Model</label>
                        <input 
                            type="text" 
                            name="bike_model" 
                            id="bike_model" 
                            className="form-control" 
                            placeholder="Bike Model" 
                            value={formData.bike_model} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="booking_date" className="form-label">Booking Date</label>
                        <input 
                            type="datetime-local" 
                            name="booking_date" 
                            id="booking_date" 
                            className="form-control" 
                            value={formData.booking_date} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="contact_info" className="form-label">Contact Info</label>
                        <input 
                            type="text" 
                            name="contact_info" 
                            id="contact_info" 
                            className="form-control" 
                            placeholder="Contact Info" 
                            value={formData.contact_info} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
