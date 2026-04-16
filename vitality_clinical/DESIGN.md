# Design System Specification: High-End Health & Editorial Wellness

## 1. Overview & Creative North Star: "The Clinical Curator"
Most health platforms feel either overly sterile (like a hospital) or too "yoga-studio" (unprofessional). This design system rejects that binary. Our Creative North Star is **"The Clinical Curator."** It combines the precision of medical expertise with the high-touch, editorial feel of a premium wellness publication.

We move beyond the "standard web app" by breaking the grid with intentional asymmetry. Instead of boxing everything in, we use **expansive white space** and **overlapping typography** to create a sense of breath. The goal is a UI that feels less like a database and more like a tailored, high-end Progressive Web App (PWA) that respects the user’s mental clarity.

---

## 2. Colors & Surface Philosophy
The palette utilizes deep, botanical greens for authority and "biophilic" trust, paired with crisp, medicinal blues to reinforce professional stability.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. 
Structure must be defined through **Tonal Transitions**. Use `surface` ( #f8fafb) as your base canvas. To define a new section (e.g., a sidebar or a content block), shift to `surface-container-low` (#f2f4f5) or `surface-container` (#eceeef). 

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of premium materials:
*   **Level 0 (Base):** `surface` (#f8fafb) - The infinite canvas.
*   **Level 1 (Sections):** `surface-container-low` (#f2f4f5) - Used for large background shifts to define "zones."
*   **Level 2 (Interactive Elements):** `surface-container-lowest` (#ffffff) - Use this for cards or inputs. The slight brightness against the background creates a "natural lift" without a drop shadow.

### The "Glass & Gradient" Rule
To achieve a "signature" look, main CTAs and Hero sections should utilize a subtle linear gradient from `primary` (#005145) to `primary_container` (#006b5c). 
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` at 80% opacity with a `20px` backdrop-blur. This allows the fresh greens and blues of the content to bleed through, creating a sophisticated, layered depth.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance clinical precision with human warmth.

*   **Display & Headlines (Manrope):** Use `display-lg` to `headline-sm` for high-impact editorial moments. Use tight letter-spacing (-0.02em) for headlines to create a "dense" professional feel.
*   **Body & Labels (Public Sans):** Chosen for its neutral, highly legible "workhorse" nature. `body-lg` (1rem) is our standard for health advice to ensure maximum readability.
*   **Visual Hierarchy:** Don't be afraid of the scale. A `display-md` (2.75rem) title next to a `body-md` (0.875rem) caption creates the high-contrast "editorial" tension that defines this system.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for a wellness app. We communicate depth through "light and air."

*   **The Layering Principle:** Instead of shadows, nest a `surface-container-lowest` card inside a `surface-container-high` section. The delta in luminance provides all the separation the eye needs.
*   **Ambient Shadows:** For "Global Floating Elements" (e.g., a bottom navigation bar on the PWA), use a shadow tinted with the `on-surface` color: `rgba(25, 28, 29, 0.06)` with a 40px blur and 10px Y-offset.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` (#bec9c5) at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Interaction

### Buttons (The "Pill" Standard)
*   **Primary:** Uses `primary` (#005145) with `on_primary` (#ffffff) text. Shape: `full` (9999px). 
*   **Secondary:** Uses `secondary_fixed` (#dee1ff). This provides a soft blue "calm" alternative to the heavy green.
*   **States:** On hover, shift the background to `primary_container`. On press, use a subtle scale-down (0.98x).

### Cards & Lists (The "No-Divider" Mandate)
*   **Cards:** Never use a border. Use `surface-container-lowest` on top of `surface-container-low`.
*   **List Items:** Forbid the use of horizontal divider lines. Use `3` (1rem) to `4` (1.4rem) spacing units from the scale to separate items. Vertical white space is your separator.

### Input Fields
*   **Style:** Minimalist. Use `surface-container-high` as the background with a `md` (0.75rem) corner radius. 
*   **Focus State:** Instead of a heavy border, use a `2px` glow of `secondary` (#2b4cda) at 30% opacity.

### Featured Wellness Components
*   **The "Metric Glazing" Card:** For health data (e.g., heart rate), use a `surface_variant` card with a semi-transparent `secondary_container` gradient overlay.
*   **The Progress Ring:** Use `primary` for the active track and `primary_fixed` for the remaining track to maintain a monochromatic, premium look.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. A large headline on the left with a small caption offset to the right creates a premium "curated" feel.
*   **Do** use the `20` (7rem) and `24` (8.5rem) spacing tokens for top/bottom padding of major sections. High-end design needs room to breathe.
*   **Do** use "Optical Centering." Icons inside buttons should be visually balanced, not just mathematically centered.

### Don't:
*   **Don't** use pure black (#000000). Use `on_surface` (#191c1d) for all text to maintain a softer, clinical-modern tone.
*   **Don't** use standard "Drop Shadows" from a UI kit. They make the UI feel heavy and dated.
*   **Don't** cram information. If a screen feels full, increase the `surface` padding and move secondary info to a "Read More" progressive disclosure.

### Accessibility Note:
While we use tonal shifts, ensure the contrast ratio between `on_surface` and any `surface-container` meets WCAG AA standards (4.5:1). When in doubt, lean on the `primary` and `secondary` tokens for high-contrast interactive elements.