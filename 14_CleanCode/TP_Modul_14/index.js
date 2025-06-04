// index.js

const { sum, subtract, multiply, divide } = require("./calculator");

const angka1 = 12;
const angka2 = 4;

console.log(`Angka 1: ${angka1}`);
console.log(`Angka 2: ${angka2}`);
console.log(`Penjumlahan: ${sum(angka1, angka2)}`);
console.log(`Pengurangan: ${subtract(angka1, angka2)}`);
console.log(`Perkalian: ${multiply(angka1, angka2)}`);
console.log(`Pembagian: ${divide(angka1, angka2)}`);
