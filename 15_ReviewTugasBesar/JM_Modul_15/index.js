const readline = require("readline");
const { register, login } = require("./auth");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Pilih menu: \n1. Registrasi\n2. Login");
rl.question("Pilihan: ", (menu) => {
  if (menu === "1" || menu === "2") {
    rl.question("Masukkan username: ", (username) => {
      rl.question("Masukkan password: ", (password) => {
        if (menu === "1") {
          register(username, password);
        } else {
          login(username, password);
        }
        rl.close();
      });
    });
  } else {
    console.log("Menu tidak valid");
    rl.close();
  }
});
