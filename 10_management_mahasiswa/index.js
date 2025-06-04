import express from "express";
import { config } from "dotenv";

import {
  createMahasiswa,
  deleteMahasiswaById,
  getAllMahasiswa,
  getMahasiswaByNIM,
  updateMahasiswaById,
} from "./controller/mahasiswaController.js";

config(); // load environment variables from .env

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World! guysss kelas 01");
});
app.post("/mahasiswa", createMahasiswa);
app.get("/mahasiswa", getAllMahasiswa);
app.get("/mahasiswa/:nim", getMahasiswaByNIM);
app.put("/mahasiswa/:id", updateMahasiswaById);
app.delete("/mahasiswa/:id", deleteMahasiswaById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
