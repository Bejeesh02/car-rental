import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="">About Us</Link></li>
            <li><Link to="">Our Services</Link></li>
            <li><Link to="">Contact Us</Link></li>
          </ul>
        </div>

       </div>

      
    </footer>
  );
}

export default Footer;
