---
title: "Interface & Application Programming"
week: 16
assignment: "Write an application that interfaces with a hardware input or output device."
heroImage: "/images/fabacademy/week-16/application.jpg"
gallery:
  - "/images/fabacademy/week-16/simpleWindowProcessing.jpg"
  - "/images/fabacademy/week-16/simpleScrollbarProcessing.jpg"
  - "/images/fabacademy/week-16/application.jpg"
  - "/images/fabacademy/week-16/processingExport.jpg"
  - "/images/fabacademy/week-16/processingExport1.jpg"
---

## Assignment

Write an application that interfaces a user with an input and/or output device.

## Platform — Processing 3.5.3

Processing is a free, open-source environment aimed at visual arts and creative computing. The syntax is nearly identical to Arduino, which made it a natural choice for anyone already comfortable with the microcontroller side.

Key functions: `setup()`, `draw()`, `keyPressed()`, `size()`, `background()`, `exit()`. Serial communication via the built-in Serial library at 9600 baud.

## BLDC motor control interface

Built an interactive scrollbar (using Processing's `Hscrollbar` class) that maps position to a control value. The value is sent over serial to the ATmega328p board, which translates it into an ESC throttle command.

The screen also displays a live bargraph showing the current motor speed.

The `map()` function translates the scrollbar position (0 to width) to the ESC control range (0 to 180).

## Export

Processing can export standalone `.exe` files (requires Java runtime on the target machine). Built and tested the export — worked correctly on a clean Windows installation.
