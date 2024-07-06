import React from 'react';
import Navbar from "../components/NavigationBar";
import HeroSection from '../components/HeroSection';
import FeaturedVehicles from '../components/FeaturedVehicles';
import QuickApply from '../components/QuickApply';
import HowItWorks from '../components/HowItWorks';
import PaymentProsCons from '../components/PaymentProsCons';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
           <Navbar />
           <HeroSection />
           <FeaturedVehicles />
           <QuickApply />
           <section id='how-it-works'>
            <HowItWorks />
           </section>
           <PaymentProsCons />
           <Footer />
        </div>
    );
};

export default Home;