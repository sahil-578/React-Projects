import React from 'react';
import Header from './src/components/Header/header';
import Footer from './src/components/Footer/footer';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>    
    )
}

export default Layout