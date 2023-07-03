"use client"
import React, { useState } from 'react'
import { Menu } from './data'
import './navbar.css'

const Navbar = () => {
  const [accordion, setAccordion] = useState(null);

  const handleClick = (index) => {
    setAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const [subAccordion, setSubAccordion] = useState(null);
  const handleSubAccordion = (index) => {
    setSubAccordion(index);
  };

  const [toggle, setToggle] = useState(true);
  const mainMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className='navigation__main'>

      <div className={`navbar__container ${toggle ? 'open' : ''}`}>
        <div className="navbar__logo">
          ini untuk area logo
        </div>

        {Menu.map((item, index) => (
          <div key={item.id} className="navbar__main-container">
            <div className={`navbar__main-accordion ${accordion === index ? 'accordion_active' : ''}`}
              onClick={() => handleClick(index)}>
            <a href={item.source}><i className={item.icon}></i> {item.menu}</a>
            </div>
            {item.submenu && (
              <span className={`navbar__main-icon ${accordion === index ? 'rotate' : ''}`}> <i className='bx bx-right-arrow-alt'></i></span>

            )}
            
            {item.submenu && (
              <div className={`navbar__accordion-submenu ${accordion === index ? 'submenu-active' : ''}`}>
                {item.submenu.map((subItem,subIndex) => (
                  <div key={subItem.id} className={`navbar__submenu-item ${subAccordion === subIndex ? 'item-active' : ''}`}>
                    <a href={`subIndex.source`} className='navbar__submenu-list'onClick={() => handleSubAccordion(subIndex)}>
                    <i className={subItem.icon}></i> {subItem.title}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="navbar__footer">
        <button onClick={mainMenu}><i className="uil uil-bars"></i></button>
      </div>
    </div>
  )
}

export default Navbar