---
title: "Comparative Analysis of Sensor Fusion Techniques for Odometry Estimation in a Four-Wheeled Holonomic Drive Robot Using Wheel Encoders and IMU"
authors:
  - "Samiul Hoque"
venue: "Undergraduate Thesis, Department of Computer Science & Engineering, Independent University, Bangladesh — supervised by Dr. Md. Tarek Habib"
venueShort: "BSc Thesis, IUB"
location: "Dhaka, Bangladesh"
year: 2026
keywords:
  - "Holonomic mobile robot"
  - "Mecanum wheels"
  - "Odometry"
  - "Sensor fusion"
  - "Complementary filter"
  - "BNO055"
  - "ESP32"
  - "Open-source robotics testbed"
status: "thesis"
order: 0
relatedProject: "holonomic-odometry-testbed"
---

Spring 2026 undergraduate thesis at Independent University, Bangladesh,
supervised by Dr. Md. Tarek Habib. Defended and graded; being prepared
for journal/conference submission as multiple papers.

### Abstract

Holonomic drive robots equipped with mecanum or omni wheels offer
exceptional maneuverability, enabling movement in any direction without
changing orientation. However, accurate odometry estimation remains
challenging due to wheel slippage and sensor drift. This thesis presents
a comparative analysis of onboard-sensor odometry strategies for a
four-wheeled holonomic drive robot equipped with quadrature wheel
encoders and a BNO055 inertial measurement unit (IMU). The forward and
inverse kinematic equations are derived for the platform, and three
localization tiers are implemented and evaluated: an open-loop
cardinal-motion executor (Tier 0), closed-loop encoder odometry with a
per-wheel PID speed controller (Tier 1), and a complementary filter that
fuses encoder-derived heading with the BNO055 yaw estimate (Tier 2).

The platform itself is a 3D-printed four-mecanum-wheel chassis driven by
four brushed DC gearmotors under PWM from an ESP32 development module,
with its mechanical and electronic design documented through a
chassis-iteration history and the rejected alternatives reported
alongside the current generation. The onboard firmware runs a 50 Hz
motor-control tick inside an approximately 1 kHz main loop, implementing
per-wheel velocity PID, heading-hold yaw correction, a firmware-level
pause/resume trajectory contract, and the three localization tiers. A
laptop-side Node.js server and browser dashboard surface the control,
calibration, diagnostics, and experiment-runner workflows, log every run
to CSV with event markers keyed to the firmware's trajectory state, and
archive completed runs into a deterministic offline-replay pipeline.

The Extended Kalman Filter and Unscented Kalman Filter are presented
theoretically, and their integration with Ultra-Wideband (UWB) ranging
is identified as the natural next step in a tiered localization
architecture; full implementation is deferred to future work.

The three implemented tiers are evaluated through a frozen 33-run
campaign across four standardized trajectories — a 2 m straight drive,
two 0.8 m return-to-origin square variants, and a 0.5 m radius strafe
circle — on an overhead-ArUco reference grid with a ±1–2 cm position
and ±0.5° heading measurement-uncertainty budget. Closing the
wheel-speed loop (Tier 0 → Tier 1) reduces mean endpoint error from
32 cm to 4 cm on the 2 m straight drive and from 15–16 cm to 2–3 cm on
the loop trajectories; adding IMU-fused heading (Tier 1 → Tier 2)
delivers sub-degree heading stability on held-yaw segments but no
closure-accuracy improvement at the 0.8 m loop scale.

The platform, firmware, server, browser dashboard, and offline analysis
pipeline are released as an open-source software suite intended as a
reusable testbed for evaluating future sensor fusion and localization
algorithms on four-wheeled holonomic robots.
