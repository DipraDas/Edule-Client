import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/Footer/Footer';
import Navbar from '../../components/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <>
         <Navbar></Navbar>   
         <Outlet></Outlet>
         <Footer></Footer>
        </>
    );
};

export default MainLayout;