const DoorMachine = require("./tp");

const door = new DoorMachine();
console.log("State Awal:", door.state);
door.unlock();
door.lock();
