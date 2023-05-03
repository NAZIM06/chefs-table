import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { Toaster } from 'react-hot-toast'

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
            <Footer></Footer>

        </>
    );
};

export default Main;