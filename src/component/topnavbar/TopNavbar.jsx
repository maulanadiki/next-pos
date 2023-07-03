"use client"
import React,{useState, useEffect} from 'react'
import './index.css'
const TopNavbar = () => {
    const [dropdown, setDropdown]= useState(false);
    const toggleDropdown = ()=>{
        setDropdown(!dropdown)
    }

    useEffect (()=>{
        const handleOutsideClick = (event)=>{
            if(dropdown && !event.target.closest('.dropdown')){
                setDropdown(false);
            }
        }
        window.addEventListener('click', handleOutsideClick)
        return ()=>{
            window.removeEventListener('click',handleOutsideClick)
        }
    },[dropdown])
    return (
        <div className='topnav__container'>
            <div className="dropdown">
                <button className={`dropdown__button ${dropdown ? 'drop-active' : '' }`} onClick={toggleDropdown}>
                <i className='bx bxs-user-circle topnav-icon' ></i> Dropdown 
               <span className='panah-bawah'> <i className='bx bxs-down-arrow topnav-icondown'></i></span>
               <span className='panah-atas'><i className='bx  bxs-up-arrow topnav-icondown'></i></span>

                </button>
                {dropdown && (
                    <div className="dropdown__content">
                        <a href="#"><i class="uil uil-power"></i> Logout</a>
                        <a href="#"><i class="uil uil-setting"></i> Setting Account</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TopNavbar