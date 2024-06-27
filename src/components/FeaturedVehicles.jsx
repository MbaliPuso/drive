import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import carOne from "../assets/suzuki-swift.png";
import carTwo from "../assets/omoda-c5.png";
import carThree from "../assets/jimny-5-door.png";

const FeaturedVehicles = () => {
    const cars = [
        {
            image: carOne,
            name: 'Suzuki Swift 1.2 GL',
            gearType: '5-Speed Manual',
            petrolConsumption: '4.9L/100km',
            engineCapacity: '1.2L',
            offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
            price: 'R7,299'
        },
        {
            image: carTwo,
            name: 'Omoda C5 Tech',
            gearType: 'Electric shift gear',
            petrolConsumption: '6.9L/ 100km',
            engineCapacity: '1.5L',
            offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
            price: 'R12,699'
        },
        {
            image: carThree,
            name: 'Suzuki Jimny 5 Door 1.5 GLX',
            gearType: '5-Speed Manual',
            petrolConsumption: '6.8L/ 100km',
            engineCapacity: '1.5L',
            offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
            price: 'R12,199'
        },
    ];
    
    return (
        <div className="container featured-vehicles">
        <h2>Featured Vehicles</h2>
        {cars.map((car, index) => (
            <div key={index} className="col-lg-3 col-md-12 mb-4 car">
                <div className='card h-100'>
                    <img src={car.image} alt={car.name} className='car-image' />
                    <h3 className="car-name">{car.name}</h3>
                    <div className='row car-details'>
                        <div className='col-4'>{car.gearType}</div>
                        <div className='col-4'>{car.petrolConsumption}</div>
                        <div className='col-4'>{car.engineCapacity}</div>
                    </div>
                    <p><strong>Offers Include:</strong>{car.offers}</p>
                    <div className='row'>
                        <div className='col-6'>
                            <button type="button" className='btn btn-primary'>Apply Now</button>
                        </div>
                        <div className='col-6 monthly-kilometers'>
                            <p>Monthly listeners</p>
                            <span>
                               <button>1500km</button>
                               <button>2500km</button>
                            </span>
                        </div>
                    </div>
                    <div>{car.price} <span>Per Month</span></div>
                </div>
            </div>
            ))}
            <button type="button" className='btn btn-outline-success view-all-button'><Link to="/browse-cars">View All Cars</Link></button>
        </div>
    );
};

export default FeaturedVehicles;
