async function cek() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  const response = await fetch("/pangkat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ a, b }),
  });

  const data = await response.json();
  document.getElementById("output").innerText = `Hasil: ${data.hasil}`;
}
