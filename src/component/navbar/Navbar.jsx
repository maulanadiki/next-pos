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
    setToggle(!toggle);
  };

  const router = useRouter();
  // path adalah parameternya
  const handleChangePage = (path)=>{
    router.push(path)
  }

  return (
    <div className={styles['navigation__main']}>

      <div className={`${styles['navbar__container']} ${toggle ? styles.open : ''}`}>
        <div className={styles['navbar__logo']}>
          ini untuk area logo
        </div>
        <div>
          {Menu.map((menu, index) => {
            return (
              <div key={index} className={styles['navbar__main__container']}>
                <div className={`${styles['navbar__main-accordion']} ${accordion === index ? styles['accordion_active'] : ''}`} onClick={() => handleClick(index)}>
                  <button className={router.pathName === menu.path ? styles['accordion_active']: ''} onClick={()=>handleChangePage(menu.path)}>{menu.name}</button>
                </div>
                {menu.submenu && (
                  <span className={`${styles['navbar__main-icon']} ${accordion === index ? styles.rotate : ''}`}> <i className='bx bx-right-arrow-alt'></i></span>
                )}


                {menu.submenu && (
                  <div className={`${styles['navbar__accordion-submenu']} ${accordion === index ? styles['submenu-active'] : ''}`}>
                    {menu.submenu.map((subItem, subIndex) => {
                      return (
                        <div key={subIndex}>
                          <div className={`${styles['navbar__submenu-item']} ${subAccordion === subIndex ? styles['item-active'] : ''}`}>
                            <div className={styles['navbar__submenu-list']} onClick={() => handleSubAccordion(subIndex)}>
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

      <div className={styles["navbar__footer"]}>
        <button onClick={mainMenu}><i className="uil uil-bars"></i></button>
      </div>
    </div>
  )
}

export default Navbar