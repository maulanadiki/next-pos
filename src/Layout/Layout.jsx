import Content from '@/component/dashboard/Content'
import Navbar from '@/component/navbar/Navbar'
import React from 'react'
import './index.css'

const Layout = () => {
  return (
    <main className='container mx-auto layout__grid'>
        <aside className='layout__navbar'>
         <Navbar/>
        </aside>
        <section className='layout__content'>
            <Content/>
        </section>
    </main>
  )
}

export default Layout