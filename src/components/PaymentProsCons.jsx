import React from 'react';
import '../styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PaymentProsCons = () => {
  return (
    <div className="payment-pros-cons container my-5">
      <h2 className="text-center mb-5">One Easy Payment</h2>
      <div className="pros-cons row">
        <div className="cons col-md-6">
          <h3 className="text-danger"><i className="fas fa-times-circle"></i> Cons</h3>
          <ul className="list-group">
            <li className="list-group-item"><i className="fas fa-gas-pump"></i> You pay for your own petrol</li>
            <li className="list-group-item"><i className="fas fa-users"></i> Your friends will be jealous</li>
            <li className="list-group-item"><i className="fas fa-clock"></i> Free time not applying for credit</li>
          </ul>
        </div>
        <div className="pros col-md-6">
          <h3 className="text-success"><i className="fas fa-check-circle"></i> Pros</h3>
          <ul className="list-group">
            <li className="list-group-item"><i className="fas fa-car"></i> Brand new car</li>
            <li className="list-group-item"><i className="fas fa-shield-alt"></i> Smash & grab</li>
            <li className="list-group-item"><i className="fas fa-tools"></i> Maintenance Plan Included</li>
            <li className="list-group-item"><i className="fas fa-shield-virus"></i> Comprehensive car insurance</li>
            <li className="list-group-item"><i className="fas fa-tire"></i> Tyre maintenance</li>
            <li className="list-group-item"><i className="fas fa-map-marker-alt"></i> Tracking unit</li>
            <li className="list-group-item"><i className="fas fa-warranty"></i> Vehicle warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentProsCons;