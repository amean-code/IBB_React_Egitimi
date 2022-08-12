import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer class="footer">
        <div class="footer-header">


            <ul class="footer-header-content">
                <li class="footer-header-item"> <a href="#" class="footer-link"> BAŞKAN </a></li>
                <li class="footer-header-item"> <a href="#" class="footer-link"> MECLİS </a></li>
                <li class="footer-header-item"> <a href="#" class="footer-link"> KURUMSAL </a></li>
                <li class="footer-header-item"> <a href="#" class="footer-link"> HİZMETLER </a></li>
                <li class="footer-header-item"> <a href="#" class="footer-link"> İLETİŞİM </a></li>
            </ul>
            <div class="mayor">
                <h2>Ekrem İMAMOĞLU</h2>
                <div class="mayor-title">İstanbul Büyükşehir Belediye Başkanı</div>
            </div>
        </div>


        <div class="footer__navigation">

            <div class="footer-nav-container">


                <div class="services">
                    <div class="services-header">HİZMETLER</div>
                    <div class="services-content">
                        <div class="content1">
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Acil Hizmetler </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Bilgi Hizmetleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Çevre Hizmetleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; E-Belediye Hizmetleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; İmar ve Şehircilik Hizmetleri </a> </div>
                        </div>
                        <div class="content2">
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Kültür Hizmetleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Sağlık Hizmetleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Sosyal Hizmetler </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Spor Hizmetleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Ulaşım Hizmetleri </a> </div>
                        </div>
                    </div>
                </div>


                <div class="municipality">
                    <div class="services-header">Belediye</div>
                    <div class="services-content">
                        <div class="content1">
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Yetki Alanı </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Etik Komisyonu </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Arabuluculuk Komisyonu </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Encümen </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Bütçe ve Yatırımlar </a> </div>
                        </div>
                        <div class="content2">
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Basın Materyalleri </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Kardeş Şehirler </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Şirketler </a> </div>
                            <div class="services-item"> <a href="#" class="footer-link">&#10095; Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni </a> </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="footer-logo">
                <img src="https://ibb.istanbul//assets/images/home/hero/header%20logo.svg" alt="İBB logo" />
            </div>

            <div class="footer-foot">
                İstanbul Büyükşehir Belediyesi Bilgi İşlem Daire Başkanlığı tarafından ❤️ ile tasarlanmıştır.
            </div>
        </div>
    </footer>
  )
}

export default Footer