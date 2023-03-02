import React from 'react'
import "./slider.css";
import Navbar from "../navbar/Navbar";

function slider() {
  return (
    <div>
        
        <div className="slider-container">
            <Navbar/>
            <div className="slider-inner">

              <div className="slider-inner-left-side">

                <div className="left-side-inner">

                  <div className="slider-header">Bilgi Teknolojilerinde</div>

                  <div className="slider-header">23 YILLIK TECRÜBE</div>

                  <p className="slider-content">
                  Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış 
                  uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
                  </p>

                  <div className="subscribe-newsletter">
                    <input type="text" placeholder='Mail bültenimize kayıt ol'/>
                    <button className='sign-up-newsletter'>Kayıt Ol</button>
                  </div>
                  
                </div>

              </div>

              <div className="slider-inner-right-side">
                {/* right side */}
              </div>

            </div>
        </div>
    </div>
  )
}

export default slider