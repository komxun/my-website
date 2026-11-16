---
title: "Integrated Terrain Following and Collision Avoidance in Unknown Environments"
description: "A unified guidance scheme that lets a UAV hug the terrain at low altitude while avoiding unforeseen obstacles, from algorithm to simulation."
category: "UAV Autonomy"
date: 2026-11-10
status: "active"
tags: ["guidance", "collision-avoidance", "python"]
# github: "https://github.com/komsun/autonomous-guidance"
featured: true
order: 10
cover:
  src: "/images/projects/noe-ca.png"
---

Project Funder: Blue-chip company


## Summary

A guidance scheme that combines nap-of-the-earth terrain following with
reactive collision avoidance, allowing a UAV to fly safely at low altitude
through terrain and obstacles it has never seen before. Both behaviours are
fused into a single controller rather than handled as separate, competing
modes, and the approach is validated in software-in-the-loop simulation.

## Highlights

- Integrated terrain following and collision avoidance in one guidance law
- Operates in unknown environments with no prior map
- Reactive, real-time response to newly sensed obstacles
- Validated in software-in-the-loop simulation

## Challenges

- Resolving conflicts between hugging the terrain and dodging obstacles
- Guaranteeing safe clearance from limited, noisy forward-looking sensing
- Keeping guidance stable and real-time at low altitude and high speed

## Results

_Screenshots, trajectory plots and a short write-up to follow._
