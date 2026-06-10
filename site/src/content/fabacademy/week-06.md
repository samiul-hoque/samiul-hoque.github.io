---
title: "3D Scanning & Printing"
week: 6
assignment: "Design and 3D print an object that can't be made subtractively; 3D scan an object."
heroImage: "/images/fabacademy/week-06/3Dprintoutput1.jpg"
gallery: []
---
## Assignment

* * *

We had two assignments three week.  

1.  The Group Assignment was to test the design rules for your 3D printer(s Which can be found [here.](http://fab.academany.org/2019/labs/cept/3dscanningprinting.html)  
    
  
3.  design and 3D print an object (small, few cm3, limited by printer time) that could not be made subtractively
  
5.  3D scan an object (and optionally print it)

## What I made

* * *

### 3D Printing:

#### LED Arm For PixelFace

-   Parametrically Designed
-   Can't be produced easily with any other manufacturing process.  
    It would require 4 seperate parts for the same output.
-   More images [here](/projects/fab-academy/week-06/)

<figure>
  <img src="/images/fabacademy/week-06/3Dprintoutput1.jpg" alt="LED Arm For PixelFace" loading="lazy" />
</figure>

### 3D Scanning:

Before I get to my 3D printing assignment, I thought of documenting some web research I did on the topic. Here's some context on 3d-printing.

## History

* * *

Believe it or not, 3D printing may sound like a quite modern manufacturing process, but it's actually way older than you think. Modern 3d printing started with a publication by Hideo Kodama of Nagoya Municipal Industrial Research Institute in 1981.

Charles Hull filed a patent for [Stereolithography](https://en.wikipedia.org/wiki/Stereolithography) in 1984, which was granted in 1986, and in the following year made [SLA-1](https://3dprint.com/134861/chuck-hull-asme-landmark/), the first ever 3D printer.

<figure>
  <img src="/images/fabacademy/week-06/sla1.jpg" alt="SLA-1, The first 3D printer" loading="lazy" />
  <figcaption>SLA-1, The first 3D printer</figcaption>
</figure>

In 1986, Carl Deckard filed a patent for the [SLS technology](https://en.wikipedia.org/wiki/Selective_laser_sintering), granted in 1989, another 3D printing technique in which powder grains are fused together locally by a laser.

In the meantime in 1992, Scott Crump, a co-founder of Stratasys Inc. was granted a patent for [Fused Deposition Modelling (FDM)](https://en.wikipedia.org/wiki/Fused_filament_fabrication#Fused_deposition_modeling) : the third of the main 3D printing technologies, in which

Over less than ten years, the three main technologies of 3D printing were patented and 3D printing was born!

But things slowed down quite a bit after that until 2004 with the [Reprap Project.](https://reprap.org/) This opensource project led to the spreading of the FDM 3D desktop printers and it's rise in popularity among the maker community.

3D printing got into the mainstream starting from 2009, when the FDM patents fell to the public domain. opening the way to a wide wave of innovation in FDM 3D printers, a drop of the desktop 3D printers price.

#### Links:

-   [Autodesk: History of 3d Printing](https://www.autodesk.com/redshift/history-of-3d-printing/)
-   [Sculpteo: The history of 3d printing techniques from the 80s to today](< https://www.sculpteo.com/blog/2016/12/14/the-history-of-3d-printing-3d-printing-technologies-from-the-80s-to-today/
                                        >)
-   [Timeline of major 3D printing Achievments by avplastics](http://www.avplastics.co.uk/3d-printing-history)

## 3D Print Techniques

Over the time there's been a myriad of 3D printing techniques that developped. You can find about it all in [this](https://www.3dhubs.com/knowledge-base/additive-manufacturing-technologies-overview) very well made article by 3Dhubs. [3dhubs.](https://www.3dhubs.com/)

This illustration can explains it all. It's freely available for download from [here.](https://www.3dhubs.com/get/am-technologies/)

<figure>
  <img src="/images/fabacademy/week-06/3dtechniques.jpg" alt="3D Printing Techinques, Illustration by 3dhubs" loading="lazy" />
  <figcaption>3D Printing Techinques, Illustration by 3dhubs</figcaption>
</figure>

  

But for the average maker like me, the following polymer based 3D printing techniques are available:

-   FDM
-   SLA

#### Links:

-   [Additive Manufacturing Technologies Overview-3Dhubs](https://www.3dhubs.com/knowledge-base/additive-manufacturing-technologies-overview)

## Materials

3D printing techniques vary for different materials, but in general the materials can be grouped into three main branches. The following illustration by 3dhubs explains it clearly.

<figure>
  <img src="/images/fabacademy/week-06/3dmaterials.jpg" alt="3D Printed Material classification, Illustration by 3dhubs" loading="lazy" />
  <figcaption>3D Printed Material classification, Illustration by 3dhubs</figcaption>
</figure>

We will mostly be working with polymer based materials, thermoplastics in particular because our lab has 2 FDM printers. For complicated prints that can not be done on these, I usually just send them to a local print lab who can do SLA printing.

#### Links:

-   [3D Printing Materials-3Dhubs](https://www.3dhubs.com/guides/3d-printing/#3d-printing-materials)

The 3D printing workflow consists of four steps usually. They are:

-   Designing
-   Slicing
-   Printing
-   Post Processing

## Designing

The first step for 3D printing is creating a 3D design file. It can be done by a 3D CAD tool or it can be generated using 3D scanning where the latter can become a tricky and complicated process.  
After the 3D design is made, it has to exported to a file type that is supported by the slicing software we will use. In most cases, the set standard in this regard is a [Stereolithography file](https://en.wikipedia.org/wiki/STL_\(file_format\)) (.stl). It describes the entire 3D object as polygons(triangles).

<figure>
  <img src="/images/fabacademy/week-06/workflowdesign.jpg" alt="Designing in Fusion360" loading="lazy" />
  <figcaption>Designing in Fusion360</figcaption>
</figure>

## Slicing

The second step is to create a g-code from the 3D model we just designed that the 3D printer can understand. Usually this is done by a slicing software like [Cura](https://ultimaker.com/en/products/ultimaker-cura-software), [FlashPrint](http://www.flashforge.com/support-center/flashprint-support/), etc.

<figure>
  <img src="/images/fabacademy/week-06/workflowslice.jpg" alt="Slicing Software(FlashPrint)" loading="lazy" />
  <figcaption>Slicing Software(FlashPrint)</figcaption>
</figure>

## Printing

Once the g-code is generated, we start the printing process. The printing part of 3d printing is a tedious job. It usually takes a long time and requires somewhat constant attention, depending on various factors.

<figure>
  <img src="/images/fabacademy/week-06/3dprinting.jpg" alt="3D Printing on a FlashForge Dreamer" loading="lazy" />
  <figcaption>3D Printing on a FlashForge Dreamer</figcaption>
</figure>

## Post Processing

Depending on the print technique and finishing wanted on the end product, 3D printed parts require a post-processing step. This step may include removal of support material, UV curing, High temperature compression, sanding, alcohol baths.

<figure>
  <img src="/images/fabacademy/week-06/workflowpost.jpg" alt="Post processing Steps (image collected from 3dhubs)" loading="lazy" />
  <figcaption>Post processing Steps (image collected from 3dhubs)</figcaption>
</figure>

## Infil

As the name suggest, Infil is the pattern how material is filled inside the surface of a 3D printed object.

There are two settings to infil which need to be remembered.

-   #### Infil Style or pattern:
    
The Infil Style is how Materials is layed out in the infil. Most common patterns are line, hexagon and cubic.  
  
-   #### Infil Density
    
The Infil Density refers to how much material will be put inside. This setting can significantly increase or decrease the print time.

  

<figure>
  <img src="/images/fabacademy/week-06/infilstyles.jpg" alt="Infil Styles Illustration (image collected from All3DP)" loading="lazy" />
  <figcaption>Infil Styles Illustration (image collected from All3DP)</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/infildensity.jpg" alt="Infil Density Illustration (image collected from All3DP)" loading="lazy" />
  <figcaption>Infil Density Illustration (image collected from All3DP)</figcaption>
</figure>

#### Links:

-   [What is Infil & How to use it- All3DP](https://all3dp.com/2/infill-3d-printing-what-it-means-and-how-to-use-it/)

## Wall Thickness

Wall thickness, also known as shell thickness, is the thickness of the outer walls of your design. In manufacturing, you always want to use as little material as possible, or just as much as you need.This goes for 3D printing, as well. The added luxury is that you can decide the material thickness of your project’s walls, top, and bottom when you prepare the 3D print file for your 3D printer.  
  
The wall thickness parameter can siginificantly increase or decrease print time.

<figure>
  <img src="/images/fabacademy/week-06/wallthickness.jpg" alt="Wall Thickness Illustration by All3dp" loading="lazy" />
  <figcaption>Wall Thickness Illustration by All3dp</figcaption>
</figure>

#### Links:

-   [3D Printing Wall Thickness – What to Consider for a Perfect Print by All3DP](https://all3dp.com/2/3d-printing-wall-thickness-what-to-consider-for-a-perfect-print/)

## Layer Height

Like all CNC machines, 3D printers work in layers which is governed by the z-axis and this greatly affects the finishing of the design file.  
All 3D printing processes build parts layer by layer. Due to the additive nature of 3D printing, the thickness of a layer determines the resolution of a print in a similar way that the number of pixels determines the resolution of a television or a computer monitor. The downside is that the lower the layer height the longer it takes to print.

<figure>
  <img src="/images/fabacademy/week-06/layerheight2.jpg" alt="Effect of z axis in a CNC- illustration by 3Dhubs" loading="lazy" />
  <figcaption>Effect of z axis in a CNC- illustration by 3Dhubs</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/layerheight0.jpg" alt="Layer Height comparison- illustration by 3dhubs" loading="lazy" />
  <figcaption>Layer Height comparison- illustration by 3dhubs</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/layerheight1.jpg" alt="Layer Height comparison(macro shot)- illustration by 3dhubs" loading="lazy" />
  <figcaption>Layer Height comparison(macro shot)- illustration by 3dhubs</figcaption>
</figure>

#### Links:

-   [The impact of layer height on a 3D Print - 3dhubs](https://www.3dhubs.com/knowledge-base/impact-layer-height-3d-print)

## Brims, Rafts and Skirts

#### Brim:

A brim is a special type of skirt that is attached to the edges of the model. Typically it is printed with a increased number of outlines to create a large ring around the part.  
Brims are used to hold down the edges of your part, which can prevent warping and help with bed adhesion.

#### Skirt:

A skirt is an outline that surrounds your part but does not touch the part. The skirt is extruded on the print bed before starting to print your model. Skirts serve a useful purpose because they help prime your extruder and establish a smooth flow of filament. Observing the skirt also allows you to detect and adjust any leveling or adhesion issues before the actual model begins printing.

#### Raft:

A Raft is a horizontal latticework of filament that is located underneath the part. The 3D printed part will be printed on top of this raft, instead of directly on the build platform surface. Rafts are primarily used with ABS to help with warping and bed adhesion, but they can also be used to help stabilize models with small footprints, or to create a strong foundation on which to build the upper layers of your part. The raft included in Simplify3D has been optimized over years of testing on hundreds of different machines to ensure easy separation and a high-quality surface finish on the bottom of your part. Once the print is complete, the raft effortlessly peels away from the print and can be discarded.

<figure>
  <img src="/images/fabacademy/week-06/brimskirtraft.jpg" alt="Raft, Skirt & Brim illustration by simplyfy3D" loading="lazy" />
  <figcaption>Raft, Skirt & Brim illustration by simplyfy3D</figcaption>
</figure>

#### Links:

-   [Supports in 3D Printing: A technology overview by 3dhubs](https://www.3dhubs.com/knowledge-base/supports-3d-printing-technology-overview)

## Support Material

With FDM printing, each layer is printed as a set of heated filament threads which adhere to the threads below and around it. Each thread is printed slightly offset from its previous layer. This allows a model to be built up to angles of 45°, allowing prints to expand beyond its previous layer’s width. When a feature is printed with an overhang beyond 45°, it can sag and requires support material beneath it to hold it up

<figure>
  <img src="/images/fabacademy/week-06/supportm1.jpg" alt="Support Material requirement- illustration by 3dhubs" loading="lazy" />
  <figcaption>Support Material requirement- illustration by 3dhubs</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/supportm2.jpg" alt="Support material in design - illustration by 3dhubs" loading="lazy" />
  <figcaption>Support material in design - illustration by 3dhubs</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/supportm3.jpg" alt="Comparison between no support and support - illustration by 3dhubs" loading="lazy" />
  <figcaption>Comparison between no support and support - illustration by 3dhubs</figcaption>
</figure>

#### Links:

-   [What is Infil & How to use it- All3DP](https://all3dp.com/2/infill-3d-printing-what-it-means-and-how-to-use-it/)

## Conceptualization:

For the 3D printing week Assignment, I wanted to make a small scale version of the LED arm of my final project. So I went back to my work for [week 1](/projects/fab-academy/week-01/) work.

I knew that I was working with Addressable LEDs, so I have been searching the local market for WS2812/SK6812 or anything equivalent. Apparently it's not very popular yet in Ahmedabad, and I couldn't individual 5050 LEDs. But what I did manage to find was this LED strip with WS2812B LEDs. It had 12mm spacing between each LED, a bit too much for my liking but it was okay for the first spiral.  
  
I also checked the price for shipping in individual WS2812B LEDs with SMD 5050 packaging and it would cost me 40 rupees per piece where I get got 60 LEDs for 19 rupees each on the LED strip.

<figure>
  <img src="/images/fabacademy/week-06/ledstrip.jpg" alt="WS2812B LED strip, 12mm spacing, 5050 LEDs" loading="lazy" />
  <figcaption>WS2812B LED strip, 12mm spacing, 5050 LEDs</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/initial_sketch.png" alt="Initial Sketch of Final Project from Week 1" loading="lazy" />
  <figcaption>Initial Sketch of Final Project from Week 1</figcaption>
</figure>

  
Now with my LED strip, I was ready to start designing a small scale version of my LED arm from my initial sketch.

## Step 1: Creating the Rotating Arm Sketch

* * *

I started by analyzing my initial Sketch and came up with this in rough sketch in Fusion360 for the arm.  
I wanted the arc length to be parametric, so first I created the inner, mid and outer arcs with a concentric constraint.  
  
Then I extended the arcs with lines and made a tangent constraint with the lines. I made the lines parallel and equal to eachother. This ensured the lines were always constrained together.  
After that, I closed the area in between and added an 'arm thickness' parameter for the distance between the arcs.

#### Parameters Used:

-   armCurvature
-   armHeight
-   BaseDiameter
-   armThickness

I played around with the parameters a bit to see if I could make any of them dependant on eachother, and made  

##### armCurvature = baseDiameter \* 0.9

<figure>
  <img src="/images/fabacademy/week-06/f360sketch1.jpg" alt="Parameters Used" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/f360sketch1explanation.jpg" alt="Parameters Used" loading="lazy" />
</figure>

  

## Step 2: Extruding the Arm:

* * *

Then I extruded the the sketch to make the initial 3D object. I used a parameter an 'armWidth' parameter for the extrusion. Since I extruded from both sides, I used the distance as (armWidth/2)

#### Parameters Used:

-   armWidth

<figure>
  <img src="/images/fabacademy/week-06/f360sketch1extrusion.jpg" alt="Parameters Used" loading="lazy" />
</figure>

[Extrusion Result](https://sketchfab.com/3d-models/armv01-cd5e6207dc644d04965cbaa281b80d26?utm_medium=embed&utm_source=website&utm_campaign=share-popup) by [s026hoque](https://sketchfab.com/s026hoque?utm_medium=embed&utm_source=website&utm_campaign=share-popup) on [Sketchfab](https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup)

## Step 3: Adding a top Connector:

* * *

#### Sketch:

I started by creating a sketch on the x-y plane, right at the center. I found that it's convinient in using the center to align my design.  
  
I made two circles, the outer one for the arm, the inner one for a connector hole.

##### Parameters Used:

-   armWidth
-   topConnectorHoleDiameter

<figure>
  <img src="/images/fabacademy/week-06/f360sketch2explanation.jpg" alt="Top Connector Sketch Dimensions" loading="lazy" />
  <figcaption>Top Connector Sketch Dimensions</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/f360sketch2orientation.jpg" alt="Top Connector Sketch Orientation" loading="lazy" />
  <figcaption>Top Connector Sketch Orientation</figcaption>
</figure>

#### Extrusion 1(join):

I extruded the the area between the outer circle and the inner circle. The extrusion type was join.

##### Parameters Used:

-   topConnectorThickness

<figure>
  <img src="/images/fabacademy/week-06/f360sketch2extrusion1.jpg" alt="Extrusion(join)" loading="lazy" />
  <figcaption>Extrusion(join)</figcaption>
</figure>

#### Extrusion 2(cut):

I extruded using the inner circle area, the extrusion type was cut. This cleared away the hole for a connector on top. The

<figure>
  <img src="/images/fabacademy/week-06/f360sketch2extrusion2.jpg" alt="Extrusion(cut)" loading="lazy" />
  <figcaption>Extrusion(cut)</figcaption>
</figure>

[Armv0.2](https://sketchfab.com/3d-models/armv02-6848c0596bbb4ddf9655fbf1797046a4?utm_medium=embed&utm_source=website&utm_campaign=share-popup) by [s026hoque](https://sketchfab.com/s026hoque?utm_medium=embed&utm_source=website&utm_campaign=share-popup) on [Sketchfab](https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup)

## Step 4: Adding the Inner LED slot:

* * *

#### Sketch:

I created a small rectangle on the x-y plane. I used the space where the LED arm touches the ground. It made constraining my LED slot much easier.

##### Parameters Used:

-   armWidthSlot
-   slotInside
-   slotOutside

<figure>
  <img src="/images/fabacademy/week-06/f360sketch3dimension.jpg" alt="Inner Slot SKetch Dimensions" loading="lazy" />
  <figcaption>Inner Slot SKetch Dimensions</figcaption>
</figure>

#### Sweep:

I used a Sweep function to create the slot inside the arm. The profile was the sketch, path was the mid line in our initial arm sketch and the operation was 'cut'. This created a hollow arm with the profile of the slot sketch on the inside.

<figure>
  <img src="/images/fabacademy/week-06/f360sketch3sweep.jpg" alt="Using Sweep Function to create the inner slot" loading="lazy" />
  <figcaption>Using Sweep Function to create the inner slot</figcaption>
</figure>

[Arm Hollow Inside](https://sketchfab.com/3d-models/arm-hollow-inside-ed0da8e38ca84629a01d02a93e596f89?utm_medium=embed&utm_source=website&utm_campaign=share-popup) by [s026hoque](https://sketchfab.com/s026hoque?utm_medium=embed&utm_source=website&utm_campaign=share-popup) on [Sketchfab](https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup)

## Step 5: Adding the Inner LED holes:

* * *

#### Sketch:

I measured the LED's again just to be sure, the size is 5mm since the package is 5050. I used constraints to keep the LED hole aligned with the sides of the arm. The first LED has a clearance of 5mm is there for the first LED.

##### Parameters Used

-   ledSize

<figure>
  <img src="/images/fabacademy/week-06/f360sketch4dimensions.jpg" alt="Sketch for LED holes" loading="lazy" />
  <figcaption>Sketch for LED holes</figcaption>
</figure>

#### Extrude(cut):

I used extrude to cut out the LED holes from the top surgace of the arm. The cut distance was from top surface to the inner surface.

<figure>
  <img src="/images/fabacademy/week-06/f360sketch4extrusionCut.jpg" alt="Cutting the LED holes" loading="lazy" />
  <figcaption>Cutting the LED holes</figcaption>
</figure>

[Arm with one LED hole](https://sketchfab.com/3d-models/arm-with-one-led-hole-0a4c663089ec491cb645bc70ebc5f857?utm_medium=embed&utm_source=website&utm_campaign=share-popup) by [s026hoque](https://sketchfab.com/s026hoque?utm_medium=embed&utm_source=website&utm_campaign=share-popup) on [Sketchfab](https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup)

#### Pattern Along Path:

I used Pattern along path to recreate 8 LEDs on the arm. I then adjusted the height of the total arm to leave no empty space on top.  
The distance between each LED was ledSize+ ledSpacing.

##### Parameters Used

-   ledSpacing

<figure>
  <img src="/images/fabacademy/week-06/p1patterndistance1.jpg" alt="Pattern Along Path" loading="lazy" />
</figure>

[Arm Design 8 LEDs Final](https://sketchfab.com/3d-models/arm-design-8-leds-final-d356ff8b8e004ecfab0822ce3d62704a?utm_medium=embed&utm_source=website&utm_campaign=share-popup) by [s026hoque](https://sketchfab.com/s026hoque?utm_medium=embed&utm_source=website&utm_campaign=share-popup) on [Sketchfab](https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup)

## Flash Print

#### Import

* * *

First I imported my .stl file into flashprint. This is the default slicing software for the FlashForge printers.

<figure>
  <img src="/images/fabacademy/week-06/flashimport.jpg" alt="Importing an stl file into FlashPrint" loading="lazy" />
  <figcaption>Importing an stl file into FlashPrint</figcaption>
</figure>

#### Rotate

* * *

Since my design is long on the vertical axis, it's always a good idea to lay it flat on the bed. All FDM printers have much stronger bonding on the horizontal axis and the vertical axis usually has the layer patterns.

<figure>
  <img src="/images/fabacademy/week-06/flashrotate.jpg" alt="Importing an stl file into FlashPrint" loading="lazy" />
  <figcaption>Importing an stl file into FlashPrint</figcaption>
</figure>

#### Orient on Bed

* * *

The design then needs to be oriented for optimum printing. Right now the print is hovering on air, and has to be put on the bed surface.  
\*\* Some surface on the printbed might have less adhesion randomly due to various reasons.\*\*  
For my case I had to move my print area to the corner for perfect adhesion.

<figure>
  <img src="/images/fabacademy/week-06/flashorient.jpg" alt="Importing an stl file into FlashPrint" loading="lazy" />
  <figcaption>Importing an stl file into FlashPrint</figcaption>
</figure>

#### Print Settings

* * *

Clicking on the print Icon on the top will bring up the print settings. I put in my parameters which where:

-   Material: PLA (right extruder)
-   Resolution: Standard
-   Brim: Enabled
-   Support Material: Disabled
-   Raft: Disabled
-   Perimeter Shells: 2
-   Top Solid Layers: 3
-   Bottom Solid Layers: 3
-   Layer Height: 0.18mm
-   First Layer Height: 0.27mm
-   Infil Density: 15%
-   Fill Pattern: Hexagon
-   Print Speed: 60mm/s
-   Temperature: 200℃

<figure>
  <img src="/images/fabacademy/week-06/flashprint.jpg" alt="Print Settings in FlashPrint" loading="lazy" />
  <figcaption>Print Settings in FlashPrint</figcaption>
</figure>

#### Sending the file to the printer

* * *

Since FlashForge needs to stay connected to the device if you print directly from the computer, I opted to send the file to the printer using a memory card.  
  
I saved the print output as a .gx file from FlashPrint and plugged in the memory card on the machine.  
  
Using the Touch Panel, I navigated to my file and printed it.

<figure>
  <img src="/images/fabacademy/week-06/flashsend.jpg" alt="Importing an stl file into FlashPrint" loading="lazy" />
  <figcaption>Importing an stl file into FlashPrint</figcaption>
</figure>

## Problem 1: 'Distance' on Pattern along Path (Design error)

* * *

The first problem I had was design related. I used the wrong distance spacing between LEDs and as you can see, on the output the LED holes didn't match the LED strip.

<figure>
  <img src="/images/fabacademy/week-06/p1patterndistance3.jpg" alt="First Print Output: LEDs are not aligning" loading="lazy" />
  <figcaption>First Print Output: LEDs are not aligning</figcaption>
</figure>

So I went back to measurements, the 'Pattern Along path' function in Fusion360 takes one distance paramter, and the spacing was from center to center. My initial Setting was just the spacing I measured from the LED strip.

<figure>
  <img src="/images/fabacademy/week-06/p1patterndistance2.jpg" alt="Spacing" loading="lazy" />
  <figcaption>Spacing</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/p1patterndistance0.jpg" alt="Previously used parameters" loading="lazy" />
  <figcaption>Previously used parameters</figcaption>
</figure>

#### Solution:

I simply put the correct distance in the parameter and it worked like a charm.  
  
Distance = (1/2 \* diameter of 1st LED + spacing + 1/2 \* diameter of second led)  
\= (led Size + spacing)

<figure>
  <img src="/images/fabacademy/week-06/p1patterndistance1.jpg" alt="Updated Parameters" loading="lazy" />
  <figcaption>Updated Parameters</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/p1patterndistance4.jpg" alt="Inspecting Distance in Design" loading="lazy" />
  <figcaption>Inspecting Distance in Design</figcaption>
</figure>

## Problem 2: 'Print not Sticking to bed properly' (Printing error)

Since My print was long but thin, one end of it wasn't adhering to the bed properly. After multiple failed attempts, and trying out rafts and brims, I found that it was a problem with our print bed. The Center Area had bad adhesion. Another reason for it was that long prints tend to bend if there's no proper adhesion.  
The print worked out great once I placed it on an edge of the print bed.

<figure>
  <img src="" alt="Problem 2: 'Print not Sticking to bed properly' (Printing error)" loading="lazy" />
</figure>

## Problem 3: 'Print Dimensions are not accurate' (Printing error)

I haven't yet found a solution for this problem yet where the print dimensions are not accurate as the design dimension. I haven't found a way 'yet' to put in the printing offset into a parametric design.

<figure>
  <img src="/images/fabacademy/week-06/p3measurement0.jpg" alt="Problem 3: 'Print Dimensions are not accurate' (Printing error)" loading="lazy" />
</figure>

#### Spacing Measurements:

<figure>
  <img src="/images/fabacademy/week-06/p3measurement1.jpg" alt="Spacing Measurements" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/p3measurement2.jpg" alt="Spacing Measurements" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/p3measurement3.jpg" alt="Spacing Measurements" loading="lazy" />
</figure>

#### LED Slots Measurement:

<figure>
  <img src="/images/fabacademy/week-06/p3measurement4.jpg" alt="LED Slots Measurement" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/p3measurement5.jpg" alt="LED Slots Measurement" loading="lazy" />
</figure>

#### Observation:

Errors of this scale is expected during 3D printing. That is why we did our group assignment to find the 3D printing tolerances. But the problem is compounded on parametric Engineering Designs, where precision is required.  
As for example, in my case, the small error margins add up to huge alignment issues on the LED slots as they were designed using a pattern in Fusion 360.

<figure>
  <img src="/images/fabacademy/week-06/3Dprintoutput2.jpg" alt="Observation" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/3dprintoutput4.jpg" alt="cross image" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/3Dprintoutput1.jpg" alt="3D Printed LED arm for PixelFace" loading="lazy" />
  <figcaption>3D Printed LED arm for PixelFace</figcaption>
</figure>

<figure>
  <img src="/images/fabacademy/week-06/3dprintoutput5.jpg" alt="Cross Section of print" loading="lazy" />
  <figcaption>Cross Section of print</figcaption>
</figure>

3D scanning involves generating a 3D object from a real onject usually through depth mapping.

## Context on 3D Scanning

There are many techniques of doing it. Here are some mentionable ones:

#### Laser Triangulation 3D scanning:

* * *

As illustrated on the image, projects a laser beam on a surface and measures the deformation of the laser ray.

<figure>
  <img src="/images/fabacademy/week-06/lasertriangulation.jpg" alt="Laser Triangulation based" loading="lazy" />
  <figcaption>Laser Triangulation based</figcaption>
</figure>

#### Structured Light 3D Scanning:

* * *

Structured light 3D scanning measures the deformation of a light pattern on a surface to 3D scan the shape of the surface.

<figure>
  <img src="/images/fabacademy/week-06/structuredlight.jpg" alt="Structured Light 3D Scanning" loading="lazy" />
  <figcaption>Structured Light 3D Scanning</figcaption>
</figure>

#### Photogrammetry:

* * *

Photogrammetry, also called 3D scan from photographies, reconstructs in 3D a subject from 2D captures with computer vision and computational geometry algorithms.

<figure>
  <img src="/images/fabacademy/week-06/photogrammetry.jpg" alt="Photogrammetry Based 3D scanning" loading="lazy" />
  <figcaption>Photogrammetry Based 3D scanning</figcaption>
</figure>

#### Contact based:

* * *

Contact-based 3D scanning technology relies on the sampling of several points on a surface, measured by the deformation of a probe

<figure>
  <img src="/images/fabacademy/week-06/contactScanning.jpg" alt="Contact Based 3D scanning" loading="lazy" />
  <figcaption>Contact Based 3D scanning</figcaption>
</figure>

#### Time of Flight:

* * *

Laser pulse (also called time of flight) 3D scanning technology is based on the time of flight of a laser beam. The laser beam is projected on a surface and collected on a sensor. The time of travel of the laser between its emission and reception gives the surface’s geometrical information.

<figure>
  <img src="/images/fabacademy/week-06/timeofflight.jpg" alt="Time of Flight Based 3D scanning" loading="lazy" />
  <figcaption>Time of Flight Based 3D scanning</figcaption>
</figure>

#### Links:

[Aditya SS's documentation from last Year.](http://archive.fabacademy.org/2018/labs/fablabcept/students/adhitya-ss/week-6.html)

## Skanect

#### How to Install

There are two requisites we need to install before we can install [Skanect](https://skanect.occipital.com)

##### Requisites:

-   [Kinect for Windows SDK (version 1.8)](http://download.microsoft.com/download/E/1/D/E1DEC243-0389-4A23-87BF-F47DE869FC1A/KinectSDK-v1.8-Setup.exe)
-   [Updated Drivers for your NVidia Graphics card](https://www.nvidia.com/Download/index.aspx)(if want GPU reconstruction)

After that, I installed the windows x64 installer downloaded from [here](https://skanect.occipital.com/download/).

## How to Scan

I used Skanect to scan myself and exported the scan on sketchfab. The free version of Skanect did not let me save my scanned objects locally. I referred to this video for the scanning procedure on skanect.

  
  

##### Workflow Screenshots

* * *

<figure>
  <img src="/images/fabacademy/week-06/skannect1.jpg" alt="How to Scan" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/skannect2.jpg" alt="How to Scan" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/skannect3.jpg" alt="How to Scan" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/skannect4.jpg" alt="How to Scan" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/skannect5.jpg" alt="How to Scan" loading="lazy" />
</figure>

<figure>
  <img src="/images/fabacademy/week-06/skannect6.jpg" alt="How to Scan" loading="lazy" />
</figure>

## SCANN3D

[SCANN3D](https://play.google.com/store/apps/details?id=com.smartmobilevision.scann3d&hl=en_IN) is another 3d scanning app on google play store. I tried it and the way it generates the 3D models by photogrammetry. Here's what I ended up with.

<figure>
  <img src="/images/fabacademy/week-06/scann3d.jpg" alt="SCANN3D" loading="lazy" />
</figure>

Unfortunately SCANN3D wouldn't let me export my designs or save them either. So all I had were these screenshots and the 3D model on my phone.

### 3D Printing:

* * *

#### Design:

<figure>
  <img src="/images/fabacademy/week-06/3Dprintoutput2.jpg" alt="Design Cross Section" loading="lazy" />
  <figcaption>Design Cross Section</figcaption>
</figure>

#### 3D Printed Output:

<figure>
  <img src="/images/fabacademy/week-06/3Dprintoutput1.jpg" alt="3D Printed Output" loading="lazy" />
  <figcaption>3D Printed Output</figcaption>
</figure>

### 3D Scanning:

#### Skanect:

[New Skanect Model](https://sketchfab.com/3d-models/new-skanect-model-08b1444912e844bc8dede902bd07a8f7?utm_medium=embed&utm_source=website&utm_campaign=share-popup) by [s026hoque](https://sketchfab.com/s026hoque?utm_medium=embed&utm_source=website&utm_campaign=share-popup) on [Sketchfab](https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup)

<table><tbody><tr><td>3D Printing Assignment</td><td><a href="/files/fabacademy/week-06/pixelFace_arm v7.f3d" class="button primary small" target="_blank">.f3d file</a></td><td><a href="/files/fabacademy/week-06/final.stl" class="button primary small" target="_blank">.stl file</a></td><td><a href="/files/fabacademy/week-06/final_pla_infil15.gx" class="button primary small" target="_blank">.gx file</a></td><td><a href="https://a360.co/2T7D7OX" class="button primary small" target="_blank">a360 link</a></td><td><a href="https://skfb.ly/6HNXJ" class="button primary small" target="_blank">SketchFab link</a></td></tr></tbody></table>

  
  

<table><tbody><tr><td>3D Printing Assignment</td><td><a href="https://skfb.ly/6HP9w" class="button primary small" target="_blank">SketchFab Link</a></td></tr></tbody></table>

## Learning Outcomes

-   I learnt how to make engineering models in Fusion 360.
-   I learnt how to use the 3D printer to print my models.
-   I learnt the limitations of 3D printing, the error rates in printing and printing models.

#### What I need to improve on

-   I need to solve my dimension error casued due to 3D printer and material limitations.

  

* * *
