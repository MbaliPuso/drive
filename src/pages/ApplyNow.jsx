import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import Navbar from '../components/NavigationBar';
import Footer from '../components/Footer'

const ApplyNow = () => {
    const [formData, setFormData] = useState({
                grossMonthlySalary: '',
                carBrand: '',
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
              };

    return (
        <div>

            <Navbar style={{backgroundColor: "#1a3229"}} />

            <div className="apply-now-container">
            <p>Get Pre-Approved In Under 1 Minute!</p>
            <div className='apply-now-content'>
            <form className='apply-now-form' onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Gross Monthly Salary (Before Deductions):</label>
                    <input type="number" name="grossMonthlySalary" value={formData.grossMonthlySalary} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="brand">What brand are you interested in?</label>
                    <select className="form-control" name="carBrand" id="brand">
                        <option>Select an option</option>
                        <option>Suzuki</option>
                        <option>Chery</option>
                        <option>Mahindra</option>
                        <option>Nissan</option>
                        <option>Omoda</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="license">Have you had your license for longer than a year?</label>
                    <select className="form-control" name='licenseOverYear' value={formData.licenseOverYear} id="license">
                        <option>Select an option</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="insurance">Have you ever been declined insurance?</label>
                    <select className="form-control" name='declinedInsurance' value={formData.declinedInsurance} id="insurance">
                        <option>Select an option</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name='firstName' value={formData.firstName} className='form-control' placeholder='Enter your Name'/>
                    </div>
                    <div className='col'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name='lastName' value={formData.lastName} className='form-control' placeholder='Enter your Last Name'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name='email' value={formData.email} className='form-control' placeholder='Enter your Email Address'/>
                    </div>
                    <div className='col'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name='phoneNumber' value={formData.phoneNumber} className='form-control' placeholder='Enter your Phone Number'/>
                    </div>
                </div>
                <button className='btn btn-warning btn-sm btn-block mt-4'>Send Details</button>
            </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default ApplyNow;