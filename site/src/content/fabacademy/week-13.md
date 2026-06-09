---
title: "Applications & Implications"
week: 13
assignment: "Propose a final project masterpiece that integrates the range of units covered."
heroImage: "/images/fabacademy/week-13/assemblies.jpg"
gallery:
  - "/images/fabacademy/week-13/povclock.jpg"
  - "/images/fabacademy/week-13/povcylinder.jpg"
  - "/images/fabacademy/week-13/assemblies.jpg"
  - "/images/fabacademy/week-13/rotatingarmhighspeed.jpg"
---

## Assignment

Propose a final project masterpiece that integrates the range of units covered.

## Project — PixelFace POV Display

A rotating LED arm spinning at 1000+ RPM with encoder feedback to blink LEDs in precise sequence, creating a cylindrical persistence-of-vision display showing emojis and other graphics.

**Prior art consulted:** Shaunta Butler's POV Hat, Great Scott's POV Globe (APA102 LEDs + hall-effect sensors).

## What to purchase

- BLDC motor, ESC
- Optical / hall-effect encoders
- 2409 bearings
- WS2812B LEDs
- Buck converter modules

## What to fabricate

- 3-channel slip ring (vinyl-cut copper brushes + bearings + acrylic spacers)
- Gear assembly and coupling
- Rotating LED arm

## Results

**Slip ring:** Worked correctly — continuous electrical contact through the rotation axis with low resistance.

**Arm flexing at 1100 RPM:** Carbon fibre or composite materials recommended for future versions. The PLA arm bent under centrifugal load, causing pixel trailing.

**Encoder failure → 44E hall sensor:** Chinese optical encoders failed. The 44E hall-effect sensor worked reliably.

**Timing at 20MHz / 1100 RPM:** ~440 LED updates per second (2.72ms per update). Switched from FastLED to NeoPixelBus library (non-blocking DMA-based) to avoid timing conflicts. Separated motor PWM onto a dedicated ATtiny44 subsystem.

**POV effect:** Demonstrated. Pixel trailing visible due to arm flex — confirms the need for a stiffer arm material.
