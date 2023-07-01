"use client"
import Layout from '@/Layout/Layout'
import React,{useEffect} from 'react'
import Highcharts from 'highcharts';
import Card from './card'
import './home.css'

const Page = () => {
    useEffect(()=>{
        Highcharts.chart('chart-container',{
            title:{
                text:'Trafik Steam Motor'
            },
            series:[{
                type:'line',
                data:[1,5,8,10,2,4,6,21,2]
            }]
        })
    },[])
  return (
    <Layout>
        <div className='content__container'>
            <div className="content__card">
                <Card/>
            </div>
            <div id="chart-container" />
        </div>
    </Layout>
  )
}

export default Page