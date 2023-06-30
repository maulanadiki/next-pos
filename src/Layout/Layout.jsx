import Content from '@/component/dashboard/Content'
import Navbar from '@/component/navbar/Navbar'
import React from 'react'
import './index.css'

const Layout = ({children}) => {
  return (
    <main className='container mx-auto layout__grid'>
        <aside className='nav__side'>
            <Navbar/>
        </aside>
        <section className='content'>
          <Content/>
          {children}
        </section>
    </main>
  )
}

export default Layout