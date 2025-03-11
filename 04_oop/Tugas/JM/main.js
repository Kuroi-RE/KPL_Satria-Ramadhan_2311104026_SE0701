const KodeBuah = require("./KodeBuah");
const PosisiKarakterGame = require("./PosisiKarakterGame");

console.log("JM 1: KODE BUAH");
console.log("\n");
const kodeBuah = new KodeBuah();
console.log("Kode Buah Apel:", kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Durian:", kodeBuah.getKodeBuah("Durian"));
console.log("Kode Buah Semangka:", kodeBuah.getKodeBuah("Semangka"));

console.log("\n");

console.log("JM 2: POSISI KARAKTER GAME");
console.log("\n");

const karakter = new PosisiKarakterGame(123456789);
console.log("State Awal:", karakter.state);
karakter.tekanTombolS();
karakter.tekanTombolW();
karakter.ubahStateBaru("Berdiri");
karakter.ubahStateBaru("Tengkurap");
karakter.ubahStateBaru("Terbang");
karakter.ubahStateBaru("Jongkok");
