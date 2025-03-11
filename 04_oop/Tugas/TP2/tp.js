class DoorMachine {
  constructor() {
    this.state = "Terkunci"; // State awal
  }

  unlock() {
    if (this.state === "Terkunci") {
      this.state = "Terbuka";
      console.log("Pintu tidak terkunci");
    } else {
      console.log("Pintu sudah terbuka");
    }
  }

  lock() {
    if (this.state === "Terbuka") {
      this.state = "Terkunci";
      console.log("Pintu terkunci");
    } else {
      console.log("Pintu sudah terkunci");
    }
  }
}

module.exports = DoorMachine;
