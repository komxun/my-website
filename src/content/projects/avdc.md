---
title: "Building an Autonomous Multi-Drone Search System"
description: "A Cranfield MSc group project building two quadcopters for autonomous indoor search, target identification and tracking."
category: "UAV Autonomy"
date: 2023-06-01
status: "completed"
tags: ["multi-agent", "target-tracking", "C++", "quadcopters"]
github: "https://github.com/komxun/Design-of-an-Autonomous-Drone"
featured: true
order: 1
cover:
  src: "/images/projects/avdc_gdp.png"
---

## Summary

For the 2022-23 MSc Autonomous Vehicle Dynamics and Control group design
project at Cranfield University, our eight-person team designed and built two
quadcopters for an autonomous multi-agent search mission. The system brings
together onboard target identification, guidance and tracking, flight control,
communications and a ground control station. Search and rescue is one potential
application; the project demonstration focused on finding and tracking targets
in an indoor arena.

## Highlights

- Two quadcopters assembled from standard components with custom 3D-printed parts
- Jetson Nano onboard processing for target identification and classification
- Flight control and state estimation implemented on BeagleBone Blue
- Guidance to follow identified targets, with links between drones, onboard computers and the ground station
- Indoor testing using VICON for position and attitude measurement

## Challenges

- Integrating hardware, guidance, perception, communications and mission control
- Coordinating subsystem design and verification across an eight-person team
- Taking the system from requirements through indoor flight demonstration within the project schedule

## Results

The team conducted indoor tests and a flight demonstration to validate target
identification and tracking. The [project repository](https://github.com/komxun/Design-of-an-Autonomous-Drone)
contains the project write-up, system overview and code.
