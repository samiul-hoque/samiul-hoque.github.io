---
title: "TurtleSense"
year: 2019
role: "Engineer (pro-bono)"
client: "Creative Conservation Alliance"
category: "research"
tags: ["ESP32", "ESP8266", "Node-RED", "sensor mesh", "conservation"]
featured: false
proBono: true
order: 30
heroImage: "/images/turtlesense/cover.jpg"
gallery:
  - "/images/turtlesense/eraboti.jpg"
  - "/images/turtlesense/frontcover.jpg"
  - "/images/turtlesense/frontcover1.jpg"
  - "/images/turtlesense/frontcover2.jpg"
  - "/images/turtlesense/frontcover3.jpg"
  - "/images/turtlesense/chestprint.jpg"
  - "/images/turtlesense/manouriasmall.jpg"
  - "/images/turtlesense/manouriasmall1.jpg"
  - "/images/turtlesense/poachers.jpg"
oneLiner: "An environmental sensor mesh for a wild tortoise preservation programme in Bhawal Reserve Forest."
externalLinks:
  - label: "Creative Conservation Alliance"
    url: "https://www.conservationalliance.org/"
---

## Context

The Creative Conservation Alliance runs a wild tortoise preservation
programme at Bhawal Reserve Forest in Bangladesh. I got involved through a
friend from BRAC University who'd been working with them as a photographer.

Years earlier I'd helped them with a turtle-egg incubator. The hatchlings
from that build are now part of an active recovery effort for an endangered
species — which is probably the most disproportionate outcome I've ever
gotten out of a small hardware project.

TurtleSense is the next thing. A mesh of environmental sensors around the
preservation centre to monitor conditions across the reserve.

## What I'm doing

The site survey turned up something useful: the place has 24/7 mains power
with generator backup. I'd been planning around solar, expecting "middle of
a forest" conditions; that constraint went away. So the architecture is
just ESP32 and ESP8266 nodes over 2.4 GHz back to a NanoPi gateway running
Node-RED. A few dozen sensors is well within what that stack handles.

Sensor coverage is the open question — what's worth measuring, where, how
often. The preservation team knows the biology; I'm there for the
electronics. We'll see what surfaces.

## Outcome

This one is ongoing and quiet. If something publishable comes of it I'll
update here.

---

This is pro-bono work, not commercial. Listed here because the engineering
problem is real and I'm fond of it.
