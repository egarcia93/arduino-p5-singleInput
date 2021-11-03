let serial;          // variable to hold an instance of the serialport library
let portName = 'COM3';  // fill in your serial port name here
let inData;  
function setup() {
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port

  createCanvas(500,500);
}

function printList(portList) {
    // portList is an array of serial port names
    for (var i = 0; i < portList.length; i++) {
      // Display the list the console:
      console.log(i + portList[i]);
    }
  }

  function serverConnected() {
    console.log('connected to server.');
  }
   
  function portOpen() {
    console.log('the serial port opened.')
  }
   
  function serialEvent() {
    inData = Number(serial.read());
    
  }
   
  function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
  }
   
  function portClose() {
    console.log('The serial port closed.');
  }

  function draw() {
    background(0);
    fill(255);
    text("sensor value: " + inData, 100, 50);
 }
 