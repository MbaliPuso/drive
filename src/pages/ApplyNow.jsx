import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/NavigationBar';

const ApplyNow = () => {
    return (
        <div>
            <Navbar />
            <p>Get Pre-Approved In Under 1 Minute!</p>
            <form>
                <div className="form-group">
                    <label htmlFor="brand">What brand are you interested in?</label>
                    <select className="form-control" id="brand">
                        <option>Suzuki</option>
                        <option>Chery</option>
                        <option>Mahindra</option>
                        <option>Nissan</option>
                        <option>Omoda</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="license">Have you had your license for longer than a year?</label>
                    <select className="form-control" id="license">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="insurance">Have you ever been declined insurance?</label>
                    <select className="form-control" id="insurance">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className='form-control' placeholder='Enter your Name'/>
                    </div>
                    <div className='col'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className='form-control' placeholder='Enter your Last Name'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" className='form-control' placeholder='Enter your Email Address'/>
                    </div>
                    <div className='col'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className='form-control' placeholder='Enter your Phone Number'/>
                    </div>
                </div>
                <button className='btn btn-warning btn-sm btn-block'>Send Details</button>
            </form>
        </div>
    );
};

export default ApplyNow;