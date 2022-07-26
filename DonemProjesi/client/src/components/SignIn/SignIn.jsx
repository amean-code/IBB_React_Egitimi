import React, { useState } from "react";
import styled from "styled-components";
import IBBFormClaimer from "../Claimer/IBBFormClaimer";
import styles from "./SignIn.module.css";
import axios from "axios";

function SignIn(props) {
  // State Variables
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [rememberMe,setRememberMe] = useState();

  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const girisYap =  (e) => {
    e.preventDefault();
    console.log(`Giriş Yap Fonksyionu Çalışıyor`);

    const user = {
      email: email,
      password: password
    }
    axios('http://localhost:3002/api/auth/signin',user)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <div className={styles.authWrapper}>
      <div className={`${styles.authHeader} animate__animated animate__fadeIn`}>
        {props.baslik || "IBB REACT EGITIMI"}       
      </div>

      <p>EMAIL : {email} </p>
        <p> SIFRE : {password} </p>

      <div className={`${styles.authInner} animate__animated animate__fadeIn`}>
        <form>
          <div className="mb-3">
            <label htmlFor="giris_email"> Kullanıcı Adı</label>
            <input
              type="email"
              placeholder="E-Mail"
              className="form-control mt-2"
              id="giris_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="giris_sifre"> Şifre</label>
            <input
              type="password"
              placeholder="****"
              className="form-control mt-2"
              id="giris_sifre"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input pr-2"
                style={{ margin: "10px" }}
                id="giris_beniHatirla"
                onChange={(e) => {
                  setRememberMe(e.target.value)
                }}
              />
              <label
                className="custom-control-label"
                htmlFor="giris_beniHatirla"
              >
                Beni Hatırla
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={girisYap}>
              Giriş Yap
            </button>
          </div>

          <IBBFormClaimer yil="2022" sirket="IBB & AMEAN Danışmanlık"/>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
