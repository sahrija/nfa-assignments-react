import React, { Children } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

export default function HomeLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
