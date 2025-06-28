import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router';

const MainLayout = () => {
    useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;