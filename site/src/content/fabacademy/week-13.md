---
title: "Applications & Implications"
week: 13
assignment: "Propose a final project masterpiece that integrates the range of units covered."
heroImage: "/images/fabacademy/week-13/povclock.jpg"
gallery: []
---
## Assignment

Propose a final project masterpiece that integrates the range of units covered, answering:

-   What will it do?
-   Who's done what beforehand?
-   What will you design?
-   What materials and components will be used?
-   Where will come from?
-   How much will they cost?
-   What parts and systems will be made?
-   What processes will be used?
-   What questions need to be answered?
-   How will it be evaluated?

Your project should incorporate 2D and 3D design, additive and subtractive fabrication processes, electronics design and production, microcontroller interfacing and programming, system integration and packaging  
  
Where possible, you should make rather than buy the parts of your project Projects can be separate or joint, but need to show individual mastery of the skills, and be independently operable

## What Will it Do?

It will be a POV display capable of displaying emojis. POV displays do so by rotating an LED arm at very high speeds, about 1000+ RPMs and by using encoder feedback blink LEDs in a sequence in such a way that a continuous display is shown across the moving axis.

## Who's Done What beforehand?

A few POV displays have been tried before in Fab Academy. Even according to Neil they are very hard to pull off because of so many major variables in play. Among the one's already attempted, I really liked [Shaunta Butler's](http://fab.cba.mit.edu/classes/863.14/people/shaunta_butler//finalproject/) one because of the mechanical complexity she tried to tackle.

## Shaunta Butler's Fab Academy Project

Shaunta tried to make a [POV hat](http://fab.cba.mit.edu/classes/863.14/people/shaunta_butler//finalproject/) which would be mounted to the head and would create that POV display around someone's face. Usually POV displays are suspended horizontally, usually these types of displays have the LEDs on a thin flexible PCB arm. They commercially available and there are tons of instructables on how to make such 'POV clocks'. If they're suspended vertically, they're usually locked on the top and the bottom end to reduce vibration and add structutal strength. Staying stable enough for a POV display while rotating at 1000 RPM is definitely no easy feat.

<figure>
  <img src="/images/fabacademy/week-13/povclock.jpg" alt="An example of the commonly seen Horizontal POV displays- by Cornell ECE Dept." loading="lazy" />
  <figcaption>An example of the commonly seen Horizontal POV displays- by Cornell ECE Dept.</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-13/povcylinder.jpg" alt="POV cylinder Display. (locked from both ends) -image from Arduino Project Hubs" loading="lazy" />
  <figcaption>POV cylinder Display. (locked from both ends) -image from Arduino Project Hubs</figcaption>
</figure>

Shaunta tried to mount her POV display on just one end. I took inspiration from this but it would add alot of complexities later to my mechanical assembly.

* * *

* * *

## Great Scott's POV globe

[Great Scott](https://www.youtube.com/channel/UC6mIxFTvXkWQVEHPsEdflzQ) is a popular YouTuber and a hobbyist maker I have been following for a long time. He made a POV globe which was quite easy to follow using a DC motor and the APA102 LED strips. For Encoders he used a hall effect sensor.

* * *

* * *

This project is an example of a classic POV led display and it is well documented, perhaps even more so than Shaunta's Fab Academy project.

## What will you design?

## Motor Assembly

The Motor Assembly will be crucial to produce the POV effect. Since almost ALL POV displays use simple DC motors, I decided to complicate things by using a BLDC motor and an ESC. I did regret the decision quite alot later, but I learnt alot along the way. POV is a very time critical thing, and adding an ESC which required PWM was just asking for time critical errors.

## 3 Channel Slip Ring

This is something I really wanted to challenge myself with, to make a Slip Ring. I decided to use Bearings to create my own slip rings where the inner and the outer rings of the bearing would connect via a viny cut copper brush on top of the bearing.

## Rotating Arm Assembly

The Rotating Arm Assembly will connect to the slip ring and the LED strip on the other end. Structural strength and balance was the key here. This arm would have to rotate at 1000+ RPM, stay stable and not break easily.

The type of arm I'm designing would make my POV display cylindrical.

## Electronics

For the Electronics I wanted to use the 328p microcontroller as the brains. I would also need an encoder for positional feedback while also providing power management for the ESC, the LEDs and the board itself.

## What materials and components will be used?

## Components I'm planning to buy

| Component | Justification to Buy |
| --- | --- |
| BLDC Motor | It would be quite impossible to make by myself, atleast during this time period. |
| ESC | "It's a good learning exercise to make your own, but ESCs have become so commoditized that they're now around the incremental cost to make your own" - said by Neil himself on [this Issue.](https://gitlab.fabcloud.org/academany/fabacademy/2019/class/issues/35)  
We also didn't have any H-Bridge drivers at the lab except the l293D. So my logical choice here was to buy a commercial ESC. |
| Optical Encoders | This is something I am still not sure about. I really want to work with optical encoders, but they're very expensive. I could get the same result by using an hall effect sensor, but an optical encoder will give me perfect positional feedback for the BLDC motor, basically a closed loop. Which I was always fascinated about, creating my own closed loop servos. |
| Bearings | I would need lots of bearings, I am just not sure about the sizes yet. This purchase will depend on the local shop's stock. |
| Addressable LEDs | I am planning to use the WS2812b LEDs. Apparently they are very hard to source in india, I am planning to get some sourced soon. |
| Buck Converter Module for the LEDs | My previous experience with the WS2811, is that they require very clean power supply. A power surge could potentially destroy my LEDs. I plan on using a good power regulator for them. My lab only has the AMS1117 series of regulators available at the lab, which won't be adequate enough to provide power to my LEDs. |

## Components I'm planning to make

-   #### Slip Ring:
    
    I am planning to make a functional 3 channel slip ring. Slip Rings are incredibly expensive while they look easy enough to make. I hope I don't regret this decision.
    
-   #### Gear Assembly for the Motor:
    
    I want to explore how to make gear assemblies. That's one of the reasons why I am using a BLDC motor, I plan to make a gear along the body of the outrunner BLDC motors and use a gear assembly to rotate the POV arm.
    
-   #### Coupling Mechanism with the Motor Assembly
    
    I'll need to design a coupler mechanism that will connect the motor assembly to the rotating shaft through the slip ring.
    
-   #### Rotating Arm:
    
    The Rotating arm will house the LEDs and connect to the Slip Ring Assembly.
    

I am planning to 3D print where needed and laser cut where I can get away with.

## Where will what come from?

## Component Sourcing

Components will come from local shops as a proper supply channel does not exist from china to Ahmedabad. Most of the items I'll be buying has to be available off the shelf, I wont be able to custom order specific components which will make my life particularly difficult.

I ordered parts from these online shops as well;

-   [https://robokits.co.in/](https://robokits.co.in/)
-   [https://robu.in/](<https://robu.in/ >)
-   [https://www.deltakit.net/](https://www.deltakit.net/)

## Material Sourcing

Materials will be sourced from the local stationary shop at CEPT University. This being a Design College, they have a good supply of available materials such as acryllic, mdf and various sorts of paper sheets.

## How much will they cost?

## Bill of Materials

> This is the actual Bill of Materials that I compiled after finishing my Project:

[Bill of Materials as .PDF](</files/fabacademy/week-13/Bill of Materials.pdf>)

## What parts and systems will be made?

## Motor Assembly

-   The Motor Assembly will have 2:1 Gear system which will rotate the moving arm through the Slip Ring.
-   It will also house the encoder for the positional feedback, the BLDC motor drive system and the integrated Electronics Assembly which will contain a PxFDuino.
-   Unlike the PxFDuino v1, the v2 is integrated into the base assembly using Eagle's Fusion Link feature.

## Slip Ring Assembly

-   The Slip Ring Assembly will pass Power, Ground and the Data Signal to my LEDs through it.
-   I have used 2409 Bearings as they offer quite a bit of space through the inner ring.
-   Each of the Bearings are seperated Using Acryllic Spacers.
-   To Ensure Conductivity, I made Vinyl Cut Copper brushes which will connect the inner and outer rings. The Acryllic Spacers in between will provide adequate pressure to keep contact between the inner, outer rings and the copper brushes.
-   These Copper brushes are made using copper tape and 1mm acryllic as base.

## Rotating Arm Assembly

-   The Rotating Arm Assembly has to be stable enough to rotate at 1000+rpm.
-   It has to keep contact with the inner rings of the slip ring while it rotates and pass these signals through internal wires to the LEDs
-   It has to be light weight and Balanced.

<figure>
  <img src="/images/fabacademy/week-13/assemblies.jpg" alt="" loading="lazy" />
</figure>

## What processes will be used?

## Laser Cutting

Laser Cutting was used to create the top and bottom of the Base Assembly with 5mm acryllic.

The Rotating Arm assembly has laser cut parts which are made of 2mm acryllic.

## Vinyl Cutting

Vinyl Cutting was used to cut copper tape and 1mm acryllic to create these very thin copper brushes.

## 3D printing

The whole project has 17x 3D printed parts.

I will create a seperate Mostly printed version of this project for instructables to reduce the number of processes used later.

## What questions need to be answered?

## Will the Slip Ring work good enough to pass signals to the LEDs?

It did, and it worked out perfectly.

## Will the Rotating Arm Assembly be stable enough?

It wasn't perfectly stable. 1100RPM was too much for acryllic. It worked but the acryllic bent quite alot. This high speed photo explains it well.

<figure>
  <img src="/images/fabacademy/week-13/rotatingarmhighspeed.jpg" alt="" loading="lazy" />
</figure>

This part will need better materials, maybe a composite?

## Will the Encoder I'm planning to use be able to give proper positional Feedback?

It did not. The Chinese Optical Encoders I bought did not give proper Data. I later switched to using a 44e Hall effect sensor, which worked out perfectly.

## Will the LED refresh rate be fast enough for the POV effect?

I was quite worried about this, but it turns out, for only 14 LEDs, the refresh rate is more than fast enough. My Atmega328p is running at 20Mhz and the rotating arm is running at 1100rpm. Which is roughly 18 rotations per second. Each Rotation has about 24 frames according to my code, which meant around 440 updates to the LEDs per second. Thats a whole 2.72 milliseconds to update the LEDs.

I used the [NeoPixelBus](https://github.com/Makuna/NeoPixelBus) library which made it possible for me to use the LED library in a non blocking way, the regular [FastLED](https://github.com/FastLED/FastLED) library would not have worked.

## How will it be evaluated?

## Getting the Mechanical Assembly working

It worked perfectly. Maybe the LED arms need to be made out of a composite material that doesn't flex instead of acryllic, but everything else worked perfectly.

## Getting the Slip Ring Working

It worked without any problems.s

## Making the Electronics work together

It was a bit difficult as all three of my operations turned out to be time critical;

-   Interrupt Handling for the Encoders
-   PWM signal for the Motor
-   Sending data to the LEDs

I got it working by making a seperate motor control sub-system using an ATtiny44. The ATTINY44 generated a PWM signal for the ESC if it recieved a signal from the 328p. Thus taking immense load off my main loop.

## Creating the POV effect

It worked great! Due to the flexing of the LED arm, the pixels seem to be trailing a bit, but it works without any issues. Next improvement should be on changing material for the LED arm or making design adjustments that would stop the flexing.

  

* * *
