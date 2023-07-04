'use client'
import React, { useState } from 'react'
import Layout from '@/Layout/Layout'
import './aset.css'
import DataTable from 'react-data-table-component'

const Page = () => {
  const columns = [
    {
      name:'name',
      selector:row=>row.name,
      sortable:true
    },
    {
      name:'email',
      selector:row=>row.email,
      sortable:true
    },
    {
      name:'age',
      selector:row=>row.age,
      sortable:true
    },
  ];
  const data = [
    {
        id:1,
        name:'Diki Maulana',
        email:'maulanadiki23@gmail.com',
        age:23
    } ,
    {
        id:2,
        name:'Rama',
        email:'rama@gmail.com',
        age:26
    } ,
    {
        id:3,
        name:'ibrahim',
        email:'ibrahim@gmail.com',
        age:25
    } ,
    {
        id:4,
        name:'oke bener',
        email:'okebener@gmail.com',
        age:28
    } 
  ]
  const [record,setRecord] = useState(data)
  function handleFilter (event) {
    const newData = data.filter(row=>{
      return row.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
    setRecord(newData)
  }
  return (
    <Layout>
      <div className="container__kategori">
        <div className="container__dropdown">
          <button> Daftar kategori </button>

        </div>
        <div className="container__table">
          <div className="table__search">
            Cari : <input type="text" onChange={handleFilter} className='search__table' placeholder='pencarian'/></div>
          <DataTable columns={columns} data={record} selectableRows fixedHeader pagination>
          </DataTable>
        </div>

      </div>
    </Layout>
  )
}

export default Page