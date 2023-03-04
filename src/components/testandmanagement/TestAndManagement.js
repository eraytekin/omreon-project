import React from 'react'
import "./testandmanagement.css";
import rightOk from "../../photos/oklar/right.png";
import downOk from "../../photos/oklar/down.png";

function TestAndManagement() {
  return (
    <div className='testandmanagement-container'>
        <div className='testandmanagement-inner-container'>
            <h1>Test Yöntemiyle Neler Sağlıyoruz</h1>
            <span>IoT Destekli Çözümler</span>
            <div className="testandmanagement-list-area">
                <div>Yazılım Kalitesini Arttırıyoruz</div>
                <div className="desktop-ok"><img src={rightOk}/></div>
                <div className="mobile-ok"><img src={downOk}/></div>
                <div>Olası Hataları Önceden Belirliyoruz</div>
                <div className="desktop-ok"><img src={rightOk}/></div>
                <div className="mobile-ok"><img src={downOk}/></div>
                <div>Oluşabilecek Riskleri Önlüyoruz</div>
                <div className="desktop-ok"><img src={rightOk}/></div>
                <div className="mobile-ok"><img src={downOk}/></div>
                <div>Zaman ve Maliyetten Tasarruf Sağlıyoruz</div>
            </div>
        </div>
    </div>
  )
}

export default TestAndManagement