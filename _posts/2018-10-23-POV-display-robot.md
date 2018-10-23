# Project Idea: POV display robot

POV displays, where POV stands for Persistence of Vision, are nowadays widely available as light weight toy fans. They're quite good looking and give an illusion of depth on the display. My idea is to utilize this sort of display and place it on a movable platform, such as a two/four wheeled robot. 
The objective is to build a robot that can show certain 'facial' reactions via the POV display. The idea came to me when I was checking out the LIDAR sensor on top of boston dynamic's Atlas robot. It occured to me that all of their robots have a rotating LIDAR sensor as a head, why not design something that could go as a face for them?


The challenges here are to reduce the vibrations due to rotation of the POV arm, constructing a joint that is capable of staying connected during the spinning of the arm and then conceal all of it on top of a moving two/four wheeled robot.

Electronics:
I have been working on a small motor control unit which can drive 2 micrometal motors with encoders. It has an atmega8a at it's heart and comes with full compatibility with i2c, spi and serial, depending on the host board. I have been using it with an orange pi zero for integrating it into hass.io . I am hoping the electronics portion wont be of any difficulties.

I also plan to use 2 layers of PCB so the POV display portion is modular and can be hooked to any other project for later use. A modular POV display module itself could be a fairly interesting project.

POV display attachment:
For the mechanical part, I am concerned about the bearing/joint of the rotating arm which will connect to the BLDC motor. There has to be a connecting point where the power, GND and the data lines of the SK6182/WS2812 LEDs will connect to the control circuit. It may be argued if the control circuit of the LEDs should be mounted on the control arm along with a power source for it, but I would like to learn how such a problem can be handled through intelligent design. For now I am assuming I will have to use something like a 3.5 jack as the pivot to connect the rotating unit to the motor shaft.

2w/4w robot platform:
I am not planning anything special with the robot platform other than making it as compact and small as possible. Making the platform big and heavy would be the easy way out to stabilize the rotating POV displays on top, but I would also like to take this as a challenge here.

