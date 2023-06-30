import React from 'react'
import TopNavbar from './TopNavbar'
import './index.css'
import Dashboard from './Dashboard'

const Content = () => {
  return (
    <div className='content__container'>
     <div className="content__header"><TopNavbar/></div>
     <div className="content__main">
      <Dashboard/>
     </div>
    </div>
  )
}

export default Content