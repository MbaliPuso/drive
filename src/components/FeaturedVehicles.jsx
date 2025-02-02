import React, { useState } from "react";
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import carOne from "../assets/suzuki-swift.png";
import carTwo from "../assets/omoda-c5.png";
import carThree from "../assets/jimny-5-door.png";

const FeaturedVehicles = () => {
    const navigate = useNavigate();
    const cars = [
        {
            image: carOne,
            name: 'Suzuki Swift 1.2 GL',
            transmission: '5-Speed Manual',
            petrolConsumption: '4.9L/100km',
            engineCapacity: '1.2L',
            offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
            price1500km: 'R7,299',
            price2500km: 'R7,899',
            brand: 'Suzuki',
            model: 'Swift 1.2 GL',
            bodyStyle: 'City Car',
            seats: 5,
            doors: 5,
            driveTrain: 'Front Wheel Drive'
        },
        {
            image: carTwo,
            name: 'Omoda C5 Tech',
            transmission: 'Electric shift gear',
            petrolConsumption: '6.9L/ 100km',
            engineCapacity: '1.5L',
            offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
            price1500km: 'R12,699',
            price2500km: 'R14,299',
            brand: 'Omoda',
            model: 'C5 Tech',
            bodyStyle: 'SUV',
            seats: 5,
            doors: 5,
            driveTrain: '2 Wheel Drive'
        },
        {
            image: carThree,
            name: 'Suzuki Jimny 5 Door 1.5 GLX',
            transmission: '5-Speed Manual',
            petrolConsumption: '6.8L/ 100km',
            engineCapacity: '1.5L',
            offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
            price1500km: 'R13,499',
            price2500km: 'R14,499',
            brand: 'Suzuki',
            model: 'Jimny 5 Door 1.5 GLX',
            bodyStyle: 'SUV',
            seats: 5,
            doors: 5,
            driveTrain: '4 Wheel Drive'
        },
    ];

    const [selectedPrices, setSelectedPrices] = useState(cars.map(car => car.price1500km));
    
    const handleKilometersClick = (index, kilometers) => {
        const newPrices = [...selectedPrices];
        newPrices[index] = kilometers === 1500 ? cars[index].price1500km : cars[index].price2500km;
        setSelectedPrices(newPrices);
    };

    const handleApplyNow = (car) => {
        navigate('/car-details', { state: {car} })
    };

    return (
        <>
        <h3 className='featured-vehicles'>Featured Vehicles</h3>
        <div className="container">
            <div className='row'>

            {cars.map((car, index) => (
                <div key={index} className="col-lg-4 col-md-12 mb-4 car">
                <div className='card h-100'>
                    <img src={car.image} alt={car.name} className='car-image' />
                    <h3 className="car-name">{car.name}</h3>
                    <div className='row car-details'>
                        <div className='col-4'>{car.transmission}</div>
                        <div className='col-4'>{car.petrolConsumption}</div>
                        <div className='col-4'>{car.engineCapacity}</div>
                    </div>
                    <p className='offers-include'><strong>Offers Include: </strong>{car.offers}</p>
                    <div className='row apply-kilometers'>
                        <div className='col-6'>
                            <button type="button" className='apply-now-featured' onClick={() => handleApplyNow(car)}>Apply Now</button>
                        </div>
                        <div className='col-6 monthly-kilometers'>
                            <p>Monthly kilometers</p>
                            <span>
                               <button className={`kilometers-button ${setSelectedPrices[index] === car.price1500km ? 'active-1500' : 'inactive-1500'}`} onClick={() => handleKilometersClick(index, 1500)}>
                               1500km</button>
                               <button className={`kilometers-button ${setSelectedPrices[index] === car.price2500km ? 'active-2500' : 'inactive-2500'}`} onClick={() => handleKilometersClick(index, 2500)}>
                               2500km</button>
                            </span>
                        </div>
                    </div>
                    <div className='price'>{selectedPrices[index]} <span className='per-month'>Per Month</span></div>
                </div>
            </div>
            ))}
            <button type="button" className='btn btn-outline-success view-all-button'><Link to="/browse-cars">View All Cars »</Link></button>

            </div>
        </div>
        </>
    );
};

export default FeaturedVehicles;
