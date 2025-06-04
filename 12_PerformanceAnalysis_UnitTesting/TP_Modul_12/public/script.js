async function cekTanda() {
  const angka = document.getElementById("inputAngka").value;

  const response = await fetch("/cek", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ angka }),
  });

  const data = await response.json();
  document.getElementById("hasilOutput").innerText = `Hasil: ${data.hasil}`;
}
