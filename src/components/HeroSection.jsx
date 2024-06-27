import React from 'react';
import '../styles.css';
import hero from "../assets/suzuki-grand-vitara.jpg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-text' style={{ backgroundImage: `url(${hero})` }}>
                <h1>THE FUTURE OF DRIVING</h1>
                <p>Get a brand new car today with just a few clicks - <br />Smart, Quick & Easy - With Drive!</p>
                <button className='btn btn-warning apply-now'><Link to="/apply-now">Apply Now</Link></button>
            </div>
        </div>
    );
};

export default HeroSection;