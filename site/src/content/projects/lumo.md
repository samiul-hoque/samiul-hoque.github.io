---
title: "Lumo / Elektra — CAN bus HAT"
year: "2020"
role: "Hardware lead — schematic, board, enclosure"
client: "TeroLabs"
category: "hardware"
tags: ["CAN bus", "Raspberry Pi", "Eagle CAD", "Fusion 360", "automotive", "telematics"]
featured: true
order: 25
heroImage: "/images/lumo/lumo_v2_2021-Dec-20_10-28-48AM-000_CustomizedView27565336381.png"
gallery:
  - "/images/lumo/lumo_v2_2021-Dec-20_10-28-48AM-000_CustomizedView27565336381.png"
  - "/images/lumo/lumo_v2_2021-Aug-17_06-02-58PM-000_CustomizedView17935510965.png"
  - "/images/lumo/lumov1.png"
oneLiner: "A Raspberry Pi HAT that pulls data off a vehicle's CAN bus. Built at TeroLabs, later used as the sensor layer for driver-behaviour analysis."
externalLinks:
  - label: "Official repo — Tero-Labs/elektra-OBD-device_0.1"
    url: "https://github.com/Tero-Labs/elektra-OBD-device_0.1"
  - label: "Personal mirror — samiul-hoque/CAN-BUS-HAT_lumo"
    url: "https://github.com/samiul-hoque/CAN-BUS-HAT_lumo"
---

## Context

At TeroLabs we kept ending up in projects that needed to read data off a
vehicle. The OBD-II dongles on the market were either too expensive, too
proprietary, or both. The simpler answer was a HAT — a board that sits on
top of a Raspberry Pi, talks to the car's CAN bus through the standard
OBD-II port, and hands the decoded data to whatever stack the project
needed next.

Internally it went by two names — *Lumo* and *Elektra* — depending on
whichever branding the studio was running with at the time. Same board.

## What I did

- **Schematic and PCB** in Eagle CAD. CAN transceiver, the right
  protection on the OBD-II side because cars are electrically noisy and
  occasionally unkind to anything you plug into them, the Pi-HAT
  pinout, and an EEPROM so the Pi could identify the board the way the
  HAT spec wants it to.
- **Enclosure** in Fusion 360. Snap-fit, prints on a hobby printer, big
  enough for the Pi underneath, small enough that it sits flat under a
  dashboard without becoming a problem during a long drive.

## Where it ended up

Lumo became the sensor layer for a driver-behaviour analysis pipeline:
read CAN frames, decode the parameters we cared about (speed, throttle,
brake, RPM, steering inputs where available), label them, and feed the
stream into the analytics that came after. The interesting work
downstream wasn't mine, but every datapoint that fed it came through
this board.

It also got used as plain telemetry hardware for a couple of internal
TeroLabs projects that needed vehicle data and didn't have anything
better to use.

## Status

The design files are public in two places. The
[official TeroLabs repo](https://github.com/Tero-Labs/elektra-OBD-device_0.1)
holds the canonical version, though I no longer work there and can't
guarantee it stays online — if you're reading this and the link is
dead, my [personal mirror](https://github.com/samiul-hoque/CAN-BUS-HAT_lumo)
should still be up. If you're trying to do something similar and want
the design files, get in touch.
