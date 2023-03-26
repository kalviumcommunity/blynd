import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/heroSection/Hero';
import About from '../components/AboutWeb/About';

const HomePage = () => {
  useEffect(() => {
    document.querySelector("html").classList.remove("overflow-hidden");
  }, []);
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
    </>
  )
}

export default HomePage