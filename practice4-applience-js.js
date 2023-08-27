function Device(name, watt) { // Прототип устройсва
  this.name = name || 'Device',
  this.power = watt || 0,
  this.msgOn = 'Device not functioning.',
  this.msgOff = this.msgOn;
  this.plug = false;
}
Device.prototype.plugOn = function() { // Метод для включения устройства
  this.plug = true;
  console.log('Device plug ON');
};
Device.prototype.plugOff = function() { // Метод для выключения устройства
  this.plug = false;
  console.log('Device plug OFF');
};
Device.prototype.getState = function() { // Метод для получения состояния устройство
  console.log(this.plug ? 'Device plug ON' : 'Device plug OFF');
};
Device.prototype.action = function() { // Метод какое действие совершает устройство
  console.log((this.plug ? this.msgOn : this.msgOff));
};

function Computer(name, watt) { // Прототип компьютера
  this.name = name,
  this.power = watt,
  this.msgOn = 'Computer loading OS...',
  this.msgOff = 'Computer shutdown.';
}
Computer.prototype = new Device(); 
Computer.prototype.getState = function() {
  if (this.plug) {
    console.log(this.name + 'is working. Load: ' + this.power + 'watt.')
  } else {
    console.log(this.name + 'is not working.')
  }
};

function DeskLamp(name, watt) { // Прототип лампы
  this.name = name,
  this.power = watt;
  this.msgOn = 'lava lamp glows and bubbles moving top.';
  this.msgOff = 'lava lamp not glows and bubbles moving down.';
}
DeskLamp.prototype = new Device();
DeskLamp.prototype.getState = function() {
  if (this.plug) {
    console.log('Awesome light. Load: ' + this.power + 'watt.');
  } else {
    console.log('Sad darkness, you need to turn it on.');
  }
};

function Devices() { // Прототип массива устройств
  this.arrDevices = [];
}
Devices.prototype.addDev = function(obj) { // Метод для добавления устройства
  this.arrDevices.push(obj);
  console.log('Add device: ' + obj.name);
};
Devices.prototype.sumPower = function() { // Метод суммарная мощьность устройств
   if (this.arrDevices.length === 0) {
    console.log('Not devices');
    return null;
   }
  load = 0;
  this.arrDevices.forEach(function(item)
    {load += item.plug ? item.power: 0;}
  );
  console.log('Devices load: '+ load + ' watt');
  return load;
};

var devices = new Devices();
var mac = new Computer('MacBook Pro 14', 285);
var lavaLamp = new DeskLamp('Lava lamp', 25);

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
