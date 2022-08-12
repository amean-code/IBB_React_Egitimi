import React from "react";
import "./Login.css";

function Login() {

  return (
    <div className="container">
      <form className="form">
        <h2 className="header">IBB React Eğitimi</h2>
        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            name="mail"
            placeholder="isminiz.soyisminiz@ibb.gov.tr"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input type="text" name="password" placeholder="Şifreniz" />
        </div>
        <div className="form-group-check">
          <input type="checkbox" name="remember" className="form-check-input" />
          <label htmlFor="remember">Beni Hatırla</label>
        </div>
        <div className="form-group-check">
          <input type="checkbox" name="check" className="form-check-input" />
          <label htmlFor="check">
            Kullanıcı sözleşmesini okudum ve onaylıyorum.
          </label>
        </div>
        <button type="submit" className="submit" disabled>
          Submit
        </button>
        <div className="forget">
          <a href="#">Şifremi Unuttum</a>

          <span> veya </span>

          <a href="#">Kayıt Ol</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
