"use client"
import React,{useEffect} from 'react'
import Highcharts from 'highcharts';


const Dashboard = () => {
    useEffect(() => {
        // Inisialisasi Highcharts di sini
        // Contoh konfigurasi dasar untuk grafik garis
        Highcharts.chart('chart-container', {
          title: {
            text: 'Contoh Grafik Highcharts'
          },
          series: [{
            type: 'line',
            data: [1, 3, 2, 4, 5, 7, 6]
          }]
        });
      }, []);
  return (
    <div>
        ini dashboard
        <div id="chart-container" />
    </div>
  )
}

export default Dashboard