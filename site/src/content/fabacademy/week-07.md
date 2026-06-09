---
title: "Electronics Design"
week: 7
assignment: "Redraw the echo hello-world board; add a button and an LED; mill, stuff, and test it."
heroImage: "/images/fabacademy/week-07/heroshot2.jpg"
gallery: []
---
## Assignment

-   #### [Group project](http://fab.academany.org/2019/labs/cept/electronicsdesign.html) :
    
    Using the test equipment in your lab to observe the operation of a microcontroller circuit board. Which can be found [here.](http://fab.academany.org/2019/labs/cept/electronicsdesign.html)
-   #### Individual project:
    
    1.  Redraw the echo hello-world board
    2.  Adding (at least) a button and LED (with current-limiting resistor)
    3.  Check the design rules, make it, and test it

## What I made this week

<figure>
  <img src="/images/fabacademy/week-07/heroshot2.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-07/soldering3.jpg" alt="" loading="lazy" />
</figure>

## 1\. Electronics Basics

#### Circuits and the Flow of Current

* * *

Before beginning drawing or designing my own circuit I need to explain how a circuit works and how the flow of current works in a circuit. I found [this](https://learn.sparkfun.com/tutorials/what-is-a-circuit) tutorial by sparkfun to be the best explanation of what is a circuit and how it works. For Voltage and current, [this](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law) tutorial, again by sparkfun, was very helpful.

<figure>
  <img src="/images/fabacademy/week-07/circuitflow.gif" alt="Electron Flow in a circuit- illustration by Sparkfun" loading="lazy" />
  <figcaption>Electron Flow in a circuit- illustration by Sparkfun</figcaption>
</figure>

#### Link

-   [What is a Circuit?- by Sparkfun Electronisc](https://learn.sparkfun.com/tutorials/what-is-a-circuit)
-   [Voltage, Current, Resistance, and Ohm's Law- by Sparkfun Electronics](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law)

  
  

#### Components: Active vs Passive components

* * *

To make circuits, we'll need components. All electronics components can be divided into two basic groups.

-   ##### Active Components:
    
    An active device is any type of circuit component with the ability to electrically control electron flow (electricity controlling electricity). In order for a circuit to be properly called electronic, it must contain at least one active device
-   ##### Passive Components
    
    Components incapable of controlling current by means of another electrical signal are called passive devices. Resistors, capacitors, inductors, transformers, and even diodes are all considered passive devices

This Infographic by Codrey illustrates Active vs Passive Electronics devices/components.

<figure>
  <img src="/images/fabacademy/week-07/Active-and-Passive-Elements-Infographic-768x1395.png" alt="" loading="lazy" />
</figure>

Learning what each of these components do is a long and tedious process. But to get started, I found [this tutorial](https://www.sparkfun.com/tutorials/57) by Sparkfun Electronics very helpful.  

As for my own introduction to electronics back in 2012, I read [Robotics By Beginners,](https://www.apress.com/in/book/9781430227489)by David Cook which was available at my local library.  
[The Art of Electronics](https://artofelectronics.net/) is a really good one, which I wish I had read earlier.

<figure>
  <img src="/images/fabacademy/week-07/roboticsforbeginners.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-07/artofelectronics.jpg" alt="" loading="lazy" />
</figure>

#### Link

-   [Active & Passive Components- by Codrey](https://www.codrey.com/dc-circuits/active-and-passive-elements/)
-   [Beginning Embedded Electronics- by SparkFun Electronics](https://www.sparkfun.com/tutorials/57)

  
  

#### Circuit Design Software

* * *

To make life easier for us electronics enthusiasts, there is a myriad of circuit design softwares. Some of them are free, some of them have limited capabilities , while some are industry grade, like [Altium](http://), which can cost upto 7,500$ for a one year license.  

##### Workflow:

Despite of having many electronics design softwares, most of them work on the same basic workflow.

1.  First you make a Schematic of your circuit
2.  Then you pick appropriate parts for your schematic
3.  Then you make a PCB for the circuit you designed with your designated parts

#### Circuit Design Software Jargon

-   ##### Schematic:
    
    A Schematic is a wire diagram of your circuit. A free-hand drawing like this can also be called a schematic
    
    <figure>
      <img src="/images/fabacademy/week-07/schematicexample.jpg" alt="Freehand schematic of the parts I wanted to add to my hello echo board" loading="lazy" />
      <figcaption>Freehand schematic of the parts I wanted to add to my hello echo board</figcaption>
    </figure>
    
-   ##### Component Package & Footprints
    
    Electronics components come in different sizes and shapes. The integral part inside though, is VERY VERY small. Which means, that the same IC can come in a tiny package, or it might come in a big package with better thermal properties. As for example, the brains of this 8 pin through hole component can be seen in this image, which is not even half of the total package size.  
    This method of taking out the externals of an IC to reveal it's inner workings is called 'Decapping'
    
    <figure>
      <img src="/images/fabacademy/week-07/decapping.jpg" alt="Decapping an IC- illustration by SparkFun" loading="lazy" />
      <figcaption>Decapping an IC- illustration by SparkFun</figcaption>
    </figure>
    
    For ease of use electronic components usually come in some generalized package dimensions. As for example, the ATTINY44 we work with at our lab comes in the SOIC-14 package. These packages make it very convinient for the components to be used in Electronics Design softwares.  
      
    A component footprint on the other hand is the design/placement of a component on copper on a circuit board. It is the same size as the package of the component and sometimes, for rare components you might have to make your own component footprints.
    
    <figure>
      <img src="/images/fabacademy/week-07/packages.jpg" alt="Various Package Types- Illustration by Sparkfun" loading="lazy" />
      <figcaption>Various Package Types- Illustration by Sparkfun</figcaption>
    </figure>
    
    #### Links
    
    -   [All About IC packages- by SparkFun ELectronis](https://learn.sparkfun.com/tutorials/integrated-circuits/all#ic-packages)
    
-   ##### Component Library
    
    A component Library is a a collection of the pin mapping and the PCB footprints of an electronic component. This makes designing PCBs an easy process for us all. Component Libraries will vary for different design softwares. A good source of component libraries for KiCAD and Eagle is [SnapEDA.](https://www.snapeda.com/)
    

#### Links

-   [SnapEDA](https://www.snapeda.com/)

-   ##### Wires and Terminals
    
    As the name suggests, wires are just plain wires. They will connect one point with another in a schematic. A terminal is a junction of wires, where they intersect.
    
-   ##### Traces
    
    Traces are the manifestation of the wires in a PCB made on the copper layer of a PCB. Trace width can vary according to the design but they too have certain standard values. Traces are generally calculated in Mils or Thous.
    
-   ##### Routing
    
    The process of connecting these traces is called routing. It is done according to the schematic and can be done automatically in some design softwares.
    
-   ##### Layers
    
    Layers in a PCB is the biggest factor contributing to the expense and ease of manufacturing. Usually we will be working with Single and Double layered boards. It gets much more complex and expensive in adding more boards. More on PCBs and layers can be found [here.](https://learn.sparkfun.com/tutorials/pcb-basics)
    

#### Links

-   [PCB Basics by SparkFun Electronics](https://learn.sparkfun.com/tutorials/pcb-basics)

## 2\. Disecting Neil's Hello Echo Board

Here is all I could find about Neil's Hello Echo board.

<figure>
  <img src="/images/fabacademy/week-07/hello.ftdi.44.png" alt="Components" loading="lazy" />
  <figcaption>Components</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/hello.ftdi.44.traces.png" alt="Traces" loading="lazy" />
  <figcaption>Traces</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/hello.ftdi.44.components.jpg" alt="Soldered Board" loading="lazy" />
  <figcaption>Soldered Board</figcaption>
</figure>

## \> Components on the original Hello Echo Board

#### ATTiny44:

The board is centered around a [ATTiny44](http://fab.cba.mit.edu/classes/863.09/people/ryan/week5/ATtiny44%20Data%20Sheet.pdf) microcontroller.  
The Specs for it can be found on [microchip's website.](https://www.microchip.com/wwwproducts/en/ATtiny44)

<figure>
  <img src="/images/fabacademy/week-07/tiny44.jpg" alt="ATTiny44 SOIC-14 Package" loading="lazy" />
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

#### 10k Pullup Resistor

There is a 10k Pullup Resistor for the reset pin. As the name suggests, this resistor pulls the voltage up to 5v. More on Pullup resistors can be found [here.](https://learn.sparkfun.com/tutorials/pull-up-resistors/all) We are using standard 1206 package resistors for the Fab Academy.

#### 20Mhz resonator

Resonators function like crystals but stick closer to their specified frequency over a full temperature range. These resonators are +/-0.5% or better from -20C-+80C. These resonators have built-in load capacitors so no external caps are needed.

#### 1uF Power Capacitor

The purpose of this capacitor is to smooth out the power supply for the microcontroller.

#### 6Pin ISP Programmer Connector

The 6pin ISP programmer connector is used to program the ATTINY44. If you look back, the FABISP also has an identical connector.

#### FTDI Connector

The FTDI connector is for communication with a FTDI USB Serial chip. Luckily I have one, but I assume that we are going to make one in the communications week.

## \> Schematic of the original hello echo board

After analyzing the circuit, this is the schematic I came up with.

<figure>
  <img src="/images/fabacademy/week-07/echoschematic.jpg" alt="HelloEcho Board Schematic" loading="lazy" />
  <figcaption>HelloEcho Board Schematic</figcaption>
</figure>

## \> Checking the hello echo firmware by Neil

I was not sure about the Tx and Rx pins so I had a look at Neil's firmware code for the hello Echo board. Which can be found [here.](http://academy.cba.mit.edu/classes/embedded_programming/hello.ftdi.44.echo.c) [Download as .ino](/files/fabacademy/week-07/helloEchoFirmware.ino) And I found PA0 was defined the serial pin in  
PA1 was defined as serial pin out.

## 3\. Planning out my Circuit

So I decided not to change the basics of the Hello Echo board, because I want my board to be compatible with Neil's firmware to check the Hello Echo. But, I would like to add some components to it and create my own board based on this schematic.  
The components that I decided to add were;

-   A pusbutton
-   2 programmable LEDs
-   One Power LED

### \>Adding the Pushbutton:

* * *

A pushbutton is a tactile switch that connects two of its pins when the button is pressed. We can easily take and input on a microcontroller pin using a pull down resistor and a pushbutton. The logic is that the input pin will be pulled down using a high value resistor, which will always give a LOW on that I/O pin.  
But! when the button is pressed, it will get connected to 5V and give a HIGH reading.  
This is the easiest way to add a pushbutton to a circuit. But it has a problem. And it is called bouncing.

<figure>
  <img src="/images/fabacademy/week-07/pushbutton.jpg" alt="Bare Minimum Push button Circuit" loading="lazy" />
  <figcaption>Bare Minimum Push button Circuit</figcaption>
</figure>

  

<figure>
  <img src="/images/fabacademy/week-07/debounce.jpg" alt="Debounced Pushbutton Circuit" loading="lazy" />
  <figcaption>Debounced Pushbutton Circuit</figcaption>
</figure>

I usually use a debouncing technique that utilizes a capacitor and resistors. More on this topic can be found [here.](https://hackaday.com/2015/12/09/embed-with-elliot-debounce-your-noisy-buttons-part-i/)

#### Links

-   [Embed with Elliot: Debounce Your Noisy Buttons, PART I - Hackaday](https://hackaday.com/2015/12/09/embed-with-elliot-debounce-your-noisy-buttons-part-i/)

  
  

### \> Adding a Power LED

* * *

I wanted to add a power LED to my board because I wanted to have a visual representation of it if it was getting power or not. I didn't want it to be super bright, so I just added a 1k Resistor in series with it. Here's the Schematic for that.

<figure>
  <img src="/images/fabacademy/week-07/powerled.jpg" alt="Power LED Circuit" loading="lazy" />
  <figcaption>Power LED Circuit</figcaption>
</figure>

  
  

### \> Adding the Two Programmable LEDs

* * *

For the two Programmable LEDs, I connected their ground pin to GND, and the positive terminal went to a Microcontoller input through a 1k resistor.

<figure>
  <img src="/images/fabacademy/week-07/leds.jpg" alt="Power LED Circuit" loading="lazy" />
  <figcaption>Power LED Circuit</figcaption>
</figure>

After Planning out my Circuit, I went on to design everything on a Circuit Design Software.

## 4\. Software Selection

For the Electronics Design software, I had multiple options. I have some experience working with [Proteus](https://www.labcenter.com/) and [Eagle](https://www.autodesk.com/products/eagle/overview) as my previous workplace used them quite extensively. There was [KiCAD](http://kicad-pcb.org) , [EasyEDA](https://easyeda.com/) , [tinkerCAD](https://www.tinkercad.com/) which all had their own perks.  
  

## 5\. Eagle CAD

EAGLE is a scriptable electronic design automation application with schematic capture, printed circuit board layout, auto-router and computer-aided manufacturing features. EAGLE stands for Easily Applicable Graphical Layout Editor.  
It is now a part Autodesk which has added features where I can directly link my circuits with my Fusion360 work. I will be using Eagle 9.31 with an Educational License for the Fab Academy Course.

<figure>
  <img src="/images/fabacademy/week-07/eaglesplash.jpg" alt="" loading="lazy" />
</figure>

## Why Eagle?

I decided to choose between KiCAD and Eagle and chose Eagle after trying out KiCAD for a bit. I realized that KiCAD had a steeper learning curve and since I was already proficient with eagle, I didn't want to waste any time and get to work.

Here are the main perks for eagle:

-   Cross-platform -- EAGLE can run on anything: Windows, Mac, even Linux. This is a feature not too many other PCB design softwares can boast.
-   Lightweight -- EAGLE is about as svelte as PCB design software gets. It requires anywhere from 50-200MB of disk space (compared to the 10+GB more advanced tools might require). The installer is about 25MB. So you can go from download to install to making a PCB in minutes.
-   Free/Low-Cost -- The freeware version of EAGLE provides enough utility to design almost any PCB in the SparkFun catalog. An upgrade to the next license tier (if you want to make a profit off your design) costs at least two orders of magnitude less than most high-end tools.
-   Community support -- For those reasons, and others, EAGLE has become one of the go-to tools for PCB design in the hobbyist community. Whether you want to study the design of an Arduino board or import a popular sensor into your design, somebody has probably already made it in EAGLE and shared it.

## Eagle Workflow

The Eagle workflow consists of two main sections.

-   The Schematic Design, which is governed by the ERC(Electrical Rule Check)
-   The Board Design, which is governed by the DRC(Design Rule Check)

<figure>
  <img src="/images/fabacademy/week-07/eagleworkflow.jpg" alt="Illustration by Gautam Prakash (Fab Academy2017)" loading="lazy" />
  <figcaption>Illustration by Gautam Prakash (Fab Academy2017)</figcaption>
</figure>

#### Links

-   [Schematics Basics Part 3-ERC by Eagle Academy](https://www.autodesk.com/products/eagle/blog/schematic-basics-part-3-erc/)
-   [Schematics Basics Part 3-DRC by Eagle Academy](https://www.autodesk.com/products/eagle/blog/design-rule-check-pcb-layout-basics-3/)

## Installing Eagle

Eagle is not a free Circuit Design Software. But there is a free version available for Hobbyists and Students. There is a Standard version which is available for everyday engineering and then there's the premium version which can be used for production level PCB designs. This illustration shows a comparison of all the versions.

  

I will be using the free version of Eagle as it gets all my work done without any issues. It can be downloaded for multiple platforms from[](https://www.autodesk.com/products/eagle/free-download)

<figure>
  <img src="/images/fabacademy/week-07/eagleversions.jpg" alt="Different Eagle Versions" loading="lazy" />
  <figcaption>Different Eagle Versions</figcaption>
</figure>

#### Links

-   [How to Install and Setup Eagle- Sparkfun Electronics](https://learn.sparkfun.com/tutorials/how-to-install-and-setup-eagle)

## Creating a Project

<figure>
  <img src="/images/fabacademy/week-07/eagleprojects0.jpg" alt="Creating a new project" loading="lazy" />
  <figcaption>Creating a new project</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/eagleprojects.jpg" alt="Green Indicates Active Project, double click to activate" loading="lazy" />
  <figcaption>Green Indicates Active Project, double click to activate</figcaption>
</figure>

## Making a Schematic

First We have to create a schematic file by right clicking on the active project, and creating a schematic. We can start editing the schematic by double clicking on it.

<figure>
  <img src="/images/fabacademy/week-07/eagleschematic0.jpg" alt="Creating A schematic" loading="lazy" />
  <figcaption>Creating A schematic</figcaption>
</figure>

This is how the Schematic Editor Window Looks like

<figure>
  <img src="/images/fabacademy/week-07/eagleschematic1.jpg" alt="Schematic Editor Interface" loading="lazy" />
  <figcaption>Schematic Editor Interface</figcaption>
</figure>

## Picking Components

<figure>
  <img src="/images/fabacademy/week-07/eagleparts.jpg" alt="Parts picker" loading="lazy" />
  <figcaption>Parts picker</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/eagleparts1.jpg" alt="Search with Asterisks to search substrings" loading="lazy" />
  <figcaption>Search with Asterisks to search substrings</figcaption>
</figure>

## Installing the Fab Library

### Library Manager

<figure>
  <img src="/images/fabacademy/week-07/eaglelibraries.jpg" alt="" loading="lazy" />
</figure>

You can bring up the library manager from the parts manager menu. Eagle 9.3 has the option of adding managed libraries here from the 'available' tab. You can automatically install and keep your libraries updated from here.

### Adding Custom Libraries

<figure>
  <img src="/images/fabacademy/week-07/eaglelibraries1.jpg" alt="" loading="lazy" />
</figure>

For custom library you just have to download the library and use the browse option in the library manager to open it. The [Fab Library](https://github.com/Academany/FabAcademany-Resources/blob/master/files/fab.lbr) can be downloaded from [here.](/files/fabacademy/week-07/fab.lbr)

## Connecting Wires

<figure>
  <img src="/images/fabacademy/week-07/wirenet.jpg" alt="" loading="lazy" />
</figure>

Wires can be connected directly using Nets.

<figure>
  <img src="/images/fabacademy/week-07/wirename.jpg" alt="" loading="lazy" />
</figure>

They can also be connected using the name attribute.

## Checking for errors: ERC

The ERC is a tool to check for errors in a schematic. It can be found under the tools menu. As for example here, ERC is warning me that the GND of IC1 is connected to n$1, which is the name for the GND pin of the FTDI connector. It is just a warning to show if I want to approve of this connection or not.

<figure>
  <img src="/images/fabacademy/week-07/erc.jpg" alt="ERC" loading="lazy" />
  <figcaption>ERC</figcaption>
</figure>

## Creating a board file from a schematic

After placing all the components I required, I was ready with my schematic.

After placing all the components I required, I was ready with my schematic.

<figure>
  <img src="/images/fabacademy/week-07/eagleschematicfinal.jpg" alt="Final Schematic for my HelloEcho Board" loading="lazy" />
  <figcaption>Final Schematic for my HelloEcho Board</figcaption>
</figure>

To Create the board file, I just clicked on the brd icon on top and Eagle automatically generated it for me.  
\*Note that You have to keep both your board and schematic window open.

<figure>
  <img src="/images/fabacademy/week-07/createbrd0.jpg" alt="Creating a .brd file from Schematic" loading="lazy" />
  <figcaption>Creating a .brd file from Schematic</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/createbrd1.jpg" alt="the board editor window" loading="lazy" />
  <figcaption>the board editor window</figcaption>
</figure>

## Placing Components in a board layout

Now that I had my schematic prepared, and board file generated. I started to place my components in a layout where I could connect all the wires without overlapping any of them. I first started with a general layout, without much detail to the distancing,

<figure>
  <img src="/images/fabacademy/week-07/" alt="" loading="lazy" />
</figure>

## DRC, Design Rule Check

The DRC is the tool that governs our PCB design. It can be brought up from tools > DRC. The minimum Trace width, the minimum distances between various components can all be configured here, and if we break any of the rules during the design process, DRC will help us resolve those.

My DRC rules were the following;

Clearances:-   16 mil on everything

Sizes:-   Minimum Width: 16mil
-   Minimum Drill: 0.8 mm

<figure>
  <img src="/images/fabacademy/week-07/drc.jpg" alt="DRC- Clearances" loading="lazy" />
  <figcaption>DRC- Clearances</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/drc1.jpg" alt="DRC- Sizes" loading="lazy" />
  <figcaption>DRC- Sizes</figcaption>
</figure>

## Manual Routing

Routing Can be done by clicking on the route tool, the pads that need to be connected are highlighted in red.

<figure>
  <img src="/images/fabacademy/week-07/routing1.jpg" alt="Routing Tool" loading="lazy" />
  <figcaption>Routing Tool</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/routing2.jpg" alt="Routing- pads higlighted" loading="lazy" />
  <figcaption>Routing- pads higlighted</figcaption>
</figure>

## Auto-Router

The Autorouter is a handy tool which helped me route my PCB. It can be found under the tools menu. Make sure to check the bottom layer as N/A before starting to autoroute. The Autorouter will follow the DRC and try to connect all of your traces. It will help you find closed loops where you need to do manual routing or change the orientation of components to optimize your routing.

<figure>
  <img src="/images/fabacademy/week-07/autorouter.jpg" alt="autorouter- layer settings" loading="lazy" />
  <figcaption>autorouter- layer settings</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/autorouter2.jpg" alt="Autorouting results" loading="lazy" />
  <figcaption>Autorouting results</figcaption>
</figure>

## The Meander Tool

Now if you are not satisfied with your autorouting, or if you want to delete any of your routing, you have to use the meander tool. For removing all traces, the command 'RIPUP;' needs to be used.

<figure>
  <img src="/images/fabacademy/week-07/ripup.jpg" alt="Using the Ripup tool to delete traces" loading="lazy" />
  <figcaption>Using the Ripup tool to delete traces</figcaption>
</figure>

## Exporting your PCB

Eagle has many Export options, but none of them are quite refined. You have to do manual graphics manipulation to get a workable PNG file from a design. For that I started to explore a bit into Eagle Automation Scripts to find a lazier way to export PCBs

<figure>
  <img src="/images/fabacademy/week-07/eagleexport.jpg" alt="Eagle export options" loading="lazy" />
  <figcaption>Eagle export options</figcaption>
</figure>

## Eagle Automation Script

Eagle scripts are text files with eagle commands. You can use them for automating tasts such as changing the width of all traces on a board, changing board size or drawing specific pattern.

#### How to use Eagle Scripts

-   Simply create a text file and open with your preferred text editor, I am using Visual Studio Code.
-   Write your script and save your file. After you're done, just change the extension to .scr
-   Save this file on your Eagle User directory, for windows users, it is usually at `/Documents/Eagle/Scripts`
-   Click on File, Execute Script, Browse to your script to run it.

<figure>
  <img src="/images/fabacademy/week-07/newscript.jpg" alt="Creating a new Script" loading="lazy" />
  <figcaption>Creating a new Script</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/newscript1.jpg" alt="Example Script that rips up all traces" loading="lazy" />
  <figcaption>Example Script that rips up all traces</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/executescript.jpg" alt="Executing an Eagle Script" loading="lazy" />
  <figcaption>Executing an Eagle Script</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/executescript1.jpg" alt="Ripup Script Output" loading="lazy" />
  <figcaption>Ripup Script Output</figcaption>
</figure>

#### More on Eagle Scripts

More info on Eagle Scripts can be found in Eagle's built in Documentation. Click on Help>General Help> Editor Commands

<figure>
  <img src="/images/fabacademy/week-07/eaglecommands.jpg" alt="Eagle Command Lines" loading="lazy" />
  <figcaption>Eagle Command Lines</figcaption>
</figure>

#### Links

-   [Eagle Scripts](https://www.build-electronic-circuits.com/eagle-scripts/)

## The One Click PCB export Script

After a bit of experimenting, I wrote a one click method to export PCBs from Eagle. This script works for single layer layer boards with the board border drawn on the Dimension layer. Change the directory of your exports accordingly and it should work.

 `DISPLAY ALL  RATSNEST  DISPLAY None  DISPLAY Top Pads  set palette white;  EXPORT IMAGE D:\pcb_top.png MONOCHROME 1200;              DISPLAY None  DISPLAY Dimension  EXPORT IMAGE D:\pcb_bottom.png MONOCHROME 800;  DISPLAY ALL  set palette black;    ` 

[Download script](/files/fabacademy/week-07/Export_top_edge.scr)  
  

#### Script Output

<figure>
  <img src="/images/fabacademy/week-07/pcb.jpg" alt="Board file" loading="lazy" />
  <figcaption>Board file</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/pcb_top.png" alt="Exported Top Traces" loading="lazy" />
  <figcaption>Exported Top Traces</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/pcb_bottom.png" alt="Exported Board Outline" loading="lazy" />
  <figcaption>Exported Board Outline</figcaption>
</figure>

#### Links

-   [bestia.io- Export Eagle pcbs quickly](https://bestia.io/eagle-autoexport-png.html)

My eagle project folder can be downloaded from here. [HelloEcho.zip](/files/fabacademy/week-07/helloEcho.zip)

## 6\. Milling

I used our trusty old MDX-20 to mill out our board. I used Fab modules to generate the toolpath and to send it to the machine. More documentation found on milling can be found on my [Electronics production](/projects/fab-academy/week-05/) week, specifically [here](/projects/fab-academy/week-05/) .

The settings I used to mill this board were as follows:

#### Traces (1/64)

-   cut speed: 4
-   cut depth(mm): 0.1
-   tool diameter(mm): 0.4
-   number of offsets: 4
\[This is the number of offset cuts there will be outside the copper trace, increase this to remove more excess copper. -1 will remove copper from the board completely except the traces.\]-   offset overlap(%): 50
-   path error(pixels): 1.1

#### Outlines (1/32)

And these are the Settings for PCB outlines,

-   cut speed: 4
-   cut depth(mm): 0.6
-   Stock Thickness(mm): 1.7
-   tool diameter(mm): 0.4
-   number of offsets: 1
-   offset overlap(%): 50
-   path error(pixels): 1.1
-   image threshhold: .5

<figure>
  <img src="/images/fabacademy/week-07/mill1.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-07/mill2.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-07/mill3.jpg" alt="" loading="lazy" />
</figure>

## 7\. Component Collection

I like to collect my SMD components in masking tape. It makes it easier to collect and document as well. For this board, I made my parts list and went on to collecting the components.

<figure>
  <img src="/images/fabacademy/week-07/components.jpg" alt="" loading="lazy" />
</figure>

  
  
  
  

<table class="alt"><tbody><tr><td>Name</td><td>Quantity</td></tr><tr><td>ATTINY44</td><td>x1</td></tr><tr><td>Resonator 20Mhz</td><td>x1</td></tr><tr><td>1uF ceramic capacitor</td><td>x1</td></tr><tr><td>0.1uF ceramic capacitor</td><td>x1</td></tr><tr><td>10k Resistor</td><td>x2</td></tr><tr><td>1k Resistor</td><td>x4</td></tr><tr><td>Red 1206 LED</td><td>x1</td></tr><tr><td>Green 1206 LED</td><td>x1</td></tr><tr><td>Blue 1206 LED</td><td>x1</td></tr><tr><td>6Pin Double headers for ISP</td><td>x1</td></tr><tr><td>6Pin FTDI Connector</td><td>x1</td></tr></tbody></table>

## 8\. Soldering

With my component collection done, I was ready to solder. I prepared with all the necessary tools and it took about 30 minutes to solder the whole board.

<figure>
  <img src="/images/fabacademy/week-07/solderingprep.jpg" alt="Soldering Preperation" loading="lazy" />
  <figcaption>Soldering Preperation</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/soldering1.jpg" alt="Soldered Board" loading="lazy" />
  <figcaption>Soldered Board</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/soldering2.jpg" alt="Soldered Board" loading="lazy" />
  <figcaption>Soldered Board</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/soldering3.jpg" alt="Two of my boards, because I ripped off the FTDI connector from one" loading="lazy" />
  <figcaption>Two of my boards, because I ripped off the FTDI connector from one</figcaption>
</figure>

## 9\. Programming

To program the board I will be using the Arduino IDE and my FABISP to upload it. I will be powering my circuit using an FTDI Module as a power source.

## Installing Arduino

Arduino can be downloaded free from the official website [here.](https://www.arduino.cc/en/main/software) Installing it is very straight forward.

## Adding TinyCore (support for ATTiny MCU Series to Arduino)

To program the ATTINY microcontroller family using Arduino, I will be using [ATTinyCore,](https://github.com/SpenceKonde/ATTinyCore) which is an Arduino core for ATtiny 1634, 828, x313, x4, x41, x5, x61, x7 and x8 series of microntrollers. The installation instructions are given on the github page and I just followed the Instructions for the Boards Manager Installation Method.

<figure>
  <img src="/images/fabacademy/week-07/tinycore.jpg" alt="TinyCore Installation" loading="lazy" />
  <figcaption>TinyCore Installation</figcaption>
</figure>

If all went right, your arduino should have the ATTiny Core listed on your boards list.

<figure>
  <img src="/images/fabacademy/week-07/tinycore1.jpg" alt="" loading="lazy" />
</figure>

## Uploading a Blink Code

I used a cheap chinese FTDI module to supply power to my HelloEcho Board, which in turn supplied power to my FABISP. So the connection was like this,

1.  the ISP programmer header on my HelloEcho board was connected to the ISP programmer header on the FABISP.
2.  The 5v and GND from my HelloEcho board was connected to the 5v and GND of the FTDI cable.

<figure>
  <img src="/images/fabacademy/week-07/wiring1.jpg" alt="ISP Programmer headers connected" loading="lazy" />
  <figcaption>ISP Programmer headers connected</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/wiring2.jpg" alt="Taking 5v and GND from FTDI module" loading="lazy" />
  <figcaption>Taking 5v and GND from FTDI module</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-07/wiring3.jpg" alt="Powering the whole setup through the FTDI Module" loading="lazy" />
  <figcaption>Powering the whole setup through the FTDI Module</figcaption>
</figure>

Here are the settings I used on arduino to upload the code.

-   Board: ATtiny24/44/84
-   Chip: ATtiny44
-   Clock: 20MHz (external)
-   Programmer: USBTInyISP

Everything else was on default.

<figure>
  <img src="/images/fabacademy/week-07/usbtinysettings.jpg" alt="" loading="lazy" />
</figure>

Then I wrote this code, and uploaded it. [Download Code](/files/fabacademy/week-07/helloEchoBlink.ino)  
  

## Adding more LEDs to the mix

Then I tried blinking the other LED as well. But with a different delay.

[Download Code](/files/fabacademy/week-07/helloEchoBlinkv2.ino)

#### Output:

## Pushbutton Code

On this code, I added the a pushbutton input as a logic to blink different LEDs.  
  

[Download Code](/files/fabacademy/week-07/helloEchoTest.ino)

#### Output:

## 10\. Diffuclties Faced

## Ripped out FTDI Connector

I ripped off my FTDI connector on my first board during plugging out the FTDI connector. I used a different FTDI module later to upload my code from which I only took the 5v and GND.

<figure>
  <img src="/images/fabacademy/week-07/diffculty1.jpg" alt="FTDI connector ripped off" loading="lazy" />
  <figcaption>FTDI connector ripped off</figcaption>
</figure>

## 11\. Learning Outcomes

Since I already had some experience with electronics, I got the chance to explore much further into Eagle.

-   I learnt about Eagle automation Scripts and ULP and made a one click script to export PCBs as PNG files.
-   I learnt why Brian's FabISP had a power isolation on the programming pins, and I used an FTDI cable to supply power to my whole circuit.
-   I learnt how to make modular Eagle Schematics, which came in handy later during my board design.

## 12\. Hero Shots

<figure>
  <img src="/images/fabacademy/week-07/heroshot2.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-07/soldering3.jpg" alt="" loading="lazy" />
</figure>

## Downloads:

#### Neil's Hello Echo Firmware

[.ino](/files/fabacademy/week-07/helloEchoFirmware.ino)

#### My One Click Image Export Script

[.scr](/files/fabacademy/week-07/Export_top_edge.scr)

#### My eagle Project:

[.zip](/files/fabacademy/week-07/helloEcho.zip)

#### Test Code 1: Blinking 1 LED

[.ino](/files/fabacademy/week-07/helloEchoBlink.ino)

#### Test Code 2: Blinking 2 LEDs

[.ino](/files/fabacademy/week-07/helloEchoBlinkv2.ino)

#### Test Code 3: Pushbutton+LEDs blinking

[.ino](/files/fabacademy/week-07/helloEchoTest.ino)

## Learning Outcomes

-   I explored how Neil Wrote his hello echo firmware in C
-   I already knew how to use eagle, I just explored a bit into the new library manager of Eagle.
-   I used my Fab ISP to program my helloEcho boards, both of them worked on the first go.

#### What I need to explore:

-   I need to learn kiCAD. I didn't have much time this week, so I couldn't explore much of it.

  

* * *
