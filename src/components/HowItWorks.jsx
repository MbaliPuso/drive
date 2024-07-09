import React from 'react';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import work from '../assets/Chery-Omoda-5.jpg';

const HowItWorks = () => {
  const workStyle = {
    backgroundImage: `url(${work})`,
  }
    return (
        <div className="container how-it-works" style={workStyle}>
            <p className="work-flow">Work Flow</p>
            <h2 className="drive-heading text-center">How Drive Works</h2>
            <div className='row'>
              <div className='col-lg-3 col-md-12'>
                <div className='pick-destination'><strong>Pick Destination</strong></div>
                <div className='pick-destination-p'>A small river named Duden flows by their place and supplies it with you</div>
              </div>
              <div className='col-lg-3 col-md-12'>
                <div className='select-term'><strong>Select Term</strong></div>
                <div className='select-term'>A small river named Duden flows by their place and supplies it with you</div>
              </div>
              <div className='col-lg-3 col-md-12'>
                <div className='choose-a-car'><strong>Choose A Car</strong></div>
                <div className='choose-a-car'>A small river named Duden flows by their place and supplies it with you</div>
              </div>
              <div className='col-lg-3 col-md-12'>
                <div className='enjoy-the-ride'><strong>Enjoy The Ride</strong></div>
                <div className='enjoy-the-ride'>A small river named Duden flows by their place and supplies it with you</div>
              </div>
            </div>
        </div>
    );
};

export default HowItWorks;
