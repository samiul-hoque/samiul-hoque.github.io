
#include <SparkFun_ADXL345.h> 

ADXL345 adxl = ADXL345(); 

void setup() {
  Serial.begin(9600); 
  adxl.powerOn();
  adxl.setRangeSetting(2);
}

void loop() {
  // put your main code here, to run repeatedly:

int x,y,z;   
  adxl.readAccel(&x, &y, &z);
  Serial.print(x);
  Serial.print(", ");
  Serial.print(y);
  Serial.print(", ");
  Serial.println(z); 

  delay(100);
}
