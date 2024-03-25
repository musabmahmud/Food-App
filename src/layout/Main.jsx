import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/home/Footer'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main