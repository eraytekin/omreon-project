import React from 'react';
import "./contentbox.css";
import dokumanAnalizi from "../../photos/dokuman_analizi/dokuman_analizi.png";
import kabulDegerlendirme from "../../photos/kabul_degerlendirme/kabul_degerlendirme.png";
import isKurallariAnalizi from "../../photos/is_kurallari_analizi/is_kurallari_analizi.png";
import akisDiyagramlari from "../../photos/akis_diyagramlari/akis_diyagramlari.png";
import paydasAnalizi from "../../photos/paydas_analizi/paydas_analizi.png";
import prototipleme from "../../photos/prototipleme/prototipleme.png";

function ContentBox() {
  return (
    <div className='content-box-container'>
      <div className="content-box-inner-container">
          <div className="content-box">
            <img src={dokumanAnalizi} className="contentBox-photo"/>
            <h3>Döküman Analizi</h3>
            <p>
              Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.
            </p>
          </div>
          <div className="content-box">
            <img src={kabulDegerlendirme} className="contentBox-photo"/>
            <h3>Kabul ve Değerlendirme</h3>
            <p>
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.
            </p>
          </div>
          <div className="content-box">
            <img src={isKurallariAnalizi} className="contentBox-photo"/>
            <h3>İş Kuralları Analizi</h3>
            <p>
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.
            </p>
          </div>
          <div className="content-box">
            <img src={akisDiyagramlari} className="contentBox-photo"/>
            <h3>Akış Diyagramları</h3>
            <p>
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.
            </p>
          </div>
          <div className="content-box">
            <img src={paydasAnalizi} className="contentBox-photo"/>
            <h3>Paydaş Analizi</h3>
            <p>
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.
            </p>
          </div>
          <div className="content-box">
            <img src={prototipleme} className="contentBox-photo"/>
            <h3>Prototipleme</h3>
            <p>
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.
            </p>
          </div>
      </div>
    </div>
  )
}

export default ContentBox