import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='card__container'>
      <div className="content__card-container">
        <div className='content__card-list'>
          <h3>Member</h3>
          <div className="content__card-list__item">
            <p>Jenis Kendaraan</p>
            <p>: isinya disini</p>
            <p>Jumlah Kendaraan</p>
            <p>: isinya disini</p>
          </div>
          <div className='content__card-list__footer'>
            <p>Target : 20 / 30 (75%) </p>
            <p className='content__card-list__footer-price' >Rp. xx xxx xxx</p>
          </div>
        </div>
        <div className='content__card-list'>
          <h3>Non Member</h3>
          <div className="content__card-list__item">
            <p>Jenis Kendaraan</p>
            <p>: isinya disini</p>
            <p>Jumlah Kendaraan</p>
            <p>: isinya disini</p>
          </div>
          <div className='content__card-list__footer'>
            <p>Target : 20 / 30 (75%) </p>
            <p className='content__card-list__footer-price' >Rp. xx xxx xxx</p>
          </div>
        </div>
        <div className='content__card-list'>
          <h3>Redem Vocher</h3>
          <div className="content__card-list__item">
            <p>Jenis Redem</p>
            <p>: isinya ini</p>
            <p>Jumlah redem</p>
            <p>: isinya disini</p>
          </div>
          <div className='content__card-list__footer'>
            <p>Total Vocher Share : 20 / 30 (75%)</p>
            <p className='content__card-list__footer-price' >Rp. xx xxx xxx</p>
          </div>
        </div>
        <div className='content__card-list'>
          <h3>Vocher Information</h3>
          <p>Jumlah Vocher share</p>
          <p>Expired date</p>
          <div className='content__card-list__footer'>
            <p>Jumlah Expired bulan ini : 20 / 30 </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card