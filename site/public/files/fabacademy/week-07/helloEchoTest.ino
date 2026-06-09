const int led1 = 3;
const int led2 = 4;
const int button = 2;

void setup() {
  pinMode(button,INPUT);
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
}

void loop() {
btn=digitalRead(button);
if( btn == HIGH)
{
  blinker(led1, 100);
 }
 else{
  blinker(led2, 500);
 }
}



void blinker(int led)
{
digitalWrite(led, HIGH);
delay(duration);
digitalWrite(led,LOW);
delay(duration);   
 }
