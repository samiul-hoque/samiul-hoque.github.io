---
title: "Computer Controlled Machining"
week: 8
assignment: "Make something big on a CNC router."
heroImage: "/images/fabacademy/week-08/heroshot1.jpg"
gallery:
  - "/images/fabacademy/week-08/heroshot1.jpg"
  - "/images/fabacademy/week-08/heroshot2.jpg"
  - "/images/fabacademy/week-08/heroshot3.jpg"
  - "/images/fabacademy/week-08/octatable.jpg"
  - "/images/fabacademy/week-08/tabletop0.jpg"
  - "/images/fabacademy/week-08/tabletop1.jpg"
  - "/images/fabacademy/week-08/scale1.jpg"
  - "/images/fabacademy/week-08/scale2.jpg"
  - "/images/fabacademy/week-08/assembly.jpg"
  - "/images/fabacademy/week-08/assembly1.jpg"
  - "/images/fabacademy/week-08/assembly3.jpg"
  - "/images/fabacademy/week-08/dogbone.jpg"
  - "/images/fabacademy/week-08/dogbone1.jpg"
---

## Assignment

Make something big on a CNC router. Group assignment: test runout, alignment, speeds, feeds, and toolpaths on the ShopBot.

## Background

I'm a part-time CNC operator in Bangladesh. Previous work: oak clock, wooden food trays, arcade cabinets, cat furniture, router enclosures for the WiFi Picchi project, pegboards, drill organisers. This week felt familiar.

## Machine — ShopBot PRS Alpha 96-48

- Bed: 96" × 48" × 6" cutting volume
- 3HP spindle, 24,000 RPM max
- Rack-and-pinion drive, ±0.003" positional accuracy
- CAM: Partworks (budget VCarve equivalent)
- Control: ShopBot Control Software v3.8.42

## Design — Octagon box-jointed table

Inspired by Cactus Workshop's octagon table design. Designed entirely in Fusion 360:

- Parametric finger joints via Rectangular Pattern
- 8-piece top via Circular Pattern
- Combine tool to cut the joint geometry
- Dogbone fillets added via the DVE2000/Dogbone plugin for CNC-compatible inner corners

Prototyped at 50% scale on the laser cutter in cardboard first to verify the joinery.

## Material & tooling

- Material: 12mm MDF
- Bit: 3mm upcut 4-flute end mill
- RPM: 12,000
- Feedrate: 0.79 in/s
- Output format: .sbp

## Process

Screwed MDF to sacrificial board → warmed up spindle → zeroed XYZ → cut. Total machine time: ~45 minutes.

Files produced: `top.dxf`, `leg.dxf`, `side.dxf`, arranged layout, `coffeetable.sbp`.
