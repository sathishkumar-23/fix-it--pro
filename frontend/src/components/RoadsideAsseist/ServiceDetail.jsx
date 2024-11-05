// src/ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams(); // Get the service ID from the URL

    return (
        <div className="container">
            <h2 className="my-4">Service Detail</h2>
            <p>You selected service with ID: {id}</p>
            {/* Add more details based on the service ID */}
        </div>
    );
};

export default ServiceDetail;
