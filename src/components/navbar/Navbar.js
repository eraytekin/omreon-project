import React from 'react'

import "./navbar.css";
import {FaAlignJustify, FaTimes} from 'react-icons/fa';

function Navbar() {
  return (
    <div>
        <div className="navbar-container">
          <div className="navbar-left-side">
            <div className="hamburger-button"><FaAlignJustify style={{color: '#000000', fontSize: '25px' }}/></div>
          </div>
          <div className="navbar-right-side">
            <ul className="menu">
              <li><a href="#">Çözüm ve Hizmetler</a></li>
              <li><a href="#">Ürünler</a></li>
              <li><a href="#">Teknolojiler</a></li>
              <li><a href="#">İnsan Kaynakları</a></li>
              <li><a href="#">Kurumsal</a></li>
            </ul>
            <button className="contact-button">İletişim</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar