const PusatDataSingleton = require("./singleton");

// Inisialisasi singleton
const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

// Tambah data ke data1
data1.AddSebuahData("Viona Aziz Syahputri");
data1.AddSebuahData("Satria Ramadhan");
data1.AddSebuahData("Rizky Naufal Alghifari");

// Cetak data dari data2 (harus sama seperti data1)
console.log("Data2 setelah penambahan di Data1:");
data2.PrintSemuaData();

// Hapus nama asisten dari data2
data2.HapusSebuahData(2); // Index ke-2 (asisten)

// Cetak kembali dari data1 (asisten seharusnya sudah terhapus)
console.log("\nData1 setelah penghapusan di Data2:");
data1.PrintSemuaData();

// Tampilkan jumlah data di masing-masing instance
console.log(`\nJumlah data di data1: ${data1.GetSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.GetSemuaData().length}`);
