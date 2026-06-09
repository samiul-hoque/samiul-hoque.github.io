---
title: "Mechanical & Machine Design"
week: 15
assignment: "Group project: design and build a machine including mechanisms, actuation, automation, and application."
heroImage: "/images/fabacademy/week-15/gearassembly3.jpg"
gallery: []
---
## Assignment

[Group Assignment](http://fab.academany.org/2019/labs/cept/mechanicaldesign.html)  
  

-   Design a machine that includes mechanism+actuation+automation.
-   Build the mechanical parts and operate it manually.
-   Document the group project and your individual contribution.

## What I made this Week

<figure>
  <img src="/images/fabacademy/week-15/gearassembly3.jpg" alt="" loading="lazy" />
</figure>

## Groupwork Responsibilities:

With our Fab Lab group being mostly design students, I was given the responsibility to make the Electronics for our Group Projects. Since we were a group of five students, we decided to make two marble mazes instead of one, each working on different mechanisms. After several hours of discussion, I figured the basic electronics block diagram for our circuitry.

### Group 1:

<figure>
  <img src="/images/fabacademy/week-15/groupworkblockdiagram1.jpg" alt="" loading="lazy" />
</figure>

### Group 2:

<figure>
  <img src="/images/fabacademy/week-15/groupworkblockdiagram2.jpg" alt="" loading="lazy" />
</figure>

-   Both Group Had different Mechanisms to move the Maze, but they both will be using the same two servos.
-   Group 1 will be using an Accelerometer in a glove to control the maze while Group 2 will use a joystick module to control it.
-   For aesthetics, we will be using 12v LED strips.

## Groupwork: Designing the boards

Since I am a lazy person, I decided to make a single pair of boards which would work for both the groups. I made the schematics for the controller and the control board while considering that the control board will be the same for both the groups while the controller would have pinouts for both tht accelerometer and the joystick module and these are what I came up with.

More on these boards can be found in my [Networking Week Documentation.](/projects/fab-academy/week-14/)

### Control Board:

<figure>
  <img src="/images/fabacademy/week-15/control board schematics.jpg" alt="Control Board Schematics" loading="lazy" />
  <figcaption>Control Board Schematics</figcaption>
</figure>

### Features:

-   Atmega328p 20MHz running on 5v
-   Seperate 3.3v power for nrF24L01
-   Seperate power management for MG995 Servos using LM2940
-   Control Circuit for 12v LED strips using N-Mosfets
-   Onboard Devices: nrF24L01, connecting port for HC-05
-   Hardware i2c and Serial pinouts

<figure>
  <img src="/images/fabacademy/week-15/controlboardbrd.jpg" alt="Control Board Schematics" loading="lazy" />
  <figcaption>Control Board Schematics</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-15/controlboard1.jpg" alt="Control Board Schematics" loading="lazy" />
  <figcaption>Control Board Schematics</figcaption>
</figure>

### Controller Board:

<figure>
  <img src="/images/fabacademy/week-15/controller schematics.jpg" alt="Controller Board Schematics" loading="lazy" />
  <figcaption>Controller Board Schematics</figcaption>
</figure>

### Features:

-   Atmega328p 8MHz running on 3.3v
-   Onboard Devices: nrF24L01, ADXL345
-   Hardware i2c and Serial pinouts
-   Pinout to Connect Joystick Module

<figure>
  <img src="/images/fabacademy/week-15/controllerbrd.jpg" alt="Control Board Schematics" loading="lazy" />
  <figcaption>Control Board Schematics</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-15/controller1.jpg" alt="Control Board Schematics" loading="lazy" />
  <figcaption>Control Board Schematics</figcaption>
</figure>

## Final Boards:

<figure>
  <img src="/images/fabacademy/week-15/controlBoard.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-15/controller11.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-15/controller2.jpg" alt="" loading="lazy" />
</figure>

[Mainboard Final Code](/files/fabacademy/week-15/mainBoardFinal.ino)

[Controller1\_joystick Final Code](/files/fabacademy/week-15/mainBoardFinal.ino)

[Controller2\_adxl345 Final Code](/files/fabacademy/week-15/mainBoardFinal.ino)
