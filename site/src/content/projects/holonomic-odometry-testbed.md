---
title: "Holonomic Odometry Testbed"
year: 2026
role: "Lead — platform, firmware, dashboard, analysis, thesis"
client: "Independent University, Bangladesh — undergraduate thesis, supervised by Dr. Md. Tarek Habib"
category: "research"
tags:
  - "Holonomic drive"
  - "Mecanum wheels"
  - "Odometry"
  - "Sensor fusion"
  - "Complementary filter"
  - "BNO055 IMU"
  - "ESP32"
  - "Firmware"
  - "Browser dashboard"
  - "Open-source"
featured: true
order: 7
heroImage: "/images/holonomic-testbed/hero.jpg"
gallery: []
oneLiner: "A four-mecanum-wheel robot platform built to compare odometry strategies — open-loop, closed-loop encoder PID, encoder + IMU sensor fusion — under a frozen experimental campaign on an overhead-ArUco reference grid."
externalLinks: []
relatedPublication: "thesis-2026-holonomic-odometry"
draft: true
---

> **Draft.** Page content is final; release is gated on a hero image.
> Drop a chassis photo into `site/public/images/holonomic-testbed/hero.jpg`
> and flip `draft: false` to publish.

A research platform built to answer a narrow, measurable question:
**when you put encoders, an IMU, and increasing layers of control on a
four-mecanum-wheel robot, how much does each layer actually buy you
on real trajectories?**

Holonomic drive robots are easy to motivate — they move sideways, they
rotate in place, they thread spaces that constrained kinematics can't.
What's harder is knowing where one of them *is* without an external
reference, because mecanum wheels slip a lot and IMUs drift. So the
platform exists less as a destination and more as a testbed: a chassis,
a firmware stack, a dashboard, and a logging pipeline good enough that
you can drop a new estimator in and get a clean before/after.

### The platform

- **Chassis**: four-wheel mecanum drive, 3D-printed, documented through
  an iteration history that includes the rejected alternatives.
- **Drivetrain**: four brushed DC gearmotors with quadrature encoders,
  PWM from an ESP32 development module.
- **Sensing**: per-wheel encoders for wheel velocities and a
  BNO055 IMU for absolute heading.
- **Reference**: an overhead ArUco grid for ground truth, with a
  measurement-uncertainty budget of ±1–2 cm position and ±0.5° heading.

### The firmware

Runs a 50 Hz motor-control tick inside a roughly 1 kHz main loop:

- Per-wheel velocity PID
- Heading-hold yaw correction
- Firmware-level pause/resume trajectory contract
- Three localization tiers (Tier 0: open-loop cardinal motion; Tier 1:
  closed-loop encoder odometry; Tier 2: complementary-filter fusion of
  encoder-derived heading with BNO055 yaw)

### The dashboard

A laptop-side Node.js server with a browser dashboard handles control,
calibration, diagnostics, and the experiment-runner. Every run is logged
to CSV with event markers keyed to the firmware's trajectory state,
then archived through an offline-replay pipeline that re-derives the
same outputs deterministically from the raw log — so a new estimator
can be evaluated against the entire historical campaign without
re-running the robot.

### Findings

The thesis evaluated the three tiers across a frozen 33-run campaign on
four standardized trajectories (a 2 m straight drive, two 0.8 m
return-to-origin square variants, and a 0.5 m radius strafe circle).
The headline numbers:

- **Closing the wheel-speed loop** (Tier 0 → Tier 1) reduces mean
  endpoint error from **32 cm to 4 cm** on the 2 m straight drive, and
  from **15–16 cm to 2–3 cm** on the loop trajectories.
- **Adding IMU-fused heading** (Tier 1 → Tier 2) delivers
  **sub-degree heading stability** on held-yaw segments, but no
  additional closure-accuracy improvement at the 0.8 m loop scale.

EKF and UKF are presented theoretically in the thesis and identified
as the natural next step alongside Ultra-Wideband (UWB) ranging in a
tiered localization architecture; full implementation is deferred to
future work.

### Status

Thesis defended and graded, Spring 2026. The platform, firmware, server,
browser dashboard, and offline analysis pipeline are being prepared as
an **open-source testbed** for evaluating sensor-fusion and localization
algorithms on four-wheeled holonomic robots. The repo is private until
the work is submitted as journal/conference papers.

### Earlier work on the same chassis family

A small earlier RC-controlled pick-and-place build on a mecanum-wheel
chassis was written up by classmates and published at ICIPRoB 2024 (see
[Omnidirectional Pick-and-Place Robot](/projects/omni-pick-place-robot/)).
The thesis platform is a distinct build with a different controller,
sensors, and firmware — but it sits in the same line of work on
mecanum-wheel holonomic robots at IUB.
