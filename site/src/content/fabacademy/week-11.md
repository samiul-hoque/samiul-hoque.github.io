---
title: "Input Devices"
week: 11
assignment: "Measure something; add a sensor to a microcontroller board and read data."
heroImage: "/images/fabacademy/week-11/adxl345.jpg"
gallery: []
---
## Assignment

#### Individual assignment:

Measure something: add a sensor to a microcontroller board that you have designed and read it.  
  
[Group assignment](http://fab.academany.org/2019/labs/cept/inputdevices.html)

Probe an input device's analog levels and digital signals

## What I made this Week

<figure>
  <img src="/images/fabacademy/week-11/adxl345.jpg" alt="What I made this Week" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-11/joystick.jpg" alt="What I made this Week" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-11/encoder.jpg" alt="What I made this Week" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-11/opticalencoder.jpg" alt="What I made this Week" loading="lazy" />
</figure>

## Researching about The Sensors I decided to work with

For my Final project I will need positional feedback from a rotating arm. For which I plan to use a quadrature Encoder. For our [Machine Design](http://) project, we used the ADXL345 accelerometer and a joystick module. The Detailed Interfacing documentation for these two sensors I decided to add on this week.

The four sensors I will be covering here are;

-   ADXL345 Accelerometer
-   Joystick Module
-   Rotary Encoder KY-040
-   Quadrature Optical Encoder

## ADXL345 Accelerometer

### Principle of Operation

Before we get to specific description of our device, let's take generalized look at how [MEMs Accelerometers](http://www.pcb.com/Resources/Technical-Information/mems-accelerometers) work. The following video from [Bosch](https://en.wikipedia.org/wiki/Robert_Bosch_GmbH) explains it perfectly.

* * *

* * *

Basically these tiny chips have a vibrating comblike mechanism inside it which changes capacitance depending on it's position. There is a Motion Processing Unit along this microstructure which adds the intelligence to the device. Other than the variable capacitive accelerometers, there are also Piezoresistive Accelerometers. The Basic idea about them can be gathered from this very informative link on Acceletometers by PCB.com.

### Specification:

The [ADXL345](https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf) is a small, thin, ultralow power, 3-axis accelerometer with high resolution (13-bit) measurement at up to ±16 g. Digital output data is formatted as 16-bit twos complement and is accessible through either a SPI (3- or 4-wire) or I2C digital interface.

-   Power consumption scales automatically with bandwidth
-   User-selectable resolution
-   Patent pending, embedded memory management system with FIFO technology minimises host processor load
-   Single tap/double tap detection
-   Activity/inactivity monitoring
-   Free-fall detection
-   SPI (3- and 4-wire) and I2C digital interfaces
-   Flexible interrupt modes map able to either interrupt pin
-   Measurement ranges selectable via serial command

<figure>
  <img src="/images/fabacademy/week-11/adxl345.jpg" alt="ADXL345 (LGA-14 package)" loading="lazy" />
  <figcaption>ADXL345 (LGA-14 package)</figcaption>
</figure>

> Although this device was supposed to be a part of the fab inventory, out lab didn't have it. But I was so impressed with it's features (such as the freefall & tap detection), I decided to source one myself from [here.](https://robu.in/product/adxl345-lga-14-3-axis-accelerometer/)

This video by [Analog Devices](https://www.analog.com/en/index.html) explains the smart features of the ADXL345.

* * *

* * *

## Joystick Module

### Working Principle

There's nothing really new about joystick modules. Since the very early days of the atari joysticks, to modern day joystick modules, they all have the same working principal. Each axis is represented by a variable resistance (just a potentiometer). This video by the EEVblog explains the inner workings of a joystick and how the interfacing used to work before ADCs got so cheap.

* * *

* * *

### Specification

-   Dimensions: 40 x 27 x 15 (LxWxH) mm.
-   Weight: 10gm (without Hat).
-   2.54mm pin interface leads.
-   Operating Voltage: 5V.
-   Long service life and stable performance.
-   Standard interface and electronic building blocks.
-   Widely use in Arduino DIY projects.

<figure>
  <img src="/images/fabacademy/week-11/joystick.jpg" alt="Generic PS2 Joystick Module" loading="lazy" />
  <figcaption>Generic PS2 Joystick Module</figcaption>
</figure>

## KY-040 Rotary Encoder Module

### Principle of Operation:

To Understand the principle of operation of a rotary encoder, this video from sparkfun was very helpful.

The Encoder I am using is a mechanical rotary encoder. This illustration from the datasheet explains how the 2-bit gray code is generated. As you can see, the angular position of the A terminal and the B terminal is such that:

-   Rotating the switch clockwise will cause the switch connecting A and C to change states first.
-   Rotating the switch counterclockwise will cause the switch connecting B and C to change states first.

<figure>
  <img src="/images/fabacademy/week-11/encoder2.jpg" alt="Principle of Operation" loading="lazy" />
</figure>

If we were to represent the opening and closing of the switches as wave forms, it would look something like this;

<figure>
  <img src="/images/fabacademy/week-11/encoder3.jpg" alt="Principle of Operation" loading="lazy" />
</figure>

Essentially, determining which switch changed states first is how the direction of rotation is determined. If A changed states first, the switch is rotating in a clockwise direction. If B changed states first, the switch is rotating in a counter clockwise direction.

### Specification

The rotary Encoder I sourced from a local shop here was KY-040. The datasheet for it can be found [here](https://www.handsontec.com/dataspecs/module/Rotary%20Encoder.pdf). The specifications are:

-   Operating voltage: 5V.
-   Pulses/360° Rotation: 20.
-   Output: 2-bit gray code
-   Mechanical Angle: 360° continuous.
-   With built in push button switch (push to operate)
-   Dimensions: (30 x 18 x 30) mm.
-   Compatible with Arduino/Raspberry Pi controller board.

<figure>
  <img src="/images/fabacademy/week-11/encoder.jpg" alt="Specification" loading="lazy" />
</figure>

## Quadrature Optical Encoders

### Principle of Operation

The Principle of operation for the optical encoders are the same for our rotary encoder earlier. Instead of mechanical contacts, this encoder uses IR photo transistors instead which gives much more precise data also much faster. Since it does not have any mechanical contact, it works really good at high RPMs.

### Specification:

-   Number of lines: 100 lines.
-   Outer diameter: 22mm.
-   Hole diameter: 3.5mm.
-   Thickness: 0.3mm.
-   Material: alloy steel.
-   Production process: laser cutting.
-   Supply voltage: 5V (3.3V is also available).
-   Wiring: Red 5V / Black GND.
-   Output signal: 5Vp-p two-phase signal output.
-   Two signal lines, one yellow, one blue.
-   Yellow and blue are two TTL level signals (can be directly connected microcontroller)
(Note: Measuring Reversible rely on these two levels to distinguish between forward or reverse).

<figure>
  <img src="/images/fabacademy/week-11/opticalencoder.jpg" alt="Specification" loading="lazy" />
</figure>

#### Links

-   [Introduction to MEMS Accelerometers- by PCB.com](http://www.pcb.com/Resources/Technical-Information/mems-accelerometers)
-   [ADXL345 Datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf)
-   [ADXL345 LGA14 product page](https://robu.in/product/adxl345-lga-14-3-axis-accelerometer/)
-   [EEVblog](https://www.youtube.com/channel/UC2DjFE7Xf11URZqWBigcVOQ)
-   [Generic Chinese Optical Encoders-product page](https://rees52.com/arduino-sensors/1071-photoelectric-speed-sensor-encoder-coded-disc-code-wheel-for-freescale-smart-car-rs091)

## Making a 328p board for the Accelerometer & Joystick Module

The ADXL345 is a 3.3v chip and we don't have any level shifter ICs at the lab, so I decided to work with 3.3v for this board. While designing the board, I had these following constraints in mind,

-   i2c interface with ADXL345 and all necessary filtering capacitors should be there.
-   Breakout for an analog joystick module should be present.
-   Interface for communication module (nrF240l1+ and Bluetooth HC-05) should be present
-   The board should be running on 3.3v on external battery power, which means it would need a decent enough power regulation circtuit.
-   I wanted to keep plug and play style connectors for everything, which would add alot of zero ohm resistors to the board, but none of the connectors needed extra jumper wires.

> More on this board can be found on the [Networking & communication Week](http://) and [Machine Design Week.](http://) I decided to add this documentation here because it is more relevant with Inputs.

With some research I found out the Atmega328p can run only on 8MHz on 3.3v. So I used an 8MHz resonator instead of the usual 16MHz or 20MHz I usually use.

I kept a seperate [AMS1117](http://www.advanced-monolithic.com/pdf/ds1117.pdf) to power the nRF240L01 module as I read that they get a bit fussy if proper power is not supplied.  
  
I used Sparkfun's [ADXL345 breakout board](http://cdn.sparkfun.com/datasheets/Sensors/Accelerometers/ADXL345_Breakout.pdf) as a reference for interfacing the ADXL345 chip. I tied pin 7 with VCC which enabled i2c mode and added noise filtering capacitors of 0.1uF and 10uF near the chip.  
  
The board can be run on battery power as the voltage level needs to be just above 3.3 to work.

<figure>
  <img src="/images/fabacademy/week-11/schematic_controllerboard.jpg" alt="Schematic" loading="lazy" />
  <figcaption>Schematic</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/layout_controller.jpg" alt="Board Layout" loading="lazy" />
  <figcaption>Board Layout</figcaption>
</figure>

### Milling & Soldering:

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling0.jpg" alt="Calculating the 1/64 traces toolpath on mods" loading="lazy" />
  <figcaption>Calculating the 1/64 traces toolpath on mods</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling00.jpg" alt="After 1/32 outline toolpath on mods" loading="lazy" />
  <figcaption>After 1/32 outline toolpath on mods</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling.jpg" alt="After 1/64 traces were milled" loading="lazy" />
  <figcaption>After 1/64 traces were milled</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling1.jpg" alt="Board Cutout, did some minor sanding with 1000 grit sandpaper" loading="lazy" />
  <figcaption>Board Cutout, did some minor sanding with 1000 grit sandpaper</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling2.jpg" alt="Soldered all 0 ohm resistors first" loading="lazy" />
  <figcaption>Soldered all 0 ohm resistors first</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling3.jpg" alt="Soldered 328p and resonator" loading="lazy" />
  <figcaption>Soldered 328p and resonator</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling4.jpg" alt="Was the Hardest to solder, LGA-14 and I only had one piece of this" loading="lazy" />
  <figcaption>Was the Hardest to solder, LGA-14 and I only had one piece of this</figcaption>
</figure>

### Finished Boards:

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling5.jpg" alt="Finished Board" loading="lazy" />
  <figcaption>Finished Board</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-11/controllerMilling56.jpg" alt="Ran out of power jacks so swapped it out with a 0.65mm jack. All versions present in the Eagle project." loading="lazy" />
  <figcaption>Ran out of power jacks so swapped it out with a 0.65mm jack. All versions present in the Eagle project.</figcaption>
</figure>

[Download Eagle Project Files](/files/fabacademy/week-11/marbleMaze.zip)

## Interfacing the ADXL345 Accelerometer with a 328p board

#### \->Checking if Accelerometer is Detected:

Since this was the first time I soldered a component without any legs, I wanted to check if my accelerometer was being detected as an i2c device, so I used the i2c Scanner code from [Arduino Playground](https://playground.arduino.cc/Main/I2cScanner/) and it seemed to be getting detected at addres 0x53.

[Download i2c Scanner.ino](/files/fabacademy/week-11/i2c-scanner.ino)

<figure>
  <img src="/images/fabacademy/week-11/i2cScanner.jpg" alt="->Checking if Accelerometer is Detected" loading="lazy" />
</figure>

  

* * *

  

#### Reading Accelerometer Data:

To read the accelerometer data, I used the [Sparkfun ADXL345 Library](https://github.com/sparkfun/SparkFun_ADXL345_Arduino_Library). It had many smart features like tap, double tap, activity, inactivity and freefall detection. But for now, I'll just be using the following methods to get the x,y,z data.  
  

#### Important LibraryFunctions Used

-   ADXL345 adxl = ADXL345(); \[Used to initiate communication in i2c mode\]
-   adxl.powerOn();
-   adxl.setRangeSetting(2);\[set's the reading range. Lower is more sensitive, higher is more accurate; options are 2,4,8,16\]
-   adxl.readAccel(&int1 , &int2, & int3); \[Reads and stores accelerometer data into three integers\]

  

[Download simpleXYZread\_adxl345.ino](/files/fabacademy/week-11/simpleXYZread_adxl345.ino)

* * *

* * *

## Interfacing Analog Joystick Module with a 328p board

The Joystick Module was much easier to interface. In my schematic, x and y were connected to ADC6 and ADC7 respectively. The corresponding Arduino pins for the are A6 and A7. The connection Diagram so far was;

-   Joystick ------ Controller Board
-   X--------------A6
-   Y--------------A7
-   VCC(3.3v)------VCC
-   GND------------GND
-   SW-------------N/C
( I left the pushbutton not connected as I had no use for it)

Then I wrote a simple code to read analog data from pin A6 and A7 and print it on Serial.

[Download joystickModule.ino](/files/fabacademy/week-11/joystickModule.ino)

## Designing & Making the PxFDuino v1.0

The PxFDuino is the board I made with my Final Project in Mind. All the relevant documentation on it can be found [here](projects/electronics.html) in my [Final Project Documentation.](/projects/fab-academy-final-project/) I'll be using this board to interface the Encoders with.

## Interfacing Mechanical Rotary Encoder KY-040 with PxFDuino

### Using digitalRead:

First I tried taking count of the encoder data just by taking digital read. I incremented the counter when channel 1 was leading and decremented when chanel 2 was leading. The logic of the code was as simple as that. Reference to where I got the idea from can be found [here.](https://playground.arduino.cc/Main/RotaryEncoders/)

[Download rotaryEncoderSimple.ino](/files/fabacademy/week-11/rotaryEncoder_simple.ino)

### Using Hardware Interrupts

Rotary Encoders are perfect use cases for external Interrupt pins. They wont clog up your main loop and only execute when the interrupt service routine is executed.(In this case, a rising or falling edge on the encoder pins) This is a main reason why I couldn't use a ATTINY44 based board as the Arduino Serial library for that is based on the ISR. So if you want to use Serial communication, you wont be able to use pin change interrupts. A solution though is to use the USI serial or the hardware serial on the ATTINY44. But I didn't want to make another ATTINY44 board and just switched to using a 328p which I am comfortable with. Now for the ISR based rotary encoder code, I found a very optimized code in [this Instructable.](https://www.instructables.com/id/Improved-Arduino-Rotary-Encoder-Reading/) and will be reusing it.

[Download rotaryEncoderSimple.ino](/files/fabacademy/week-11/rotaryEncoder_optimized.ino)

### Video:

* * *

* * *

## Interfacing Generic Chinese Optical Encoders with the PxFDuino

First attempt to interface this sensor literally went up in smoke, the photodiode had burnt out. I could not figure out what happened and made a post on [Stack Exchange](https://electronics.stackexchange.com/questions/438304/anyone-got-these-optical-encoders-working/438313?noredirect=1#comment1095715_438313) where I got some positive enough responses to order a few more of these.

<figure>
  <img src="/images/fabacademy/week-11/opticalencoderburnt.jpg" alt="Interfacing Generic Chinese Optical Encoders with the PxFDuino" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-11/opticalencodernewordered.jpg" alt="Interfacing Generic Chinese Optical Encoders with the PxFDuino" loading="lazy" />
</figure>

The new encoders that I recieved did not burn out as soon as I connected them, but they were not working either. I was only getting gibberish data. I read about encoder wheel alignment from [this](http://www.amscontrols.com/knowledgebase/troubleshooting-encoder-alignment) article by [amscontrols](https://www.amscontrols.com/) and ended up 3d printing a mount for my enocder to match with the wheel. All the files regarding this can be found [here](projects/mechanical.html) on my final project page.

<figure>
  <img src="/images/fabacademy/week-11/optical mount.jpg" alt="Interfacing Generic Chinese Optical Encoders with the PxFDuino" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-11/optical mount 2.jpg" alt="Interfacing Generic Chinese Optical Encoders with the PxFDuino" loading="lazy" />
</figure>

After a whole two or three weeks of trying to interface these encoders and failing I posted an [issue](https://gitlab.fabcloud.org/academany/fabacademy/2019/class/issues/42) on the class issue tracker to find an alternative. The reason for it not working, I tracked down to three probable causes;

-   The Encoder wheel position needs to be perfectly aligned
-   The generic chinese photodiode was not giving any reading on channel 2, even on the oscilloscope. Perhaps they can only count in one direction?
-   These sensors are not TTL compatible, they will need additional voltage divider circuitry and filtering capacitors to work

> Lesson learnt, NO DATASHEET = NO BUY! Don't trust your electronics skills to get any random generic sensor working on a tight schedule.

The good thing that came out of the issue tracker, was that Neil suggested me to make my own optical encoders. I spent a few days trying to source the parts, which were not available at my lab and ended up making a magnetic encoder instead. The documentation for which can be found [here.](projects/electronics.html)

## Probing Sensor Data with Oscilloscope \[Groupwork\]

For our groupwork this week, we decided to probe the Quadrature Encoders.

## Probing Quadrature Encoders

Quadrature encoders are perfect sensors to probe with an oscilloscope.

-   They require 2 channels, which will give us a nice demo to watch.
-   They are timer dependent, channel 1 leading will mean it's going in one direction while channel 2 leading will mean it's going on the other direction.

### Connection:

-   Board ----------------Oscilloscope
-   GND ----------------- GND probe for both channel 1 and channel 2
-   CLK ----------------- Channel 1 positive probe
-   DT ----------------- Channel 2 positive probe

Then we pressed 'autoset' on the scope to give us the following video

* * *

* * *

## Downloads:

### Datasheets:

1.  [ADXL345](https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf)

### Eagle Project Folders:

1.  [Accelerometer & Joystick Boards](/files/fabacademy/week-11/marbleMaze.zip)
2.  [PixelFace Mainboard v1 (for encoders)](</files/fabacademy/week-11/pixelFace mainboard.zip>)

### Code:

1.  [i2c Scanner.ino](/files/fabacademy/week-11/i2c-scanner.ino)
2.  [Simple Accelerometer Read.ino](/files/fabacademy/week-11/simpleXYZread_adxl345.ino)
3.  [Download joystickModule.ino](/files/fabacademy/week-11/joystickModule.ino)
4.  [i2c Scanner](/files/fabacademy/week-11/i2c-scanner.ino)
5.  [Download rotaryEncoderSimple.ino](/files/fabacademy/week-11/rotaryEncoder_simple.ino)
6.  [Download rotaryEncoderSimple.ino](/files/fabacademy/week-11/rotaryEncoder_optimized.ino)

## Learning Outcomes

-   I learnt how to probe sensor data and debug them
-   I learnt a hard lesson not to trust generic sensors with not datasheets, always go for the better known brands or stuff which have adequate documentation on them.
-   I learnt about interrupt handlers and how to utilize them to take readings outside the main loop in programming.

  

* * *
