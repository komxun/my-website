---
title: "Rerouting UAVs in a Dynamic Environment Based on an Optimized Interfered Fluid Dynamical System"
description: "A novel dynamic path-planning program based on the Interfered Fluid Dynamical System (IFDS) framework with improved global and local path adaptation and incorporating environmental data such as weather and terrain to enhance path accuracy. This approach offers a lightweight and transparent system, making it well-suited for real-world UAV navigation."
area: "Path Planning & Collision Avoidance"
date: 2026-09-19
status: "completed"
tags: ["path-planning", "collision-avoidance", "navigation"]
venue: "Springer Nature, Journal of Intelligent & Robotic Systems, 2026"
authors: ["K. Tamanakijprasart", "S. Mondal", "A. Tsourdos"]
paperUrl: "https://link.springer.com/article/10.1007/s10846-026-02442-5"
pdf: "/papers/s10846-026-02442-5.pdf"
doi: "10.1007/s10846-026-02442-5"
cover:
  src: "/images/research/rerouting.png"
#   alt: "Simulated UAV swarm maintaining a formation"
featured: true
order: 3
---

## Overview
<div class="video-embed">
    <iframe src=" https://www.youtube.com/embed/XtmcNa-w4-0?si=4d9WbW8qNUEga_bD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>


## Key questions
- How can we incorporate environmental data such as weather and terrain into IFDS path planning framework?
- What environmental factors are most critical for dynamic path planning?
- How does the system handle real-time updates and adapt to changing conditions?

## Approach
- The environmental data is normalized and superimposed onto the IFDS repulsive field to influence path decisions with an exponential function as a weighting factor.
- A safeguarding function is implemented to ensure the system maintains a minimum safety distance from obstacles.
- The system uses a lightweight, transparent approach that balances computational efficiency with real-time adaptability.
