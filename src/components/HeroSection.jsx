import React from 'react';
import '../styles.css';
import hero from "../assets/suzuki-grand-vitara.jpg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const heroStyle = {
        backgroundImage: `url(${hero})`,
    };

    return (
        <div className='hero-section' style={heroStyle}>
            <div className='container'>
                <div className='row hero-content'>
                  <div className='col-lg-6'>
                  <h1>THE FUTURE OF DRIVING</h1>
                  <p>Get a brand new car today with just a few clicks - Smart, Quick & Easy - With Drive!</p>
                  <button className='btn btn-warning apply-now'><Link to="/apply-now">Apply Now</Link></button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;