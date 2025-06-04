// mathOperations.js

/**
 * Menjumlahkan dua angka
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function add(number1, number2) {
  return number1 + number2;
}

/**
 * Mengurangi dua angka
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function subtract(number1, number2) {
  return number1 - number2;
}

/**
 * Mengalikan dua angka
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function multiply(number1, number2) {
  return number1 * number2;
}

/**
 * Membagi dua angka
 * @param {number} number1
 * @param {number} number2
 * @returns {number|string}
 */
function divide(number1, number2) {
  return number2 === 0 ? "Error: pembagi tidak boleh nol" : number1 / number2;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
