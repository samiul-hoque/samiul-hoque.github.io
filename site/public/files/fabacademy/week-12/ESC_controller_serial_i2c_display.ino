#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Servo.h>


#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 31 // OLED display height, in pixels


#define OLED_RESET     4 // Reset pin # (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
Servo esc_signal;

void setup() {
 Serial.begin(9600);
 display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
 esc_signal.attach(6,1000,2000); 
 esc_signal.write(0);
 //display.display();
 display.clearDisplay();
 delay(3000);

}

void loop() {
  // put your main code here, to run repeatedly:
 while(Serial.available())
 {
  String c= Serial.readStringUntil('\n');
  Serial.println(c);

  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(2,2);
  display.print(F("ESC.Write("));
  display.print(c);
  display.println(F(")"));
  
  int val=map(c.toInt(),12,140,1,127);
  display.drawRect(1,12,127,12,WHITE);
  display.fillRect(1,12,val,12,WHITE);
  esc_signal.write(c.toInt());  
  
  display.display();
  delay(10);
  display.clearDisplay();
  }


}
