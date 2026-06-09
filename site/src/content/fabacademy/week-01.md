---
title: "Principles & Practices — Project Proposal"
week: 1
assignment: "Plan and sketch a potential final project."
heroImage: "/images/fabacademy/week-01/initial_sketch.png"
gallery:
  - "/images/fabacademy/week-01/bitfaces.png"
  - "/images/fabacademy/week-01/roboface.gif"
  - "/images/fabacademy/week-01/roboface2.jpg"
---

## Assignment

Plan and sketch a potential final project.

## Project concept — PixelFace

"Make a universal head for robots" — everything looks better with a face.

The idea: an interactive robot head that displays emojis on a POV (persistence of vision) display. The head responds to external stimuli through proximity sensors and optionally a microphone, selects an appropriate emotion, and displays it as an emoji on the spinning display.

Goals:
- Interactive head responding to proximity sensors and microphone input
- Express basic emotions using emojis on a 360-degree POV display
- Easy programming interface for integration with existing robot projects
- Optional: sentiment analysis to display emotions matching ambient audio

## Inputs and outputs

**Input:** IR proximity sensor; optional voice recognition / sentiment analysis via Jasper on Raspberry Pi

**Output:** 360-degree POV (persistence of vision) display

## Parts list

- High RPM motor
- Quadrature encoders
- Addressable LEDs (SK6812 / WS2811)
- Sharp IR proximity sensors
- Microcontroller with adequate refresh rate capacity
- Enclosure
- Power management electronics
- Slip rings for routing LED connections through the rotating axis
- Separate voice recognition unit (Raspberry Pi + microphone)

## Challenges identified

- Vibration-induced wobbling from high-speed motor
- Precise positional feedback via optical encoders for POV sync
- Routing electrical connections through the rotating axis via slip rings
- 32-bit POV effect mapping complexity
- Simplified user interface
- NLP components for sentiment analysis

## Inspirations

- Great Scott's POV globe (YouTube)
- viSio's volumetric 3D POV display
- Shaunta Butler's 32-bit RGB POV display (Fab Academy)
