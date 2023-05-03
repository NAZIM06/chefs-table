import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </>
    );
};

export default Main;