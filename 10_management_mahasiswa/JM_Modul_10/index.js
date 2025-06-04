// index.js

const { FPB, KPK, Turunan, Integral } = require("./matematikaLibraries");

// Uji FPB dan KPK
console.log("FPB(60, 45):", FPB(60, 45));
console.log("KPK(12, 8):", KPK(12, 8));

// Uji Turunan dan Integral
const fTurunan = Turunan([1, 4, -12, 9]);
const fIntegral = Integral([4, 6, -12, 9]);

console.log("Turunan dari x^3 + 4x^2 -12x + 9:", fTurunan);
console.log("Integral dari 4x^3 + 6x^2 -12x + 9:", fIntegral);
