---
title: "Electronics Production"
week: 5
assignment: "Make the FabISP in-system programmer; mill, stuff, test, and program it."
heroImage: "/images/fabacademy/week-05/heroimage.png"
gallery: []
---
## Assignment

* * *

#### [Group Assignment](http://fab.academany.org/2019/labs/cept/electronicsproduction.html) :

-   Characterize the design rules for your PCB production process
  

#### Individual assignment:

-   Make an in-circuit programmer by milling the PCB, program it, then optionally try other PCB processes

## What I made

<figure>
  <img src="/images/fabacademy/week-05/heroimage.png" alt="What I made" loading="lazy" />
</figure>

* * *

## A bit of Context

The FabISP is a 100% fabable ISP programmer based on the [FabTinyStar](http://fabacademy.org/archives/2015/doc/projects/FabTinyStar/) board which again was based on Lady Ada's [USBTinyISP.](https://learn.adafruit.com/usbtinyisp) Here's a picture of Limor Fried aka Lady Ada, just because I am a fanboy :')  
  

I recomend reading this paper: [Demystifying the FabISP](http://fab.cba.mit.edu/classes/863.16/doc/tutorials/FabISP/FabISP_Demystified.html), To understand the role of each component on the FabISP  
We will basically be using the FabISP to program our circuits in the coming weeks.

<figure>
  <img src="/images/fabacademy/week-05/ladyada.png" alt="A bit of Context" loading="lazy" />
</figure>

## Finding a FabISP design

For this week, we were suggested to select a design from the Fab Academy archive for our first FAB ISP.  
  

#### First Failure of the week: Andy's FabISPkey v2.3

* * *

At first I decided to go with the [Fab ISP key](http://fab.cba.mit.edu/content/archive/projects/fabispkey/index.html) by [Andy bardagjy](http://bardagjy.com/)

<figure>
  <img src="/images/fabacademy/week-05/fabispkeytracev2.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabispkeycutv2.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabispkeytboardv2.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabispkeyschematicv2.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

I intend to get this week's assignment done first and then explore on making my own ISP and that's why I didn't bother looking into the design much on the first go. And oh boy was I so wrong..  
  
After milling, my PCBs had more than just a few connected traces.

<figure>
  <img src="/images/fabacademy/week-05/fabispkeyv2output3.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabispkeyv2output.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabispkeyv2output2.png" alt="First Failure of the week: Andy's FabISPkey v2.3" loading="lazy" />
</figure>

Then I realized that Andy's images were not of high enough DPI. Since I didn't know much about the settings on [Mods](http://mods.cba.mit.edu/), I thought I was probably making a mistake somewhere. I also realized that there was a logic level shifter, the [TXB0104](http://www.ti.com/lit/ds/symlink/txb0104.pdf) on the board, which was not in our inventory. While doing all this, I was already two days behind schedule.

#### Brian's Fab ISP

* * *

Now I was running out of time and I didn't know which design I should follow. It turns out choosing someone's design at random is harder than making your own.  
So I searched the Fab Academy Archive and found [Brian's](http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/) design was working for many people. And it was very neatly documented as well.  
I found the files on [Brian's project page](http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/) and they were in PNG format with 1000 dpi. I knew these images would work and started milling them.

<figure>
  <img src="/images/fabacademy/week-05/fabispbriantrace.png" alt="Brian's Fab ISP" loading="lazy" />
</figure>

 

<figure>
  <img src="/images/fabacademy/week-05/fabispbriancut.png" alt="Brian's Fab ISP" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabispbriantboard.png" alt="Brian's Fab ISP" loading="lazy" />
</figure>

## PCB Milling

PCB milling also known as 'isolation milling', is the process of removing copper from a sheet of printed circuit board material to recreate the pads, sinal straces and structures according to a layout. We will be using FR1 boards for the milling process.

<figure>
  <img src="/images/fabacademy/week-05/pcbmilling.jpg" alt="PCB milling on a Roland MDX-20" loading="lazy" />
  <figcaption>PCB milling on a Roland MDX-20</figcaption>
</figure>

## Roland MDX-20

In our lab we have a Roland MDX-20 milling machine. It sometimes acts like a stingy old woman but it is a great machine. The Drill bits we have are;

-   1/64 for traces
-   1/32 for outline cuts and drills
-   1/16 for Bed leveling and those larger cuts.

<figure>
  <img src="/images/fabacademy/week-05/mdx20.jpg" alt="Roland MDX-20" loading="lazy" />
  <figcaption>Roland MDX-20</figcaption>
</figure>

## Installing Fab Modules

## 1\. Failed Attempt to install Fab Modules on Windows WSL

I tried installing the Fab Modules server on WSL alongside my windows installation but it did not seem to detect the MDX-20. I posted an [issue](https://gitlab.fabcloud.org/academany/fabacademy/2019/class/issues/15) on the global tracker and got a response from Neil that he would look onto it. So I opted back to installing it on Ubuntu 16.04.

<figure>
  <img src="/images/fabacademy/week-05/fabmodulesOnWSL.jpg" alt="Device not found error on WSL" loading="lazy" />
  <figcaption>Device not found error on WSL</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-05/fabmodulesOnWSL2.jpg" alt="Checking Serial Devices" loading="lazy" />
  <figcaption>Checking Serial Devices</figcaption>
</figure>

#### Installing Fab Modules on a Raspberry Pi to run machines on local network

I also Installed fab modules on a Raspberry Pi running Ubuntu mate. It is working fine and has no extra steps for installation.  
I configured the mod\_server.js file according to the documentation so I could access the npm server over my local wifi network.  
I had no trouble running fab modules from my laptop through the raspberry pi, but I eventually switched back to the lab computer running ubuntu because getting the monitor and adapter plugged in everytime was a hassle. This method could definitely come in handy if any lab wants to dedicate a raspberry pi to each machine instead of a full laptop.  
  

<figure>
  <img src="/images/fabacademy/week-05/raspi1.png" alt="fab modules server running on a Raspberry Pi (Ubuntu Mate)" loading="lazy" />
  <figcaption>fab modules server running on a Raspberry Pi (Ubuntu Mate)</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-05/raspi2.png" alt="mod_server.js edit" loading="lazy" />
  <figcaption>mod_server.js edit</figcaption>
</figure>

  
  

## 2\. Requisites

The instalation procedure is well documented on the [Fab Modules Wiki.](https://github.com/FabModules/fabmodules-html5/wiki/How-to-install) Before we can install Fab Modules, we need to install the following requisites.

| Package | Install Command |
| --- | --- |
| GIT | `apt-get install git` |
| wget | `apt-get install wget` |
| node.js and npm | `apt-get install nodejs-legacy npm` |
| Python, pip & tk-inkter | `apt-get install python python-pip python-tk` |
| Pyserial | `sudo pip install pyserial` |

Since I had to install it a couple of times, I just ran these two commands.  
`sudo apt-get install -f -y git wget nodejs-legacy npm python python-pip python-tk`  
&  
`sudo pip install pyserial`

## 3\. Installation

### Fab Modules :

Go to the Directory where you want to install fab modules, and do a git-clone of the repository;

  
`git clone https://github.com/FabModules/fabmodules-html5.git fabmodules`

Open the directory and run,

  
`npm install`

During running fab modules, if you're getting a mime type error, run the following command, `npm install mime@1.3.6`  
Thanks to Ludusrusso for the solution [here.](https://github.com/FabModules/fabmodules-html5/issues/33)

### Mods: (newer version)

You need to first install [node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).  
  
Install the [http-server](https://www.npmjs.com/package/http-server) npm package. Including '-g' sets the installs the package gloabally, allowing you to use it as a command line tool:  
`npm install http-server -g`  
  

#### Clone the mods repository:

`git clone ssh://git@gitlab.cba.mit.edu:846/pub/mods.git`  
  
Use the command line to navigate to the root of the mods repository:  
`cd mods`  
  
Start up a server:  
`http-server`  
  
Open a browser tab and go to `127.0.0.1:8080` which is the same as `http://localhost:8080` to view the server that you just started. Depending on how to need to use mods you can start local servers located in mods/js, for example, if you start from the root of the mods repository:  
`cd js`  
`node printserver.js`

## Using Mods Online

-   Start Fab Modules Server:  
    `sudo npm start`
//You dont need sudo if you change the port to someonething greater than 1024-   go to [http://mods.cba.mit.edu/](http://mods.cba.mit.edu/)
-   Right click and open 'programs'>'open server program'> Roland >mill> MDX-20 > PCB png
-   Open the png file from here and you can set the PCB defaults to mill traces with the 1/64 bit or mill outline with the 1/32 bit

  

<figure>
  <img src="/images/fabacademy/week-05/modsonline.jpg" alt="Mods Online" loading="lazy" />
  <figcaption>Mods Online</figcaption>
</figure>

> I used the older Fab Modules online for my PCBs since that was easier to use without a mouse. I also feel Mods was made in mind with larger display size. It barely fits on my laptop display and it is quite hard to navigate with just the mousepad on a budget laptop.

## Using Fab Modules

-   Start Fab Modules Server:  
    `sudo npm start`
//You dont need sudo if you change the port to someonething greater than 1024-   Go to [http://fabmodules.org/](http://fabmodules.org/)
-   Select the PNG file
-   Choose ouptut format as Roland Mill (.rml)
-   Process> PCB trace(1/64) for traces
-   Process> PCB Outline(1/32) for outlines and drill holes

<figure>
  <img src="/images/fabacademy/week-05/fabmodules.jpg" alt="Using Fab Modules" loading="lazy" />
</figure>

## Fab Module Settings

#### Traces

Here are the settings I used for PCB traces on my ISP,

-   cut speed: 2
-   cut depth(mm): 0.1
-   tool diameter(mm): 0.4
-   number of offsets: 4
\[This is the number of offset cuts there will be outside the copper trace, increase this to remove more excess copper. -1 will remove copper from the board completely except the traces.\]-   offset overlap(%): 50
-   path error(pixels): 1.1

#### Outlines

Here's the outline settings,

-   cut speed: 4
-   cut depth(mm): 0.6
-   Stock Thickness(mm): 1.7
-   tool diameter(mm): 0.4
-   number of offsets: 1
-   offset overlap(%): 50
-   path error(pixels): 1.1
-   image threshhold: .5

And these are the Settings for PCB outlines,

## Milling

## Setting the Origin

Place your PCB material on the sacrificial bed. Make sure to clean any remaining glue or debris on the plate. Try to lay out your board as flat as possible. Use the Output section on fab modules to jog your spindle to where you want the origin to be at. Remember, this is the origin for x and y, we will have to set the z origin seperately later.

## Setting the Z Origin

After you're done with setting the x-y origin, you can now set the Z origin by manually pressing the up and down button on the MDX-20. Set the right bit for your operation and bring the bit close to the PCB but do not let it touch. Then unscrew the bit and let it rest on the PCB material. With the bit in the right position, just tighten the hex key and now our origin is set to start the milling.

## Calculating the Toolpath

Now press calculate, and the toolpath should be generated. Check the generated toolpath if there's any overlap in the pads or traces. You might need to debug your layout accordingly if fabmodules can not draw a path.

## Milling

The milling procedure is fairly simple. I just used masking tape as adhesive between the copper board and the sacrificial board. First I did the PCB traces with the 1/64 bit and then using the same origin I used the 1/32 bit to cut out the board.

## Vinyl Cutting PCB

I have been experimenting with vinyl cutting since week 2 and decided to put all my observations to the test. First thing I did was that I converted Brian's trace file to a monochrome '.bmp' file. Roland Cutstudio only accepts jpeg and bmp image files for import. I found that .bmp files have better scaling compared to jpegs.  
  
Then I used the trace outline function to generate a cut path for the image. Now before sending file for cut, make sure to change the settings for the machine and reduce the speed down to 1. I used force 120g and speed 1 and found the best results.  
Another trick is to cut the circuit twice using the same origin. This helps to get the cuts neat and reduces the shearing problem.  
  

### Making the Copper-epoxy Film Sandwich

* * *

#### Preparing the Copper Sheet

For the sheet, I used epoxy film beneath the copper layer. This doesn't give me that transparent PCB look after the transfer, but the copper still looks good on the white epoxy film. 

<figure>
  <img src="/images/fabacademy/week-05/vinylcopperepoxy.png" alt="Preparing the Copper Sheet" loading="lazy" />
</figure>

#### Cutting the Epoxy Vinyl:

-   Cut neatly, be considerate about the next person using the vinyl roll.
-   Make sure to use some masking tape to secure the vinyl after you've cut your piece.

<figure>
  <img src="/images/fabacademy/week-05/vinylepoxyprepare1.png" alt="Cutting the Epoxy Vinyl" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylepoxyprepare2.png" alt="Cutting the Epoxy Vinyl" loading="lazy" />
</figure>

  

#### Cutting the Copper Vinyl:

  

-   Cut as less copper material as you can. Minimize copper tape consumption, it may look like you have lots of it in a roll, but copper vinyl is thick and it is actually way less than you think there is.
-   Cut neatly, make sure not to bend or shear the copper vinyl roll. Any part that is not uniformly straight can not be used later.
-   Make sure to use some masking tape to secure the vinyl after you've cut your piece. Copper vinyl is expensive, be considerate while using it.

<figure>
  <img src="/images/fabacademy/week-05/vinylcopperprepare1.png" alt="Cutting the Copper Vinyl" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylcopperprepare2.png" alt="Cutting the Copper Vinyl" loading="lazy" />
</figure>

  

#### Putting copper vinyl on Epoxy

-   Clean the Epoxy film.
-   Gently peel off the copper backing
-   Place copper vinyl on top of epoxy vinyl, rub with your thumb to get it as smooth as possible.

<figure>
  <img src="/images/fabacademy/week-05/vinylprepare1.png" alt="Putting copper vinyl on Epoxy" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylprepare2.png" alt="Putting copper vinyl on Epoxy" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylprepare3.png" alt="Putting copper vinyl on Epoxy" loading="lazy" />
</figure>

  

### Using the Vinyl Cutter

* * *

#### Putting the piece on the machine

-   Place Vinyl Sheet on rollers, Use the guide on the bottom to align it perfectly. If it's not aligned, the origin get misplaced
-   Use the Machine on 'Piece Mode'
-   Do a test cut before you start with your printing, calibrate the blade force with that.

<figure>
  <img src="/images/fabacademy/week-05/vinylprepare4.png" alt="Putting the piece on the machine" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylsheetmode.png" alt="Putting the piece on the machine" loading="lazy" />
</figure>

  

#### Prepping files for Roland Cutstudio

* * *

-   Roland CutStudio accepts .ai, .eps, .jpeg, .bmp and .dxf as input.
-   Since I only had the PNG files for Brian's trace file, I first converted it to a monochrome '.bmp' file. Roland Cutstudio only accepts jpeg and bmp image files for import. I found that .bmp files have better scaling compared to jpegs.  
    You can do this with just three clicks on MS paint, right click > edit> save as > .bmp (monochrome)
-   Then import the .bmp file in Roland Cutstudio
-   Use image trace to get a cut outline.
-   Change the cut speed to 1cm/s, the default is 20cm/s.
-   Cut your design.

  

#### Machine Settings:

-   Force: 100g
-   Cutting Speed: 1cm/s

<figure>
  <img src="/images/fabacademy/week-05/vinylimport.png" alt="Machine Settings" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylimagetrace.png" alt="Machine Settings" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylsettings.png" alt="Machine Settings" loading="lazy" />
</figure>

### Ouptut

* * *

The output should look like this.

<figure>
  <img src="/images/fabacademy/week-05/vinylcutoutput.png" alt="Ouptut" loading="lazy" />
</figure>

  

#### Weeding

* * *

-   This is all about patience. If your settings were right, this job should be easy.
-   Try to roll away the weeded part instead of pulling them.
-   Use tweezers if any part is not comming out properly.

<figure>
  <img src="/images/fabacademy/week-05/vinylweeding.png" alt="Weeding" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylweedoutput.png" alt="Weeding" loading="lazy" />
</figure>

  

#### Transfering the PCB

Since I used an epoxy film vinyl beneath the copper, I can just cut that portion out and stick it to a a surface. The only downside is that I cant make transparent circuits this way, but the white background is obviously an improvement compared to the FR1 boards.

<figure>
  <img src="/images/fabacademy/week-05/vinylpcboutput.png" alt="Transfering the PCB" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/vinylpcbonacryllic.png" alt="Transfering the PCB" loading="lazy" />
</figure>

I tried to transfer the copper using transfer tape, but the copper adhesive on the epoxy film adheres more strongly than the adhesive power of the transfer tape. It was not possible to transfer it that way.

### Mass Producing Copper Vinyl FabISPs (update)

* * *

As the settings came out perfect I decided to make full use of the copper vinyl I cut by printing 14 FabISPs.  
Here's a video of the vinyl cutter cutting them on 1x speed.

### Perfect Weeding video

The settings came out so well, that I could weed the whole PCB on one pull. Here's a video of that.  
  

### Securing your Vinyl Circuits

* * *

#### Why you need it?

To put it simply, the glue on the copper tape is not strong enough to hold down the 6pin connector when you're plugin in the ISP programmer cable. It will snap off like you can see here. To avoid that, and also to protect the copper vinyl from moving around, we can secure the whole circuit using epoxy.

<figure>
  <img src="/images/fabacademy/week-05/circuitprotect.png" alt="Why you need it?" loading="lazy" />
</figure>

#### Epoxy Glue

* * *

At first I tried using some translucent Epoxy glue to secure my circuit. (do this after checking your circuit and uploading code)  
  
I probably didn't need to smother so much onto it, but....  
  
yeah.. you learn these things only after you mess up. :|

<figure>
  <img src="/images/fabacademy/week-05/epoxyglue1.png" alt="Epoxy Glue" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/epoxyglue2.png" alt="Epoxy Glue" loading="lazy" />
</figure>

#### Clear Epoxy Resin

* * *

Clear Epoxy gave much better results, and it's barely noticable.  
  
Make sure to smother your 6 pin connector with Epoxy. This is the part that actually needs the protection.

<figure>
  <img src="/images/fabacademy/week-05/clearepoxy1.png" alt="Clear Epoxy Resin" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/clearepoxy2.png" alt="Clear Epoxy Resin" loading="lazy" />
</figure>

## Gathering Components

* * *

  

## Components List

The components list of Brian's Fab ISP are as follows:

<table class="alt"><tbody><tr><td>Quantity</td><td>Component Name</td></tr><tr><td>1x</td><td>ATtiny45</td></tr><tr><td>2x</td><td>1kΩ resistors</td></tr><tr><td>2x</td><td>499Ω resistors</td></tr><tr><td>2x</td><td>49Ω resistors</td></tr><tr><td>2x</td><td>3.3v zener diodes</td></tr><tr><td>1x</td><td>red LED</td></tr><tr><td>1x</td><td>green LED</td></tr><tr><td>1x</td><td>100nF capacitor</td></tr><tr><td>1x</td><td>2x3 pin header</td></tr></tbody></table>

### Collecting Components the Right Way

When collecting components, I usually write up the list of items on paper and use a masking tape to stick the materials on my list. So after a quick run through the lab inventory, I ended up with this.

<figure>
  <img src="/images/fabacademy/week-05/components.png" alt="Collecting Components the Right Way" loading="lazy" />
</figure>

### Maintaining Inventory

## Soldering

* * *

Soldering is all about patience and practice. It is tough at first but it becomes incredibly easy with enough practice.

#### Quick Tips for Soldering

-   Start with the hardest parts, you'll have plenty of room on the PCB to move around freely. It will only get more complicated as you put in more components.
-   Clean your tip regularly. A clean tip makes soldering much, much easier. Use a Wet cloth or a sponge to clean your tip with.
-   Make sure to tin your tip as soon as you clean it.
-   Try avoiding contact between the solder and the soldering iron you're just fuming away your flux. Use the copper/trace/pad to flow the solder in.

For more tutorials on Soldering, feel free to refer to this playlist. These 9 vidoes cover almost all the soldering basics. It's quite hard to belive these were made back in the 80s.  
  
  
Here are some quick videos of soldering various components.

#### How to solder the ATtiny45

* * *

<figure>
  <img src="/images/fabacademy/week-05/solderingtiny44.gif" alt="How to solder the ATtiny45" loading="lazy" />
</figure>

#### How to solder 1206 components

* * *

<figure>
  <img src="/images/fabacademy/week-05/soldering1206.gif" alt="How to solder 1206 components" loading="lazy" />
</figure>

#### How to thicken the traces for the USB connector.

* * *

<figure>
  <img src="/images/fabacademy/week-05/solderingtrail.gif" alt="How to thicken the traces for the USB connector." loading="lazy" />
</figure>

## Circuit Debugging

* * *

### Using the Multimeter: Continuity Function

After I was done soldering, I started to check my board for errors.  
I used a multimeter to check for shorts using it's continuity function.

<figure>
  <img src="/images/fabacademy/week-05/shortcheck.png" alt="Using the Multimeter: Continuity Function" loading="lazy" />
</figure>

  

## Programming the ISP

For the software installations required to program the ISP, linux is highly recomended. But since i have a windows work environment, I took the long route and installed it all on windows.

### Installing the GNU AVR toolchain on windows 10

* * *

#### Requisites:

-   Git
-   Atmel GNU toolchain
-   GNU make
-   avrdude

#### Installation & where to install:

Installation of Git and avrdude is pretty straight forward. Make sure to use the default installation location. But for the Atmel GNU toolchain, it is quite hard to find on the official Atmel website. I guess many have faced this problem and so someone put it up on github. Feel free to download it from [here.](https://github.com/eerimoq/avr-toolchain-windows) Also download [avrdude.](http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/avrdude-win-64bit.zip)  
Now unzip the avr tool chain and avrdude and place them on the following directories;  
  
avr toolchain in -----> C:\\Program Files\\avr8-gnu-toolchain  
  
avrdude in -----------> C:\\Program Files\\avrdude  

#### Adding Path variables:

Now we need to tell windows where to find the tools we just installed. To do that, we need to add path variables for them.  
Open up Control Panel > System > Advanced System Settings  
Then on the advanced tab, click the 'environment variables' button.  
  
Then add these three values

-   C:\\Program Files\\avr8-gnu-toolchain\\bin
-   C:\\Program Files (x86)\\GnuWin32\\bin
-   C:\\Program Files\\avrdude

### Installing lib32 drivers the USBTinySPI

* * *

To install the drivers for your ISP programmer, use [Zadig.](https://zadig.akeo.ie/) I already had this step done because I was using a USBasp. We will need to come back to this step later when we are done programming our Fab ISP.  
  

### Sanity Check: Checking if everything installed properly

* * *

Open Git bash and type out the following commands to see if that tool installed properly.

<table class="alt"><tbody><tr><td>Tool</td><td>Command</td><td>Output</td></tr><tr><td>GNU make</td><td>make -v</td><td>GNU Make 3.81<br>Copyright (C) 2006 Free Software Foundation, Inc.<br>...<br>and so on.</td></tr><tr><td>avr-gcc</td><td>avr-gcc --version</td><td>avr-gcc.exe (AVR_8_bit_GNU_Toolchain_3.5.4_1709) 4.9.2<br>...<br>and so on.</td></tr><tr><td>avrdude</td><td>avrdude -c usbasp -p t45</td><td>avrdude.exe: initialization failed, rc=-1<br>...<br>This means that avrdude successfully found your programmer, but failed to talk to a target board (expected because we don't have anything conencted to the programmer right now.)<br>If instead you see:<br>avrdude.exe: error: could not find USB device with vid=0x16c0 pid=0x5dc<br>check your USB driver installation (the Zadig steps).<br><br>If you get a "command not found" error, check your installation of avrdude and your path variable.</td></tr></tbody></table>

  

### Programming my ISP

* * *

I am using a USBasp programmer to program my FabISP.  
Connect the ISP connector, I used a 10pin to 6pin SPI converter.  
Now you should see your power LED on the FabISP light up.  

#### Download and Build the Firmware

* * *

Download and build the firmware from Brian's page [here.](http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/fts_firmware_bdm_v1.zip) Extract the files, and open makefile with your preferred notepad. I used Visual Studio Code.  
Edit the Programmer and replace it with  
`usbasp`  
Save and quit.  
Run git bash from within the folder. Run the following command.  
`make`  
This should generate a .hex file that we will be uploading to the Fab ISP.  
If you ever need to remake the file, after editing the makefile, just run the following command,  
`make --always-make`  
  

#### Flashing the FabISP

* * *

Then I ran the following command to flash the firmware onto the AtTiny45.  
  
`make flash`  
  
This will erase any existing code on the chip and then write the new firmware to it.

<figure>
  <img src="/images/fabacademy/week-05/makeflash.png" alt="Flashing the FabISP" loading="lazy" />
</figure>

  
  

#### Setting the fuses for USB Functionality

* * *

Run,  
`make fuses`  
This will set up all of the fuses except the one that disables the reset pin. Again, you should see several progress bars from avrdude. If this step fails but the previous one worked, you likely have an lose connection somewhere.  
  
This will also make the FabISP recognizable by USB. It will show up as a USBTinySPI device.

<figure>
  <img src="/images/fabacademy/week-05/makefuses.png" alt="Setting the fuses for USB Functionality" loading="lazy" />
</figure>

  

### Test the USB functionality

* * *

Now disconnect your FabISP from your programmer and plug it to a USB-2.0 port. Best if you use a USB hub, it was sometimes not getting detected on my USB port. It should show up on device manager as USBTinySPI. Now go back to the Zadig step, and install the libusb32 driver for it.  
  
If this step works, you are ready to go through with the final step.

  

### Blow the Reset Fuse:

Only after all the above steps working, run the command,  
`make rstdisbl`  
This will make your rst pin into a regular GPIO pin. But at the cost of the AtTiny45 to become unprogrammable.

<figure>
  <img src="/images/fabacademy/week-05/makerstdisbl.PNG" alt="Blow the Reset Fuse" loading="lazy" />
</figure>

  
You should now be done with programming your FabISP.  
  

### Using the FabISP to program another FabISP

Just edit the makefile and change the programmer to usbtiny  
Run, `make --always-make`  
And follow through the same process again. For me everything went well and now I have two fully functional FabISPs.

<figure>
  <img src="/images/fabacademy/week-05/programmingwithfabISP.png" alt="Using the FabISP to program another FabISP" loading="lazy" />
</figure>

## Trying out additional PCB manufacturing techniques

<figure>
  <img src="/images/fabacademy/week-05/differentpcboutput.png" alt="Trying out additional PCB manufacturing techniques" loading="lazy" />
</figure>

#### Trying out my own FabISP design

<figure>
  <img src="/images/fabacademy/week-05/myfabisp2.png" alt="Trying out my own FabISP design" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/myfabisp3.png" alt="Trying out my own FabISP design" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/myfabisp4.png" alt="Trying out my own FabISP design" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-05/myfabisp5.png" alt="Trying out my own FabISP design" loading="lazy" />
</figure>

## Downloads

#### Brian's Fab ISP Files:

[compressed](/files/fabacademy/week-05/brian.zip)

#### Andy's Fab ISP Files:

[compressed](/files/fabacademy/week-05/andy.zip)

#### My Fab ISP tryout:

[compressed](/files/fabacademy/week-05/USBTiny.zip)

## Learning Outcomes

-   I learnt how to install fab modules on a Raspberry Pi and how to configure mod\_server.js to enable using fab modules on the local network.
-   I learned to make Flexible Circuits
-   I learned to do PCB milling, I used to make PCBs by etching back home.
-   I learned to use the GNU AVR toolchain and upload code to a board using the terminal.

#### What I'll need to explore more

-   I need to make better PCB designs for a personalized Fab ISP. My design this time didn't have the USB trace footprint because I couldn't locate the library, I ended up using a mini USB but the copper tape couldn't keep it down on the acryllic. I couldn't use epoxy to secure it because it kinda leaked into the port and rendered it useless.

  

* * *
