---
templateKey: project
title: Smart lighting solution
date: 2018-09-20T09:41:00.000Z
description: >-
  A solution for monitorinf and controlling consumption of indoor lighting 
tags:
  - MQTT
  - Node.js
  - IoT
  - ESP32
  - Docker
  - React
  - Redux
---

## The Challenge 

LittleEndian was engaged to create a solution creating a device and a platform to monitor and control lighitng system. The solution is an enanchement for the lamps made by the client, those lamps are sold to offices, malls and any other indoor building.
The challenge was to address some specific issues:

- alerting on failure
- compsuntiong monitoring
- remote control

In the starting conditions, so lamps without any connections, the client was forced to manage maintenance with a team of technicians visiting periodically the installation sites to monitor and fix issues. That was very expensive, and significatively reduced the income margin. On the other side, client's customers was asking to be able to control the lighting system from remote, like they saw in competitors solutions. 
Last but not least, having a fine check of consumptions, the client can be able to give a tangible way for the client to measure the energy efficency and at the same time implement predictive maintenance in the system.

## The Solution

Time to market required by the client was challengig, because his customers were migrating to competitors already equipped with smart lighting systems, even though we provided a solution made of some parts:

- Firmware for the ESP32 device control and power meter device (hardware design made in collaboration with the client)
- Edge computing application
- Core backend layer implementing API and device communication
- Single Page Application frontend 

![ECMS](/img/ecms-dashboard.png)

## The outcome

LittleEndian delivered a full IoT solution, from the device to the cloud based platform, that improved the client experience in managing lighing systems for large offices and mall. The main outcome for the client was a significative cost saving in the first year, so big that the investment in the development of the plaform was totally covered by it.