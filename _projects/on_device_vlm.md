---
layout: page
title: On-Device VLM Inference Optimization
description: Optimized Qwen3-VL-2B on Snapdragon 8 Elite with quantization and runtime tuning, achieving a 2.05× speedup over the project baseline.
permalink: /projects/on_device_vlm/
importance: 0
category: Machine Learning
---

**October–December 2025**

Optimized **Qwen3-VL-2B** inference on **Snapdragon 8 Elite**, achieving a **2.05× speedup** over the project baseline.

- Configured llama.cpp with importance-matrix-based Q4_0 quantization, memory locking (`mlock`), and CPU affinity for on-device inference.
- Fine-tuned with LoRA for visual question answering, evaluating both task quality and inference performance.

**Technologies:** llama.cpp, Q4_0 quantization, LoRA, Snapdragon 8 Elite.
