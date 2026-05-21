---
title: "WiFi Picchi"
year: "2017–2019"
role: "Builder — hardware, firmware, network, operations"
client: "Independent / Fab Academy application"
category: "community"
tags: ["community internet", "OpenWRT", "captive portal", "CoovaChilli", "Diameter", "SDN", "openhardware"]
featured: true
order: 5
heroImage: "/images/wifipicchi/heroImage.png"
gallery:
  - "/images/wifipicchi/teashop.png"
  - "/images/wifipicchi/new-shop.jpg"
  - "/images/wifipicchi/internetman.jpg"
  - "/images/wifipicchi/PaintingTheBox.jpg"
  - "/images/wifipicchi/box.jpg"
  - "/images/wifipicchi/first-prototype1.jpg.png"
  - "/images/wifipicchi/prototype-2.jpg"
  - "/images/wifipicchi/second-prototype1.jpg"
  - "/images/wifipicchi/second-prototype2.jpg"
  - "/images/wifipicchi/second-prototype3.jpg"
  - "/images/wifipicchi/thirdprototype.jpg"
  - "/images/wifipicchi/third-prototype1.jpg"
  - "/images/wifipicchi/third-prototype2.jpg"
  - "/images/wifipicchi/third-prototype3.jpg"
  - "/images/wifipicchi/third-prototype4.jpg"
  - "/images/wifipicchi/token.png"
  - "/images/wifipicchi/density.png"
  - "/images/wifipicchi/gp-price-chart.png"
  - "/images/wifipicchi/tplink-mr3420.png"
  - "/images/wifipicchi/miRouterExperiment.png"
oneLiner: "Community internet hotspots at slum tea stores in Dhaka. Five taka for three hours of WiFi, paid by token, hosted by the shop."
externalLinks: []
---

## Context

In 2017 the cheapest mobile data in Dhaka still cost more, per megabyte,
than people in the city's densest neighbourhoods could comfortably spend.
Cellular coverage was fine; affordability was the problem. Meanwhile every
tea shop in the same neighbourhoods had a bench, a mains socket, and a
stream of regulars who sat there for an hour at a time.

WiFi Picchi started from those two observations. If a tea shop already
hosted social infrastructure, it could host networking infrastructure too.
The shopkeeper hosts the box, sells the tokens with the tea, and takes a
cut. Customers get cheap fast internet for the duration of a cup.

The Bangla name — *WiFi Picchi* — is the real one. *Box of Internet* was
the English rename I used in the Fab Academy application, which is where
that name comes from if you ever see it.

## Problem

A tea-shop hotspot has to solve a stack of unglamorous problems before any
of the interesting parts of "community internet" become relevant:

- **Payment without an app.** Most target users didn't have smartphones
  worth running an app on. The payment instrument had to be physical and
  reusable.
- **Authentication without a phone number.** Mobile-number-based onboarding
  was the standard in 2017; for this market it would have been a wall.
- **Hardware cheap enough to lose.** Boxes were going into shops with no
  physical security to speak of. Any router we couldn't replace from
  petty cash was the wrong router.
- **Operations without an office.** No call centre, no on-call engineer,
  no ticketing system. The shopkeeper is the help desk.
- **A network you can actually meter.** Capping per session, rate-limiting
  fairly, blocking abuse, and accounting all of it — without paying for a
  commercial AAA stack.

## What I did

Hardware was [TP-Link MR3420](/images/wifipicchi/tplink-mr3420.png) boxes
flashed with OpenWRT. The MR3420 was the right price point in Bangladesh:
cheap enough that a stolen one wasn't catastrophic, ubiquitous enough that
replacements were a same-day errand to the local computer market. The Xiaomi Mi Router was a tempting upgrade for a while —
[experiments with that](/images/wifipicchi/miRouterExperiment.png) sit in
the archive — but the MR3420 won on availability.

The auth and accounting layer was built around CoovaChilli for the captive
portal, with a Diameter-based AAA server behind it instead of RADIUS.
Diameter was overkill for the deployment size, but it gave us a clean path
to a decentralised, multi-operator account model later if WiFi Picchi grew
into a federation of independent hotspots rather than a single back-end.
The whole network was managed as an SDN — every box phoning home to a
central controller for policy, with local fallback so a shop's internet
worked even when the controller didn't.

The payment instrument was a paper [scratch token](/images/wifipicchi/token.png).
Five taka bought three hours. The shopkeeper handed over the token with
the tea; the customer scratched off the code; the captive portal redeemed
it. Tokens were single-use, printed in batches, and distributed through
the same wholesalers that already moved goods to these shops.

We went through three generations of the physical box. First prototype
proved the auth flow worked. Second prototype solved heat and the dust
problem. Third prototype was meant to be the one we manufactured. The
[shop install photos](/images/wifipicchi/teashop.png) are from the third
generation, hand-painted before deployment.

## Outcome

WiFi Picchi didn't become a national service. It ran at pilot scale,
proved the technical and economic model worked, and then ran into the
wall that an under-resourced hardware startup runs into in Dhaka. I went
to Fab Academy in 2019 and never came back to it full-time.

What I take from it: a working stack — OpenWRT, CoovaChilli, Diameter,
SDN controller, paper tokens — for community-scale paid WiFi that doesn't
need an app, doesn't need a phone number, and doesn't need a call centre.
And the practical knowledge of what it costs to keep one of those boxes
alive in a tea shop for a year, which is a thing very few people in this
space have actually had to do.

If anything in this stack is useful to you, get in touch.
