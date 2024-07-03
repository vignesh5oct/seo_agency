import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components'
import Footer from './containers/footer/Footer';

const AppLayout = () => {

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer />

        </div>
    );

}

export default AppLayout