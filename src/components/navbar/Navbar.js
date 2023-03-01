import React from 'react'
import "./navbar.css";

function Navbar() {
  return (
    <div>
        <div className="navbar-container">
          <div className="navbar-left-side">
            <div className="hamburger-button"><button>H. But.</button></div>
          </div>
          <div className="navbar-right-side">
            <ul className="menu">
              <li><a href="#">Çözüm ve Hizmetler</a></li>
              <li><a href="#">Ürünler</a></li>
              <li><a href="#">Teknolojiler</a></li>
              <li><a href="#">İnsan Kaynakları</a></li>
              <li><a href="#">Kurumsal</a></li>
              <li><a href="#">İletişim</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar