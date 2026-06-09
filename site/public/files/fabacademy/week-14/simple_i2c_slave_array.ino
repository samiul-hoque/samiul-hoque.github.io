#include <Wire.h>

int count = 0;
int data[3];


void setup() {
  Serial.begin(9600);
  Wire.begin(8);
  Wire.onReceive(recieveEvent);
}

void loop() {
  for (int i = 0; i < 3; i++)
  {
    Serial.print(data[i]);
    if(i !=2)
    {
    Serial.print(",");
    }
  }
  Serial.println();
  delay(200);
}


void recieveEvent(int howMany)
{
  while (Wire.available())
  {
    if (count < 4)
    {
      data[count] = Wire.read();
      count++;
    }
    else {
      count = 0;
      data[count] = Wire.read();
    }
  }
}
