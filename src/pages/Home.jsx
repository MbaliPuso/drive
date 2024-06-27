import React from 'react';
import Navbar from "../components/NavigationBar";
import HeroSection from '../components/HeroSection';
import FeaturedVehicles from '../components/FeaturedVehicles';

const Home = () => {
    return (
        <div>
           <Navbar />
           <HeroSection />
           <FeaturedVehicles />
        </div>
    );
};

export default Home;