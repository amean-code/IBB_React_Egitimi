import React, { useState } from "react";
import styles from "./Giris.module.css";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "animate.css";
import IBBFormClaimer from "./IBBFormClaimer";

function Giris(props) {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [beniHatirla, setBeniHatirla] = useState(false);

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

  return (
    <div className={styles.authWrapper}>
      <div className={`${styles.authHeader} animate__animated animate__fadeIn`}>
        {props.baslik || "IBB REACT EGITIMI"}
      </div>

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
                setEmail(e.target.value);
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
              value={sifre}
              onChange={(e) => {
                setSifre(e.target.value);
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
                  setBeniHatirla(!beniHatirla);
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
            <button type="submit" className="btn btn-primary">
              Giriş Yap
            </button>
          </div>

          <IBBFormClaimer yil="2018" sirket="IBB"/>
        </form>
      </div>
    </div>
  );
}

export default Giris;
