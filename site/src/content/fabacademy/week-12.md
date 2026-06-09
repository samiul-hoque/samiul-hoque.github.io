---
title: "Output Devices"
week: 12
assignment: "Add an output device to a microcontroller board; write code to operate it."
heroImage: "/images/fabacademy/week-12/board.jpg"
gallery: []
---
## Assignment

### Individual Assignment:

Add an output device to a microcontroller board you've designed, and program it to do something

### Group Assignment:

Measure the power consumption of an output device, which can be found following the link below. [Output Week Group Assignment](http://fab.academany.org/2019/labs/cept/outputdevices.html)

## What I made this Week

<figure>
  <img src="/images/fabacademy/week-12/board.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-12/flex.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-12/tile.jpg" alt="" loading="lazy" />
</figure>

## Why I needed a new board this week

Last week I was having issues with using the Software Serial library on the ATTINY44 while using PCINT\_vect. It was because Software serial internally uses the pin change interrupts. I had to use Neil's bit banging uart code to achieve Serial Communication.  
  
It's definitely more efficient to use C code, but I am not very adept at it. So I was looking for an alternative to go back using arduino code. I already had a 328p based board I was tinkering around with before coming to Fab Academy, and the code seemed to be working fine on that. So I decided to make another board with a better performing microcontroller.  
  
While I was at it, I wanted to start working on a controller board for my final project which had enough IO pins to work with all the components I required.

<figure>
  <img src="/images/fabacademy/week-12/oldBoard.jpg" alt="Hand Soldered 328p Board I made before Fab Academy" loading="lazy" />
  <figcaption>Hand Soldered 328p Board I made before Fab Academy</figcaption>
</figure>

## Designing my new 328p based board for my Final Project: PxFDuino v1.0

For the microcontroller I chose to use a Atmega 328p. It is the same microcontroller used on the Arduino Uno, so all the code working on an arduino should be compatible to run on it. I did look into the XMega16u2 and XMega16u4, but they seemed harder to program and required more peripheral components to function.

#### The AtMega328p:

High performance micro chip developed by Atmel .It is a 8bit AVR RISC-based microcontroller combines 32KB ISP flash memory with read-while-write capabilities, 1024B EEPROM, 2KB SRAM, 23 general purpose I/O lines, 32 general purpose working registers, three flexible timer/counters with compare modes, internal and external interrupts, serial programmable USART, a byte-oriented 2-wire serial interface, SPI serial port, a 6-channel 10-bit A/D converter (8-channels in TQFP and QFN/MLF packages), programmable watchdog timer with internal oscillator, and five software selectable power saving modes. The device operates between 1.8-5.5 volts.

#### Specifications:

-   28-pin AVR Microcontroller
-   Flash Program Memory: 32 kbytes
-   EEPROM Data Memory: 1 kbytes
-   SRAM Data Memory: 2 kbytes
-   I/O Pins: 23
-   Timers: Two 8-bit / One 16-bit
-   A/D Converter: 10-bit Six Channel
-   PWM: Six Channels
-   RTC: Yes with Separate Oscillator
-   MSSP: SPI and I²C Master and Slave Support
-   USART: Yes
-   External Oscillator: up to 20MHz

<figure>
  <img src="/images/fabacademy/week-12/328ppinout.jpg" alt="Pinout for the Atmega328p (MiniCore)- Illustration by MCUdude" loading="lazy" />
  <figcaption>Pinout for the Atmega328p (MiniCore)- Illustration by MCUdude</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/328pblockdiagram.jpg" alt="" loading="lazy" />
</figure>

More info on the 328p architecture can be found [here.](https://www.theengineeringprojects.com/2017/08/introduction-to-atmega328.html) And the datasheet can be downloaded from [here.](https://www.sparkfun.com/datasheets/Components/SMD/ATMega328.pdf)

I'll be using the TQFP package, which is available at our lab.

#### Links

-   [MiniCore by MCUdude](https://github.com/MCUdude/MiniCore)
-   [Introduction to atmega328 by The Engineering Projects\`](https://www.theengineeringprojects.com/2017/08/introduction-to-atmega328.html)

## Making a Circuit Block Diagram

Before Starting with the schematic, I made a block diagram for the circuitry for my final project. I wanted my components to be able to easily connectable.

<figure>
  <img src="/images/fabacademy/week-12/blockdiagram.jpg" alt="Block Diagram for my Final Project" loading="lazy" />
  <figcaption>Block Diagram for my Final Project</figcaption>
</figure>

Now I knew how many pins I required for input, output and communications. And what form factor they required to be in.

## Making a Schematic

Following the block diagram I started to create the schematic for my 328p based board.

#### Connectors I needed for my Final Project:

-   Addressable LEDs------> 3 Pin Connector (GND,VCC,Data)
-   ESC--------------------------> 3 Pin Connector (GND,VCC,Data)
-   Encoders------------------>4 Pin Connecor (GND, VCC, D1, D2) \[Requires Hardware interrupt pins\]
-   FTDI Connector---------> 6 Pin Connector (GND,GND,VCC,TX,RX,DTR)
-   AVR ISP Connector-----> 3x2 Pin Connector
-   I2c----------------------------> 4 Pin Connector (GND,VCC,SDA,SCL)

#### Minimal Required Peripherals:

I will be using [Minicore](https://github.com/MCUdude/MiniCore) by [MCUdude](https://github.com/MCUdude) and he gave a minimal circuit for using his bootloader most of which I was already using, but I was missing the capacitor between the DTR and the reset for UART.

-   An LED and a 330ohm resistor between SCK and GND for debugging purposes.
-   A 100nF capacitor between VCC(4) and GND(5) for power filtering that needs to be placed as close as possible.
-   a 10k pullup resistor between Reset and VCC.
-   a 100nF capacitor between reset and dtr for the UART.
-   I decided to add a reset switch between rest and GND.

<figure>
  <img src="/images/fabacademy/week-12/minimal328p.jpg" alt="Minimal Circuit for 328p- Illustration by MCUDude" loading="lazy" />
  <figcaption>Minimal Circuit for 328p- Illustration by MCUDude</figcaption>
</figure>

#### Additional Headers:

-   Additional headers for the remaining Analog pins(22-26)
-   Remaining digital pins(11-14)
-   Additional 5v headers
-   Additional GND headers

#### Power Management Components:

-   A 11117 5v Voltage regulator for the logic supply.
-   A 2A buck module to supply and regulate power for the LED strip.

#### My Schematic:

<figure>
  <img src="/images/fabacademy/week-12/schematic.jpg" alt="My Schematic in Eagle" loading="lazy" />
  <figcaption>My Schematic in Eagle</figcaption>
</figure>

## Arranging the Board file

With the Schematic done, I started arranging my board. I routed the whole thing by hand it took about four hours. I was able to connect all the Air wires except two; the 5v line and RST line for the SPI connector. The 5v line I was able to connect by using a 0 Ohm resistor but the reset line still was disconnected. So i made two vias and left the line disconnected. Later I would solder these two vias from the bottom side of the board.  
  
Another particular headache was to get the 328p footprint to work on fab modules. No matter which footprint I used, there wasn't 16mil spacing in between the pads, which was the diameter of our tool ( 1/64 bit). The solution I ended up working with was using the Atmega88 footprint given in the Fab library along with reducing the tool diameter from fab modules to 0.38 from 0.4 . This ensured all the pads were getting a toolpath through them.

<figure>
  <img src="/images/fabacademy/week-12/boardv1.jpg" alt="My 328p board in Eagle" loading="lazy" />
  <figcaption>My 328p board in Eagle</figcaption>
</figure>

#### Additional libraries & Footprints Used

-   [SMD\_con](/files/fabacademy/week-12/smd_con.lbr) library with alternating SMD header footprint
-   [Fab Library](/files/fabacademy/week-12/fab.lbr) for the Atmega88 footprint
-   [CN1584](/files/fabacademy/week-12/CN1584.lbr) Buck Module footprint I made.

[Download my 328p board Eagle Project](</files/fabacademy/week-12/pixelFace mainboard.zip>)

## Making a component library in Eagle

To use the Buck module on my PCB, I had to design my own footprint on eagle. Most of the resources I found on the internet for making a library on Eagle was for an earlier version of eagle. After some thorough searching, I came across the following tutorial to make a custom library on Autodesk Eagle 9.3.

#### Tutorial on making a custom component on eagle

* * *

* * *

Making a custom library in eagle has Three basic steps.

1.  Making a Footprint
2.  Making a Symbol
3.  Making a device by Addressing pins on the Footprint with the Symbol

  

#### Making the Footprint

First I started by making the footprint by measuring the component with calipers and created the outline rectangle(22mm x16mm) using the line tool.  
Then I added the pads for the 0.1" headers, the drill holes have to be larger than 32mil( Our bit is 1/32" which is approximately 31.25mil) I also added some texts and art to make the footprint easier to understand.

<figure>
  <img src="/images/fabacademy/week-12/footprint2.jpg" alt="Measurements" loading="lazy" />
  <figcaption>Measurements</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/footprint1.jpg" alt="Making a custom footprint" loading="lazy" />
  <figcaption>Making a custom footprint</figcaption>
</figure>

#### Making the Symbol

Making the Symbol is pretty much straightforward. This is what will show up on the schematic when we select our component. I created a small rectangle with the four inputs and outputs we have on this device and added names.

<figure>
  <img src="/images/fabacademy/week-12/symbol.jpg" alt="Creating a Symbol on Eagle" loading="lazy" />
  <figcaption>Creating a Symbol on Eagle</figcaption>
</figure>

#### Making the Device

To make the device, we have to select the footprint and symbol we created earlier and open the connect menu. The image here shows the connections I used for this device.

<figure>
  <img src="/images/fabacademy/week-12/device.jpg" alt="" loading="lazy" />
</figure>

And just like that, our library is created. Now we can include this on the library manager and use our component.

[Download CN1584.lbr](/files/fabacademy/week-12/CN1584.lbr)

## Milling the Board

To export the brd file as a png, I used the eagle script I wrote in [Electronics Production](http://) week. This time I had to modify the script a bit to export three files instead of 2, the traces, the drills and the outlines.

[Download Eagle Script](/files/fabacademy/week-12/Export_trace_drill_outline.scr)  
  

#### Milling the traces(1/64 bit)

I imported the image into Fab Modules, Inverted the color since it had a white background, and hit calculate. But as you can see, fabmodules was missing some toolpaths seperating each pad for the ATMega328p. Then after multiple iterations on fixing it by changing the footprint, I found a solution, which was;-   Using the ATmega88 footprint on the Fab Library
-   Changing the tool diameter from 0.4 to 0.38

<figure>
  <img src="/images/fabacademy/week-12/fabmodules.jpg" alt="Atmega328p footprint not milling properly" loading="lazy" />
  <figcaption>Atmega328p footprint not milling properly</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/fabmodules1.jpg" alt="Fab Module Settings to mill the 328p footprint" loading="lazy" />
  <figcaption>Fab Module Settings to mill the 328p footprint</figcaption>
</figure>

  

#### Milling the Drills(1/32 bit)

Make sure all of your drills are larger than 32mil. For safety I used 35mil for all my drill holes. The drill file also had a white background, which I fixed by using the paint bucket tool in MS paint. Just Fill the white background with solid black. Only the drill holes you want to cut off should be in white.

<figure>
  <img src="/images/fabacademy/week-12/pcb_drill1.png" alt="PCB_drill (before)" loading="lazy" />
  <figcaption>PCB_drill (before)</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/pcb_drill.png" alt="PCB_drill (after)" loading="lazy" />
  <figcaption>PCB_drill (after)</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/fabmodules2.jpg" alt="Drill Toolpath settings" loading="lazy" />
  <figcaption>Drill Toolpath settings</figcaption>
</figure>

#### Milling the Outline(1/32 bit)

Cutting out the outline is straightforward, no additional steps were necessary. Make sure the outline is drawn on the dimension layer for my script to work on it. As for the trace width, it will be 35 mil as we are using the 1/32" bit.

<figure>
  <img src="/images/fabacademy/week-12/fabmodules3.jpg" alt="" loading="lazy" />
</figure>

## Pictures during Milling:

One of the ATMega328p traces broke off on the first iteration

<figure>
  <img src="/images/fabacademy/week-12/milling.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-12/milling1.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-12/milling3.jpg" alt="" loading="lazy" />
</figure>

After the second and third attempt came out successful, the error did not repeat itself after the first iteration.

<figure>
  <img src="/images/fabacademy/week-12/milling4.jpg" alt="" loading="lazy" />
</figure>

## Soldering the Board

First I soldered the minimal Components required to test out the board. I didn't want to waste components by soldering everything and then finding out the board doesn't work.

  
  
  
Then I uploaded a blink code to check if my board was working.

* * *

Here, I am using my USBasp to upload the blink sketch to my board to check if it's working.

* * *

<figure>
  <img src="/images/fabacademy/week-12/soldering.jpg" alt="Ready with components for soldering" loading="lazy" />
  <figcaption>Ready with components for soldering</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/soldering1.jpg" alt="Soldering the jumper" loading="lazy" />
  <figcaption>Soldering the jumper</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/soldering2.jpg" alt="The jumper from the other side" loading="lazy" />
  <figcaption>The jumper from the other side</figcaption>
</figure>

After I was sure that my board was working, I soldered the rest of the components and was ready to use the board.

<figure>
  <img src="/images/fabacademy/week-12/board.jpg" alt="Soldered board" loading="lazy" />
  <figcaption>Soldered board</figcaption>
</figure>

## Making Flex Connectors: Second Iteration

Last week, I tried to make [flex connectors](/projects/fab-academy/week-11/) for my sensors. I tried to make a connector that would connect to the avr ISP header and connect to the sensor I wanted to connect. They worked great, but did not look very good. It was also very time consuming to solder the through hole 3x2 pin header onto the flex connector.  
  
So this week, I made all my connectors on the board in one line. The connectors this time didn't have any overlaps either, it was just straight pin to pin connections. I used some epoxy to secure the female headers onto the epoxy film.  
  
For detailed instructions on how to make these Epoxy film and Copper tape Flex PCBs, have a look at my [Electronics production week.](/projects/fab-academy/week-05/)

<figure>
  <img src="/images/fabacademy/week-12/flex0.jpg" alt="3 pin, 6 pin and 4 pin connectors I made in Eagle" loading="lazy" />
  <figcaption>3 pin, 6 pin and 4 pin connectors I made in Eagle</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/flex.jpg" alt="Soldered Connectors" loading="lazy" />
  <figcaption>Soldered Connectors</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/flex1.jpg" alt="Adding some Epoxy and letting it dry" loading="lazy" />
  <figcaption>Adding some Epoxy and letting it dry</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/flex4.jpg" alt="" loading="lazy" />
</figure>

[Download Flex Connector Eagle Project](http://)

## Uploading the Minicore Bootloader

Uploading the [Minicore Bootloader](https://github.com/MCUdude/MiniCore#boards-manager-installation) is pretty straightforward. Like the [TinyCore](https://github.com/SpenceKonde/ATTinyCore), which I used before, I first had to install it from the board manager. For instructions on how to do that, you can refer to my [week 7](/projects/fab-academy/week-07/) documentation, when I installed the TinyCore.

The Settings for uploading the bootloader were;

-   Board: Atmega328
-   Clock: 20Mhz External
-   Bootloader: Yes
-   BOD: 2.7v
-   Compiler LTO: "Disabled by Default
-   Variant: "328p/328PA"

<figure>
  <img src="/images/fabacademy/week-12/bootloader.jpg" alt="" loading="lazy" />
</figure>

## Driving a BLDC motor with a 30A SimonK ESC

The Motor and ESC I bought for my final project is [this](https://robu.in/product/a2212-13t-1000kv-brushless-motor-outrunner-30a-esc/) one. I found that this is the cheapest motor + ESC combo available in the market here.

#### Specifications:

#### A2212 10T/13T BLDC Motor

-   Model: A2212 10T/13T
-   Motor KV (RPM/V): 1000
-   Maximum Efficiency: 80%
-   Current Capacity: 12A/60S
-   No-Load Current(A): 0.5A @10V
-   Max. Efficiency Current: 4-10A
-   Maximum Watts(W): 150
-   Internal Resistance(mΩ): 90
-   Poles: 14
-   Shaft Diameter (mm): 3.17
-   LiPO Batteries: 2S-3S
-   Length (mm): 27.5
-   Width (mm): 27
-   Weight (gm): 64

#### SimonK 30A ESC

-   Constant Current: 30A
-   Maximum Current: 40A @10S
-   BEC: 3A
-   LiPO Batteries: 2S-3S

<figure>
  <img src="/images/fabacademy/week-12/bldcesc.jpg" alt="" loading="lazy" />
</figure>

## Driving the BLDC motor using Arduino (Powersource- Benchtop Power Supply)

First I tried running an example sketch from the [library](https://github.com/RB-ENantel/RC_ESC) that was suggested from the product page of this motor+ESC pair.

[Download ESC\_Ramp.ino](/files/fabacademy/week-12/ESC_Ramp.ino)

* * *

* * *

  
  

## Writing my own Test Code to run the motor from Serial Terminal:

I went through the documentation for this library and realized it just uses the Arduino Servo library inside, and so after some tinkering around, I wrote my own code for it which takes the speed value from the serial terminal and runs the motor.

[Download BLDC\_Controller\_Serial.ino](/files/fabacademy/week-12/ESC_Controller_serial.ino)

## Driving SSD1306 OLED via i2c

These are my favourite displays for any electronics projects. They're super energy efficient and very easy to add to any arduino project. I decided to interface this as well because having a display to debug code makes life much easier. There are multiple libraries to use these displays, but the adafruit gfx library is the easiest to use.

<figure>
  <img src="/images/fabacademy/week-12/oled.jpg" alt="" loading="lazy" />
</figure>

#### Libraries:

I found two popular libraries to use for the SSD1306 OLED displays,

-   [The Adafruit 1306 Library](https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples)
-   [u8g2 library](https://github.com/olikraus/u8g2)

I found the adafruit library much easier to use and went along with that one. Installation can be done directly from the arduino library manager, no need to download it from github. [Adafruit-ssd1306\_i2c.ino](/files/fabacademy/week-12/ssd1306_128x32_i2c.ino)

  

* * *

## Making a Bargraph for the ESC Speed Controller:

Then I wrote my own code for the display and made a bargraph for the ESC Speed controller code I wrote earlier.

[Download ESC\_controller\_Serial\_i2c\_display.ino](/files/fabacademy/week-12/ESC_controller_serial_i2c_display.ino)

## Driving WS2812b LEDs

I think that LEDs are the heart of all electronics projects but adding more than a few LEDs to a circuit can become largely difficult with the power consumption, wiring and circuit complexity. An 8x8 matrix of LEDs can be driven by 16 pins, but just to drive 8x8 RGB leds, you'd need 3 times that. Addressable LEDs were the solution to all these problems. Each of these LEDs come with an LED driver built in, for which in an array of addressable LEDs, each of them can be individually accessed in their full RGB glory. The LEDs I'll be using are WS281B and they take 24bit inputs achieve 256 brightness display on 3 colors, giving an option of 16777216 full color in each LED. This makes it ideal for any LED display project with minimal wires and easy power solution.

<figure>
  <img src="/images/fabacademy/week-12/ws2812b.jpg" alt="WS281b LED- Illustration from Adafruit" loading="lazy" />
  <figcaption>WS281b LED- Illustration from Adafruit</figcaption>
</figure>

Adafruit sells these LEDs as [Neopixels](https://www.adafruit.com/category/168), while there are multiple variations of these LEDs, most of them run on the same programming. The Datasheet for WS281b can be found [here.](https://www.pololu.com/file/0J705/WS2812B_datasheet.pdf)

#### Minimal Interfacing Circuit & Best Practices:

-   Before connecting NeoPixels to any large power source (DC “wall wart” or even a large battery), add a capacitor (1000 µF, 6.3V or higher) across the + and – terminals as shown above. The capacitor buffers sudden changes in the current drawn by the strip.
-   Place a 300 to 500 Ohm resistor between the Arduino data output pin and the input to the first NeoPixel. The resistor should be at the end of the wire closest to the NeoPixel(s), not the microcontroller. Some products already incorporate this resistor…if you’re not sure, add one…there’s no harm in doubling up!
-   Try to minimize the distance between the Arduino and first pixel, so the signal is clear. A meter or two is usually no problem. Much longer and things can become unreliable.
-   Avoid connecting NeoPixels to a live circuit. If you simply must, always connect ground first, then +5V, then data. Disconnect in the reverse order.
-   If powering the pixels with a separate supply, apply power to the pixels before applying power to the microcontroller.
-   Observe the same precautions as you would for any static-sensitive part; ground yourself before handling, etc.
-   NeoPixels powered by 5v require a 5V data signal. If using a 3.3V microcontroller you must use a logic level shifter such as a 74AHCT125 or 74HCT245. (If you are powering your NeoPixels with 3.7v like from a LiPoly, a 3.3v data signal is OK)
-   Make sure that your connections are secure. Alligator clips do not make reliable connections to the tiny solder pads on NeoPixel rings. Better to solder a small pigtail wire to the ring and attach the alligator clips to that.
-   If your microcontroller and NeoPixels are powered from two different sources (e.g. separate batteries for each), there must be a ground connection between the two.

<figure>
  <img src="/images/fabacademy/week-12/leds_Wiring-Diagram.jpg" alt="" loading="lazy" />
</figure>

#### Links

-   [The Neopixel Uberguide by Adafruit](https://learn.adafruit.com/adafruit-neopixel-uberguide)

#### Driving WS281b LEDs with Arduino(Fast LED library)

> My Lab didn't have any capacitors bigger than 100nF at the lab, I ordered some and will start working with the addressable LEDs after the capacitors arrive. I know it's probably not a very big deal, but I only have a few of these LEDs and they were pretty hard to source, I reaaally don't want to burn them over a missing capacitor.

## Measuring Power Consumption

Power consumption is measured in watts. We can find the power consumption of a device by measuring the ammount of current going through it multiplied by the voltage.

## From the Benchtop Power Supply

The benchtop powersupply can display the current and voltage passing through its channels. I measured the power consumption of my BLDC motor with it.

For the lowest speed,(12), the power consumption was 0.20A at 12v. Therefore the power consumption was 2.4W  
  
For the Highest speed,(140), the power consumption was 0.65A~0.70A at 12v. Therefore the power consumption was 8.4W

<figure>
  <img src="/images/fabacademy/week-12/powersupply.jpg" alt="Power Consumption at ESC.write(12)" loading="lazy" />
  <figcaption>Power Consumption at ESC.write(12)</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/powersupply1.jpg" alt="Power Consumption at ESC.write(140)" loading="lazy" />
  <figcaption>Power Consumption at ESC.write(140)</figcaption>
</figure>

## From Multimeter unit placed in Series

I placed a multimeter in Ammeter mode in series with my ESC and took the same readings to compare with the previous test.  

For the lowest speed,(12), the power consumption was 0.212A at 12v. Therefore the power consumption was 2.54W  
  
For the Highest speed,(140), the power consumption was 0.701 at 12v. Therefore the power consumption was 8.412W

<figure>
  <img src="/images/fabacademy/week-12/powersupply3.jpg" alt="Power Consumption at ESC.write(12)" loading="lazy" />
  <figcaption>Power Consumption at ESC.write(12)</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-12/powersupply4.jpg" alt="Power Consumption at ESC.write(140)" loading="lazy" />
  <figcaption>Power Consumption at ESC.write(140)</figcaption>
</figure>

## Downloads

<table class="alt"><tbody><tr><td>Eagle Project for my 328p Based board:</td><td><a href="/files/fabacademy/week-12/pixelFace mainboard.zip" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download .zip</a></td></tr><tr><td>CN1584 Library I made:</td><td><a href="/files/fabacademy/week-12/CN1584.lbr" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download CN1584.lbr</a></td></tr><tr><td>Alternating SMD 0.1" header library</td><td><a href="/files/fabacademy/week-12/smd_con.lbr" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download smd_con.lbr</a></td></tr><tr><td>Eagle Script to export traces, drill and outline</td><td><a href="/files/fabacademy/week-12/Export_trace_drill_outline.scr" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download Export_trace_drill_outline.scr</a></td></tr><tr><td>Flex Connectors Eagle Project</td><td><a href="/files/fabacademy/week-12/connectors.zip" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download connectors.zip</a></td></tr><tr><td>RC_RAMP example from <a href="https://github.com/RB-ENantel/RC_ESC" target="_blank" rel="noopener noreferrer"></a>RC_ESC library</td><td><a href="/files/fabacademy/week-12/ESC_Ramp.ino" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download ESC_Ramp.ino</a></td></tr><tr><td>ESC Controller over Serial code</td><td><a href="/files/fabacademy/week-12/ESC_Controller_serial.ino" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download ESC_Controller_serial.ino</a></td></tr><tr><td>ssd1306_128x32_i2c example from <a href="https://github.com/adafruit/Adafruit_SSD1306/" target="_blank" rel="noopener noreferrer">Adafruit SSD1306 Library</a></td><td><a href="/files/fabacademy/week-12/ssd1306_128x32_i2c.ino" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download ssd1306_128x32_i2c.ino</a></td></tr><tr><td>Bargraph in OLED with ESC controller over Serial Code</td><td><a href="/files/fabacademy/week-12/ESC_controller_serial_i2c_display.ino" class="button primary" target="_blank" rel="noopener noreferrer" download="">Download ESC_controller_serial_i2c_display.ino</a></td></tr></tbody></table>

## Learning Outcomes

-   I learnt how to mill complicated components like the 328p on the modella
-   I made a block diagram of my final project, figured out how to manage and regulate the power on board and how to seperate the logic supply from the power supply lines.
-   I learnt how to make custom libraries in eagle.
-   I learnt to make my own 328p based arduino and load custom bootloaders onto it.
-   I learnt how to interface a BLDC motor and ESC with arduino and program my own board to do it.

## What I Need to explore further:

-   I need to work on the addressable LEDs as soon as my components arrive.
-   I need to consider making a motor assembly to reduce vibrations when the motor spins.
-   I need to start integrating the optical encoders with the motor control to make it a closed loop system or atleast get some rotational feedback data.

  

* * *
