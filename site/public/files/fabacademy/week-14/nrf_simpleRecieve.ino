#include <SPI.h>
#include "RF24.h"

RF24 radio(7,8);   //CE,CSN
byte addresses[][6] = {"1Node","2Node"};



void setup() {
 Serial.begin(115200);
 Serial.println("Recieving x,y,z data");
 radio.begin();

 radio.setPALevel(RF24_PA_MAX);
 radio.setDataRate(RF24_2MBPS);
 radio.setChannel(124);

 radio.openWritingPipe(addresses[0]);
 radio.openReadingPipe(1, addresses[1]);
 
radio.startListening();
}

void loop() {
  int data[3];
  char response = 'y';
  
  if(radio.available()) {
  while(radio.available()) {
    radio.read( &data, sizeof(int[3]));
    Serial.print("Recieved: ");
    Serial.print(data[0]);
    Serial.print(",");
    Serial.print(data[1]);
    Serial.print(",");
    Serial.println(data[2]);
    }
    radio.stopListening();
    radio.write(&response, sizeof(char));

    radio.startListening();

    Serial.print("Sent response: ");
    Serial.println(response);
    }

}
