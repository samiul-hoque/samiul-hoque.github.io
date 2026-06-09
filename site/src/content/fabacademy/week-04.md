---
title: "Computer Controlled Cutting"
week: 4
assignment: "Characterise a laser cutter; cut something on the vinyl cutter; design and cut a parametric press-fit kit."
heroImage: "/images/fabacademy/week-04/finalVinyl.png"
gallery: []
---
## Assignment:

* * *

[Group Assignment](http://fab.academany.org/2019/labs/cept/computercontrolledcutting.html)-   Characterize your lasercutter's focus, power, speed, rate, kerf, and joint clearance

### Individual assignment:

-   Cut something on the vinylcutter design
-   lasercut, and document a parametric press-fit construction kit, accounting for the lasercutter kerf, which can be assembled in multiple ways
(for extra credit include elements that aren't flat)

## What I made this week:

* * *

<figure>
  <img src="/images/fabacademy/week-04/finalVinyl.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/observations.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/parametrickit.gif" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output1.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output5.png" alt="" loading="lazy" />
</figure>

## Vinyl Cutter

I started with the Vinyl Cutter. Because it kinda seemed abandoned in one corner of the lab, while all the other machines had long queues on them to work on.  
  
We have a [Roland GX-24](https://www.rolanddga.com/support/products/cutting/camm-1-gx-24-24-vinyl-cutter) Vinyl cutter here. The official resources on the roland site was very helpful for getting the machine prepped to work with my design files. Which can be found[](https://www.rolanddga.com/support/products/cutting/camm-1-gx-24-24-vinyl-cutter)

### Materials

  
  
  

The Vinyl Materials we had at the lab were;

-   Red, Green, Blue & Yello Vinyl
-   Copper Tape
-   Transfer Tape
-   Unknown material that I assume is to sandwich multilayer PCBs with.

<figure>
  <img src="/images/fabacademy/week-04/vinylmaterials.png" alt="" loading="lazy" />
</figure>

### Blades

We only had 45 degree blades at the lab. The vinyl cutter here is used for cutting labels and stickers mostly.

<figure>
  <img src="/images/fabacademy/week-04/rolanblades1.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/rolanblades2.png" alt="" loading="lazy" />
</figure>

### Setting up the Machine for Operation

  

### Loading the Vinyl Rolls

#### Open the lever

To load vinyl rolls, you first need to pull down the lever on the left side of the machine

<figure>
  <img src="/images/fabacademy/week-04/vinylload.png" alt="" loading="lazy" />
</figure>

#### Loading vinyl Roll onto the roller

To load vinyl rolls, you first need to pull down the lever on the left side of the machine

<figure>
  <img src="/images/fabacademy/week-04/vinylRoller.png" alt="" loading="lazy" />
</figure>

#### Position the Rollers

Position the rollers properly onto the edges of the material. The rollers can only be placed on the white marked positions. You will get a 'BAD POSITION' error message if not done properly.

<figure>
  <img src="/images/fabacademy/week-04/vinylpositionrollers.png" alt="" loading="lazy" />
</figure>

#### Turn the machine on

Press the Power button to turn the machine on. It should light up Blue.

<figure>
  <img src="/images/fabacademy/week-04/vinylPowerOn.png" alt="" loading="lazy" />
</figure>

#### Load Roll Mode

On 'Select Sheet', select '\*Roll' and press the 'Enter Button'.

<figure>
  <img src="/images/fabacademy/week-04/vinylloadroll.png" alt="" loading="lazy" />
</figure>

#### Vinyl Loading...

The machine head will now move across the roll you just loaded and calculate the length automatically.

<figure>
  <img src="/images/fabacademy/week-04/vinylNowLoading.png" alt="" loading="lazy" />
</figure>

#### Work Area width

After that you should be able to see your work area on the machine.

<figure>
  <img src="/images/fabacademy/week-04/vinylWorkAreaWidth.png" alt="" loading="lazy" />
</figure>

  
  

With that, your machine should be ready to work with.

### Calibrating the Blade Force

Now this is the tricky part about the Vinyl Cutter. The blade force needs to be calibrated for different materials. And this force is not constant, it depends on the mood of the machine on that day apparently. It varies on the wear on the blade, Material thickness, material properties etc.  
Luckily the machine has some quick and easy ways to calibrate this force.

#### Force Adjustment Menu

Press the Force Button to bring up the Force Adjustment Menu.

<figure>
  <img src="/images/fabacademy/week-04/vinylForceMenu.png" alt="" loading="lazy" />
</figure>

#### Set Origin

Move the blade around with the arrow keys and place it where you want to set the origin, and press the origin button to set it as the origin.

<figure>
  <img src="/images/fabacademy/week-04/vinylSetOrigin.png" alt="" loading="lazy" />
</figure>

#### Test Cut

If you press hold the test button, the machine will do a test cut. Play around with the force settings a bit and use the test cut feature to find that perfect blade force.

<figure>
  <img src="/images/fabacademy/week-04/vinylTestCut.png" alt="" loading="lazy" />
</figure>

  
  

### Cutting Force problems

#### Too Much force

Too much force will cut through the material along with the vinyl.

#### Too Less force

Too less force wont cut the vinyl properly, and I had trouble taking the parts out.

### Designing Files for the Vinyl Cutter

Being an electronics enthusiast, I was eager to try out making flexible circuits on the vinyl cutter. So while the other lab members were trying the machine out with logos, I made a trace test file on eagle CAD with all trace sizes, holes sizes and pad sizes for the available ICs available at the lab. Which happened to be AtTiny44, Atmega328p, LM2940 and I had some AtTiny85s with me. So I decided to go along with that and came up with [this .bmp file.](images/week4/bmptest.bmp)  
I will go over creating PCBs on EagleCAD next week. For now I'll just cover on how to get this cut on roland cut studio.

<figure>
  <img src="/images/fabacademy/week-04/vinylPCBtest.png" alt="" loading="lazy" />
</figure>

I exported the bottom layer as a bmp image with 150 detail. And opened it on Roland Cut Studio on the Lab Computer for the vinyl cutter.

### Roland Cut Studio

Roland cut studio is a very easy to use CAD/CAM tool for Roland Vinyl Cutters.

I imported my .bmp image here using the Import button

After checking the resolution by clicking on the 'properties' option

Then I used the 'trace outline' tool to make a cut path for my design.

After that, I clicked on cut and the cut prompt came up. You have to get the cutting dimension from the machine from the machine properties

Once you're done with that, you can start cutting.

This gif excplains it all. 

<figure>
  <img src="/images/fabacademy/week-04/rolandcutstudio.gif" alt="" loading="lazy" />
</figure>

### Manual Calibration of cutting force During cutting for intricate detail

After many repeatations of this;

<figure>
  <img src="/images/fabacademy/week-04/vinylManualCalibration.png" alt="" loading="lazy" />
</figure>

I was able to find a workaround, by manually adjusting the force during cutting of the smaller details using the force slider on the machine.

The final product came out like this.

<figure>
  <img src="/images/fabacademy/week-04/finalVinyl.png" alt="" loading="lazy" />
</figure>

### Transfer Tape

I foudn this video on using transfer tape very useful.

Now bear in mind that you are supposed to take out the negatives before you put the transfer tape on.  
BUT! for very detailed designs like PCBs, its much easier to remove the negative after you transfer the vinyl on the intended surface. 

<figure>
  <img src="/images/fabacademy/week-04/transfertape.png" alt="" loading="lazy" />
</figure>

Trying out to cut traces for the Atmega328p would be a long stretch, but I think I could do everything else. Or at least it seemed like that. I was fairly satisfied with the output and wanted to test this out on copper now.

### Trying to cut Copper tape

I cut out my first circuit on the copper tape and it seemed to have come out all right, except the Atmega328p trace.  
But I made **One Mistake**. I put it on paper...  
The result was a mess, because the copper tape had much stronger glue on it. It kept tearing off the paper and I couldn't weed it out.

<figure>
  <img src="/images/fabacademy/week-04/copperpaper.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/copperpaper2.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/copperpaper3.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/copperpaper4.png" alt="" loading="lazy" />
</figure>

This was definitely not going to work.

### Mounting copper tape on a better base.

For the next copper tape, I decided to use an acryllic base, found that from the waste bin.

<figure>
  <img src="/images/fabacademy/week-04/copperonacryl.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/copperonacryl2.png" alt="" loading="lazy" />
</figure>

This time it was coming off nicely. And seemed very satisfactory to me.

### The Final Output

<figure>
  <img src="/images/fabacademy/week-04/observations.png" alt="" loading="lazy" />
</figure>

### Conclusions

-   Traces upto 12mil can be done
-   1206 components like LEDs, capacitors and resistors can be used easily.
-   Atmega328p is a no go
-   I think AtTiny44 and AtTiny85 can work if the force is optimized even further. I'll try that on the PCB week.

### Sources I found Useful

-   [Originially inspired by Honghao Den's Fab Academy work with the vinyl cutter.](http://fab.cba.mit.edu/classes/863.17/Harvard/people/HonghaoDeng/project-3/project-3.html)
-   [This article on making a Vinylcut copper & fabric PCB](https://www.kobakant.at/DIY/?p=1132)
-   [Jie Qi's Flikr](https://www.flickr.com/photos/jieq/sets/72157625670797923/)
-   [Simon de Bakkar's instructions](http://v2.nl/lab/blog/cutout-circuit-board)

## Laser Cutter

The Laser cutter seemed like the most used tool in the FabLab to me. There was an endless number of students using it and I found it quite hard to get the chance of 'really' check out the machine. At FabLab CEPT we have two laser cutters, one Epilog Mini and one SIL-1290 machine.

### Laser Cutter Workflow

<figure>
  <img src="/images/fabacademy/week-04/laserworkflow.png" alt="" loading="lazy" />
</figure>

### Laser Cutter Regulations

-   #### Design Files:
    
    The Standard file format here is .DXF
-   #### Materials:
    
    Allowed Materials
    
    -   Pine MDF (up to 7 mm thickness)
    -   Plywood (up to 6 mm thickness)
    -   Casted acrylics (up to 15 mm thickness)
    -   Papers
    -   Non plastic boards
    -   Wood (for engraving)
    -   Veneers
    
    #### Prohibitted Materials
    
    -   Polystyrene, polypropylene, polycarbonate
    -   Plastics containing chlorine and fluorine content based material
    -   Any particle board other than Pine MDF
    -   Rubber (All Forms)
    -   Casting resins
    -   Any kind of Metal

### Laser Cutters available at the lab

### Epilog Mini

* * *

#### Specs

-   Brand: Epilog
-   Model No: Epilog Mini 24
-   Laser Type: State-of-the-art, digitally controlled, air-cooled CO2 laser tubes are fully modular, permanently aligned and field replaceable.
-   Laser power: 40 watt
-   Motion Control System: High-speed, continuous-loop, DC servo motors using linear and rotary encoder technology for precise positioning.
-   Resolution: User controlled from 75 to 1200 dpi.
-   Supply voltage: AC 220 V + 10%
-   Cooling method: Air Cooled
-   Working area: 610 x 305 mm
-   Operating Modes: Optimized raster, vector or combined modes.
-   Normal Sound Level: 59 db

source: [Epilog's Website.](http://www.engravingconcepts.com/index.php/products/epilog-laser-products/products/mini-24)

<figure>
  <img src="/images/fabacademy/week-04/laserepilogmini.jpg" alt="" loading="lazy" />
</figure>

### SIL-1290

* * *

#### Specs

-   Brand: SIL
-   Model No: SIL-1290
-   Laser Type: Co2 DC glass laser tube
-   Laser power: 100 watt
-   Wavelength: 10.6 um
-   Supply voltage: AC 220 V + 10%
-   Re-positioning accuracy: 0.1 mm
-   Cutting speed: 0~30000 mm / min
-   Engraving speed: 0~64000 mm / min
-   Cooling method: Water cooled
-   Work environment: Temp: 0 c ~ 45 c. humidity: 5% ~ 95%
-   Acceleration speed: 1 G
-   Working area: 1200×900 mm
-   Graphics file support: .PLT, .CDR, .AI, .DWG, .DXF, .DST, .BMP, .JPEG, .TIFF, .GIF, .PCX, etc
.

source: [Last year's Week 4 group work.](http://fab.academany.org/2018/labs/fablabcept/week-04-computer-controlled-cutting.html)

<figure>
  <img src="/images/fabacademy/week-04/lasersil.jpg" alt="" loading="lazy" />
</figure>

### Designing a Test Template

I started with making this simple template on Adobe Illustrator. I wanted to check what the kerf was, how the laser worked with circles and text. This tutorial was especially helpfull for preparing laser cutting files in Adobe Illustrator.

<figure>
  <img src="/images/fabacademy/week-04/laserFirstTest.png" alt="" loading="lazy" />
</figure>

### Exporting Files for Laser CAM

I exported the files as .DXF with autodesk 2004 compatibility because our laser CAM software works with that.

<figure>
  <img src="/images/fabacademy/week-04/laserFirstTest.png" alt="" loading="lazy" />
</figure>

### Laser CAM Software: RDworks v8.01.26

Our SIL-1290 laser uses the RDworks as the CAM tool.The lab is using v8.01.26 although a newer version is available which supports multiple passes. More information on the Ruida Control System and RDWorks can be found in [this](https://www.facebook.com/groups/900528680076062/) Social Media support group. The Epilog laser is out of order as it doesn't have an active air assist or exhaust and so we all will be using the SIL-1290 laser and RDworks for this week. To make matters a bit more complicated, we will be sharing the machine with the University students here through the slot booking system in place at the lab. Which means there will be limited time access to the machine as well.  
  
RDworks is a generic control software for laser cutters equipped with [Ruida Control System](http://en.rd-acs.com/products.aspx?TypeId=50077&FId=t3:50077:3) made by [Shenzen Ruida technology CO.Ltd](http://en.rd-acs.com/). Like most chinese manufacturers, there is very little information provided for the software support on RDworks. But nevertheless, it is being used in our lab and in most of the locally produced laser machines in india. A very good alternative to RDworks is [Lightburn](https://lightburnsoftware.com/) which works with Ruida Control systems.

### RDworks UI:

<figure>
  <img src="/images/fabacademy/week-04/rdworksui.jpg" alt="" loading="lazy" />
</figure>

### Working Procedure:

#### Importing

The vector can be imported using the 'import' file operation. 'Ctrl+i' works as well. I imported the file as .DXF I saved earlier with Autodesk 2004 support.

<figure>
  <img src="/images/fabacademy/week-04/rdimport.jpg" alt="" loading="lazy" />
</figure>

#### Nesting

Nesting is the process of arranging your cuts in order to reduce material waste. Since the Laser cutter has a very precise cutting kerf, it can be done very neatly. My test cuts right now didn't require nesting, but I'll be requiring this when I make the parametric Press Fit Kit.

#### Checking for Errors: Overlapping lines, un-joint vectors

Error checking on your file can be done before sending it to your laser and wasting material using the error checking tools. Most of the erros can also be fixed from RDworks so you don't have to jump between CAD and CAM tools.

<figure>
  <img src="/images/fabacademy/week-04/rderror.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/rderror1.jpg" alt="" loading="lazy" />
</figure>

#### Laser Power and Speed Settings

The Laser power and Speed Settings can be found on the right side of the screen. You put your design on any specific layer and set the Power(min,max), Speed and Mode/Output for each layer.  
Power sets the wattage of the laser, a 55% power will result in 55% of the total output power of the laser. The Min and Max settings lets the power to vary in quick successions when moving in very small areas. This results in sharper edges and cuts.  
More on Output modes, Speed and power settings can be found in our [Group work page](http://fab.academany.org/2019/labs/cept/computercontrolledcutting.html) for this week.

<figure>
  <img src="/images/fabacademy/week-04/rdpower.jpg" alt="" loading="lazy" />
</figure>

#### Downloading to machine

After I was done with checking errors on my design, setting the appropriate power and speed settings, I downloaded my file to the machine. Just for future reference, here are the machine settings,

-   Model: 644XG ([644XG RuiDa Controller](http://en.rd-acs.com/Private/Files/a4d9f12fe9e32eb7.pdf))
-   Device Connection Settings: Over local network ( IP 192.169.7.8)

<figure>
  <img src="/images/fabacademy/week-04/rddownload.jpg" alt="" loading="lazy" />
</figure>

#### Setting Origin and Cutting

Now it's all on the machine interface. Set the location where you want your origin to be at by moving the laser head with the arrow keys. When you're happy with the origin position press on the 'origin' button. You can check your design's outer frame by clicking on the 'frame' icon. This further gives you an idea where your design will be cut.

### Material Selection

I will be using 3mm MDF as material as it was cheap and readily available near the lab. The price for about a square meter of it was 450rs.

> The material was not provided by the lab so I had to keep a check on the budget and chose the cheapest material available to me.

### Trying Different laser Power Settings

<figure>
  <img src="/images/fabacademy/week-04/firstTestOutput.png" alt="" loading="lazy" />
</figure>

  

* * *

  

## Optimal Setting for 3.3mm MDF:

#### Through Cut

-   Power: (55,55)
-   Speed: 25

#### Engraving

-   Power: (5,15)
-   Speed: 60

  

* * *

### Measuring the Kerf

* * *

  

<figure>
  <img src="/images/fabacademy/week-04/laserInsideCut.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/laserInsideCut2.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/laser.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/laser1.png" alt="" loading="lazy" />
</figure>

  

* * *

## Kerf Calculation:

Kerf for 3.3mm MDF at power(55,55) and Speed(15) was observed to be 0.9mm. I made multiple cuts to be sure and it produced exact results.

> Kerf for 3.3.mm MDF was 0.9mm at 55% power and speed 15.

* * *

  

## Conclusions from test Laser Cuts:

-   For 3.3mm MDF, I found the laser power at 55 max, 55 min and Speed 15 to be perfect. The kerf was minimum for this setting which was 0.9 mm.
-   The Outside Dimension of the cut seemed to be perfect while the inner dimension had the kerf. Which means the laser was doing Inside cuts. I'll have to keep this in consideration when Designing the press fit kit.
-   My first two cuts didn't cut through as the speed was at 25.
-   Multiple passes can be done by making lines on top of eachother.

* * *

## Optimal Settings & Observation for my material:

#### Through Cut

-   Power: (55,55)
-   Speed: 25

#### Kerf:

-   0.9 mm

#### Engraving

-   Power: (5,15)
-   Speed: 60

### Contribution to Group Work:

These settings were further verified in the group work template we made, which can be found [here.](http://fab.academany.org/2019/labs/cept/computercontrolledcutting.html#mdf)

## Parametric Press Fit Kit.

With my material and Kerf optimization done, I was ready to make some parametric designs on Fusion 360 for my press fit kit.  
I tried to put a parameter for the number of sides while creating a polygon, and it seems that you can not do that. So I found a work around following [this](https://forums.autodesk.com/t5/fusion-360-design-validate/polygon-radius-and-sides-defined-by-user-parameters/m-p/7019097) solution posted on the autodesk forums.

#### The Design Sketch:

<figure>
  <img src="/images/fabacademy/week-04/sketch1.jpg" alt="Parametric Geometry Sketch" loading="lazy" />
  <figcaption>Parametric Geometry Sketch</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-04/sketch2.jpg" alt="Sketch from face of Extruded Surface for Laser Cutting" loading="lazy" />
  <figcaption>Sketch from face of Extruded Surface for Laser Cutting</figcaption>
</figure>

* * *

#### Workflow video, How I made the Parametric Press Fit Kit:

* * *

#### Parameters

-   Number of Sides ( <= 3)
-   Diameter of the polygon
-   Material Thickness
-   Laser kerf
-   Slot Depth

<figure>
  <img src="/images/fabacademy/week-04/parametrickit.gif" alt="" loading="lazy" />
</figure>

#### Parametric Kerf Optimization

While designing the slots in my sketch, I tried to make the kerf optimization parametric. But, unlike a CNC, it's hard to know if the laser is doing an inside, outside or an along cut. Common sense tells me the cut 'should' be along. But measuring the test cuts gave an idea that the machine was maintaining an inside cut and the outside measurements were staying accurate.  
  
So I tried with three slot sizes,

Outside: Material Thickness - 2\* kerf

<figure>
  <img src="/images/fabacademy/week-04/outside.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/outside1.jpg" alt="too Loose" loading="lazy" />
  <figcaption>too Loose</figcaption>
</figure>

Inside: Material Thickness + 2\* kerf

<figure>
  <img src="/images/fabacademy/week-04/inside.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/inside1.jpg" alt="Too Tight" loading="lazy" />
  <figcaption>Too Tight</figcaption>
</figure>

Along: Material Thickness + kerf

<figure>
  <img src="/images/fabacademy/week-04/along.jpg" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/along1.jpg" alt="Perfect Fit" loading="lazy" />
  <figcaption>Perfect Fit</figcaption>
</figure>

#### Design Outputs

And all were generated from the same file, just by changing the 'side' parameter.

<figure>
  <img src="/images/fabacademy/week-04/triangle.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/pentagon.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/hexagon.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/heptagon.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/octagon.png" alt="" loading="lazy" />
</figure>

### Difficulties

#### AUTODESK WILL EXPORT THE CONSTRUCTION LINES IN THE .dxf FILES!!!

#### Solution:

  

-   Extrude your Sketch
-   Select the surface of the object that you want to cut, and create a sketch from that surface.
-   Use this sketch to export your designs, and the older sketch to modify your design.
Your files should look like this;

<figure>
  <img src="/images/fabacademy/week-04/filestructure.png" alt="" loading="lazy" />
</figure>

### Hero Shots

<figure>
  <img src="/images/fabacademy/week-04/finalLaserOutput.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output1.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output2.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output3.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output4.png" alt="" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-04/output5.png" alt="" loading="lazy" />
</figure>

### Precautions & Health Hazard

From what I could gather, none of the machines had a filter on them and the exhaust was being pumpued out for the SIL machine while the Epilog Mini didn't even have a working exhaust pipe. I decided to keep my laser machine adventures to a minimum as I have a lung condition and didn't want to expose myself to the fumes much.

### Downloads

  

### Vinyl Cutter files

<table class="alt"><tbody><tr><td>Eagle CAD Files</td><td></td></tr><tr><td>Eagle Project folder .zip</td><td><a href="https://github.com/samiul-hoque/Fab-Academy-2019-hosting/raw/master/week4/vinylcutter/PCB%20Trace%20test.zip" class="button primary small" target="_blank">Download</a></td></tr><tr><td>bmp Output Files</td><td><a href="https://raw.githubusercontent.com/samiul-hoque/Fab-Academy-2019-hosting/master/week4/vinylcutter/bmptest.bmp" class="button primary small" target="_blank" download="PCBtrace.bmp">Download</a></td></tr></tbody></table>

### Laser Files

<table class="alt"><tbody><tr><td>Adobe Illustrator Files</td><td></td></tr><tr><td>.ai File</td><td><a href="https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/adobe%20illustrator/first%20test.ai?raw=true" class="button primary small" target="_blank">Download</a></td></tr><tr><td>.dxf export</td><td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/adobe%20illustrator/first%20test.dxf" class="button primary small" target="_blank">Download</a></td></tr></tbody></table>

  

* * *

  

<table class="alt"><tbody><tr><td>Fusion 360</td><td></td></tr><tr><td>.f3d File</td><td><a href="https://github.com/samiul-hoque/Fab-Academy-2019-hosting/raw/master/week4/laser/fusion360/Parametric%20Construction%20kit%20v3.f3d" class="button primary small" target="_blank" download="ParametricConstructionKit.f3d">Download</a></td></tr><tr><td>.dxf Files</td><td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/fusion360/triangle3.5mdf.dxf" class="button primary small" target="_blank">triangle.dxf</a> <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/fusion360/square3.5mdf.dxf" class="button primary small" target="_blank">square.dxf</a> <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/fusion360/pentagon.dxf" class="button primary small" target="_blank">pentagon.dxf</a> <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/fusion360/6sides3.5mm.dxf" class="button primary small" target="_blank">hexagon.dxf</a> <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/fusion360/hexagon.dxf" class="button primary small" target="_blank">heptagon.dxf</a> <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/samiul-hoque/Fab-Academy-2019-hosting/blob/master/week4/laser/fusion360/octagon.dxf" class="button primary small" target="_blank">octagon.dxf</a></td></tr></tbody></table>

## Learning Outcomes

-   I explored the vinyl cutter and tried to test parameters to make flexible PCBs
-   I learnt to use the Laser Cutting Machine
-   I learnt about kerf, actual and design dimension erros and parametric design.

#### What I'd Like to explore further

-   I will make Flexible PCBs for next week's assignment using what I explored on the vinyl cutter.
-   I would like to try out different laser cutter software. Something other than RDworks, I found it was quite limiting. Trying our Lightburn would be the best choice but I did not want to risk ruining the current workflow of the machine as it is constantly being used. Maybe I'll try it when I have full access to a RuiDa Laser.

  

* * *
