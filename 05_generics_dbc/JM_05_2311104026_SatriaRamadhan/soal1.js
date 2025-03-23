const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jumlahTigaAngka(a, b, c) {
  return a + b + c;
}

rl.question("Masukkan NIM Anda: ", (nim) => {
  if (nim.length < 2) {
    console.log("NIM harus memiliki minimal 2 angka!");
    rl.close();
    return;
  }

  // Mengambil dua digit terakhir NIM
  const duaDigitTerakhir = nim.slice(-2);
  const angka1 = parseInt(duaDigitTerakhir[0] + "2");
  const angka2 = parseInt(duaDigitTerakhir[1] + "4");
  const angka3 = parseInt(duaDigitTerakhir[1] + "6");

  const digitTerakhir = parseInt(nim[nim.length - 1]);
  let hasil;

  if (digitTerakhir === 1 || digitTerakhir === 2) {
    hasil = jumlahTigaAngka(
      parseFloat(angka1),
      parseFloat(angka2),
      parseFloat(angka3)
    );
    console.log(`Hasil Penjumlahan (float): ${hasil}`);
  } else if (
    digitTerakhir === 3 ||
    digitTerakhir === 4 ||
    digitTerakhir === 5
  ) {
    hasil = jumlahTigaAngka(
      parseFloat(angka1),
      parseFloat(angka2),
      parseFloat(angka3)
    );
    console.log(`Hasil Penjumlahan (double): ${hasil}`);
  } else if (
    digitTerakhir === 6 ||
    digitTerakhir === 7 ||
    digitTerakhir === 8
  ) {
    hasil = jumlahTigaAngka(
      parseInt(angka1),
      parseInt(angka2),
      parseInt(angka3)
    );
    console.log(`Hasil Penjumlahan (int): ${hasil}`);
  } else if (digitTerakhir === 9 || digitTerakhir === 0) {
    hasil = jumlahTigaAngka(BigInt(angka1), BigInt(angka2), BigInt(angka3));
    console.log(`Hasil Penjumlahan (long): ${hasil}`);
  } else {
    console.log("Digit terakhir NIM tidak valid.");
  }

  rl.close();
});
