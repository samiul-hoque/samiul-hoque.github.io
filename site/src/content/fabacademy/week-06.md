---
title: "3D Scanning & Printing"
week: 6
assignment: "Design and 3D print an object that can't be made subtractively; 3D scan an object."
heroImage: "/images/fabacademy/week-06/3Dprintoutput1.jpg"
gallery:
  - "/images/fabacademy/week-06/workflowdesign.jpg"
  - "/images/fabacademy/week-06/workflowslice.jpg"
  - "/images/fabacademy/week-06/3dprinting.jpg"
  - "/images/fabacademy/week-06/ledstrip.jpg"
  - "/images/fabacademy/week-06/3Dprintoutput1.jpg"
  - "/images/fabacademy/week-06/3Dprintoutput2.jpg"
  - "/images/fabacademy/week-06/skannect1.jpg"
  - "/images/fabacademy/week-06/scann3d.jpg"
---

## Assignment

Design and 3D print an object that can't be made subtractively; 3D scan an object.

## Design — LED arm for PixelFace

The rotating LED arm for the PixelFace final project is a good 3D printing candidate: the internal LED channel and curved geometry would require at least four separate pieces if machined subtractively.

**Fusion 360 design steps:**

1. Rotating arm sketch with concentric arcs and tangent constraints
2. Bidirectional extrusion to get the arm body
3. Top connector geometry with concentric circles
4. Inner LED channel via Sweep with a cut operation
5. LED holes (5mm diameter, 5050 package footprint) patterned along the arm path — 8 positions

**Pattern formula issue:** `Distance = ledSize + spacing` — getting this formula right took a few iterations to space the LEDs evenly without overlap.

## Printing — FlashForge FDM (PLA)

**Settings:** Standard resolution, brim enabled, no support, 15% hexagon infill, 0.18mm layer height, 60mm/s, 200°C nozzle.

**Problems encountered:**

1. Pattern Along Path distance formula — fixed via corrected expression
2. Bed adhesion failure on first print — repositioned part closer to bed edge
3. Dimensional inaccuracy on the LED holes — LED body is 5mm but printed holes measured undersized. No parametric fix for this iteration; drilled to correct size.

## 3D scanning

**Skannect** (Kinect SDK 1.8 + NVIDIA drivers): works well for medium-scale objects. Free version limited to SketchFab export, which limits downstream use.

**SCANN3D** (mobile photogrammetry): lower resolution than structured light but accessible without dedicated hardware. Works from multiple overlapping photos on a phone.
