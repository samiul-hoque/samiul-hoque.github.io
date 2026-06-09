---
title: "Networking & Communications"
week: 14
assignment: "Design and build a wired or wireless network connecting at least two nodes."
heroImage: "/images/fabacademy/week-14/heroshot.jpg"
gallery:
  - "/images/fabacademy/week-14/heroshot.jpg"
  - "/images/fabacademy/week-14/heroImage.jpg"
  - "/images/fabacademy/week-14/flowchart.jpg"
  - "/images/fabacademy/week-14/controller.jpg"
  - "/images/fabacademy/week-14/controller1.jpg"
  - "/images/fabacademy/week-14/controlboard.jpg"
  - "/images/fabacademy/week-14/controlboard1.jpg"
  - "/images/fabacademy/week-14/pixelfaceboard.jpg"
  - "/images/fabacademy/week-14/i2cScanner.jpg"
  - "/images/fabacademy/week-14/pxfboard.jpg"
  - "/images/fabacademy/week-14/balloon.jpg"
  - "/images/fabacademy/week-14/box.jpg"
---

## Assignment

Design and build a wired or wireless network connecting at least two nodes.

## Background — prior networking work

Before Fab Academy I'd already built two RF communication systems:

**Community internet router:** Mikrotik / openWRT / CoovaChilli hotspot network — 900 users across 5 nodes, 5,088 GB of data served. (This became the WiFi Picchi project.)

**High-altitude balloon GPS tracker:** Radiometrix NTX-2B 433MHz transmitter + Ublox Neo-6M GPS on Raspberry Pi. Peak altitude: 32,450m. Displacement: 68.8km. Temperature range: −25°C to +40°C.

## Three-board network for PixelFace

**Board 1 — Transmitter (handheld controller):** ATmega328p at 8MHz 3.3V, nRF24L01+ and ADXL345 onboard, AMS1117 3.3V for the RF module.

**Board 2 — Control board (receiver / servo driver):** ATmega328p at 20MHz 5V, dedicated 3.3V rail for nRF24L01, LM2940 for MG995 servo power, N-MOSFET gate for 12V LED strip, double-sided FR1 with ground plane.

**Board 3 — PixelFace main board:** ATmega328p at 20MHz 5V, high-current LED management, ESC connectors, optical encoder interrupt pins.

## Protocol chain

```
ADXL345 (I²C, 0x53)
  → ATmega328p (Board 1)
  → nRF24L01+ (SPI, RF24 library, 2Mbps, channel 124, PA_MAX)
  → ATmega328p (Board 2)
  → I²C bus
  → ATmega328p (Board 3)
  → Serial Monitor
```

**nRF24L01+ config:** Dual-pipe addressing; data payload: integer array of 3 elements.
