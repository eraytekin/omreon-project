import React from 'react'
import "./FooterArea.css"

function FooterArea() {
  return (
    <div className='footer-container'>
        <div className='footer-inner-container'>
            <div className='upper-footer'>
                <div className='upper-left-footer'>
                  <div className="upper-left-kolon kolon1">
                    <ol>
                      <li>Çözüm ve Hizmetler</li>
                      <li>Yazılım Geliştirme</li>
                      <li>Outsourcing</li>
                      <li>Kalite ve Süreç Yönetimi</li>
                      <li>Danışmanlık</li>
                      <li>IoT Destekli Çözümler</li>
                    </ol>
                  </div>
                  <div className="upper-left-kolon kolon2">
                    <ol>
                      <li>Ürünler</li>
                      <li>Eğitim Yönetim Sistemi</li>
                      <li>İnsan Sermayesi Yönetim Sistemi</li>
                      <li>Müşteri İlişkileri Yönetim Sistemi</li>
                      <li>İçerik Yönetim Sistemi</li>
                    </ol>
                  </div>
                  <div className="upper-left-kolon kolon3">
                    <ol>
                      <li>Kurumsal</li>
                      <li>Hakkımızda</li>
                      <li>Belge ve Yetkinlikler</li>
                      <li>İş Ortakları</li>
                    </ol>
                  </div>
                  <div className="upper-left-kolon kolon4">
                    <ol>
                      <li>İletişim</li>
                      <li>Bilgi İstek Formu</li>
                      <li>Uzman Talep Formu</li>
                    </ol>
                  </div>
                </div>
                <div className='upper-right-footer'></div>
            </div>
            <div className='lower-footer'>
                <section>© Copyright 2010-2021 - Can Çevik</section>
                <div>icons</div>
            </div>
        </div>
    </div>
  )
}

export default FooterArea