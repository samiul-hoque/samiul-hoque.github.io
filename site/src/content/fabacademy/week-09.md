---
title: "Embedded Programming"
week: 9
assignment: "Read a microcontroller datasheet; program a board using multiple languages and environments."
heroImage: "/images/fabacademy/week-09/heroshot2.jpg"
gallery: []
---
## Assignment

#### Individual assignment:

Read a microcontroller data sheet program your board to do something, with as many different programming languages and programming environments as possible

#### [Group assignment](http://fab.academany.org/2019/labs/cept/embeddedprogramming.html) :

Compare the performance and development workflows for other architectures

## What I made this Week

<figure>
  <img src="/images/fabacademy/week-09/heroshot2.jpg" alt="What I made this Week" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-09/attinytest_arduino.gif" alt="What I made this Week" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-09/st322.jpg" alt="What I made this Week" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-09/ftdi.jpg" alt="What I made this Week" loading="lazy" />
</figure>

## Reading a Datasheet: ATTINY44

The ATTINY44 is a low power AVR® 8-bit microcontroller based on the RISC architecture.It have 12 GPIO pin's.  
The Atmel ATtiny24/44/84 provides the following features:  
2/4/8K bytes of in-system programmable flash, 128/256/512 bytes EEPROM, 128/256/512 bytes SRAM, 12 general purpose I/O lines, 32 general purpose working registers, an 8-bit Timer/Counter with two PWM channels, a 16-bit Timer/Counter with two PWM channels, internal and external interrupts, an 8-channel 10-bit ADC, programmable gain stage (1x, 20x) for 12 differential ADC channel pairs, a programmable watchdog timer with internal oscillator, internal calibrated oscillator, and three software selectable power saving modes  
  

The best way to know about a microcontroller and Instruction set is reading its Datasheet.we will get all the information from the Datasheet , only problem is that its not beginner friendly. I started Reading ATtiny44 Datasheet that I got from the [Micorchip's website as it was a part of the assignment this week.](http://ww1.microchip.com/downloads/en/devicedoc/Atmel-7701_Automotive-Microcontrollers-ATtiny24-44-84_Datasheet.pdf).

<figure>
  <img src="/images/fabacademy/week-09/datasheet1.jpg" alt="Reading a Datasheet: ATTINY44" loading="lazy" />
</figure>

## Specifitcations

<figure>
  <img src="/images/fabacademy/week-09/tiny44.jpg" alt="ATTiny44 SOIC-14 Package" loading="lazy" />
  <figcaption>ATTiny44 SOIC-14 Package</figcaption>
</figure>

| Name | Value |
| --- | --- |
| Program Memory Type | Flash |
| Program Memory Size (KB) | 4 |
| CPU Speed (MIPS/DMIPS) | 20 |
| SRAM Bytes | 256 |
| Data EEPROM/HEF (bytes) | 256 |
| Digital Communication Peripherals | 1-SPI, 1-I2C |
| Capture/Compare/PWM Peripherals | 1 Input Capture, 1 CCP, 4PWM |
| Timers | 1 x 8-bit, 1 x 16-bit |
| Number of Comparators | 1 |
| Temperature Range (C) | \-40 to 85 |
| Operating Voltage Range (V) | 1.8 to 5.5 |
| Pin Count | 14 |

## Architecture

The ATTINY44 runs with the RISC Architecture. RISC or reduced instruction set computer is a computer which only uses simple commands that can be divided into several instructions which achieve low-level operation within a single CLK cycle, as its name proposes “Reduced Instruction Set”. It's performance is optimized with more focus on software. RISC mainly Used in Microcontroller.

The Block Diagram for the ATTINY44, according to the datasheet has four main sections,

-   The ALU
-   Timer/RAM/Counter/EEPROM
-   The Data Registers
-   and The Programming interface

<figure>
  <img src="/images/fabacademy/week-09/datasheet_block_diagram.jpg" alt="Architecture" loading="lazy" />
</figure>

### ALU Unit:

The ALU - Arithmetic Logic Unit - operations are divided in some categories like: arithmetic, logical and bit-functions. Status register contains the most recently executed arithmetic instruction.

<figure>
  <img src="/images/fabacademy/week-09/datasheet_ALU_SR.jpg" alt="ALU Unit" loading="lazy" />
</figure>

### Timer & Counter:

The main features of the timer - counter are:

<figure>
  <img src="/images/fabacademy/week-09/datasheet_16bitTimer1.jpg" alt="Timer & Counter" loading="lazy" />
</figure>

### ADC Characteristics:

The ADC table characteristic are:

<figure>
  <img src="/images/fabacademy/week-09/datasheet_adc_characteristics.jpg" alt="ADC Characteristics" loading="lazy" />
</figure>

In order to choose an ADC, you need to choose multiplexers according to this table.

<figure>
  <img src="/images/fabacademy/week-09/datasheet_single_end_input_channel.jpg" alt="ADC Characteristics" loading="lazy" />
</figure>

## Pin descriptions

<figure>
  <img src="/images/fabacademy/week-09/datasheetPin.jpg" alt="Pin descriptions" loading="lazy" />
</figure>

Port A Configuration:

<figure>
  <img src="/images/fabacademy/week-09/datasheet_porta.jpg" alt="Pin descriptions" loading="lazy" />
</figure>

Port B Configuration:

<figure>
  <img src="/images/fabacademy/week-09/datasheet_portb.jpg" alt="Pin descriptions" loading="lazy" />
</figure>

## Programming the ATTINY44 with Arduino

The Arduino Development Environment can be used to program the ATTINY44. It makes life much easier for the everyday maker like me by getting the full support of the Arduino IDE.

<figure>
  <img src="/images/fabacademy/week-09/arduino.jpg" alt="Programming the ATTINY44 with Arduino" loading="lazy" />
</figure>

## Installation

### Installing Arduino:

Arduino can be downloaded free from the official website [here.](https://www.arduino.cc/en/main/software) Installing it is very straight forward.

### Adding TinyCore (support for ATTiny MCU Series to Arduino)

To program the ATTINY microcontroller family using Arduino, I will be using [ATTinyCore,](https://github.com/SpenceKonde/ATTinyCore) which is an Arduino core for ATtiny 1634, 828, x313, x4, x41, x5, x61, x7 and x8 series of microntrollers. The installation instructions are given on the github page and I just followed the Instructions for the Boards Manager Installation Method.

  

#### Board Manager Link:

`http://drazzy.com/package_drazzy.com_index.json`

<figure>
  <img src="/images/fabacademy/week-09/tinycore.jpg" alt="TinyCore Installation instructions" loading="lazy" />
  <figcaption>TinyCore Installation instructions</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-09/tinycore_16.jpg" alt="TinyCore Installation-Board Manager" loading="lazy" />
  <figcaption>TinyCore Installation-Board Manager</figcaption>
</figure>

## Usage

The usage is straightforward, it accepts arduino code syntax as it is. Heavy libraries like the servo.h doesn't work, but there are many ways to work around it. To set the fuse for the 20Mhz external oscillator, the bootloader needs to burned before the initial use.  
  

<figure>
  <img src="/images/fabacademy/week-09/at44bootloader.jpg" alt="Settings for Burning Bootloader" loading="lazy" />
  <figcaption>Settings for Burning Bootloader</figcaption>
</figure>

Software Serial is based on the PCINT\_VECT() for which, Pin change interrupts can not be used directly. I faced this issue in my [Input Device Week](/projects/fab-academy/week-11/) when I was working on the rotary Encoder.

### Code:

This code below blinks two LEDs on pin PA3 and PA4.

### Command Line Output

  
  

### Output

<figure>
  <img src="/images/fabacademy/week-09/attinytest_arduino.gif" alt="Output" loading="lazy" />
</figure>

### HEX footprint:

The generated HEX can be exported from arduino by clicking on the 'Export Compiled Binary' option.

<figure>
  <img src="/images/fabacademy/week-09/hexarduino.jpg" alt="HEX footprint" loading="lazy" />
</figure>

#### HEX Output:

#### Download Files:

[Download Arduino Project Folder (Compiled Binary inlcuded)](/files/fabacademy/week-09/at44_test_arduino.zip)

## Programming the ATTINY44 with GCC C

AVR microcontrollers can be programmed using GCC C. I'll be using Atmel Studio as the IDE. Most of Neil's code is written in C, which I have been having a hard time understanding. Hopefully after tinkering with Atmel Studio a bit, I'll be able to write my onw C code.

<figure>
  <img src="/images/fabacademy/week-09/atmelstudio.jpg" alt="Programming the ATTINY44 with GCC C" loading="lazy" />
</figure>

## Setting up Atmel Studio

[Atmel Studio](https://www.microchip.com/mplab/avr-support/atmel-studio-7) is free to download from Atmel's official website. Installation is straightforward but it takes a long time since it is based on visual studio.

## Usage

The Usage is not as straight forward as Arduino. First we have to create a project, we'll select a 'GCC C Executable Project' and for device, we'll select 'ATTINY44'

<figure>
  <img src="/images/fabacademy/week-09/createproj2.jpg" alt="Device Selection" loading="lazy" />
  <figcaption>Device Selection</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-09/createproj3.jpg" alt="Project Type Selection" loading="lazy" />
  <figcaption>Project Type Selection</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-09/createproj1.jpg" alt="Creating Project Loading Screen" loading="lazy" />
  <figcaption>Creating Project Loading Screen</figcaption>
</figure>

#### The UI:

<figure>
  <img src="/images/fabacademy/week-09/atmelstudioui.jpg" alt="Atmel Studio UI" loading="lazy" />
  <figcaption>Atmel Studio UI</figcaption>
</figure>

### Adding Support for the FABISP:

The FABISP needs to be added as an external tool to Atmel Studio if we want to use it to upload our code.

<figure>
  <img src="/images/fabacademy/week-09/atmelfabisp.jpg" alt="Adding External Tool in Atmel Studio" loading="lazy" />
  <figcaption>Adding External Tool in Atmel Studio</figcaption>
</figure>

#### External Tool Settings for FabISP

-   Title: USBTiny ISP.
-   avrdude.exe
-   \-c usbtiny -p attiny44 -Uflash:w:"$(ProjectDir)Debug\\$(TargetName).hex":i
  
  
\*\* (avrdude path variable needs to be added)

<figure>
  <img src="/images/fabacademy/week-09/atmelfabisp1.jpg" alt="USBTiny ISP Settings for External Tool in Atmel Studio" loading="lazy" />
  <figcaption>USBTiny ISP Settings for External Tool in Atmel Studio</figcaption>
</figure>

### Code:

### Command Line Output for Build:

### Command Line Output for Flashing:

  
  

### The Output on the board was the same as the code was the same, just written in different languages

<figure>
  <img src="/images/fabacademy/week-09/attinytest_arduino.gif" alt="The Output on the board was the same as the code was the same, just written in different languages" loading="lazy" />
</figure>

#### HEX Footprint:

#### Download Files:

[Download Atmel Studio Project Folder](/files/fabacademy/week-09/at44_test_atmelStudio.zip)

## Comparison of Programming Methods for ATTINY44

|  | Arduino | Atmel Studio |
| --- | --- | --- |
| Ease of Installation: | One Click Installation. | Based on Visual Studio, takes a long time to install. |
| Ease of Use: | Very intuiitive UI, very easy to use | Complicated UI but has alot of features |
| Debugging: | No Debugging tools, Serial monitor built in. | Debugging tool present, but takes a while to get used to |
| HEX Footprint Size: | Huge HEX footprint, about 60 line(930 bytes) | Much Smaller HEX footprint, just 13 lines (182 bytes) |

### Conclusion:

I definitely prefer the arduino IDE and the arduino programming language, but GCC C is much more optimized and lighter. Maybe I'll try learning more C code as Fab Academy progresses, but the Arduino programming language will definitely be my primary language for the time being.

## STM32F103C8T6 Datasheet

The STM32F103xx medium-density performance line family incorporates the high-performance ARM®Cortex®-M3 32-bit RISC core operating at a 72 MHz frequency, high-speed embedded memories (Flash memory up to 128 Kbytes and SRAM up to 20 Kbytes), and an extensive range of enhanced I/Os and peripherals connected to two APB buses. All devices offer two 12-bit ADCs, three general purpose 16-bit timers plus one PWM timer, as well as standard and advanced communication interfaces: up to two I2Cs and SPIs, three USARTs, an USB and a CAN.  
  

### Specifications:

#### ARM®32-bit Cortex®-M3 CPU Core

-   72 MHz maximum frequency,1.25 DMIPS/MHz (Dhrystone 2.1) performance at 0 wait state memory access
-   Single-cycle multiplication and hardware division
  

#### Memories

-   64 or 128 Kbytes of Flash memory
-   20 Kbytes of SRAM
  

#### Clock, reset and supply management

-   2.0 to 3.6 V application supply and I/Os
-   POR, PDR, and programmable voltage detector (PVD)
-   4-to-16 MHz crystal oscillator
-   Internal 8 MHz factory-trimmed RC
-   Internal 40 kHz RC
-   PLL for CPU clock
-   32 kHz oscillator for RTC with calibration
  

#### Low-power

-   Sleep, Stop and Standby modes
-   VBAT supply for RTC and backup registers
  

<figure>
  <img src="/images/fabacademy/week-09/stm32datasheet.jpg" alt="Low-power" loading="lazy" />
</figure>

#### 2 x 12-bit, 1 μs A/D converters (up to 16 channels)

  
-   Conversion range: 0 to 3.6 V
-   Dual-sample and hold capability
-   Temperature sensor
  

#### DMA

-   7-channel DMA controller
-   Peripherals supported: timers, ADC, SPIs, I2Cs and USARTs
  

#### Up to 80 fast I/O ports

-   26/37/51/80 I/Os, all mappable on 16 external interrupt vectors and almostall 5 V-tolerant
  

#### Debug mode

-   Serial wire debug (SWD) & JTAG interfaces
  

#### 7 timers

-   Three 16-bit timers, each with up to 4 IC/OC/PWM or pulse counter and
quadrature (incremental) encoder input-   16-bit, motor control PWM timer with dead-time generation and emergency
stop-   2 watchdog timers (Independent and Window)
-   SysTick timer 24-bit downcounter
  

#### Up to 9 communication interfaces

-   Up to 2 x I2C interfaces (SMBus/PMBus)
-   Up to 3 USARTs (ISO 7816 interface, LIN, IrDA capability, modem control)
-   Up to 2 SPIs (18 Mbit/s)
-   CAN interface (2.0B Active)
-   USB 2.0 full-speed interface
  

#### CRC calculation unit, 96-bit unique ID

#### Packages are ECOPACK®

<figure>
  <img src="/images/fabacademy/week-09/stm32architecture.jpg" alt="Packages are ECOPACK®" loading="lazy" />
</figure>

## Making a STM32F103C8T6 board

Making an STM32F103C8T6 is much harder than making a ATMEGA328p or ATTINY44 board because of the large number of peripheral components required. The programming procedure is also quite difficult requiring to load an OS on the device first, then working from there. The OS can be flashed using a JTAG prorammer or an ST-link official programmer.  
  

The Minimal circuit for the STM32F103C8T6 can be found in the official ST documentation for [Getting started with STM32F10xxx hardware development](https://www.st.com/resource/en/application_note/cd00164185.pdf) application note.

<figure>
  <img src="/images/fabacademy/week-09/stm32minimal.jpg" alt="Minimal development circuit for STM32F103C8T6- illustration from Getting started with STM32F10xxx hardware development" loading="lazy" />
  <figcaption>Minimal development circuit for STM32F103C8T6- illustration from Getting started with STM32F10xxx hardware development</figcaption>
</figure>

  
  

* * *

### LQFP48 Breakout Board for STM32F103C8T6

The footprint for the STM32F103C8T6 we have at the lab is LQFP48 (7mmx7mm) which is not possible to mill with the (1/64) bit we have at the lab. So I went ahead and bought a breakout board for the LQFP48 package and soldered the STM32F103C8T6 onto it. But I didn't realize how hard it would be to get all the peripheral components connected to the breakout board. I ran out of time I allocated to explore the STM32F103C8T6.

<figure>
  <img src="/images/fabacademy/week-09/st322.jpg" alt="Hand Soldered Breakout for STM32F103C8T6 on LQFP48 breakout" loading="lazy" />
  <figcaption>Hand Soldered Breakout for STM32F103C8T6 on LQFP48 breakout</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-09/st32.jpg" alt="LQFP48 Breakouts purchased from local shop" loading="lazy" />
  <figcaption>LQFP48 Breakouts purchased from local shop</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-09/st321.jpg" alt="Soldering Female headers to LQFP breakout" loading="lazy" />
  <figcaption>Soldering Female headers to LQFP breakout</figcaption>
</figure>

## Programming the STM32F103C8T6 Development board

I resorted to using an STM32F103C8T6 development board instead of making my breakout board work. It was pretty straightforward from there. It came with all peripheral components on board and Serial/USB and SWIM interface for programming.  
All information on these generic STM32F103C8T6 development board, also known as the Blue Pill development board can be found [here.](https://wiki.stm32duino.com/index.php?title=Blue_Pill)

<figure>
  <img src="/images/fabacademy/week-09/st32dev.jpg" alt="Blue Pill Development" loading="lazy" />
  <figcaption>Blue Pill Development</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-09/st32dev1.jpg" alt="Board for STM32F103C8T6" loading="lazy" />
  <figcaption>Board for STM32F103C8T6</figcaption>
</figure>

#### Pin Out Diagram

<figure>
  <img src="/images/fabacademy/week-09/Bluepillpinout.jpg" alt="Blue Pill Development board Pinout by Rick Kimball" loading="lazy" />
  <figcaption>Blue Pill Development board Pinout by Rick Kimball</figcaption>
</figure>

### Installing ST-Link v2 Drivers:

The programmer we have at the lab is an [ST-Link v2.](https://www.st.com/content/ccc/resource/technical/document/user_manual/65/e0/44/72/9e/34/41/8d/DM00026748.pdf/files/DM00026748.pdf/jcr:content/translations/en.DM00026748.pdf) The drivers for it can be downloaded freely from [ST's official Site.](https://www.st.com/en/development-tools/stsw-link009.html)

## Using STM32Duino to program the Blue Pill Dev. Board

To program the generic blue pill development board I have, I'll be using [STM32duino, the arduino Core for STM32.](https://github.com/stm32duino/Arduino_Core_STM32)  
Installation instructions can be found [here.](https://idyl.io/arduino/how-to/program-stm32-blue-pill-stm32f103c8t6/)  
  
To use the board manager installation method, the following url needs to be added to the Additional Board Manager URLs,  
`https://github.com/stm32duino/BoardManagerFiles/raw/master/STM32/package_stm_index.json`

<figure>
  <img src="/images/fabacademy/week-09/stm32duino.jpg" alt="Using STM32Duino to program the Blue Pill Dev. Board" loading="lazy" />
</figure>

#### Uploading a Blink Code:

The blue pill development board is a minimal one and only has one programmable LED on PC13 for test programming. I wrote a blink code for it and uploaded the program using Arduino. The Connection from the SWIM interface on the blue pill to the JTAG breakout on the ST-Link is explained on the [stm32duino wiki.](https://wiki.stm32duino.com/index.php?title=Uploading_a_sketch) The Pinout is as follows;

#### Blue Pill ---------------------ST-Link

-   3v3--------------------------------------pin 1
-   SWO------------------------------------ pin 7
-   SWCLK-----------------------------------pin 9
-   GND-------------------------------------GND

<figure>
  <img src="/images/fabacademy/week-09/jtag_con.jpg" alt="Pin Diagram for Jtag Connector on ST-Link V2" loading="lazy" />
  <figcaption>Pin Diagram for Jtag Connector on ST-Link V2</figcaption>
</figure>

  

* * *

#### Code:

#### Hex footprint:

Surprisingly, the hex footprint to run this small code is 715 lines long. (32,768 bytes)

#### Output:

* * *

* * *

#### Download:

[Download STM32duino Project folder(compiled binary included)](/files/fabacademy/week-09/st32_test.zip)

## Using Arm Mbed to program the Blue Pill Development Board

[Mbed](https://www.mbed.com/en/) is an online embedded device platform which gives you an embedded operating system, transport, security and cloud services to create Embedded solutions. Although it is designed mostly for IoT applications, the generic chinese blue pill development board can also be programmed using it. I think it is an integrated solution that is easy to work on and easy to deploy. More about what is Mbed and how it works, can be found [here.](https://www.mbed.com/en/about-mbed/what-mbed/)

<figure>
  <img src="/images/fabacademy/week-09/mbed.jpg" alt="Using Arm Mbed to program the Blue Pill Development Board" loading="lazy" />
</figure>

### Getting Started with Mbed and the Generic Blue Pill Development board:

#### Signing Up:

Getting started with Mbed is easy, just sign up for and account at their [sign up page.](https://os.mbed.com/account/signup/)

#### Adding Hardware for Generic Blue Pill in our console:

After you sign up, You should be able to navigate to your [console.](https://console.mbed.com/)Before we can get started with programming, we need to add our device to the hardware list in our console. The generic blue pill development board for the STM32F103C8T6 is not supported officially by mbed. So we have to add it as a [Nucleo-F103RB](https://os.mbed.com/platforms/ST-Nucleo-F103RB). It uses the same chip but has 128kb flash memory instead of our 64kb board. I found this nifty [guide](https://os.mbed.com/users/hudakz/code/STM32F103C8T6_Hello/), on how to program our generic board using Mbed.

<figure>
  <img src="/images/fabacademy/week-09/mbed1.jpg" alt="Mbed Console UI" loading="lazy" />
  <figcaption>Mbed Console UI</figcaption>
</figure>

#### Using the Online Mbed Compiler

The compiler UI is a bit confusing at first. I would recomend using the many example programs given by Mbed and writing your own code by modifying the templates. First we'll create a new program, and I named it "HelloWorld\_blinky" and is based on the 'Display a message on PC using UART' example.  
The program project folder will be created along with the 'main.c' file, which we will be editing to write our own code. The example code looks a bit like this, but it didn't work out of the box because the default Serial Tx/Rx pins for the nucleo and the blue pill are different. So after going through the [Generic Blue Pill Guide for Mbed](https://os.mbed.com/users/hudakz/code/STM32F103C8T6_Hello/), I wrote the following code.

<figure>
  <img src="/images/fabacademy/week-09/mbed2.jpg" alt="Using the Online Mbed Compiler" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-09/mbed3.jpg" alt="Using the Online Mbed Compiler" loading="lazy" />
</figure>

#### Compiling and optimizing:

The Blue Pill board has 64KB memory, while the nucleo has 128kb. So after we click compile, we have to check on the 'Build Details', and manually ensure the Flash size does not exceed 64kb. For our case, the Flash Size of the build was 27.6kb which was well under 64kb. Once you click compile, the compiled .bin file should automatically downloaded in your browser.

<figure>
  <img src="/images/fabacademy/week-09/mbed4.jpg" alt="Compiling and optimizing" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-09/mbed6.jpg" alt="Compiling and optimizing" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-09/mbed5.jpg" alt="Compiling and optimizing" loading="lazy" />
</figure>

#### Uploading the Code:

To upload the .bin file we need to download the [ST link utility](https://www.st.com/en/development-tools/stsw-link004.html) Once downloaded, the utility program can be run and should look like this. Connect your Blue pill with the ST-link, the pinout diagram is the same as when we connected it to upload code using STM32duino.

#### Blue Pill ---------------------ST-Link

-   3v3--------------------------------------pin 1
-   SWO------------------------------------ pin 7
-   SWCLK-----------------------------------pin 9
-   GND-------------------------------------GND

Click on Connect, the device memory table should show up on the utility.

<figure>
  <img src="/images/fabacademy/week-09/stutil1.jpg" alt="Connecting to Device Using ST-Link" loading="lazy" />
  <figcaption>Connecting to Device Using ST-Link</figcaption>
</figure>

Open the file you want to upload by clicking on open program, this would be the .bin file you downloaded from mbed.

<figure>
  <img src="/images/fabacademy/week-09/stutil2.jpg" alt="Uploading Program" loading="lazy" />
  <figcaption>Uploading Program</figcaption>
</figure>

Now click on Program verify and click 'start', the program should be uploaded.

<figure>
  <img src="/images/fabacademy/week-09/stutil3.jpg" alt="Program Uploaded" loading="lazy" />
  <figcaption>Program Uploaded</figcaption>
</figure>

#### ST-link Verbose Output

  
  

* * *

#### Viewing the Output:

To view the UART output, connect the FTDI module with the blue pill dev. board, make sure the FTDI is in 3.3v mode or you'll destroy the board. The connection should be;

#### Blue Pill ---------------------FTDI

-   3v3--------------------------------------3.3v
-   A3--------------------------------------- TX
-   A2----------------------------------------RX
-   GND-------------------------------------GND

<figure>
  <img src="/images/fabacademy/week-09/ftdi.jpg" alt="Blue Pill ---------------------FTDI" loading="lazy" />
</figure>

#### Download Project Files:

[Download HelloWorld\_Blinky\_zip\_nucleo\_f103rb.zip](/files/fabacademy/week-09/HelloWorld_Blinky_zip_nucleo_f103rb.zip)

## Downloads

<table class="alt"><tbody><tr><td>ATTINY44- Arduino</td><td><a href="/files/fabacademy/week-09/at44_test_arduino.zip" class="button primary " target="_blank" rel="noopener noreferrer" download="">Download Arduino Project Folder (Compiled Binary inlcuded)</a></td></tr><tr><td>ATTINY44- Atmel Studio</td><td><a href="/files/fabacademy/week-09/at44_test_atmelStudio.zip" class="button primary " target="_blank" rel="noopener noreferrer" download="">Download Atmel Studio Project Folder</a></td></tr><tr><td>STM32F103C8T6- STM32Duino</td><td><a href="/files/fabacademy/week-09/st32_test.zip" class="button primary " download="" target="_blank" rel="noopener noreferrer">Download STM32duino Project folder(compiled binary included)</a></td></tr><tr><td>STM32F103C8T6- Arm Mbed</td><td><a href="/files/fabacademy/week-09/HelloWorld_Blinky_zip_nucleo_f103rb.zip" class="button primary " target="_blank" rel="noopener noreferrer">Download HelloWorld_Blinky_zip_nucleo_f103rb.zip</a></td></tr></tbody></table>

## Learning Outcomes

-   I read through the datasheet for ATTINY44 and STM32F103C8T6
-   I learnt how to program the ATTINY44 with GCC C through Atmel Studio
-   I learnt how to use the Fab ISP with Atmel Studio
-   I learn't how to use the STM32F103C8T6 in a board and the minimum circuit requirements to use it.
-   I learnt to use the Blue Pill Development board for the STM32F103C8T6 and program it using the ST-Link v2
-   I learnt how to use STM32duino
-   I learnt how to use Arm Mbed
-   I now have a better understanding how the instruction sets work in a microcontroller, how a program is compiled and how it is flashed.

## What I need to explore further:

-   I need to make my own board using the STM32F103C8T6 breakout board which was not possible for time complexities and unavailability required peripheral components
-   I need to explore the ESP8266/ESP32 and micropython if I get the chance.

  

* * *
