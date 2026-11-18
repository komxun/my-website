---
title: "ArduPilot SITL with Gazebo and ROS 2"
description: "A practical guide to setting up and running ArduPilot software-in-the-loop simulations with Gazebo, MAVProxy and ROS 2."
language: "ArduPilot | Gazebo | ROS 2"
date: 2025-02-01
tags: ["ardupilot", "sitl", "gazebo", "ros2"]
github: "https://github.com/komxun/ardupilot-ros2-sitl"
docs: "https://komxun.github.io/ardupilot-ros2-sitl/index/"
featured: true
order: 10
cover:
  src: "/images/software/ardupilot_ros2.png"
---

## What it covers

This guide walks through an ArduPilot software-in-the-loop (SITL) environment
on Ubuntu 22.04, using ArduCopter, MAVProxy, QGroundControl, ROS 2 Humble and
MAVROS. It starts with the required installations, then shows how to run a
basic simulated vehicle and connect it to a Gazebo world.

## Running a simulation

After installing ArduPilot SITL and the Gazebo plugin, start the Iris world
in Gazebo, then launch the matching ArduCopter model in another terminal:

```bash
gz sim -v4 -r iris_runway.sdf
sim_vehicle.py -v ArduCopter -f gazebo-iris --model JSON --map --console
```

The `gazebo-iris` frame and `--model JSON` connect SITL to the Gazebo vehicle;
Gazebo needs to be running before SITL starts. The guide also covers a basic
SITL launch without Gazebo, optional ground-control tools, and ROS 2
integration.

## Resources

Follow the [full setup and running guide](https://komxun.github.io/ardupilot-ros2-sitl/index/)
for dependencies and platform-specific instructions, or browse the
[source on GitHub](https://github.com/komxun/ardupilot-ros2-sitl).
The installation pages recommend checking upstream ArduPilot and ROS 2
documentation for the latest version-specific commands.
