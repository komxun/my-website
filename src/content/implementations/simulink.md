---
title: "Missile Modelling with Simulink"
description: "A MATLAB and Simulink model of an Unmanned Aircraft System (UAS), capturing full 6-DOF flight dynamics of a missile."
language: "MATLAB | Simulink"
date: 2025-02-01
tags: ["simulink", "matlab", "modeling", "simulation", "flight-dynamics"]
github: "https://github.com/komxun/UAS-Modeling-and-Simulation"
stars: 2
featured: true
order: 10
cover:
  src: "/images/software/simulink.png"
---

## What it does

A MATLAB and Simulink model of an Unmanned Aircraft System (UAS), built around
a missile as the test vehicle. The core is a 6-degree-of-freedom equation of
motion driven by a total force and moment model, which in turn depends on the
environment and actuator models. At each time step the output states are fed
back into the environment and actuator models, closing the loop so the
aerodynamic and propulsive forces respond to the vehicle's current state.

## How it's modelled

The system is implemented two ways, in parallel:

- **MATLAB** — the equations of motion are coded in `Missile_EoM.m` and run from
  the main script. Aerodynamic coefficients are estimated with `interp1`
  (linear interpolation/extrapolation) and `interp2` (spline
  interpolation/extrapolation), and the dynamics are integrated with `ode45`.
- **Simulink** — the same vehicle is built block-by-block in `missile_model_2.slx`,
  decomposed into actuator, missile dynamics, aerodynamics, total force and
  moment, and equation-of-motion subsystems.

## Highlights

- Full 6-DOF rigid-body flight dynamics
- Coupled environment, aerodynamics and actuator models in a closed loop
- Parallel MATLAB and Simulink implementations for cross-checking
- Trim and linearisation scripts for analysing the vehicle about operating points

See the [repository](https://github.com/komxun/UAS-Modeling-and-Simulation) for
the full model, scripts and figures.
