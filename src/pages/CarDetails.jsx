import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [formData, setFormData] = useState({
    grossMonthlySalary: '',
    declinedInsurance: '',
    licenseOverYear: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You! Your details have been submitted successfully. A consultant will contact you soon.");
    navigate('/all-cars');
  };

  if (!car) {
    return <div>No car details available</div>;
  }

  return (
    <div className="container car-details-page">
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} className="car-detail-image" />
      <div className="offers">
        <h3>Offers Include:</h3>
        <p>{car.offers}</p>
      </div>
      <div className="specifications">
        <h3>Specifications:</h3>
        <p><strong>Brand:</strong> {car.brand}</p>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Body Style:</strong> {car.bodyStyle}</p>
        <p><strong>Number of Seats:</strong> {car.seats}</p>
        <p><strong>Number of Doors:</strong> {car.doors}</p>
        <p><strong>Engine Capacity:</strong> {car.engineCapacity}</p>
        <p><strong>Gear Type:</strong> {car.gearType}</p>
        <p><strong>Drive Train:</strong> {car.driveTrain}</p>
        <p><strong>Fuel Consumption:</strong> {car.petrolConsumption}</p>
      </div>
      <div className="car-form">
        <h3>Apply for {car.name} at {car.price1500km}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Gross Monthly Salary (Before Deductions):</label>
            <input type="number" name="grossMonthlySalary" value={formData.grossMonthlySalary} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Have you ever been declined insurance?</label>
            <select name="declinedInsurance" value={formData.declinedInsurance} onChange={handleChange} className="form-control" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label>Have you had your license for longer than a year?</label>
            <select name="licenseOverYear" value={formData.licenseOverYear} onChange={handleChange} className="form-control" required>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          
          <div className='row'>
            <div className="col form-group">
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
            </div>
            <div className="col form-group">
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
            </div>
          </div>
          <div className='row'>
            <div className="col form-group">
                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="col form-group">
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" required />
            </div>
          </div>
          
          <button type="submit" className="btn btn-warning">Send Details</button>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;
