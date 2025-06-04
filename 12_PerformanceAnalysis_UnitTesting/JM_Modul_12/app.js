const express = require("express");
const path = require("path");
const { CariNilaiPangkat } = require("./pangkat");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/pangkat", (req, res) => {
  const { a, b } = req.body;
  const hasil = CariNilaiPangkat(Number(a), Number(b));
  res.json({ hasil });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
