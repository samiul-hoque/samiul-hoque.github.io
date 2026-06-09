#include <Servo.h>
#include <SPI.h>
#include "RF24.h"
#include <Wire.h>

#define xServoPin 3
#define yServoPin 4

#define ledOuter 9
#define ledInner 10

int data[] = {-1, -2, -3};
RF24 radio(7, 8); //CE,CSN
byte addresses[][6] = {"1Node", "2Node"};

const byte xOrigin = 90;
const byte yOrigin = 90;

byte xPos = xOrigin;
byte yPos = yOrigin;

const int minY = 30;
const int maxY = 30;

const int minX = 120;
const int maxX = 120;

Servo xServo;
Servo yServo;

void setup()
{
  Serial.begin(115200);
  Serial.println("Recieving x,y,z data");
  radio.begin();
  Wire.begin();

  radio.setPALevel(RF24_PA_MAX);
  radio.setDataRate(RF24_2MBPS);
  radio.setChannel(124);

  radio.openWritingPipe(addresses[0]);
  radio.openReadingPipe(1, addresses[1]);

  radio.startListening();

  xServo.attach(xServoPin, 550, 2200);
  yServo.attach(yServoPin, 550, 2200);

  pinMode(ledOuter, OUTPUT);
  pinMode(ledInner, OUTPUT);

  ledOn();
  //ledOff();
}

void loop()
{

  int data[3];
  Wire.beginTransmission(8); //slave number 8

  if (radio.available())
  {
    while (radio.available())
    {
      radio.read(&data, sizeof(int[3]));
      for (int i = 0; i < 3; i++)
      {
        Wire.write(data[i]);
        Serial.print(data[i]);
        Serial.print(',');
        if (i == 1)
        {
          xPos = map(data[i], -90, 90, 70, 110); ///   last two numbers are the limit
        }
        else if (i == 2)
        {
          yPos = map(data[i], -90, 90, 70, 110);
        }
      }
      Serial.println();
      Wire.endTransmission();
    }
  }
  else
  {
  }
  servoUpdate(xPos, yPos);
  delay(15);
}

void stabilize()
{
  xPos = xOrigin;
  yPos = yOrigin;
}

void servoUpdate(int x, int y)
{
  xServo.write(x);
  yServo.write(y);
}

void ledOn()
{
  digitalWrite(ledInner, HIGH);
  digitalWrite(ledOuter, HIGH);
}

void ledOff()
{
  digitalWrite(ledInner, LOW);
  digitalWrite(ledOuter, LOW);
}
