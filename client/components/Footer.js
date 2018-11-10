import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
  return (
    <div className="navbar" id="footer">
      <Link className="nav-link" to="/contact">Contact</Link>
    </div>
  )
}

export default Footer;
