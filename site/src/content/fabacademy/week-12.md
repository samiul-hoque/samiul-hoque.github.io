---
title: "Output Devices"
week: 12
assignment: "Add an output device to a microcontroller board; write code to operate it."
heroImage: "/images/fabacademy/week-12/board.jpg"
gallery:
  - "/images/fabacademy/week-12/schematic.jpg"
  - "/images/fabacademy/week-12/boardv1.jpg"
  - "/images/fabacademy/week-12/milling.jpg"
  - "/images/fabacademy/week-12/milling1.jpg"
  - "/images/fabacademy/week-12/soldering.jpg"
  - "/images/fabacademy/week-12/soldering1.jpg"
  - "/images/fabacademy/week-12/board.jpg"
  - "/images/fabacademy/week-12/oled.jpg"
  - "/images/fabacademy/week-12/bldcesc.jpg"
  - "/images/fabacademy/week-12/powersupply.jpg"
  - "/images/fabacademy/week-12/powersupply3.jpg"
  - "/images/fabacademy/week-12/flex.jpg"
---

## Assignment

Add an output device to a self-designed microcontroller board; write code to operate it.

## Board — PxFDuino v1.0 (ATmega328p TQFP)

Custom board built around the ATmega328p in TQFP package.

**Specs:** 32KB flash, 2KB SRAM, 23 GPIO, 6-channel 10-bit ADC, SPI / I2C / USART, 6 PWM channels.

**Connectors:** Addressable LEDs (3-pin), ESC (3-pin), encoders (4-pin, hardware interrupt pins), FTDI (6-pin), ISP (3×2), I2C breakout (4-pin).

**Power:** AMS1117 5V regulator + 2A buck converter for LED load.

## Routing challenge

The ATmega328p TQFP footprint is too dense to route with a 1/64" bit. Substituted an ATmega88 footprint (identical pinout, slightly larger pads). Also reduced the tool diameter from 0.4mm to 0.38mm. Two air wires that couldn't be routed were bridged using a 0Ω resistor and a physical via.

Created a custom Eagle library part for the CN1584 buck converter (22mm × 16mm, 0.1" header pads) since no existing library part matched the footprint.

## Bootloader

MiniCore, ATmega328, 20MHz external crystal, BOD 2.7V.

## Output 1 — BLDC motor (A2212 13T)

Motor: 1000KV, 12A sustained, 3.17mm shaft, 2S–3S LiPo compatible. ESC: SimonK 30A (40A peak). Control via serial: values 0–180 mapped to motor speed.

**Power measurements:**
- Minimum speed (ESC value 12): 0.20A × 12V = 2.4W
- Maximum speed (ESC value 140): 0.65–0.70A × 12V ≈ 8.4W

## Output 2 — SSD1306 OLED (128×32, I2C)

Used the Adafruit SSD1306 library. Displayed a live bargraph visualisation of the current ESC speed value.

## Output 3 — WS2812B addressable LEDs

24-bit colour, 256 brightness levels per channel. Wiring requirements: 1000µF capacitor across power lines, 300–500Ω resistor on the data line, connect ground before power before data. Testing was delayed pending a capacitor order.
