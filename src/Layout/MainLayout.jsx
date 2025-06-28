import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router';
import Navbar2 from '../Navbar/Navbar2';
import FooterSection from '../Footer/FooterSection';

const MainLayout = () => {
    useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
    return (
        <div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
            
        </div>
    );
};

export default MainLayout;