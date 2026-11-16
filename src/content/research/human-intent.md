---
title: "Human-Intent-Driven Mission Planning for Optimal Checkpoint Generation of UAS"
description: "This research proposes a new class of intent-based autonomous mission planning that converts human-authored constraints into dynamically generated, globally consistent flight checkpoints. The approach provides a bridge between human mission intent and autonomous flight execution in GNSS-denied, map-poor or dynamically changing environments."
date: 2026-09-01
status: "ongoing"
tags: ["Command and Control", "mission planning", "UAS"]
# venue: "IEEE, International Conference on Control, Automation and Diagnosis (ICCAD), 2025"
authors: ["K. Tamanakijprasart"]
# paperUrl: "https://ieeexplore.ieee.org/document/11099262"
# pdf: "/papers/2025_ICCAD_Komsun_Camera_Ready_v99.pdf"
# doi: "10.1109/ICCAD64771.2025.11099262"
cover:
  src: "/images/research/UKDI_proposal_overview_v3.png"
  alt: "Human-Intent-Driven Mission Planning for Optimal Checkpoint Generation of UAS"
featured: true
order: 10
---
## Overview

<figure>
  <img src="/images/research/UKDI_proposal_overview_v2.png" alt="Human-Intent-Driven Mission Planning for Optimal Checkpoint Generation of UAS" />
  <figcaption>
    <strong>Figure 1:</strong> Overview of the human-intent-driven mission planning framework — human-authored constraints are converted into dynamically generated, globally consistent flight checkpoints for UAS navigation in GNSS-denied or dynamically changing environments.
  </figcaption>
</figure>


## Motivation
Current autonomous UAS mission planning is predominantly **coordinate-based**: an operator defines a sequence of waypoints that is uploaded to the autopilot. In low-altitude operations, however, the environment may be poorly mapped, dynamically changing, or GNSS-denied. A pre-planned waypoint can therefore become **unsafe or infeasible**. Conventional collision-avoidance systems can mitigate this risk, but often do so by locally deviating from the planned route. The resulting behaviour may prevent collision while violating the operator's intended mission, tactical constraints, or rules of engagement.

**Human command intent** is instead naturally expressed in directional, sequential and constraint-based terms, rather than as a list of exact coordinates. For example: “Navigate around the first obstacle to the left while remaining above 15 m”, “the first westward leg must be at least 45 m”, or “remain below 40 m on all northward legs.”

## Key questions
- How to translate human intent into actionable mission constraints?
- How to generate optimal checkpoints that satisfy both mission goals and safety constraints?
- How to maintain mission integrity while adapting to dynamic environments?

## Benefits
-	The conservation of the **mission structure** keeping and ensuring any tactical advantage is active. Numerous roam-free collision algorithms could not achieve. 
-	**A full transparency and adjustability**. Unlike AI-driven approach like LLM, this approach offers a reliable mathematically proven method
-	**Definable mission optimality**. With the adaptation of optimisation method, the cost function can be tailored to different mission outcomes. For example, the most fuel-saving route, the maximum coverage route, or a combination of different cost to minimize.

## Demo
<!-- youtube embed -->
<figure>
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/Gno4cxjCS6c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <figcaption>
    <strong>Figure 2:</strong> The baseline method demonstrated in a Software-in-the-loop simulation using Ardupilot (autopilot), Gazebo Harmonic (simulator), a custom-built octaquadcopter model, and ROS2 DDS. The mission profile follows the GoAERO competition where the UAS must navigate an obstacle course in a directional sequence — without optimal checkpoints, traditional collision avoidance shortcuts the course, violating competition rules.
  </figcaption>
</figure>


## Applications
- Autonomous patrolling mission, or strategic intel gathering, where the mission structure is critical.



