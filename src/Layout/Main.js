import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import Header from '../pages/Haders/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;