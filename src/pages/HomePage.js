import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/heroSection/Hero';
import About from '../components/AboutWeb/About';

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
    </>
  )
}

export default HomePage