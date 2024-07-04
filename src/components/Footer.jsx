import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4" style={{ backgroundColor: '#1A3229', color: 'whitesmoke' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contact Information</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> Guernsey Business Park Warehouse M Sultas Street Irene, Ext 192 Centurion, 0157
            </p>
            <p>
              <i className="fas fa-phone"></i> (012) 035-1680
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@drive.com
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Office Hours</h5>
            <p>Monday - Friday: 9:00 AM - 17:00 PM</p>
            <p>Saturday: 08:00 AM - 13:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" className="text-white me-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h5>Our Location</h5>
            <iframe
              src="https://maps.google.com/maps?q=%20Guernsey%20Business%20Park%20Warehouse%20M%20Sultas%20Street%20Irene%20Ext%20192&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Guernsey Business Park Warehouse M Sultas Street Irene Ext 192"
            ></iframe>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>
              This vehicle rental approach to driving a new car has never been available in South Africa before. It's up for grabs for everyone - even if you have a poor credit history.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
