---
title: "Mechanical & Machine Design"
week: 15
assignment: "Group project: design and build a machine including mechanisms, actuation, automation, and application."
heroImage: "/images/fabacademy/week-15/controlBoard.jpg"
gallery:
  - "/images/fabacademy/week-15/gearassembly3.jpg"
  - "/images/fabacademy/week-15/groupworkblockdiagram1.jpg"
  - "/images/fabacademy/week-15/groupworkblockdiagram2.jpg"
  - "/images/fabacademy/week-15/control board schematics.jpg"
  - "/images/fabacademy/week-15/controlboardbrd.jpg"
  - "/images/fabacademy/week-15/controlboard1.jpg"
  - "/images/fabacademy/week-15/controller schematics.jpg"
  - "/images/fabacademy/week-15/controllerbrd.jpg"
  - "/images/fabacademy/week-15/controller1.jpg"
  - "/images/fabacademy/week-15/controlBoard.jpg"
  - "/images/fabacademy/week-15/controller11.jpg"
  - "/images/fabacademy/week-15/controller2.jpg"
---

## Assignment

Group project: design and build a machine including mechanisms, actuation, automation, and an application. Covers weeks 15 and 17.

## The machine — motorised marble maze

Five people, very different backgrounds. We built a Victorian-era marble maze with a motorised ball-lift mechanism. Two variants of the machine were built using identical electronics but different control methods:

- **Variant A:** Accelerometer glove controller
- **Variant B:** Joystick controller

I was nominally on electronics and firmware. That expanded to include mechanical CAD for parts of the mechanism as the week progressed. Everyone ended up doing everyone's job by the end.

The result was, against expectations, genuinely beautiful.

## My contribution — electronics

### Control board (main, installed in machine)

ATmega328p at 20MHz 5V. Dedicated 3.3V rail for nRF24L01. LM2940 regulator for two MG995 servo motors. N-MOSFET gate for a 12V LED strip. Hardware I2C and serial.

### Controller board (handheld transmitter)

ATmega328p at 8MHz 3.3V. Integrated nRF24L01+ and ADXL345 accelerometer. Joystick module connector.

Both boards used the nRF24L01+ RF link at 2Mbps with the RF24 library — same architecture as the Week 14 networking assignment.
