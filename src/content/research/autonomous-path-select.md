---
title: "Autonomous Path Selection of Unmanned Aerial Vehicle in Dynamic Environment Using Reinforcement Learning"
description: "Deep reinforcement learning selects a UAV's path and speed to navigate around obstacles while staying close to its planned route."
date: 2025-01-10
status: "completed"
tags: ["path-planning", "collision-avoidance", "reinforcement-learning"]
venue: "AIAA SciTech 2025 Forum"
authors: ["K. Tamanakijprasart", "A. Perrusquia", "S. Mondal", "A. Tsourdos"]
paperUrl: "https://arc.aiaa.org/doi/10.2514/6.2025-1998"
pdf: "/papers/2025_AIAA_SciTech_Komsun__Full_.pdf"
doi: "10.2514/6.2025-1998"
cover:
  src: "/images/research/ifds_varying_alpha.png"
  alt: "IFDS trajectories around an obstacle for different tangential angles"
featured: true
order: 1
---

## Overview

How should a UAV respond when its planned route becomes unsafe? Inspired by
lane selection in autonomous driving, this work gives a single UAV a choice:
stay on its predefined global route, switch temporarily to a locally generated
path, or adjust its speed. The goal is to avoid obstacles while making progress
toward the destination and returning to the planned route when possible.

## Key questions

- When should the UAV leave its global route to avoid a detected obstacle?
- Which local path and speed best balance safety, travel time and route adherence?
- Can a learned high-level policy improve on IFDS path planning alone?

## Challenges

- Responding to static and moving obstacles that are only known when detected
- Choosing among alternative 3D paths without learning low-level flight control
- Balancing efficient arrival against collision avoidance and route adherence

## Approach

A dueling Double Deep Q-Network (DDQN) makes the high-level path and speed
decisions. An Interfered Fluid Dynamical System (IFDS) generates local
obstacle-avoidance paths, while a PID controller handles flight control. This
keeps the learning problem focused on *which path to follow*, rather than
requiring the network to learn low-level control from scratch.

## Results

In a 3D quadcopter simulation, the policy was compared with IFDS alone over
100 test episodes with static and moving obstacles. The learned approach
reduced average path length from 10.95 m to 10.63 m and occupied trajectory
volume from 1.52 to 0.59 cubic metres (a 61.18% reduction). It took longer to
reach the destination: 585 simulation steps versus 515, or about 1.17 seconds
at 60 Hz. These are simulation results, not a claim of flight-tested safety;
larger and more complex scenarios remain to be evaluated.
