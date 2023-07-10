import Navbar from '@/component/navbar/Navbar'
import TopNavbar from '@/component/topnavbar/TopNavbar'
import React from 'react'
import './index.css'



const Layout = ({ children }) => {
  return (
    <main>


      <div className='container__layout'>
        <aside className='nav_side'>
          <Navbar />
        </aside>
        <section className='main__content'>
          <div className="main__content-header">
            <TopNavbar />
          </div>
          <div className="main__content-content">
              <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
              <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
            {children}
          </div>
        </section>

      </div>

      
    </main>
  )
}

export default Layout