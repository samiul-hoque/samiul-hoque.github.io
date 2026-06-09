#include <Wire.h>

int data[]={1,2,3};

void setup() {
Wire.begin();
}

void loop() {
  
Wire.beginTransmission(8); //slace number 8

for(int i=0; i<3; i++)
{
Wire.write(data[i]);
}
Wire.endTransmission();

delay(200);
}
