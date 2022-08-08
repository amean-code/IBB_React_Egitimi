import Kullanici from "../models/Kullanici.js";

let testKullanici = new Kullanici(1,"Test","Kullanici","test1","123","test");
let adminKullanici = new Kullanici(2,"Admin","Kullanici","admin1","123","admin");
let guestKullanici = new Kullanici(3,"Guest","Kullanici","guest1","123","guest");
let userKullanici = new Kullanici(4,"User","Kullanici","user1","123","user");

console.log(testKullanici.genelBilgiler());
console.log(adminKullanici.genelBilgiler());
console.log(guestKullanici.genelBilgiler());
console.log(userKullanici.genelBilgiler());