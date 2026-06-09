#include <SPI.h>
#include "RF24.h"

RF24 radio(7,8);
byte addresses[][6] = {"1Node","2Node"};



void setup() {
 Serial.begin(115200);
 Serial.println("sending x,y,z data");

 radio.begin();

 radio.setPALevel(RF24_PA_MAX);
 radio.setDataRate(RF24_2MBPS);

 radio.setChannel(124);

 radio.openWritingPipe(addresses[1]);
 radio.openReadingPipe(1, addresses[0]);
 

}

void loop() {
   int data[]={1,1,1};

  radio.stopListening();
  if(!radio.write( &data , sizeof(int[3])))
  {
    Serial.println("No ack recieved");
   }
   radio.startListening();

   unsigned long started_waiting_at = millis();

   while( !radio.available() ) 
   {
    if (millis() - started_waiting_at > 200)
    {
      Serial.println("No response recieved - timeout");
      return;
      }
    }

    unsigned char dataRX;
    radio.read( &dataRX, sizeof(unsigned char));
    Serial.print("Sent data: ");
    Serial.print(data[0]);
    Serial.print(",");
    Serial.print(data[1]);
    Serial.print(",");
    Serial.print(data[2]);
    Serial.print("    |  Recieved: ");
    Serial.println(dataRX);


    delay(500);
}
