class PosisiKarakterGame {
  constructor(NIM) {
    this.state = "Berdiri"; // State awal
    this.NIM = NIM;
  }

  tekanTombolS() {
    if (this.NIM % 3 === 0) {
      console.log("Tombol arah bawah ditekan");
    }
  }

  tekanTombolW() {
    if (this.NIM % 3 === 0) {
      console.log("Tombol arah atas ditekan");
    }
  }

  ubahStateBaru(state) {
    if (this.NIM % 3 === 1) {
      if (state === "Berdiri") {
        console.log("Posisi standby");
      } else if (state === "Tengkurap") {
        console.log("Posisi istirahat");
      }
    } else if (this.NIM % 3 === 2) {
      if (this.state === "Terbang" && state === "Jongkok") {
        console.log("Posisi landing");
      } else if (this.state === "Berdiri" && state === "Terbang") {
        console.log("Posisi take off");
      }
    }
    this.state = state;
  }
}

module.exports = PosisiKarakterGame;
