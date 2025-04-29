import express from "express";
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

const app = express();

config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/mahasiswa", async (req, res) => {
  const { nim, nama_lengkap, email, no_hp, tanggal_lahir, jenis_kelamin } =
    req.body;

  if (
    !nim ||
    !nama_lengkap ||
    !email ||
    !no_hp ||
    !tanggal_lahir ||
    !jenis_kelamin
  ) {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request",
      error: "Semua field harus diisi",
    });
  }

  const prisma = new PrismaClient();

  const MahasiswaAlreadyExists = prisma.mahasiswa.findUnique({
    where: { nim: nim },
  });

  if (MahasiswaAlreadyExists) {
    return res.status(400).json({
      statusCode: 400,
      message: "Bad Request",
      error: "NIM sudah terdaftar",
    });
  }

  const mahasiswa = await prisma.mahasiswa.create({
    data: {
      nim: nim,
      nama_lengkap: nama_lengkap,
      email: email,
      no_hp: no_hp,
      tanggal_lahir: tanggal_lahir,
      jenis_kelamin: jenis_kelamin,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  try {
    res.status(201).json({
      message: "Data Mahasiswa Berhasil Ditambahkan",
      data: {
        nim: nim,
        nama_lengkap: nama_lengkap,
        email: email,
        no_hp: no_hp,
        tanggal_lahir: tanggal_lahir,
        jenis_kelamin: jenis_kelamin,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

app.get("/mahasiswa", (req, res) => {
  res.status(200).json({
    message: "Data Mahasiswa Berhasil Diambil",
  });
});

app.get("/mahasiswa/:nim", (req, res) => {
  res.status(200).json({
    message: "Data Mahasiswa Berhasil Diambil",
  });
});

app.put("/mahasiswa/:nim", (req, res) => {});

app.delete("/mahasiswa/:nim", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
