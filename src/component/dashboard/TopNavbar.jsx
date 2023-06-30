"use client"
import React,{useState, useEffect} from 'react'
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
                <i className='bx bxs-down-arrow topnav-icondown'></i>
                </button>
                {dropdown && (
                    <div className="dropdown__content">
                        <a href="#">Logout</a>
                        <a href="#">Setting Account</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TopNavbar