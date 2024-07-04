import React from 'react';
import '../styles.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import stepOne from '../assets/how-it-works-1.png';
import stepTwo from '../assets/how-it-works-2.png';
import stepThree from '../assets/how-it-works-3.png';

const HowItWorks = () => {
    const steps = [
        {
            step: 1,
            title: 'Complete the Application Form',
            description: 'Fill out our easy and quick online application form. It only takes 1 minute, 12 seconds!',
            image: stepOne 
        },
        {
            step: 2,
            title: 'Get a Call from a Dedicated Consultant',
            description: 'Our consultant will call you to discuss your application and guide you through the process.',
            image: stepTwo
        },
        {
            step: 3,
            title: 'Drive Away in Your Brand New Car',
            description: 'Once approved, you can drive away in your new car the same day!',
            image: stepThree
        },
    ];

    return (
        <div className="container how-it-works">
            <h2 className="drive-heading text-center">How Drive Works</h2>
            <Carousel>
                {steps.map((step, index) => (
                    <Carousel.Item key={index}>
                        <div className="card">
                            <img
                                className="carousel-image d-block w-100"
                                src={step.image}
                                alt={`Step ${step.step}`}
                            />
                            <div className="card-body">
                                <h3 className="card-title">Step {step.step}: {step.title}</h3>
                                <p className="card-text">{step.description}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default HowItWorks;
