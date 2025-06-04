const fs = require("fs");
const crypto = require("crypto");
const usersFile = "users.json";

// Load data pengguna
function loadUsers() {
  if (!fs.existsSync(usersFile)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(usersFile));
}

// Simpan data pengguna
function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Validasi username dan password
function validateInput(username, password) {
  const asciiRegex = /^[a-zA-Z0-9]+$/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (
    username.length < 5 ||
    username.length > 15 ||
    !asciiRegex.test(username)
  ) {
    return "Username harus 5–15 karakter dan hanya boleh huruf/angka ASCII";
  }

  if (
    password.length < 8 ||
    password.length > 20 ||
    !/\d/.test(password) ||
    !specialCharRegex.test(password) ||
    password.toLowerCase().includes(username.toLowerCase())
  ) {
    return "Password minimal 8 karakter, mengandung angka & karakter spesial, dan tidak boleh mengandung username";
  }

  return null; // valid
}

// Hash password
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Registrasi user baru
function register(username, password) {
  const validation = validateInput(username, password);
  if (validation) {
    console.log(`Registrasi gagal: ${validation}`);
    return;
  }

  const users = loadUsers();
  if (users.find((user) => user.username === username)) {
    console.log("Username sudah terdaftar.");
    return;
  }

  users.push({ username, password: hashPassword(password) });
  saveUsers(users);
  console.log("Registrasi berhasil!");
}

// Login user
function login(username, password) {
  const users = loadUsers();
  const hashed = hashPassword(password);
  const user = users.find(
    (user) => user.username === username && user.password === hashed
  );

  if (user) {
    console.log("Login berhasil! Selamat datang,", username);
  } else {
    console.log("Login gagal. Username atau password salah.");
  }
}

module.exports = { register, login };
