import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const allCars = [
        {
        image: viewOne,
        name: 'S-presso 1.0 GL',
        transmission: '5-Speed Manual',
        petrolConsumption: '4.4L/100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R5,699',
        price2500km: 'R6,299',
        brand: 'Suzuki',
        model: 'S-presso',
        bodyStyle: 'City Car',
        seats: 4,
        doors: 5,
        driveTrain: 'Two-Wheel Drive'
    },
    {
        image: viewTwo,
        name: 'Suzuki Celerio 1.0 GL',
        transmission: '5-Speed Manual',
        petrolConsumption: '4.2L/100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R7,499',
        price2500km: 'R7,999',
        brand: 'Suzuki',
        model: 'Celerio 1.0 GL',
        bodyStyle: 'City Car',
        seats: 5,
        doors: 5,
        driveTrain: 'Front Wheel Drive'
    },
    {
        image: viewThree,
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
        image: viewFour,
        name: 'Suzuki Vitara All Grip 1.6',
        transmission: '5-Speed Manual',
        petrolConsumption: '6.2L/100km',
        engineCapacity: '1.6L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R14,199',
        price2500km: 'R14,899',
        brand: 'Suzuki',
        model: 'Vitara All Grip 1.6',
        bodyStyle: 'City Car',
        seats: 5,
        doors: 5,
        driveTrain: '2 Wheel Drive'
    },
    {
        image: viewFive,
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
        image: viewSix,
        name: 'Chery Tiggo 7 Pro Distinction',
        transmission: 'CVT',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L Turbo Petrol',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R13,199',
        price2500km: '14,699',
        brand: 'Chery',
        model: 'Tiggo 7 Pro Distinction',
        bodyStyle: 'SUV',
        seats: 5,
        doors: 5,
        driveTrain: 'Front Wheel Drive'
    },
    {
        image: viewSeven,
        name: 'Chery Tiggo 7 Pro Executive',
        transmission: 'CVT',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R13,699',
        price2500km: 'R14,999',
        brand: 'Chery',
        model: 'Tiggo 7 Pro Executive',
        bodyStyle: 'SUV',
        seats: 4,
        doors: 5,
        driveTrain: 'Front Wheel Drive'
    },
    {
        image: viewEight,
        name: 'Mahindra Scorpio N',
        transmission: 'Automatic',
        petrolConsumption: '7.2L/ 100km',
        engineCapacity: '2.2L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R17,799',
        price2500km: 'R18,599',
        brand: 'Mahindra',
        model: 'Scorpio N AT 4WD Z8L',
        bodyStyle: 'SUV',
        seats: 7,
        doors: 5,
        driveTrain: '4 Wheel Drive'
    },
    {
        image: viewNine,
        name: 'Mahindra XUV300 W6',
        transmission: '',
        petrolConsumption: '5L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R9,899',
        price2500km: '10,499',
        brand: 'Mahindra',
        model: 'XUV300 W3',
        bodyStyle: 'SUV',
        seats: 5,
        doors: 5,
        driveTrain: '2 Wheel Drive',
    },
    {
        image: viewTen,
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
    {
        image: viewEleven,
        name: 'Chery Tiggo 4 Pro 1.5L',
        transmission: '5-Speed Manual',
        petrolConsumption: '5.3L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R9,499',
        price2500km: 'R9,999',
        brand: 'Chery',
        model: 'Tiggo 4 Pro 1.5L',
        bodyStyle: 'SUV',
        seats: 5,
        doors: 5,
        driveTrain: '2 Wheel Drive'
    },
    {
        image: viewTwelve,
        name: 'Nissan Magnite 1.0 Acenta',
        transmission: '5-Speed Manual',
        petrolConsumption: '5.3L/ 100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R10,099',
        price2500km: 'R10,899',
        brand: 'Nissan',
        model: 'Magnite 1.0nAcenta',
        bodyStyle: 'Mini SUV',
        seats: 5,
        doors: 5,
        driveTrain: '2 Wheel Drive'
    },
    {
        image: viewThirteen,
        name: 'Suzuki Baleno 1.5 GL MT',
        transmission: '5-Speed Manual',
        petrolConsumption: '5.1L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R8,099',
        price2500km: 'R8,399',
        brand: 'Suzuki',
        model: 'Baleno 1.5 GL MT',
        bodyStyle: 'Hatchback',
        seats: 5,
        doors: 5,
        driveTrain: 'Front Wheel Drive'
    },
    {
        image: viewFourteen,
        name: 'Suzuki Ciaz 1.5 GLX MT',
        transmission: '5-Speed Manual',
        petrolConsumption: '5.5L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price1500km: 'R9,799',
        price2500km: 'R10,199',
        brand: 'Suzuki',
        model: 'Ciaz 1.5 GLX MT',
        bodyStyle: 'Sedan',
        seats: 4,
        doors: 5,
        driveTrain: 'Front Wheel Drive'
    },
    ];

    const [selectedPrices, setSelectedPrices] = useState(allCars.map(car => car.price1500km));
    
    const handleKilometersClick = (index, kilometers) => {
        const newPrices = [...selectedPrices];
        newPrices[index] = kilometers === 1500 ? allCars[index].price1500km : allCars[index].price2500km;
        setSelectedPrices(newPrices);
    };

    const handleApplyNow = (car) => {
        navigate('/car-details', { state: { car } });
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