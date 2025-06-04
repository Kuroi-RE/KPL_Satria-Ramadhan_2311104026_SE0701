// index.js

const { add, subtract, multiply, divide } = require("./mathOperations");

const numberA = 10;
const numberB = 5;

console.log("=== Operasi Matematika ===");
console.log(`Penjumlahan: ${add(numberA, numberB)}`);
console.log(`Pengurangan: ${subtract(numberA, numberB)}`);
console.log(`Perkalian: ${multiply(numberA, numberB)}`);
console.log(`Pembagian: ${divide(numberA, numberB)}`);
