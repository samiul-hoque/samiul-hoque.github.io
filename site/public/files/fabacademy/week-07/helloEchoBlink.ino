const int led1 = 3;
const int led2 = 4;
const int button = 2;

void setup() {
  pinMode(button,INPUT);
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);
}

void loop() {
  digitalWrite(led1,HIGH);
  delay(500);
  digitalWrite(led1,LOW);
  delay(500);

}
