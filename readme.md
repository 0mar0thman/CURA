# Clinical Curator – Precision Nutrition Platform

Clinical Curator is a high‑end health ecosystem that bridges clinical expertise with daily nutrition. Designed for practitioners and clients alike, it combines evidence‑based meal protocols, real‑time patient tracking, and a curated storefront – all wrapped in a sophisticated “Structural Editorial” design language.

> **Design System Reference** – The complete UI/UX guidelines are documented in [`DESIGN.md`](./DESIGN.md), following the *Structural Editorial* North Star.

---

## 🧭 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Design Philosophy](#design-philosophy)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Credits](#credits)

---

## Overview

Clinical Curator redefines how clinical nutrition is delivered.  
It offers two interconnected portals:

- **Practitioner Portal** – Manage patient rosters, create consultation protocols, track biomarkers, and monitor meal plan adherence.
- **Client Portal** – Follow personalised meal plans, order clinically curated meals, track delivery in real time, and communicate with your nutritionist.

The platform is built as a responsive, static HTML prototype that showcases the full user journey – from registration and onboarding to daily meal tracking and secure checkout.

---

## Key Features

| Area | Features |
|------|----------|
| **Authentication** | Practitioner / Client role selection, secure login, registration with clinical credentials or health goals. |
| **Dashboard (Practitioner)** | Patient roster, health status indicators (Stabilising / Review Required), quick metrics, AI‑assisted plan drafts. |
| **Client Meal Plan** | Weekly calendar, macro tracking (calories, protein, hydration, fibre), bento‑style meal cards with “Eaten” states, snack suggestions, metabolic snapshot. |
| **Storefront** | Category grid (High Protein, Vegetarian, Keto), product cards with nutritional info, subscription upsell. |
| **Consultation Workflow** | New patient intake form, clinical background, initial assessment (HbA1c, body fat, BMI), nutritional goals. |
| **Patient Profile** | Detailed clinical timeline, biomarker charts (glucose, CRP, ApoB), supplement adherence log, secure messaging. |
| **Real‑Time Delivery Tracking** | Live order progress, courier info, map placeholder with ETA, carbon‑neutral badge. |
| **Social Hub** | Professional feed (clinical insights, success stories), recipe marketplace, expert network. |
| **Messaging Center** | Inbox with patient threads, rich text editor, file attachments, patient snapshot sidebar. |
| **Checkout** | Delivery logistics form, secure payment (Apple Pay / card), order summary, SSL encryption. |

---

## Design Philosophy

The interface follows a **“Structural Editorial”** approach – a premium, grayscale‑first aesthetic that prioritises spatial relationships, rhythmic hierarchy, and structural integrity over decorative fluff. Key principles from [`DESIGN.md`](./DESIGN.md):

- **No‑Line Rule** – Boundaries are defined by background colour shifts (`surface` → `surface-container-low`), never by `1px` borders.
- **Tonal Layering** – Depth is created through subtle luminance changes, not heavy drop shadows.
- **Glassmorphism** – Floating elements (navigation, modals) use `backdrop-blur` with semi‑transparent surfaces.
- **Asymmetric Grids** – Intentional off‑balance layouts (e.g., 1.2fr / 0.8fr) create editorial tension.
- **Typography** – Manrope for headlines (tight tracking, high impact) + Public Sans for body text (neutral, highly legible).
- **Colour** – Botanical greens (`#005145`, `#006b5c`) and medicinal blues (`#2b4cda`) convey authority and trust, while grayscale surfaces provide calm breathing room.

---