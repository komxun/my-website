---
title: "Understanding PID Control"
description: "A practical, intuition-first look at proportional-integral-derivative control and how to tune it."
date: 2025-02-18
category: "Control Theory"
tags: ["control", "pid", "fundamentals"]
---

## The idea

A PID controller drives a system's output toward a target by acting on three
terms computed from the error `e(t)`:

$$
u(t) = K_p\,e(t) + K_i \int_0^t e(\tau)\,d\tau + K_d\,\frac{de(t)}{dt}
$$

- **Proportional** reacts to the present error.
- **Integral** removes steady-state error accumulated over time.
- **Derivative** anticipates future error from its rate of change.

## Tuning intuition

1. Increase `Kp` until the response is fast but starts to oscillate.
2. Add `Ki` to eliminate the remaining offset.
3. Add `Kd` to damp overshoot.

This is a starter article — replace it with your own notes at
`src/content/knowledge/understanding-pid-control.md`.
