import React from 'react'
import styles from "./Duyuru.module.css";

function Duyuru({baslik="Duyuru Başlık",imgSrc ="https://ibb.istanbul/BBImages/Image/2-10211.jpeg", altText= "IBB Duyuru", aciklama=" Duyuru hakkında açıklama bulunmamaktadır.", tarih}) {
  return (
    <div className={`${styles.container} ${styles.shadow}`}>

        <h3 className={`${styles.title}`}> {baslik} </h3>

        <img src={imgSrc} alt={altText} className={styles.duyuruImg}/>

        <p className={styles.duyuruAciklama}> {aciklama}</p>

        {tarih && (
            <p className={styles.duyuruTarih}> Tarih: {tarih} </p>
        )}

    </div>
  )
}

export default Duyuru