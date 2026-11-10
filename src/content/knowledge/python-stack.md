---
title: "Implementing a Stack in Python"
description: "Two idiomatic ways to build a stack in Python — plain lists and collections.deque — and when to use each."
date: 2025-01-05
category: "Data Structures"
tags: ["python", "data-structures", "algorithms"]
featured: true
---

## Option 1: Use Python lists for a simple stack

```python
stack = []
```

### Key stack operations with lists

| Operation  | Code                  | Description                                    |
| ---------- | --------------------- | ---------------------------------------------- |
| Push       | `stack.append(value)` | Adds an element to the top (right-most)        |
| Group push | `stack += [1, 2, 3]`  | Adds several elements to the top               |
| Pop        | `stack.pop()`         | Removes and returns the top element            |
| Peek       | `stack[-1]`           | Returns the top element without removing it    |
| Size       | `len(stack)`          | Returns the number of elements                 |
| Clear      | `stack.clear()`       | Removes all elements                           |
| Contains   | `value in stack`      | Checks whether a value exists                  |

> `pop()` returns the removed element, making it easy to use the value
> immediately.

## Option 2: Use collections.deque for performance

```python
from collections import deque
stack = deque()
```

`deque` uses the same operation syntax as the list-based stack above, but
offers O(1) appends and pops from both ends.

```python
from collections import deque

stack = deque()
stack.append(10)
stack.append(20)
stack += [30, 40]

print(f"Top: {stack[-1]}")
print(f"Popped: {stack.pop()}")
print(f"Current stack: {stack}")
```

Output:

```
Top: 40
Popped: 40
Current stack: deque([10, 20, 30])
```
