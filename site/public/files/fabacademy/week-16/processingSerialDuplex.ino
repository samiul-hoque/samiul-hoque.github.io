const byte led = 13;
int inByte = -1;
int outByte =-1;

void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  pinMode(A0, INPUT);
}

void loop() {
  if (Serial.available())
  {
    inByte = Serial.read() - '0';  //converting ascii value to integer



    if (inByte == 1)
    {
      digitalWrite(led, HIGH);
    } else {
      digitalWrite(led, LOW);
    }
  }

  outByte= analogRead(A0);
  Serial.write(outByte);
  delay(25);

}
