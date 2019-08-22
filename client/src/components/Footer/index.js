import React from 'react';
import "./footer.css";

// Module imports
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <nav className = "footer__nav">

        <div className="link__wrapper">
          <li><Link className = "footer__link" to = "/">Work</Link></li>
          <li><Link className = "footer__link" to = "/">Collaborations</Link></li>
          <li><Link className = "footer__link" to = "/">About</Link></li>
          <li><Link className = "footer__link" to = "/">Contact</Link></li>
        </div>

      </nav>
    </div>
  );
}

export default Footer;