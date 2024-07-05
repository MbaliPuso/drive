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
                  <div>
                    <h1 className='hero-section-heading'>THE FUTURE OF DRIVING</h1>
                  </div>
                  <div>
                    <p className='hero-section-p'>Get a brand new car today with just a few clicks - Smart, Quick & Easy - With Drive!</p>
                  </div>
                  <div>
                  <button className='hero-section-button'><Link className='hero-section-link' to="/apply-now">Apply Now</Link></button>
                  </div>
                  
                  </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;