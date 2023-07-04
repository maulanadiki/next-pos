"use client"
import Layout from '@/Layout/Layout'
import React, { useEffect } from 'react'
import Highcharts from 'highcharts';
import Card from './card'
import './home.css'

const Page = () => {
    useEffect(() => {
        Highcharts.chart('hightchart', {

            chart: {
                type: 'line'
            },
            title: {
                text: 'Grafik service'
            },
            subtitle: {
                text: 'cuci motor bersama'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Value (unit)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Member',
                data: [1,5,10,8,2,4,7,2,7,5]
            }, {
                name: 'Non-Member',
                data: [2,3,1,4,6,2,4,6,8,3]
            },
            {
                name: 'Redem Vocher',
                data: [1,1,2,3,4,1,1,1,4,5]
            }
        
        ]

        });
    }, [])
    return (
        <Layout>
            <div className='content__container'>
                <div className="content__card">
                    <Card />
                </div>
                <div className="content__chart">
                    <div id="hightchart"></div>
                </div>
            </div>
        </Layout>
    )
}

export default Page