#define x A6
#define y A7

int dataX,dataY;

void setup() {
  Serial.begin(9600);
  pinMode(x, INPUT);
  pinMode(y, INPUT);
}

void loop() {
  updateValues();

  Serial.print(dataX);;
  Serial.print("   |    ");
  Serial.println(dataY);


  delay(200);
}

void updateValues()
{
  dataX=analogRead(x);
  delay(50);
  dataY=analogRead(y);
}
