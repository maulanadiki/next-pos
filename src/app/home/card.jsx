import React from 'react'
import { DataCard } from './DataCard'
import './card.css'

const Card = () => {
  const renderData = (data) => {
    switch (data.jenis || data.jenis_redem) {
      case 3:
        return (
          <div key={data.id} className='content__card-list'>
            <h3>{data.judul}</h3>
            <p>Jenis Kendaraan : {data.jenis}</p>
            <p>Jumlah: {data.jumlah}</p>
            <p>Rp. {data.pendapatan}</p>
          </div>
        );
      case 4:
        return (
          <div key={data.id} className='content__card-list'>
            <h3>{data.judul}</h3>
            <p>Jenis Kendaraan : {data.jenis}</p>
            <p>Jumlah: {data.jumlah}</p>
            <p> Rp. {data.pendapatan}</p>
          </div>
        );
      case 5:
        return (
          <div key={data.id} className='content__card-list'>
            <h3>{data.judul}</h3>
            <p>Jumlah Redem: {data.jenis_redem} vocher</p>
            <p>Rp. {data.jumlah_redem}</p>
          </div>
        );
      case 6:
        return (
          <div key={data.id} className='content__card-list'>
            <h3>{data.judul}</h3>
            <p>Jumlah Redem: {data.jenis_redem} vocher</p>
            <p>Rp. {data.jumlah_redem}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='card__container'>
      <div className="content__card-container">
        {DataCard.map((data) => renderData(data))}
      </div>
    </div>
  )
}

export default Card