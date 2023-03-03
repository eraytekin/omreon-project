import React from 'react'
import "./mainexplain.css"

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
                <img src="" />
                <div className='box'></div>
            </div>
        </div>
        <div className='mainexplain-inner-down'>
            <div className="inner-photo">
                    <img src="" />
                    <div className='box'></div>
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