# Project Idea: POV display robot

POV displays, where POV stands for Persistence of Vision, are nowadays widely available as light weight toy fans. They're quite good looking and give an illusion of depth on the display. My idea is to utilize this sort of display and place it on a movable platform, such as a two/four wheeled robot. My inspiration for a POV display comes from [Visio's 3D volumetric POV display](https://www.youtube.com/watch?v=I7vgha_N5s8) and [Great Scott's POV globe](https://www.youtube.com/watch?v=69G522AeRq8).

The objective is to build a robot that can show certain 'facial' reactions via the POV display. The idea came to me when I was checking out the LIDAR sensor on top of [boston dynamic's Atlas](https://www.youtube.com/results?search_query=boston+dynamics+atlas) robot. It occured to me that all of their robots have a rotating LIDAR sensor as a head, why not design something that could go as a face for them?

The challenges here are to reduce the vibrations due to rotation of the POV arm, constructing a joint that is capable of staying connected during the spinning of the arm and then conceal all of it on top of a moving two/four wheeled robot.

## Initial Ideation:
<a href="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/pov%20display/initial_ideation1.jpg"><img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/pov%20display/initial_ideation1.jpg" alt="Initial Ideation 1" width="800" height="600" align="middle"></a>

<a href="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/pov%20display/initial_ideation2.jpg"><img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/pov%20display/initial_ideation2.jpg" alt="Initial Ideation 2" width="800" height="600" align="middle"></a>

<a href="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/pov%20display/initial_ideation3.jpg"> 
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/pov%20display/initial_ideation3.jpg" alt="Initial Ideation 3" width="800" height="600" align="middle"></a>


## Electronics:
The main electronics part of the project is quite simple. 
+ We need to control one BLDC motor
+ sync it's speed with an hall sensor (or alternatively use an old HDD motor which can sync speed from the pulses generatind during spinning, ref [here](https://www.youtube.com/watch?v=tjCJ3MlFt7g))
+ create a motor controller for the robot platform
+ create a battery management system for the 3.7v li-ion cell, add a boost converter for 5v for the LEDs and motors
+ Additionally use an esp32/8266 as a mainboard so we can sync the whole thing with hass.io or any web application.

I have been working on a small motor control unit which can drive 2 micrometal motors with encoders. It has an atmega8a at it's heart and comes with full compatibility with i2c, spi and serial, depending on the host board. I have been using it with an orange pi zero for integrating it into hass.io . I am hoping the electronics portion wont be of any difficulties.


I plan to use 2 layers of PCB so the POV display portion is modular and can be hooked to any other project for later use. A modular POV display module itself could be a fairly interesting project.


## POV display attachment:
For the mechanical part, I am concerned about the bearing/joint of the rotating arm which will connect to the BLDC motor. There has to be a connecting point where the power, GND and the data lines of the SK6182/WS2812 LEDs will connect to the control circuit. It may be argued if the control circuit of the LEDs should be mounted on the control arm along with a power source for it, but I would like to learn how such a problem can be handled through intelligent design. For now I am assuming I will have to use something like a 3.5 jack as the pivot to connect the rotating unit to the motor shaft.

## 2w/4w robot platform:
I am not planning anything special with the robot platform other than making it as compact and small as possible. Making the platform big and heavy would be the easy way out to stabilize the rotating POV displays on top, but I would also like to take this as a challenge here.


To conlude, I'd like to say that it was quite difficult selecting a project that would encompass everything that is taught at the FAB Academy course. A small project like this gives enough room for me to learn and utilize what I learn throughout the course. This project will require my utmost dedication in design/CAD work, which currently I think I need improving on. I'll also have to figure out how they wire up the sensors on a rotating platform, such as a LIDAR internally, since I'll have to make that pivot myself. I hope at the end of the program, this project will be aesthetically pleasing enough for a FAB acadmy final project.