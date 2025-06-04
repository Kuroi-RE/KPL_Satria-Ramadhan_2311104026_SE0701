// calculator.js

/**
 * Menghitung hasil penjumlahan dua bilangan
 * @param {number} a - angka pertama
 * @param {number} b - angka kedua
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

/**
 * Menghitung hasil pengurangan dua bilangan
 * @param {number} a - angka pertama
 * @param {number} b - angka kedua
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Menghitung hasil perkalian dua bilangan
 * @param {number} a - angka pertama
 * @param {number} b - angka kedua
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Menghitung hasil pembagian dua bilangan
 * @param {number} a - angka pembilang
 * @param {number} b - angka penyebut
 * @returns {number|string}
 */
function divide(a, b) {
  if (b === 0) {
    return "Error: Pembagi tidak boleh nol";
  }
  return a / b;
}

module.exports = { sum, subtract, multiply, divide };
