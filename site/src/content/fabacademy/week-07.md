---
title: "Electronics Design"
week: 7
assignment: "Redraw the echo hello-world board; add a button and an LED; mill, stuff, and test it."
heroImage: "/images/fabacademy/week-07/heroshot2.jpg"
gallery:
  - "/images/fabacademy/week-07/echoschematic.jpg"
  - "/images/fabacademy/week-07/eagleschematicfinal.jpg"
  - "/images/fabacademy/week-07/pcb_top.png"
  - "/images/fabacademy/week-07/pcb_bottom.png"
  - "/images/fabacademy/week-07/components.jpg"
  - "/images/fabacademy/week-07/soldering1.jpg"
  - "/images/fabacademy/week-07/soldering2.jpg"
  - "/images/fabacademy/week-07/heroshot2.jpg"
  - "/images/fabacademy/week-07/wiring1.jpg"
  - "/images/fabacademy/week-07/wiring2.jpg"
---

## Assignment

Redraw the echo hello-world board; add a button and an LED; mill, stuff, and test it.

## Base design — Neil's Hello Echo Board (ATTiny44)

**Microcontroller:** ATTiny44 — 4KB flash, 256B SRAM, 1.8–5.5V, 20 MIPS @ 20MHz, 14-pin SOIC.

**Supporting components:** 10kΩ pull-up resistor on reset, 20MHz resonator, 1µF bypass capacitor, 6-pin ISP header, FTDI serial connector.

## My additions

- Pushbutton with pull-down resistor and debounce capacitor
- Power indicator LED with 1kΩ resistor
- Two programmable LEDs with 1kΩ resistors each

## Software — Eagle CAD

Chosen for: cross-platform, lightweight, free license tier. Workflow: schematic → ERC (electrical rules check) → board layout → DRC (design rules check).

**DRC settings:** 16mil clearance, 16mil trace width, 0.8mm drill.

Used the autorouter as a starting point, then RIPUP to re-route problem traces manually.

Created a one-click export script for 1200 DPI PNG trace and cut files — saves repetitive export steps.

## Fabrication — Roland MDX-20

Trace: speed 4, depth 0.1mm, 0.4mm tool, 4 offsets. Outline: speed 4, depth 0.6mm.

## BOM

ATTiny44, 20MHz resonator, 1µF cap, 0.1µF cap, 10kΩ ×2, 1kΩ ×4, red / green / blue LED (1206), 6-pin ISP header, 6-pin FTDI header.

## Programming

Using the ATTinyCore library in Arduino IDE. Board: ATtiny24/44/84 — chip: ATtiny44, 20MHz external clock, USBTinyISP programmer.

Tested: single LED blink, multi-LED blink pattern, pushbutton toggling LED state.

## Issue

The FTDI connector tore off the board during a forceful disconnection. Workaround: used a bare FTDI module providing 5V and GND only for subsequent tests.
