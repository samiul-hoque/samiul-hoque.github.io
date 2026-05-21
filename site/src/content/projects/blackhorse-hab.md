---
title: "BlackHorse HAB"
year: 2015
role: "Technical Engineer — onboard electronics, payload fabrication, recovery"
client: "Black Horse Energy Drink (via Dogs Day)"
category: "hardware"
tags: ["high-altitude balloon", "telemetry", "GPS tracking", "RF", "embedded"]
featured: true
order: 10
heroImage: "/images/blackhorse/balloon.jpg"
gallery:
  - "/images/blackhorse/Yagi.jpg"
  - "/images/blackhorse/balloon1.jpg"
  - "/images/blackhorse/balloon2.jpg"
  - "/images/blackhorse/balloon3.jpg"
  - "/images/blackhorse/balloon4.jpg"
  - "/images/blackhorse/balloon5.jpg"
  - "/images/blackhorse/timevsalt.png"
  - "/images/blackhorse/tempvstime.jpg"
oneLiner: "Sent a Bangladeshi flag to 32.45 km on a helium balloon. Built the electronics, the antenna, and the payload. Recovered everything."
externalLinks:
  - label: "Repo (data, graphs, images)"
    url: "https://github.com/samiul-hoque/HAB-BlackHorse"
  - label: "Full flight recording"
    url: "https://www.youtube.com/watch?v=uRRbZOm5O_c"
  - label: "Campaign video"
    url: "https://www.youtube.com/watch?v=KUweosio60A"
---

## Context

In 2015 a local energy drink brand wanted to send the Bangladeshi flag higher
than anyone in the country had sent anything before. Their agency, Dogs Day,
brought me in through a Kolpokoushol connection. I was in charge of the
onboard electronics and the payload fabrication. Everything else, buying
the helium, getting the permits, recovering the box from the landing zone, we
figured out as we went.

## Problem

A weather balloon payload is mostly a question of constraints. It has to
weigh under 500 grams. It has to survive temperatures from +40 °C on the
ground to roughly &minus;55 °C in the stratosphere. The batteries have to
keep working at those temperatures. The radio has to reach back down through
30+ km of atmosphere on a low-power 433 MHz link. And the whole thing has to
be cheap enough that losing it is acceptable.

## What I did

I built the onboard stack around a Raspberry Pi 2. This was 2015; ESP32s weren't around yet, and the Pi was the obvious choice for something we needed to prototype quickly. Primary downlink was a Radiometrix NTX-2b; GPS was a Ublox Neo 6M. We ran a SPOT Tracker as a backup so we'd at least know where the box landed if the main radio gave out. A DS18B20 (waterproof variant) sat outside the enclosure for external temperature; a BMP180 handled internal temp and pressure. For the camera we used a GoPro Hero Session, physically modified: we pulled the internal battery and wired it directly to the Energizer Ultimate Lithium AA pack running the rest of the stack, so it would survive the cold at altitude.

On the ground side I built a Yagi antenna out of copper rod and PVC sheet. We were travelling between possible launch sites, and close to half the build happened on the road, sourcing parts from bazars and small-town shops along the way because there was nothing we could just buy. The receiving station was a laptop running fldigi for the RTTY decode.

It took three launches. The first balloon was lost to weather before we got a flight. The second flew and we recovered the box, but the camera hadn't recorded anything; something went wrong with the MMC card. The third one worked.

## Outcome

- Highest altitude reached: **32,450.1 metres** (≈106,000 ft)
- Total flight time: 3 h 26 min 41 s
- Ascent: 2 h 07 min 12 s · Descent: 1 h 19 min 29 s
- Lateral displacement: 68.8 km
- Lowest recorded external temperature: &minus;25.31 °C
- Payload mass: 500 g · Helium supplier: Linde

We recovered the box, the GoPro, and a complete sensor log. The footage
became the centrepiece of the campaign. The data plots (altitude, temp,
internal vs external) are in the [repo](https://github.com/samiul-hoque/HAB-BlackHorse).

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;">
  <iframe
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    src="https://www.youtube-nocookie.com/embed/uRRbZOm5O_c"
    title="BlackHorse HAB full flight recording"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

Fun fact: pure helium is genuinely scarce in Bangladesh. Most of the
project budget went to gas.
