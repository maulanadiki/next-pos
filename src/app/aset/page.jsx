'use client'
import React, { useState,useEffect } from 'react'
import Layout from '@/Layout/Layout'
import './aset.css'
import DataTable from 'react-data-table-component'
import DaftarCategory from './daftar_category'
import {getCategoryAset, createCategoryAset} from '../../controller/aset'

const Page = ({categoryAset}) => {
  const columns = [
    {
      name: 'name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'age',
      selector: row => row.age,
      sortable: true
    },
  ];
  const data = [
    {
      id: 1,
      name: 'Diki Maulana',
      email: 'maulanadiki23@gmail.com',
      age: 23
    },
    {
      id: 2,
      name: 'Rama',
      email: 'rama@gmail.com',
      age: 26
    },
    {
      id: 3,
      name: 'ibrahim',
      email: 'ibrahim@gmail.com',
      age: 25
    },
    {
      id: 4,
      name: 'oke bener',
      email: 'okebener@gmail.com',
      age: 28
    }
  ]
  const [record, setRecord] = useState(data)
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
    setRecord(newData)
  }
// mendapatkan data dari database
  useEffect(()=>{
    const fetchCategory = async () => {
      try {
        const categoryAset = await getCategoryAset();
        console.log(categoryAset);
      }catch(error){
        console.log(error);
      }
    };
    fetchCategory();
  },[]);
  
  return (
    <Layout>
      <div className="container__kategori">
        <div className="container__dropdown">
          <button className="btn border-transparent" onClick={() => window.my_modal_3.showModal()}>open modal</button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <DaftarCategory/>
            </form>
          </dialog>
        </div>



        <div className="container__table">
          <div className="table__search">
            Cari : <input type="text" onChange={handleFilter} className='search__table' placeholder='pencarian' /></div>
          <DataTable columns={columns} data={record} selectableRows fixedHeader pagination>
          </DataTable>
        </div>

      </div>
    </Layout>
  )
}

export default Page