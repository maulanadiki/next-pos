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

  return (
    <div className='navbar__container'>


      <div className="navbar__logo">
        ini untuk area logo
      </div>

      {Menu.map((item, index) => (
        <div key={item.id} className="navbar__main-container">
          <div className={`navbar__main-accordion ${accordion === index ? 'accordion_active' : ''}`}
            onClick={() => handleClick(index)}>
          <i class={item.icon}></i> {item.menu}
          </div>
          {item.submenu && (
            <span className={`navbar__main-icon ${accordion === index ? 'rotate' : ''}`}> <i className='bx bx-right-arrow-alt'></i></span>

          )}
          
          {item.submenu && (
            <div className={`navbar__accordion-submenu ${accordion === index ? 'submenu-active' : ''}`}>
              {item.submenu.map((subItem,subIndex) => (
                <div key={subItem.id} className={`navbar__submenu-item ${subAccordion === subIndex ? 'item-active' : ''}`}>
                  <a href="#" className='navbar__submenu-list'onClick={() => handleSubAccordion(subIndex)}>{subItem.title}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  )
}

export default Navbar