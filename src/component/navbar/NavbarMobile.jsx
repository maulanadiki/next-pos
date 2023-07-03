"use client"
import React, { useState } from 'react';
import { Menu } from './data';
import './indexmobile.css';

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(true);
  const mainMenu = () => {
    setToggle(!toggle);
  };

  const [subToggle, setSubToggle] = useState(false);
  const subMainMenu = () => {
    setSubToggle(!subToggle);
  };

  return (
    <div className='navbar__container'>
      <div className="navbar__logo">
        logo1
      </div>
      <div className="navbar__main-container">
        <button onClick={mainMenu}><i className="uil uil-bars"></i></button>
        <div className={`nav__list`}>
          <div className={`nav__list-ul ${toggle ? 'open' : ''}`} >
            {Menu.map((item) => (
              <div key={item.id} className=''>
                <a href={item.source} onClick={subMainMenu}><i className={item.icon}></i> {item.menu}</a>
                {item.submenu && (
                  <div className={`nav__sublist-ul ${subToggle ? 'buka' : ''}`}>
                    {item.submenu.map((subItem) => (
                      <div key={subItem.id}>{subItem.submenuTitle}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;