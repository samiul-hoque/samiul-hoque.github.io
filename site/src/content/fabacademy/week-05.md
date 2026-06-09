---
title: "Electronics Production"
week: 5
assignment: "Make the FabISP in-system programmer; mill, stuff, test, and program it."
heroImage: "/images/fabacademy/week-05/heroimage.png"
gallery:
  - "/images/fabacademy/week-05/fabispbriantrace.png"
  - "/images/fabacademy/week-05/fabispbriancut.png"
  - "/images/fabacademy/week-05/fabispbriantboard.png"
  - "/images/fabacademy/week-05/vinylcopperepoxy.png"
  - "/images/fabacademy/week-05/vinylpcboutput.png"
  - "/images/fabacademy/week-05/solderingtiny44.gif"
  - "/images/fabacademy/week-05/soldering1206.gif"
  - "/images/fabacademy/week-05/shortcheck.png"
  - "/images/fabacademy/week-05/makeflash.png"
  - "/images/fabacademy/week-05/makefuses.png"
  - "/images/fabacademy/week-05/myfabISPoutput.png"
---

## Assignment

Make the FabISP in-system programmer; mill, stuff, test, and program it.

## Background

The FabISP is derived from FabTinyStar, which is itself derived from Lady Ada's USBTinyISP. It's an AVR ISP programmer you can make in the lab.

## First attempt — Andy's FabISPkey v2.3 (failed)

Lost two days on this. Problems: incorrect trace connections in my interpretation, insufficient DPI for the mill, and a missing TBX0104 component that the local lab didn't stock. Abandoned and started over.

## Second attempt — Brian's FabISP (success)

1200 DPI PNG source files. This worked.

## PCB milling — Roland MDX-20

**Trace (1/64" bit):** Speed 2, depth 0.1mm, tool 0.4mm, 4 offsets, 50% overlap.

**Outline (1/32" bit):** Speed 4, depth 0.6mm, stock 1.7mm.

Software: Fab Modules installed on a Raspberry Pi (also available online at mods.cba.mit.edu).

## Vinyl-cut alternative

Also produced FabISPs using copper vinyl on an epoxy film base. BMP format only (JPEG causes quality loss). Force: 100–120g, speed: 1 cm/s, cut twice for clean edges. Produced 14 FabISPs this way. Used clear epoxy resin to secure the 6-pin connectors to the flexible substrate.

## Components

ATtiny45, 1kΩ ×2, 499Ω ×2, 49Ω ×2, 3.3V zener diodes ×2, red LED, green LED, 100nF capacitor, 2×3 pin ISP header.

## Programming (Windows 10)

Toolchain: AVR-GCC, GNU Make, avrdude. USB driver: Zadig (libusb-win32 / libusb32 backend).

```bash
make          # compile
make flash    # burn firmware
make fuses    # set fuse bits
make rstdisbl # disable reset pin (locks the ISP function in)
```

## Personal design attempt

Tried a version with a Mini-USB connector. Epoxy sealant leaked into the USB port during assembly and rendered the connector non-functional. Lesson: seal after plugging in, not before.
