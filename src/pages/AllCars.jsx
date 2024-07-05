import React, { useState } from 'react';
import '../styles.css'
import Navbar from "../components/NavigationBar";
import Footer from '../components/Footer';
import viewOne from "../assets/s-presso.png";
import viewTwo from "../assets/celerio.png";
import viewThree from "../assets/suzuki-swift.png";
import viewFour from "../assets/vitara-all-grip.png";
import viewFive from "../assets/omoda-c5.png";
import viewSix from "../assets/chery-tiggo7.png";
import viewSeven from "../assets/cherytiggo7executive.png";
import viewEight from "../assets/scorpio-n.png";
import viewNine from "../assets/xuv300.png";
import viewTen from "../assets/jimny-5-door.png";
import viewEleven from "../assets/CheryTiggo4Pro.png";
import viewTwelve from "../assets/magnite.png";
import viewThirteen from "../assets/baleno.png";
import viewFourteen from "../assets/ciaz.png"; 

const AllCars = () => {
    const allCars = [
        {
        image: viewOne,
        name: 'S-presso 1.0 GL',
        gearType: '5-Speed Manual',
        petrolConsumption: '4.4L/100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R5,699',
        price2500km: 'R6,299'
    },
    {
        image: viewTwo,
        name: 'Suzuki Celerio 1.0 GL',
        gearType: '5-Speed Manual',
        petrolConsumption: '4.2L/100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R7,499',
        price2500km: 'R7,999'
    },
    {
        image: viewThree,
        name: 'Suzuki Swift 1.2 GL',
        gearType: '5-Speed Manual',
        petrolConsumption: '4.9L/100km',
        engineCapacity: '1.2L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R7,299',
        price2500km: 'R7,899'
    },
    {
        image: viewFour,
        name: 'Suzuki Vitara All Grip 1.6',
        gearType: '5-Speed Manual',
        petrolConsumption: '6.2L/100km',
        engineCapacity: '1.6L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R14,199',
        price2500km: 'R14,899'
    },
    {
        image: viewFive,
        name: 'Omoda C5 Tech',
        gearType: 'Electric shift gear',
        petrolConsumption: '6.9L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R12,699',
        price2500km: 'R14,299'
    },
    {
        image: viewSix,
        name: 'Chery Tiggo 7 Pro Distinction',
        gearType: 'CVT',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L Turbo Petrol',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R13,199',
        price2500km: '14,699'
    },
    {
        image: viewSeven,
        name: 'Chery Tiggo 7 Pro Executive',
        gearType: 'CVT',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R13,699',
        price2500km: 'R14,999'
    },
    {
        image: viewEight,
        name: 'Mahindra Scorpio N',
        gearType: 'Automatic',
        petrolConsumption: '7.2L/ 100km',
        engineCapacity: '2.2L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R17,799',
        price2500km: 'R18,599'
    },
    {
        image: viewNine,
        name: 'Mahindra XUV300 W6',
        gearType: 'Automatic',
        petrolConsumption: '5L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R9,899',
        price2500km: '10,499'
    },
    {
        image: viewTen,
        name: 'Suzuki Jimny 5 Door 1.5 GLX',
        gearType: '5-Speed Manual',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R13,499',
        price2500km: 'R14,499'
    },
    {
        image: viewEleven,
        name: 'Chery Tiggo 4 Pro 1.5L',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.3L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R9,499',
        price2500km: 'R9,999'
    },
    {
        image: viewTwelve,
        name: 'Nissan Magnite 1.0 Acenta',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.3L/ 100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R10,099',
        price2500km: 'R10,899'
    },
    {
        image: viewThirteen,
        name: 'Suzuki Baleno 1.5 GL MT',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.1L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R8,099',
        price2500km: 'R8,399'
    },
    {
        image: viewFourteen,
        name: 'Suzuki Ciaz 1.5 GLX MT',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.5L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R9,799',
        price2500km: 'R10,199'
    },
    ];

    const [selectedPrices, setSelectedPrices] = useState(allCars.map(car => car.price1500km));
    
    const handleKilometersClick = (index, kilometers) => {
        const newPrices = [...selectedPrices];
        newPrices[index] = kilometers === 1500 ? allCars[index].price1500km : allCars[index].price2500km;
        setSelectedPrices(newPrices);
    };

    return (
        <div>
        <Navbar />
        <h3 className='featured-vehicles'>All Cars - Available Options</h3>
        <div className="container">
            <div className='row'>

            {allCars.map((car, index) => (
                <div key={index} className="col-lg-4 col-md-12 mb-4 car">
                <div className='card h-100'>
                    <img src={car.image} alt={car.name} className='car-image' />
                    <h3 className="car-name">{car.name}</h3>
                    <div className='row car-details'>
                        <div className='col-4'>{car.gearType}</div>
                        <div className='col-4'>{car.petrolConsumption}</div>
                        <div className='col-4'>{car.engineCapacity}</div>
                    </div>
                    <p className='offers-include'><strong>Offers Include: </strong>{car.offers}</p>
                    <div className='row apply-kilometers'>
                        <div className='col-6'>
                            <button type="button" className='apply-now-featured'>Apply Now</button>
                        </div>
                        <div className='col-6 monthly-kilometers'>
                            <p>Monthly kilometers</p>
                            <span>
                               <button className={setSelectedPrices[index] === car.price1500km ? 'active' : ''} onClick={() => handleKilometersClick(index, 1500)}>
                               1500km</button>
                               <button className={setSelectedPrices[index] === car.price2500km ? 'active' : ''} onClick={() => handleKilometersClick(index, 2500)}>
                               2500km</button>
                            </span>
                        </div>
                    </div>
                    <div className='price'>{selectedPrices[index]} <span className='per-month'>Per Month</span></div>
                </div>
            </div>
            ))}
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default AllCars;