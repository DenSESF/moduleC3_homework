class Device { // Класс устройсва
  constructor(name, watt) {
    this.name = name || 'Device';
    this.power = watt || 0;
    this.msgOn = 'Device not functioning.';
    this.msgOff = this.msgOn;
    this.plug = false;
  }
  
  plugOn() { // Метод для включения устройства
    this.plug = true;
    console.log('Device plug ON');
  }
  plugOff() { // Метод для выключения устройства
    this.plug = false;
    console.log('Device plug OFF');
  }
  getState() { // Метод для получения состояния устройство
    console.log(this.plug ? 'Device plug ON' : 'Device plug OFF');
  }
  action() { // Метод какое действие совершает устройство
    console.log((this.plug ? this.msgOn : this.msgOff));
  }
}

class Computer extends Device { // Класс компьютера
  constructor(name, watt) {
    super(name, watt);
    this.msgOn = 'Computer loading OS...';
    this.msgOff = 'Computer shutdown.';
  }

  getState() {
    if (this.plug) {
      console.log(`${this.name} is working. Load: ${this.power} watt.`);
    } else {
      console.log(`${this.name} is not working.`);
    }
  }
}

class DeskLamp extends Device { // Класс лампы
  constructor(name, watt) {
    super(name, watt);
    this.msgOn = 'lava lamp glows and bubbles moving top.';
    this.msgOff = 'lava lamp not glows and bubbles moving down.';
  }

  getState() {
    if (this.plug) {
      console.log(`Awesome light. Load: ${this.power} watt.`);
    } else {
      console.log('Sad darkness, you need to turn it on.');
    }
  }
}

class Devices { // Класс массива устройств
  constructor() {
    this.arrDevices = [];
  }

  addDev(obj) {  // Метод для добавления устройства
    this.arrDevices.push(obj);
    console.log(`Add device: ${obj.name}`);
  }
  sumPower() { // Метод суммарная мощьность устройств
    if (this.arrDevices.length === 0) {
    console.log('Not devices');
    return null;
    }
    let load = 0;
    this.arrDevices.forEach(function(item)
      {load += item.plug ? item.power: 0;}
    );
    console.log(`Devices load: ${load} watt.`);
    return load;
  }
}

const devices = new Devices();
const mac = new Computer('MacBook Pro 14', 285);
const lavaLamp = new DeskLamp('Lava lamp', 25);

devices.sumPower();

devices.addDev(mac);
devices.addDev(lavaLamp);

devices.sumPower();

mac.action();
mac.plugOn();
mac.action();

devices.sumPower();

lavaLamp.action();
lavaLamp.plugOn();
lavaLamp.action();

devices.sumPower();

mac.plugOff();
mac.action();

devices.sumPower();

mac.getState();
lavaLamp.getState();
