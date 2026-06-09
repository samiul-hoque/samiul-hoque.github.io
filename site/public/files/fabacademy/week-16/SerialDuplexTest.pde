

import processing.serial.*;

Serial myPort;      // The serial port
int whichKey = -1;  // Variable to hold keystoke values
int inByte = -1;    // Incoming serial data

void setup() {
  size(400, 300);
  PFont myFont = createFont(PFont.list()[0], 24);
  textFont(myFont);

  
  printArray(Serial.list());        // List all the available serial ports:

  String portName = Serial.list()[0];
  myPort = new Serial(this, portName, 9600);
}

void draw() {
  background(0);
  text("Last Received: " + inByte, 10, 130);
  text("Last Sent: " + whichKey, 10, 100);
}

void serialEvent(Serial myPort) {
  inByte = myPort.read();
}

void keyPressed() {
  myPort.write(key);   // Send the keystroke to my serial port
  whichKey = key;
}
