#include <Servo.h>
Servo esc_signal;
 
void setup()
{
  Serial.begin(9600);
  esc_signal.attach(6,1000,2000);  
  esc_signal.write(0);     //arming the ESC
  delay(3000);             //arming delay
}
 
void loop()
{
  while(Serial.available())
  {
    String c= Serial.readStringUntil('\n');
    esc_signal.write(c.toInt());    
    Serial.print("Speed: ");
    Serial.println(c);     //Found speed range to be between 12 ~ 140
    delay(15);
    }
}
