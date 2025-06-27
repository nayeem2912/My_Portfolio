import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';;
import Hero from '../Hero/Hero';
import AboutSection from '../About/AboutSection';

const MainLayout = () => {
    useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutSection></AboutSection>
        </div>
    );
};

export default MainLayout;