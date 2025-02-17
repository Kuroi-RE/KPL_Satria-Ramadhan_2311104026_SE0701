# **Konstruksi Perangkat Lunak**

Mata kuliah _Software Construction_ bertujuan untuk memperkenalkan konsep konstruksi perangkat lunak di tingkat sarjana rekayasa perangkat lunak. Kuliah ini membahas konsep fundamental, manajemen, pertimbangan praktis, teknologi, dan tools yang dapat digunakan untuk melakukan konstruksi perangkat lunak yang baik.

Dalam mata kuliah ini, mahasiswa akan dibekali dengan pengetahuan mengenai teknik-teknik, standar, dan environment yang digunakan dalam konstruksi perangkat lunak. Dengan adanya kuliah ini, mahasiswa diharapkan memiliki kemampuan untuk memanfaatkan teknologi, standar, dan tools yang sesuai dengan berbagai skenario konstruksi perangkat lunak.

## **Dosen 🚀**

- **Kode**: YIS
- **Nama**: Yudha Islami Sulistya, S.Kom., M.Cs

## **Pengenalan Node.js**

Node.js adalah runtime _JavaScript_ yang berjalan di server dan memungkinkan pengembang untuk membangun aplikasi _backend_ dengan JavaScript.

### **Menjalankan File JavaScript dengan Node.js**

Untuk menjalankan file _JavaScript_ menggunakan _Node.js_, gunakan perintah berikut di terminal:

```sh
node [nama_file].js
```

Contoh:

```sh
node hello-world.js
```

## Instalasi Node.js

Jika belum menginstal Node.js, Anda bisa mengunduhnya di Node.js Official Website dan mengikuti petunjuk instalasinya.

## Mengecek Versi Node

Untuk memastikan Node.js telah terinstal dengan benar, jalankan perintah berikut di terminal atau command prompt:

```sh
node -v
```

Mengecek versi NPM

```sh
npm -v
```

## GitHub

### **Instalasi GitHub**

GitHub adalah platform untuk version control dan kolaborasi. Ini memungkinkan Anda dan orang lain untuk bekerja bersama pada proyek dari mana saja.

#### **Langkah-langkah Instalasi GitHub**

1. **Buat Akun GitHub**

- Kunjungi [GitHub](https://github.com/) dan buat akun baru jika Anda belum memilikinya.

2. **Instal Git**

- Git adalah version control system yang digunakan oleh GitHub. Anda perlu menginstal Git di komputer Anda.
- Unduh Git dari [Git Official Website](https://git-scm.com/).
- Ikuti petunjuk instalasi sesuai dengan sistem operasi Anda (Windows, macOS, Linux).

3. **Konfigurasi Git**

- Setelah instalasi, buka terminal atau command prompt dan konfigurasikan Git dengan nama pengguna dan email Anda:
  ```sh
  git config --global user.name "Nama Anda"
  git config --global user.email "email@domain.com"
  ```

4. **Menghubungkan Git dengan GitHub**

- Buat SSH key untuk menghubungkan Git dengan GitHub.
- Jalankan perintah berikut di terminal:
  ```sh
  ssh-keygen -t rsa -b 4096 -C "email@domain.com"
  ```
- Ikuti instruksi untuk menyimpan key. Setelah selesai, tambahkan SSH key ke akun GitHub Anda.

5. **Mengkloning Repository**

- Untuk mengkloning repository dari GitHub, gunakan perintah berikut:
  ```sh
  git clone https://github.com/username/repository.git
  ```

6. **Membuat Commit dan Push**

- Setelah melakukan perubahan pada proyek Anda, tambahkan perubahan tersebut ke staging area:
  ```sh
  git add .
  ```
- Buat commit dengan pesan deskriptif:
  ```sh
  git commit -m "Pesan commit Anda"
  ```
- Push perubahan ke repository GitHub:
  ```sh
  git push origin main
  ```

Untuk informasi lebih lanjut, kunjungi [GitHub Docs](https://docs.github.com/).
