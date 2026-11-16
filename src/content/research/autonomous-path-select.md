---
title: "Autonomous Path Selection of UAS in Dynamic Environment Using Reinforcement Learning"
description: "This research proposes a cooperative multi-agent path planning strategy that integrates DNDI-based leader–follower formation control with IFDS-based obstacle avoidance. The approach enables agents to navigate static and dynamic environments while maintaining safe separation, even without inter-agent communication."
area: "Collision Avoidance | Deep Reinforcement Learning"
date: 2025-01-10
status: "completed"
tags: ["swarm", "multi-agent", "coordination"]
venue: "IEEE, International Conference on Control, Automation and Diagnosis (ICCAD), 2025"
authors: ["K. Tamanakijprasart", "A. Collaborator"]
paperUrl: "https://arc.aiaa.org/doi/10.2514/6.2025-1998"
pdf: "/papers/2025_AIAA_SciTech_Komsun__Full_.pdf"
doi: "10.2514/6.2025-1998 "
cover:
  src: "/images/research/ifds_varying_alpha.png"
  alt: "Simulated UAV swarm maintaining a formation"
featured: true
order: 1
---

## Overview

This research investigates how large groups of autonomous aerial vehicles can
coordinate without centralised control, drawing on principles from biological
swarms and distributed optimisation.

## Key questions

- How do we guarantee **collision-free** formations as swarm size scales?
- What communication topologies balance robustness against bandwidth?
- Can local rules produce globally optimal coverage?

## Approach

We combine consensus-based control with reinforcement learning to let agents
adapt their local policies while preserving formal safety guarantees.

> Replace this text with your own research notes — this file lives at
> `src/content/research/swarm-intelligence.md`.
