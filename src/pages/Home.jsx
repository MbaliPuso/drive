import React from 'react';
import Navbar from "../components/NavigationBar";
import HeroSection from '../components/HeroSection';
import FeaturedVehicles from '../components/FeaturedVehicles';
import QuickApply from '../components/QuickApply';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
           <Navbar />
           <HeroSection />
           <FeaturedVehicles />
           <QuickApply />
           <Footer />
        </div>
    );
};

export default Home;