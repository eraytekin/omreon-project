import React from 'react'
import "./mainexplain.css"

import testYonetimAnalizi from "../../photos/test_yonetimi_analizi/test_yonetimi_analizi.jpg";
import kaliteSurecYonetimi from "../../photos/kalite_surec_yonetimi/kalite_surec_yonetimi.jpg";

function MainExplain() {
  return (
    <div className='mainexplain-container'>
        <div className='mainexplain-inner-up'>
            <div className="inner-content">
                <h1>Kalite ve Süreç Yönetimi</h1>
                <p>
                    Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına 
                    sahip, uzman proje yöneticilerinden oluşmaktadır. 
                    Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek,
                    uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak 
                    ve geliştirmek için yanınızdayız.
                </p>
                <button>Keşfet</button>
            </div>
            <div className="inner-photo">
                <img src={kaliteSurecYonetimi} className="inner-photo-settings"/>
            </div>
        </div>
        <div className='mainexplain-inner-down'>
            <div className="inner-photo">
                    <img src={testYonetimAnalizi} className="inner-photo-settings"/>
            </div>
            <div className="inner-content">
                    <h1>Test Yönetimi ve Analiz</h1>
                    <p>
                        Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına 
                        sahip, uzman proje yöneticilerinden oluşmaktadır. 
                        Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek,
                        uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak 
                        ve geliştirmek için yanınızdayız.
                    </p>
                    <button>Keşfet</button>
            </div>
        </div>
    </div>
  )
}

export default MainExplain