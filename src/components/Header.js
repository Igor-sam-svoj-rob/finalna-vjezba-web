import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id="main">
        <Navbar />
        <div className="name">
            <h1><span>Lorem ipsum</span> para bonum</h1>
            <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a href="#" className="cv-btn">Download</a>
        </div>
    </div>
  )
}

export default Header