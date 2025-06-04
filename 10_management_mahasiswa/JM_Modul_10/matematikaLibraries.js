// matematikaLibraries.js

function FPB(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function KPK(a, b) {
  return (a * b) / FPB(a, b);
}

function Turunan(persamaan) {
  const turunan = [];
  const pangkat = persamaan.length - 1;

  for (let i = 0; i < pangkat; i++) {
    const koef = persamaan[i];
    const derajat = pangkat - i;
    const hasil = koef * derajat;

    if (hasil === 0) continue;

    if (derajat - 1 === 0) {
      turunan.push(`${hasil}`);
    } else if (derajat - 1 === 1) {
      turunan.push(`${hasil}x`);
    } else {
      turunan.push(`${hasil}x${derajat - 1}`);
    }
  }

  return turunan.join(" + ").replace(/\+\s-\s/g, "- ");
}

function Integral(persamaan) {
  const integral = [];
  const pangkat = persamaan.length - 1;

  for (let i = 0; i <= pangkat; i++) {
    const koef = persamaan[i];
    const derajat = pangkat - i + 1;
    const hasil = koef / derajat;

    if (hasil === 0) continue;

    if (derajat === 1) {
      integral.push(`${hasil}x`);
    } else {
      integral.push(`${hasil}x${derajat}`);
    }
  }

  integral.push("C");
  return integral.join(" + ").replace(/\+\s-\s/g, "- ");
}

module.exports = {
  FPB,
  KPK,
  Turunan,
  Integral,
};
