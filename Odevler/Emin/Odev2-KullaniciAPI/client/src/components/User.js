import React, {useState} from 'react'
import styles from '../styles/User.module.css'

function User() {

    const [kAdi,setKAdi] = useState("");
    const [sifre,setSifre] = useState("");
  return (

    <div className={styles.userContainer}>

        <div>
            <label for="username"> Kullanıcı Adı : </label>
            <input type="text" id='username'  onChange={(e) => {
                setKAdi(e.target.value);
            }}/>
        </div>
        
        <div>
            <label for="sifre"> Şifre : </label>
            <input type="password" id='sifre'  onChange={(e) => {
                setSifre(e.target.value);
            }}/>
        </div>

        <div className={styles.userContainer}>
            <p>Kullanici adi: {kAdi}</p>
            <p>Şifre: {sifre}</p>
        </div>
    </div>
  )
}

export default User