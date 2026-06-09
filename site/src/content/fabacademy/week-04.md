---
title: "Computer Controlled Cutting"
week: 4
assignment: "Characterise a laser cutter; cut something on the vinyl cutter; design and cut a parametric press-fit kit."
heroImage: "/images/fabacademy/week-04/finalLaserOutput.png"
gallery:
  - "/images/fabacademy/week-04/finalVinyl.png"
  - "/images/fabacademy/week-04/parametrickit.gif"
  - "/images/fabacademy/week-04/observations.png"
  - "/images/fabacademy/week-04/copperonacryl.png"
  - "/images/fabacademy/week-04/copperonacryl2.png"
  - "/images/fabacademy/week-04/firstTestOutput.png"
  - "/images/fabacademy/week-04/finalLaserOutput.png"
  - "/images/fabacademy/week-04/triangle.png"
  - "/images/fabacademy/week-04/hexagon.png"
  - "/images/fabacademy/week-04/output1.png"
  - "/images/fabacademy/week-04/output2.png"
  - "/images/fabacademy/week-04/along.jpg"
  - "/images/fabacademy/week-04/along1.jpg"
---

## Assignment

Characterise a laser cutter; cut something on the vinyl cutter; design and cut a parametric press-fit kit.

## Vinyl cutter — Roland GX-24

Used the Roland GX-24 to test PCB trace widths. Created an Eagle CAD test file with IC pads for ATTiny44, ATmega328p, LM2940, and ATTiny85. Exported as BMP and imported into Roland Cut Studio.

**Key findings:** Traces down to 12mil achievable; 1206 component pads compatible.

Also experimented with flexible copper tape circuits on an acrylic base — cut copper vinyl and transferred onto acrylic sheet. An interesting approach for quick circuit prototyping without a mill.

**Blade force calibration** varied by material and was critical for clean cuts without tearing.

## Laser cutters

Two machines at the lab: Epilog Mini 24 (40W) and SIL-1290 (100W). Used the SIL-1290 as primary. CAM software: RDworks.

**Characterisation settings (SIL-1290, 3mm acrylic):**
- Through cut: Power (55, 55), Speed 25
- Kerf: 0.9mm at Speed 15
- Engraving: Power (5, 15), Speed 60

**Note:** The lab had no air filtration at the time. I minimised use due to a personal lung condition.

## Parametric press-fit kit

Designed in Fusion 360. Parameters: number of polygon sides, diameter, material thickness, laser kerf, slot depth.

Tested three slot configurations:
- **Outside** (thickness only): too loose
- **Inside** (thickness − kerf): too tight
- **Along kerf** (thickness + kerf): perfect fit

Generated triangle, square, pentagon, hexagon, heptagon, and octagon from one parametric file by changing a single parameter.

**Fusion 360 DXF export issue:** Fusion includes construction lines in DXF exports. Workaround: extrude the sketch → create a new sketch from the face surface → export from that surface sketch instead.
