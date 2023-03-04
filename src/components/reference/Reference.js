import React from 'react'
import "./reference.css"
import akbank from "../../photos/akbank.png";
import akcanSa from "../../photos/akcan_sa.png";
import aktas from "../../photos/aktas.png";
import ola from "../../photos/ola.png";
import amazon from "../../photos/amazon.png";
import borusan from "../../photos/borusan.png";
import bookMyShow from "../../photos/bookmyshow.png";
import bilgi from "../../photos/bilgi.png";
import arrowRight from "../../photos/arrowRight.png";

function Reference() {
  return (
    <div className='reference-container'>
      <div className='reference-inner-container'>
        <div className='reference-inner-container-up'>
          <h1>Referanslarımız</h1>
          <p>
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </p>
        </div>
        <div className='reference-inner-container-down'>
          <div className="kolon-1">
            <div className="box-white"><img src={borusan}/></div>
          </div>
          <div className="kolon-2">
            <div className="box-white"><img src={bilgi}/></div>
            <div className="box-white"><img src={bookMyShow}/></div>
          </div>
          <div className="kolon-3">
            <div className="box-white"><img src={akbank}/></div>
            <div className="box-white"><img src={akcanSa}/></div>
            <div className="box-white tumunu-gor">Tümünü Gör  <img src={arrowRight}/></div>
          </div>
          <div className="kolon-4">
            <div className="box-white"><img src={aktas}/></div>
            <div className="box-white"><img src={ola}/></div>
          </div>
          <div className="kolon-5">
            <div className="box-white"><img src={amazon}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reference