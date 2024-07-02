import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import processDrive from '../assets/process-image-drive.png';
import dayApproval from '../assets/same-day-approval.png';
import stars from '../assets/5-Star-Rating.webp';
import brandBadge from '../assets/brand_badges_drive.png';

const QuickApply = () => {
    const quickStyle = {
        backgroundImage: `url(${processDrive})`,
    };

    return (
        <>
        <div className='container quick-apply' style={quickStyle}>
            <img src={dayApproval} alt="Same day approval" />
            <h2>Get a brand-new car <strong>today!</strong></h2>
        </div>
        <div className='container brands'>
            <button className='quick-apply-button' type="button">Quick Apply Now!</button>
            <img className='five-star' src={stars} alt="Five star rating" />
            <p className='thrill-para'>Experience the thrill of driving a brand-new car with zero delay - enjoy same-day approval and hit the road today with our seamless car subscription service!</p>
        </div>
        <div className='brand-badge'>
            <img src={brandBadge} alt="Car brands badge" />
        </div>
        </>
    );
};

export default QuickApply;