"use client"
import React, { useState } from 'react'
import { Menu } from './data'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
    setToggle((prevState) => !prevState)
  };

  const router = useRouter();
  // path adalah parameternya
  

  return (
    <div className={styles['navigation__main']}>
      
      
      
      {toggle && (
        <div className={`${styles['navbar__container']} ${toggle ? styles.open : ''}`}>
          <div className={styles['navbar__logo']}>
            ini untuk area logo
          </div>
          <div>
            {Menu.map((menu, index) => {
              return (
                <div key={index} className={styles['navbar__main__container']} onClick={() => menu.path?.startsWith && router.push(menu.path)}>
                  <div className={`${styles['navbar__main-accordion']} ${accordion === menu.path ? styles['accordion_active'] : ''}`} onClick={() => handleClick(index)}>
                    <button className={router.pathName === menu.path ? styles['accordion_active'] : ''}>{menu.name}</button>
                  </div>
                  {menu.submenu && (
                    <span className={`${styles['navbar__main-icon']} ${accordion === index ? styles.rotate : ''}`}> <i className='bx bx-right-arrow-alt'></i></span>
                  )}


                  {menu.submenu && (
                    <div className={`${styles['navbar__accordion-submenu']} ${accordion === index ? styles['submenu-active'] : ''}`}>
                      {menu.submenu.map((subItem, subIndex) => {
                        return (
                          <div key={subIndex}>
                            <div className={`${styles['navbar__submenu-item']} ${router.pathName === subItem.path ? styles['item-active'] : ''}`} onClick={() => subItem.path?.startsWith && router.push(subItem.path)}>
                              <div className={styles['navbar__submenu-list']} >
                                <i className={subItem.icon}></i> {subItem.title}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      )}

      <div className={`${styles['navbar__footer']}`}>
        <button onClick={mainMenu}><i className="uil uil-bars"></i></button>
      </div>
    </div>
  )
}

export default Navbar