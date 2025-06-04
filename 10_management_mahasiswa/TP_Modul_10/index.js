// index.js

const { akarPersamaanKuadrat, hasilKuadrat } = require("./aljabarLibraries");

// Contoh 1: Mencari akar dari x^2 - 3x - 10 = 0
const akar = akarPersamaanKuadrat([1, -3, -10]);
console.log("Akar-akar persamaan kuadrat (x^2 - 3x - 10):", akar);

// Contoh 2: Mengkuadratkan persamaan 2x - 3
const hasil = hasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari (2x - 3):", hasil);
