import React ,{useState}from "react";
import styles from "./Giris.module.css";

function Giris() {

    const [email, setEmail] = useState("");
    const [sifre, setSifre] = useState("");
    const [beniHatirla, setBeniHatirla] = useState(false);

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authHeader}>IBB React Uygulaması</div>

      <div className={styles.authInner}>
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
              value={sifre}
              onChange={(e) => {
                setSifre(e.target.value)
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
                onChange={(e) =>{
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

          <div className="mt-4">
            <p className="forgot-password text-right">
                <a href="#">Kayıt Ol</a> veya <a href="#">Şifremi Unuttum</a>
            </p>

            <hr/>

            <p className="forgot-password text-right small">@2022 Tüm hakları Saklıdır | AMEAN DANIŞMANLIK</p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Giris;
