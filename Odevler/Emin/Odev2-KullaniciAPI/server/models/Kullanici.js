
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


// TEST KULLANICILAR 
let testKullanici = new Kullanici(1,"Test","Kullanici","test1","123","test");
let adminKullanici = new Kullanici(2,"Admin","Kullanici","admin1","123","admin");
let guestKullanici = new Kullanici(3,"Guest","Kullanici","guest1","123","guest");
let userKullanici = new Kullanici(4,"User","Kullanici","user1","123","user");

let testKullaniciArr = [testKullanici, adminKullanici, guestKullanici, userKullanici];

export { testKullaniciArr };