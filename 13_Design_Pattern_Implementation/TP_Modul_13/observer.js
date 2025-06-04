// Subject class
class Subject {
  constructor() {
    this.observers = [];
  }

  // Menambahkan observer
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Menghapus observer
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Memberi tahu semua observer
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Observer Interface (function object style)
class ConcreteObserver {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} menerima update: ${data}`);
  }
}

module.exports = { Subject, ConcreteObserver };
