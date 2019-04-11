---
templateKey: project
title: ModBus to MQTT Gateway
date: 2019-03-13T15:04:10.000Z
description: In the industrial world there is growing need of conntecting to the external world, this is what "Industry 4.0" means and this project is a perfect fit fot the topic.
tags:
  - ModBus
  - MQTT
  - IoT
  - Python
---
![ModBus](/img/modbus-logo.png)

## The Challenge

Industry is made of costly devices, often outdated in regards to interacting with cloud, web and mobile technologies. There is a huge value in connecting factory data with the external world and this is a topic where LittleEndian can give big support.

## The Solution 

This project is an example of cloud integration for devices, meant to talk in closed networks inside the factory. For this project we developed a Python applications, deployed in a Raspberry Pi acting as [edge computing platform](https://en.wikipedia.org/wiki/Edge_computing). Application purpose is to talk with ModBus devices over RS485 and create a sort of gateway to the cloud through MQTT. 
Thanks to this project the factory is now able to get information on the production and alerts in near realtime from anywhere.

![ModBus Gateway Architecture](/img/modbus-gateway-architecture.png)
## The Outcome

The project drammatically changed the company ability to control processes and react to events in near realtime. Integrating standard protocol, like MQTT, to devices originally able to talk only on local networks with lecgacy protocols, allowed to integrate with a 