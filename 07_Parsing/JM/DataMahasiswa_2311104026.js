const fs = require("fs");

function ReadJson(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);

    console.log("Hasil Deserialisasi:");
    for (const key in jsonData) {
      console.log(`${key}: ${JSON.stringify(jsonData[key], null, 2)}`);
    }

    return jsonData;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error.message);
    return null;
  }
}

const filePath = "./jurnal7_1_2311104026.json";
const jsonData = ReadJson(filePath);

if (jsonData) {
  console.log("Data JSON berhasil dibaca.");
} else {
  console.log("Gagal membaca file JSON.");
}
