---
title: Robust & Data-Efficient Learning in Medical AI
---

{% include section.html background="images/research/illustration.jpg" dark=true %}
# {% include icon.html icon="fa-solid fa-wrench" %}Robust & Data-Efficient Learning in Medical AI

{% include section.html %}

# Segment Anything Model under Noisy Medical Radiology Imaging Conditions  

## Project Overview

Recent advances in Segment Anything Models (SAM) have demonstrated strong generalization across natural images, and more recently, across medical imaging domains through variants such as **MedSAM** and **SAM2**. However, the robustness of these models under realistic noisy medical imaging conditions remains insufficiently studied.

This project aims to systematically evaluate the robustness, stability, and failure modes of SAM-based models on 2D medical imaging datasets under controlled noise perturbations, simulating common acquisition artifacts encountered in clinical practice.

The final objective is to produce a high-quality benchmark study suitable for submission to a CVPR workshop, followed by an extended version targeting a Q1 journal.

---

## Research Objectives

### 1. Robustness Evaluation
Assess how different SAM-based models perform when medical images are corrupted by various noise and artifact types.

### 2. Noise Sensitivity Analysis
Quantify segmentation degradation under increasing noise levels and identify noise types that most significantly impact performance.

### 3. Model Comparison
Benchmark and compare:
- Original SAM  
- SAM2  
- Medical-domain adaptations (e.g., MedSAM and other public variants)

### 4. Visualization and Interpretability
Provide qualitative visualizations to reveal:
- Failure modes  
- Boundary instability  
- Confidence degradation under noise  

### 5. Scientific Dissemination
Package the findings into:
- A CVPR workshop paper (short-term milestone)  
- An extended Q1 journal submission (long-term milestone)  

---

## Methodology

### 1. Dataset Preparation
- Select 2D medical imaging datasets (e.g., X-ray, fundus, ultrasound, CT slices, or MRI slices).  
- Ensure consistent modality in the first phase to enable controlled analysis.  

### 2. Noise Injection & Artifact Simulation

Synthetic noise and artifact perturbations will be introduced during preprocessing, such as:

- Gaussian noise  
- Poisson noise  
- Salt-and-pepper noise  
- Motion blur  
- Intensity inhomogeneity  
- Low-contrast degradation  

Noise levels will be systematically varied to simulate mild to severe acquisition artifacts.

### 3. Model Benchmarking
- Apply SAM-based models using prompt-based and/or automatic settings.  
- Keep inference settings consistent to ensure fair comparison.  
- Evaluate robustness across noise types and intensities.  

### 4. Evaluation Metrics
- Dice coefficient  
- IoU (Jaccard index)  
- Boundary-based metrics (e.g., Hausdorff Distance)  
- Stability metrics across noise levels  
- Optional confidence/entropy-based analysis  

### 5. Visualization & Analysis
- Side-by-side qualitative comparisons  
- Failure case analysis  
- Sensitivity plots showing performance degradation trends  

---

## Timeline (6 Months Total)

### Phase 1: CVPR Workshop Target (Months 1–3)

**Goal:** Produce a concise, well-controlled benchmark study.

- Run experiments on 2 datasets of the same modality  
- Evaluate a limited but representative set of:
  - SAM models  
  - Noise types  
- Generate quantitative results and qualitative visualizations  
- Write and submit a CVPR workshop paper  

**Compute Resources:**
- Google Colab  
- Kaggle  

---

### Phase 2: Q1 Journal Target (Months 4–6)

**Goal:** Extend and deepen the study for journal-level contribution.

- Expand to 4–5 datasets, possibly across modalities  
- Include additional:
  - SAM variants  
  - Conventional models  
  - Extended types of noise injection methods  
  - Robustness and stability metrics  
- Add deeper analysis and discussion on clinical relevance  
- Prepare and submit to a Q1 journal  

**Compute Resources:**
- AIVN GPU infrastructure  
- Private server GPUs

## Segment Anything Model (SAM) under Occluded Medical Imaging Conditions
