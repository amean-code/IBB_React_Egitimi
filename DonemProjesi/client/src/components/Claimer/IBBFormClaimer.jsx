import React from "react";

function IBBFormClaimer({yil,sirket}) {
  return (
    <div className="mt-4">
      <p className="forgot-password text-right">
        <a href="#">Kayıt Ol</a> veya <a href="#">Şifremi Unuttum</a>
      </p>

      <hr />

      <p className="forgot-password text-right small">
        @{yil || "2022"} Tüm hakları Saklıdır | {sirket || "AMEAN DANIŞMANLIK"}
      </p>
    </div>
  );
}

export default IBBFormClaimer;
