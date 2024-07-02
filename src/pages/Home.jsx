import React from 'react';
import Navbar from "../components/NavigationBar";
import HeroSection from '../components/HeroSection';
import FeaturedVehicles from '../components/FeaturedVehicles';
import QuickApply from '../components/QuickApply';

const Home = () => {
    return (
        <div>
           <Navbar />
           <HeroSection />
           <FeaturedVehicles />
           <QuickApply />
        </div>
    );
};

export default Home;