import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/heroSection/Hero';

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
    </>
  )
}

export default HomePage