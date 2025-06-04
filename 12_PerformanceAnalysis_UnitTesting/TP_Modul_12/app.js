const express = require("express");
const path = require("path");
const { CariTandaBilangan } = require("./bilangan");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/cek", (req, res) => {
  const { angka } = req.body;
  const hasil = CariTandaBilangan(parseInt(angka));
  res.json({ hasil });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
