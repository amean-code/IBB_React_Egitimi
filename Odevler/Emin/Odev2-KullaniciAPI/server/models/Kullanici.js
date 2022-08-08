
export default class Kullanici {

    // Attributes
    /*
        id
        isim
        soyisim
        kullanici adi
        sifre
        rol
    */

    // Constructor
    constructor(id,isim,soyisim,k_adi,sifre,rol){
        this.id = id;
        this.isim = isim;
        this.soyisim = soyisim;
        this.kullanici_adi = k_adi;
        this.sifre = sifre;
        this.rol = rol;
    }


    // Behaviors
    genelBilgiler() {
        return `
        ------ Kullanici ${this.id} ------
        | İsim      : ${this.isim}
        | Soyisim   : ${this.soyisim}
        | Kullanici Adı: ${this.kullanici_adi}
        | Rol       : ${this.rol}
        ----------------------------------
        `
    }

}