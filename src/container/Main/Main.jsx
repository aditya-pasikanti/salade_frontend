import React from 'react'
import { Header, AboutUs, SpecialMenu, Chef, Laurels, Gallery, FindUs, Footer } from '../../container';
import { Navbar } from '../../components';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default Main
