---
title: "Scalable Industrial Process Monitoring System"
year: 2024
role: "Lead — system architecture, hardware topology, firmware"
client: "Independent University, Bangladesh (coursework, Dr. Mahady Hasan)"
category: "hardware"
tags:
  - "IoT"
  - "MQTT"
  - "Time-series database"
  - "SCADA"
  - "Embedded"
  - "Sensor networks"
featured: false
order: 35
heroImage: "/images/iot-monitor/hero.jpg"
gallery: []
oneLiner: "Hierarchical sensor + software architecture for monitoring industrial processes at scale, using MQTT and a time-series database."
externalLinks:
  - label: "Paper — IEEE Xplore (ICEPES 2024)"
    url: "https://ieeexplore.ieee.org/document/10653574"
  - label: "doi:10.1109/ICEPES60647.2024.10653574"
    url: "https://doi.org/10.1109/ICEPES60647.2024.10653574"
relatedPublication: "icepes-2024-iot-monitoring"
draft: true
---

> **Draft.** Paper metadata is wired up and the page builds, but the
> narrative below is a placeholder. Drop images into
> `site/public/images/iot-monitor/` and replace this body with the real
> story before flipping `draft: false`.

A SCADA-style monitoring system for industrial processes designed to scale
to large IoT deployments. The architecture is hierarchical — leaf sensor
nodes feed an aggregation tier, which speaks MQTT to a central broker
backed by a time-series database. The software layer handles ingestion,
storage, and visualisation; the hardware layer handles acquisition and
local buffering.

Written up as a coursework project at Independent University, Bangladesh,
under Dr. Mahady Hasan, and published as a conference paper at the
IEEE ICEPES 2024 conference in Bhopal.

### What I worked on

*(Placeholder — fill in the specific parts you were responsible for.)*

- Hierarchical hardware topology
- MQTT transport layer
- Time-series database ingestion and storage
- SCADA-style visualisation

### Read the paper

The full technical writeup is in the
[IEEE Xplore paper](https://ieeexplore.ieee.org/document/10653574). Citation:

> S. Hoque, I. Ahmmed, A. Jobair, M. S. Hossain, M. R. Uddin and M. Hasan,
> "Development of a Scalable Industrial Process Monitoring Sensor System
> for Large-Scale IoT Networks using MQTT and Time Series Database,"
> *2024 IEEE 3rd International Conference on Electrical Power and Energy
> Systems (ICEPES)*, Bhopal, India, 2024, pp. 1–6,
> doi: 10.1109/ICEPES60647.2024.10653574.
