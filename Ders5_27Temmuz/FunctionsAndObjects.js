
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

