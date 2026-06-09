---
title: "Molding & Casting"
week: 10
assignment: "Design a 3D mold, machine it, and cast material in it."
heroImage: "/images/fabacademy/week-10/weeklytile.jpg"
gallery:
  - "/images/fabacademy/week-10/model1.jpg"
  - "/images/fabacademy/week-10/negative1.jpg"
  - "/images/fabacademy/week-10/wax1.jpg"
  - "/images/fabacademy/week-10/wax2.jpg"
  - "/images/fabacademy/week-10/milling.jpg"
  - "/images/fabacademy/week-10/milling1.jpg"
  - "/images/fabacademy/week-10/casting1.jpg"
  - "/images/fabacademy/week-10/casting2.jpg"
  - "/images/fabacademy/week-10/smoothon1.jpg"
  - "/images/fabacademy/week-10/smoothon2.jpg"
  - "/images/fabacademy/week-10/bubbles1.jpg"
  - "/images/fabacademy/week-10/waxcast.jpg"
  - "/images/fabacademy/week-10/simulation.gif"
---

## Assignment

Design a 3D mold, machine it, and cast parts in it.

## Design — hexagonal plant pot

A two-part mold due to height (4cm) and potential undercuts. Designed in Fusion 360:

1. Model the object
2. Create a stock box around it
3. Combine / subtract to get the mold negative
4. Split at the thickest cross-section for the parting line
5. Add cylindrical alignment guide pins

## Making the wax stock

Recycled machineable wax (melting point 115.6°C). Melted at 250°C in a convection oven for ~50 minutes using acrylic sheet molds to form new ingots. Wax shrinkage on cooling made removal effortless.

## CAM — switching from Fusion 360 to Partworks 3D

Fusion 360 CAM caused multiple problems: simulation/time discrepancies, toolpath errors, and several aborted attempts. Switched to **Partworks 3D** which has a clear 7-step workflow: orient → size → rough toolpath → finish toolpath → cut-out path → simulation preview → export.

## Machining

**Attempt 1 (ShopBot):** Machine stopped at 33% through. Collet struck the stock and destroyed the workpiece. The ShopBot control software had disabled the limit switches during a prior session and the problem went unnoticed.

**Attempt 2 (Roland MDX-20 + Fab Modules):** Succeeded. Settings: 0.85 overlap ratio for the finish pass. Total machining time: ~3.5 hours.

## Casting — OOMOO 30 (silicone)

100g Part A : 130g Part B. Painted the detailed areas by hand first, then poured the bulk. Mold separated perfectly after cure.

## Casting — Smooth-Cast 305 (polyurethane, failed)

Material expansion during cure forced the mold halves apart; bubbles throughout. Root causes:
- Humidity contamination — the containers had been opened two days prior
- No 60 PSI pressure chamber to suppress bubble formation

## Casting — wax (best result)

Melted recycled wax chips and poured directly into the silicone mold. No leakage, sharp edges, perfect surface finish. By far the best result of the three materials.
