// aljabarLibraries.js

/**
 * Mencari akar-akar dari persamaan kuadrat
 * @param {number[]} koefisien - [a, b, c]
 * @returns {number[]}
 */
function akarPersamaanKuadrat(koefisien) {
  const [a, b, c] = koefisien;
  const diskriminan = b * b - 4 * a * c;

  if (diskriminan < 0) {
    return []; // tidak ada akar real
  }

  const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
  const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
  return [akar1, akar2];
}

/**
 * Menghitung hasil kuadrat dari persamaan berpangkat 1
 * @param {number[]} koefisien - [a, b]
 * @returns {number[]}
 */
function hasilKuadrat(koefisien) {
  const [a, b] = koefisien;
  const A = a * a;
  const B = 2 * a * b;
  const C = b * b;
  return [A, B, C];
}

module.exports = {
  akarPersamaanKuadrat,
  hasilKuadrat,
};
