---
title: "Interface & Application Programming"
week: 16
assignment: "Write an application that interfaces with a hardware input or output device."
heroImage: "/images/fabacademy/week-16/application.jpg"
gallery: []
---
## Assignment

#### Individual Assignment:

write an application that interfaces with an input &/or output device that you made.  
  

#### [Group assignment](http://fab.academany.org/2019/labs/cept/interfaceapplicationdesign.html)

compare as many tool options as possible

## What I made this Week

<figure>
  <img src="/images/fabacademy/week-16/application.jpg" alt="What I made this Week" loading="lazy" />
</figure>

## Objective

The objective for me this week is to create a Control interface for my BLDC drive system which I am working on for my Final project. More details on that can be found [here](/projects/fab-academy/week-12/). I'll be using [Processing](https://processing.org/) for this week's work.

## The Board I'll be using for this week

<figure>
  <img src="/images/fabacademy/week-16/board.jpg" alt="The Board I'll be using for this week" loading="lazy" />
</figure>

The Board I decided to use was the one I designed on my [Output Week](/projects/fab-academy/week-12/).

## Processing

[Processing](https://processing.org/) is a flexible software sketchbook and a language for learning how to code within the context of the visual arts. Since 2001, Processing has promoted software literacy within the visual arts and visual literacy within technology. There are tens of thousands of students, artists, designers, researchers, and hobbyists who use Processing for learning and prototyping.

#### Features:

-   Free to download and open source
-   Interactive programs with 2D, 3D, PDF, or SVG output
-   OpenGL integration for accelerated 2D and 3D
-   For GNU/Linux, Mac OS X, Windows, Android, and ARM
-   Over 100 libraries extend the core software

## Installation

Installation is pretty straight forward. The current stable release, [Processing 3.5.3](http://download.processing.org/processing-3.5.3-windows64.zip) (I used windows x64) can be downloaded as a .zip file and just requires unzipping and you are set to use it.

## Basic Usage

Processing is alot like arduino. If you are familiar with the basic syntax in arduino, almost all of it work on processing. The new things which you will need to get used to is the basics of the GUI programming.

## Creating a Simple Window that closes when a keypress is detected

### Objective:

To explain the basics of processing, I'll do the following;

-   I'll create a simple window of size 400x400
-   I'll set the background color to black
-   I'll close and exit the program when a keypress is detected

### The Code:

[SimpleWindow.pde](/files/fabacademy/week-16/simpleWindow.pde)

<figure>
  <img src="/images/fabacademy/week-16/simpleWindowProcessing.jpg" alt="Creating a Simple Window in processing" loading="lazy" />
  <figcaption>Creating a Simple Window in processing</figcaption>
</figure>

### Explanation

#### Basic Functions:

-   #### [setup()](https://processing.org/reference/setup_.html)
    

Like the setup() function in arduino, runs only once.

-   #### [draw()](https://processing.org/reference/draw_.html)
    

Updates the GUI, runs continuously like the kinda arduino loop() function.

-   #### [keyPressed()](https://processing.org/reference/keyPressed_.html)
    

Event initiated when a keystroke is detected.

  

#### Other Functions:

-   #### [size(Width, Height)](https://processing.org/reference/size_.html)
    
    Defines the dimension of the display window width and height in units of pixels. In a program that has the setup() function, the size() function must be the first line of code inside setup(), and the setup() function must appear in the code tab with the same name as your sketch folder.
    
-   #### [background(rgb)](https://processing.org/reference/background_.html)
    
    The background() function sets the color used for the background of the Processing window. The default background is light gray. This function is typically used within draw() to clear the display window at the beginning of each frame, but it can be used inside setup() to set the background on the first frame of animation or if the backgound need only be set once.
    
-   #### [exit()](https://processing.org/reference/exit_.html)
    
    Quits/stops/exits the program. Programs without a draw() function stop automatically after the last line has run, but programs with draw() run continuously until the program is manually stopped or exit() is run.
    

## The Serial Library

The Serial library reads and writes data to and from exnternal devices using Serial Communication. I will be using this library to communicate with my board.

### Writing a Serial code that Reads an analog value from my arduino and sends a value to my board to blink an LED

To explore the Serial library I'll do the following in this program;

-   Detect and Connect to a serial device, in this case which is my board
-   Read data fom analog pin 0
-   Send '0' or '1' by detecting keystroke and blink an LED on the board.

#### The Code:

[SerialDuplexTest.pde](/files/fabacademy/week-16/SerialDuplexTest.pde)

### Explanation:

#### Serial Library Functions Used:

-   #### [Serial(parent, portName, baudRate)](https://processing.org/reference/libraries/serial/Serial.html)
    

Initiates a serial port for communication. The sketch will freeze if port is not found. It can be avoided by wrapping the entire section in a try block.

-   #### [Serial.list()](https://processing.org/reference/libraries/serial/Serial_list_.html)
    

Returns a string array of names of all the serial objects connected to the machine.

-   #### [serialEvent(Serial obj)](https://processing.org/reference/libraries/serial/serialEvent_.html)
    

This event is triggered everytime a serial event occurs. It may be when serial data is received.

-   #### [serial.read()](https://processing.org/reference/libraries/serial/Serial_read_.html)
    

Returns a number between 0 and 255 for the next byte that's waiting in the buffer. Returns -1 if there is no byte, although this should be avoided by first cheacking available() to see if data is available.

-   #### [serial.write()](https://processing.org/reference/libraries/serial/Serial_write_.html)
    

Writes bytes, chars, ints, bytes\[\], Strings to the serial port

#### Other Functions Used:

-   #### [Pfont()](https://processing.org/reference/PFont.html)
    
    Used to create and set font for the text() function.
    

* * *

### Code on the Board:

[ProcessingSerialDuplex.ino](/files/fabacademy/week-16/processingSerialDuplex.ino)

### Explanation:

Here I am reading from serial if I am recieving 1 or not, If i do recieve it, I will light up the LED on which is connected on pin 13.  
  
On the other hand, I am also reading analog data from pin A0, and writing it on serial after every 25ms.

### Demonstration:

* * *

* * *

## Making a Scrollbar

### The Objective:

-   Create a Scroll bar
-   Get values from the scrollbar slider

### Code:

[Download simpleScrollbar.pde](/files/fabacademy/week-16/simpleScrollbar.pde)

### Explanation:

### Functions Used:

-   #### Hscrollbar(xPosition, yPosition, width, height, inertia)
    
    The constructor class for the Hscrollbar example, it accepts 5 parameters. The xPosition and the yPosition is co-ordinates from where the scrollbar will be drawn from. The width defines the horizontal length of the scrollbar while the height defines the height. The last inertia paramter adds inertia to te scoll wheel.
    
-   #### scrollbar.getPos()
    
    Returns the value of the current position of the scrollbar.
    
-   #### [map(value, start1, stop1, start2, stop2)](https://processing.org/reference/map_.html)
    
    Like the map function in arduino, it is used to scale a value from limit start1 and stop1 to a value of limit start2 and stop2.
    

  

The Scrollbar Example from which I based my code on can be found [here.](https://processing.org/examples/scrollbar.html)

* * *

<figure>
  <img src="/images/fabacademy/week-16/simpleScrollbarProcessing.jpg" alt="Simple Scroll Bar in Processing" loading="lazy" />
  <figcaption>Simple Scroll Bar in Processing</figcaption>
</figure>

## Making a control Interface for my BLDC Drive System Using a Scrollbar

### Objective:

-   Communicating with my Board via Serial at 9600bauds
-   Sending the value from a scrollbar to control a BLDC motor(for the scrollbar using the previous Hscrollbar example)
-   Reading A0 pin from the Arduino to create a bargraph on the Processing Sketch, will be using the rect() function in processing to create my own bar graph.

* * *

### Processing Code:

[Download simpleScrollbar.pde](/files/fabacademy/week-16/simpleScrollbar.pde)

* * *

### Arduino Code:

[motoInterfaceFirmware.ino](/files/fabacademy/week-16/motoInterfaceFirmware.ino)

### Demonstration:

* * *

## Exporting my app as a standalone executable

Processing allows you to export your processing application as standalone executables. I find this the most useful feature of processing. If you embed Java into the executable like I did, the host machine doesn't need Java installed; otherwise it does.

<figure>
  <img src="/images/fabacademy/week-16/processingExport.jpg" alt="Multi Platform Export Options in Processing" loading="lazy" />
  <figcaption>Multi Platform Export Options in Processing</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-16/processingExport1.jpg" alt="Large file size because Java is Embedded into the Executable" loading="lazy" />
  <figcaption>Large file size because Java is Embedded into the Executable</figcaption>
</figure>

## Downloads

### Software:

-   [Processing 3.5.3 (x64) Windows ZIP](http://download.processing.org/processing-3.5.3-windows64.zip)

### Eagle Project File for Board:

-   [PxFDuino v1.0](</files/fabacademy/week-16/pixelFace mainboard.zip>)

### Code:

-   [SimpleWindow.pde](/files/fabacademy/week-16/simpleWindow.pde)
-   [SerialDuplexTest.pde](/files/fabacademy/week-16/SerialDuplexTest.pde)
-   [ProcessingSerialDuplex.ino](/files/fabacademy/week-16/processingSerialDuplex.ino)
-   [Download simpleScrollbar.pde](/files/fabacademy/week-16/simpleScrollbar.pde)
-   [Download simpleScrollbar.pde](/files/fabacademy/week-16/simpleScrollbar.pde)
-   [motoInterfaceFirmware.ino](/files/fabacademy/week-16/motoInterfaceFirmware.ino)

## Learning Outcomes

-   I learnt how to make an Application interface using Processing.
-   I learnt how to communicate with Serial devices using the Serial library in processing.
-   I learnt basic GUI programming in Processing to create and manipulate scrollbars and basic shapes.

### What I'd like to Explore more:

-   I'd like to explore python when I get the time.

  

* * *
