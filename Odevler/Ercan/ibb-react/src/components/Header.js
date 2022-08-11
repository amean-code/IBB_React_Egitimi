import React from 'react'
import "./Header.css"
import ibb_logo from '../assets/main-logo-light.png'

function Header() {
  return (
    <header className="header-nav">
        <div className="header-content">
            <div className="header-logo-container">
                <img src={ibb_logo} alt="ibb logo" />
            </div>

            <nav className="navigation">
                <ul className="menu">
                    <li className="navigation-menu-item">
                        <div>Başkan</div>
                        <div className="dropdown-icon">&#9486;</div>
                    </li>
                    <li className="navigation-menu-item">
                        <div>Meclis</div>
                        <div className="dropdown-icon">&#9486;</div>
                    </li>
                    
                    <li className="navigation-menu-item">
                        <div>Kurumsal</div>
                        <div className="dropdown-icon">&#9486;</div>
                    </li>
                    
                    <li className="navigation-menu-item">
                        <div>Hizmetler</div>
                        <div className="dropdown-icon">&#9486;</div>
                    </li>
                    
                    <li className="navigation-menu-item">
                        <div>İhaleler</div>
                        <div className="dropdown-icon">&#9486;</div>
                    </li>
                    
                    <li className="navigation-menu-item">
                        <div>İletişim</div>
                        <div className="dropdown-icon">&#9486;</div>
                    </li>
                    
                    <li className="navigation-menu-item" >&#9475;</li>
                </ul>
                <div className="language">EN</div>
            </nav>
        </div>
    </header>
  )
}

export default Header