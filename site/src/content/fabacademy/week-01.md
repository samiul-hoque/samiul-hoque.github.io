---
title: "Principles & Practices — Project Proposal"
week: 1
assignment: "Plan and sketch a potential final project."
heroImage: "/images/fabacademy/week-01/initial_sketch.png"
gallery: []
---
## Assignment

* * *

Plan and sketch a potential final project

## What I came up with this week

<figure>
  <img src="/images/fabacademy/week-01/initial_sketch.png" alt="Initial Design Sketch" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-01/bitfaces.png" alt="Initial Design Sketch" loading="lazy" />
</figure>

  
  

This week I worked on coming up with a final project idea and got started with the documentation process.

## Idea: PixelFace

My design goal for the a final project is to make a universal head for robots. Why? **BECAUSE EVERYTHING LOOKS BETTER WITH A FACE!!**

I mean just look at Wildcat with the kawaii face :3

  

So I decided to take matters into my own hands and designing a head with a “kawaii” face for them.

## Goals

-   The head will be interractive; it will react to external stimuli via a proximity sensor and possibly a mic.
-   The head will be able to express basic emotions using emojis displayed on a POV display
-   The head will be easily programmable so it can be interfaced very easily with existing projects.
-   If possible I'd like to add some minimal sentiment analysis capabilities to the head, so it can display emojis accordingly depending on surrounding sound.

## Design Abstract

  

### Initial Sketches

<figure>
  <img src="/images/fabacademy/week-01/initial_sketch.png" alt="Initial Design Sketch" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-01/bitfaces.png" alt="Initial Design Sketch" loading="lazy" />
</figure>

## Input & Output

### Input Devices

Right now I am just thinking about a IR proximity sensor. But if I get the chance, I'd like to add voice recognition or sentiment analysis to it. I have some experience working with Jasper with raspberry Pi for home automation projects.

### Output Devices

The whole device is apparently an output device. The POV display, if constructed right will provide a full 360 display.

* * *

## Project Requisites

### Skills required

I have a somewhat basic grasp of the electronics skill required for the project but I will need to learn a lot more about mechanical design and additive manufacturing.

And if I get the chance, I would like to try some NLP. **IMAGINE HAVING AN ALEXA WITH A FACE!** :D

### Parts list

-   High RPM motor
-   Quadrature encoders, possibly paired with the motor.
-   Addressable LEDs SK6812/WS2811. Hoping to find some bright ones.
-   Proximity sensor, guessing Sharp IR sensors
-   Any microcontroller that can handle the refresh rate of the display.
-   Enclosure assembly.
-   Power management and other peripheral electronics.
-   A seperate voice recognition unit using a Raspberry Pi and a mic.

## Challenges

-   Stopping the device from wobbling due to vibrations.
-   Getting exact positional feedback from the motors via optical encoders and then mapping the pixels for the POV effect
-   Getting the wire connections to the LEDs through the moving axis using 'slip rings'
-   Mapping the 32bit POV effect
-   Making a simplified interfacing option
-   If I do the NLP part.... figuring all that out.

## Inspirations

### Great Scott’s POV globe

[Great Scott's POV globe](https://www.youtube.com/watch?v=69G522AeRq8) from [Great Scott](https://www.youtube.com/watch?v=69G522AeRq8) on [Youtube](https://www.youtube.com/).

### viSio’s Volumetric POV display

[viSio's volumetric 3D POV display](https://www.youtube.com/watch?v=I7vgha_N5s8) from [this random uploader](https://www.youtube.com/channel/UCPI5tZWp_7aq4DoA15t6O6Q) on [Youtube](https://www.youtube.com/).

### Shaunta Butler’s Fab Academy project

Shaunta Butler's [Final week project](https://www.youtube.com/watch?v=M5Gr3mqu9yA) which apparently didn't give the intended effect. I'm planning to a similar 32bit RGB POV display.

## Learning Outcomes

-   I had a hazy but brief Idea of what I wanted to make, but searching through the fab archive let me know about other volumetric displays and Shaunta Butler's design.
-   I learnt about the mechanical complexities of making the Design.
-   I learnt about slip rings and how they pass a signal through a moving axis.

#### What I need to explore further

-   Explore the electronics and programming complexities of such a project.

  

* * *
