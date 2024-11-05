import React, { useState, useEffect } from 'react';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import MachanicPartner from '../src/components/MachanicPartner/MachanicPartner';
import Services from '../src/components/Services/Services';
import ServiceDetail from '../src/components/RoadsideAsseist/ServiceDetail';
import Blog from '../src/components/Blog/Blog';
import Contact from '../src/components/Contact/Contact'; 
import PreLoading from '../src/components/PreLoad/PreLoading';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="machanicpartner" element={<MachanicPartner />} />
    <Route path="blog" element={<Blog />} />
    <Route path="contact" element={<Contact />} /> 
    <Route path="/service/:id" element={<ServiceDetail />} /> 
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or resource loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed for the preloading

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  return (
    <>
      {loading ? <PreLoading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
