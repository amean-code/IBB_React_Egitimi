
// Isimlerimizi iceren bir array tanimlamak
let isimler = ["Emin","Ercan","Irem","Ecem"];

// Arrayde Kac Kisi oldugunu ekrana yazdiralim
console.log("Arrayde 4 kisi bulunmaktadir.") // Bu statik bir yapidir KULLANMIYORUZ

// Yeni Ekip Arkadasi
isimler.push("Kagan");

// Arrayde Kac Kisi oldugunu ekrana yazdiralim
console.log(`Arrayde ${isimler.length} kisi bulunmaktadir.`) // Dinamik Yapi

// LOOP

// For Loop
for (let index = 0; index < isimler.length; index++) { // index = 2
    console.log(`Merhaba ${isimler[index]}`);
}

// While Loop
let whileIndex = 0;
let whileKosulu = whileIndex < isimler.length;

while(whileKosulu){

    console.log(`Merhaba ${isimler[whileIndex]}`);


    // whileda yapilacak islemlerin sonu
    whileIndex++;
    whileKosulu = whileIndex < isimler.length;
}

// Fonksiyonlar

// let yakitMiktari = 40 // Litre
// let litreBasiYol = 15 // km
// let yakitFiyati = 25 // TRY / Litre
// let gidilecekYol = 900 // km gidilecek

// let maxGidebilecegimYol = yakitMiktari * litreBasiYol // km
// let toplamMaliyet = yakitMiktari * yakitFiyati// TRY

// console.log(`
// Max Gidilebilecek Yol: ${maxGidebilecegimYol} km
// Toplam Maliyet: ${toplamMaliyet} TRY
// Gidilen Yol: ${gidilecekYol} km
// Kalan Yakit: ${yakitMiktari - gidilecekYol / litreBasiYol} Litre
// `);

function yolGit(yakitMik , tuketim , yakitBirimFiyat , gidilecekYol) {

    // Yeterli Yakit Var Mi?
    let tuketilecekYakit = gidilecekYol / yakitBirimFiyat;
    
    
    if(tuketilecekYakit > yakitMik){ // yeterli Yakit yoksa
        console.log("Yolda Kalır !!");
        let maxGidebilecegimYol = yakitMik * litreBasiYol // km
        let toplamMaliyet = tuketilecekYakit * yakitBirimFiyat// TRY

        console.log(`
            Max Gidilebilecek Yol: ${maxGidebilecegimYol} km
            Toplam Maliyet: ${toplamMaliyet} TRY
            Kalan Yakit: 0 Litre
        `);
        
    }else{ // Yeterli Yakit Varsa

        let toplamMaliyet = tuketim * yakitBirimFiyat// TRY
        console.log(`
            Toplam Maliyet: ${toplamMaliyet} TRY
            Gidilen Yol: ${gidilecekYol} km
            Kalan Yakit: ${yakitMik - tuketilecekYakit} Litre
        `);
    } 
}

yolGit(100,10,25,1400);
yolGit(40,20,10.15,400);
yolGit(50,35,30,700);