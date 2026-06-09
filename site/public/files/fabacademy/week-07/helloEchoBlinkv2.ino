const int led1 = 3;
const int led2 = 4;
const int button = 2;

void setup() {
  pinMode(button,INPUT);
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
}

void loop() {
 blinker(led1, 100);
 blinker(led2,500);

}


void blinker (int pin, int duration){
 digitalWrite(pin,HIGH);
  delay(duration);
  digitalWrite(pin,LOW);
  delay(duration);
}
