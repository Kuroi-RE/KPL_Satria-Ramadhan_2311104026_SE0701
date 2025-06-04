const { Subject, ConcreteObserver } = require("./observer");

// Membuat subject (yang diamati)
const berita = new Subject();

// Membuat beberapa observer
const user1 = new ConcreteObserver("User A");
const user2 = new ConcreteObserver("User B");
const user3 = new ConcreteObserver("User C");

// Subscribe observer ke subject
berita.subscribe(user1);
berita.subscribe(user2);
berita.subscribe(user3);

// Notifikasi pertama
berita.notify("Berita baru: Design Pattern Observer dipelajari!");

// Unsubscribe salah satu observer
berita.unsubscribe(user2);

// Notifikasi kedua
berita.notify("Berita update: User B tidak lagi menerima info.");
