---
title: "Input Devices"
week: 11
assignment: "Measure something; add a sensor to a microcontroller board and read data."
heroImage: "/images/fabacademy/week-11/schematic_controllerboard.jpg"
gallery:
  - "/images/fabacademy/week-11/adxl345.jpg"
  - "/images/fabacademy/week-11/joystick.jpg"
  - "/images/fabacademy/week-11/encoder.jpg"
  - "/images/fabacademy/week-11/opticalencoder.jpg"
  - "/images/fabacademy/week-11/schematic_controllerboard.jpg"
  - "/images/fabacademy/week-11/layout_controller.jpg"
  - "/images/fabacademy/week-11/controllerMilling.jpg"
  - "/images/fabacademy/week-11/controllerMilling1.jpg"
  - "/images/fabacademy/week-11/opticalencoderburnt.jpg"
  - "/images/fabacademy/week-11/opticalencodernewordered.jpg"
---

## Assignment

Measure something; add a sensor to a self-designed microcontroller board and read the data.

## Sensors tested

### ADXL345 accelerometer

3-axis, 13-bit resolution, ±16g range, SPI/I2C, 3.3V. Detected at I2C address 0x53. Used the SparkFun ADXL345 library: `powerOn()`, `setRangeSetting()`, `readAccel()`. Clean output — this became the main input for the Week 14 and Week 15 wireless controller.

### Joystick module

PS2-style dual potentiometers, 5V supply, read on Arduino analog pins A6/A7. Straightforward to use.

### KY-040 rotary encoder

2-bit gray code, 20 pulses per 360°, with a pushbutton. Used hardware interrupts for ISR-based counting so no pulses are dropped between the main loop iterations.

### Quadrature optical encoders (100 lines, 22mm)

5V TTL output. Initial unit: the photodiode burned out. Replacement unit showed channel alignment issues — the A/B channels were not 90° apart as expected, making reliable direction detection impossible.

**Conclusion:** No datasheet = don't buy. After this failure, switched the final project encoder plan to a 44E hall-effect sensor, which worked correctly.

## Custom board — 328p Controller (3.3V)

Designed for the controller role in the PixelFace system:

- I2C bus with ADXL345 filtering capacitors
- Joystick breakout connector
- nRF24L01+ and HC-05 interfaces (RF + Bluetooth)
- 8MHz resonator (3.3V operation)
- AMS1117 3.3V regulator for the RF module

## Group work

Oscilloscope probing of the quadrature encoder signals to visualise the phase relationship between channels. The phase shift between A and B determines direction; with the faulty encoder, both channels were nearly in phase.
