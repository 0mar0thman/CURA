# Design System Documentation: The Architectural Blueprint

## 1. Overview & Creative North Star: "Structural Editorial"
This design system is not a mere collection of placeholders; it is a **Structural Editorial** framework. Our North Star is the concept of "The Pure Blueprint"—a high-end, grayscale aesthetic that prioritizes spatial relationships, rhythmic hierarchy, and structural integrity over decorative flourish.

By stripping away the distraction of color and high-fidelity imagery, we force the user’s focus onto the core UX: the narrative flow and the functional hierarchy. We break the "generic wireframe" look through **intentional asymmetry**, ultra-wide margins, and a sophisticated use of tonal depth. This system should feel like a premium architectural monograph—stark, intentional, and authoritative.

---

## 2. Colors: The Tonal Spectrum
We utilize a Material 3-inspired grayscale palette. The goal is to create "Atmospheric Depth" without relying on traditional shadows or lines.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit flush against a `surface` background to define its edge. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tiers to define importance:
*   **Base Layer:** `surface` (#f9f9f9) – The canvas.
*   **Receded Content:** `surface-container-low` (#f3f3f3) – For secondary groupings.
*   **Elevated Content:** `surface-container-highest` (#e2e2e2) – For high-priority functional blocks.
*   **Interactive Elements:** `primary` (#000000) – Reserved strictly for high-contrast actions.

### The "Glass & Gradient" Rule
To prevent the wireframe from feeling static, use **Glassmorphism** for floating navigation or overlays. Apply a semi-transparent `surface-container-lowest` with a `backdrop-blur` of 12px. For primary CTAs, a subtle linear gradient from `primary` (#000000) to `primary-container` (#3b3b3b) at a 45-degree angle adds a "machined" satin finish that feels premium.

---

## 3. Typography: The Inter Grid
We use **Inter** exclusively to maintain a clean, modernist Swiss feel. The hierarchy is extreme—large display sizes contrast with tiny, tracked-out labels to create a sense of high-end editorial design.

*   **Display (lg/md/sm):** Used for "Hero" moments. Use `tight` letter-spacing (-0.02em) to make the letterforms feel architectural.
*   **Headline (lg/md/sm):** Defines the start of a major content narrative.
*   **Title (lg/md/sm):** Used for card headers and functional grouping.
*   **Body (lg/md/sm):** Standardized for readability. Use `body-md` (0.875rem) as the workhorse.
*   **Label (md/sm):** Used for metadata. Always uppercase with `+0.05em` letter-spacing to signify technical data.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are a last resort. We communicate hierarchy through **The Layering Principle**.

*   **Tonal Stacking:** Place a `surface-container-lowest` card on a `surface-container-low` section. The minute difference in hex value provides a sophisticated "lift" that 1px borders cannot replicate.
*   **Ambient Shadows:** If an element must "float" (e.g., a modal), use a shadow with a 40px blur, 0px offset, and 4% opacity of the `on-surface` color. It should feel like a soft glow of light, not a drop shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline-variant` (#c6c6c6) at **15% opacity**. This creates a "suggestion" of a boundary rather than a hard wall.
*   **Placeholder "X" Boxes:** All image placeholders must use the `outline-variant` (#c6c6c6) for the outer frame and the crossing "X", ensuring they recede behind functional UI elements.

---

## 5. Components: Primitive Geometry
All components follow a strict **4px corner radius** (`DEFAULT: 0.25rem`) to maintain a "soft-geometric" feel.

*   **Buttons:**
    *   *Primary:* `primary` background (#000000) with `on-primary` text. No border.
    *   *Secondary:* `secondary-container` background (#d5d4d4).
    *   *Tertiary:* Ghost style. No background; `on-surface` text.
*   **Inputs:** Use `surface-container-low` for the field background. Label should be `label-md`. On focus, transition the background to `surface-container-high`.
*   **Cards & Lists:** **Forbidden: Divider lines.** Use the Spacing Scale (specifically `8` (2rem) or `12` (3rem)) to separate items. If separation is needed, use a subtle background shift on hover.
*   **Chips:** Use `surface-container-highest` with `label-sm` text. These should look like small "stamps" on the page.
*   **The "X-Box" Hero:** For hero image placeholders, use a large geometric box with a centered "X". Ensure the stroke weight of the "X" matches the `outline` token (#777777).

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional element. If a section feels crowded, double the spacing token (e.g., move from `12` to `24`).
*   **DO** use `surface-bright` for the most important interactive cards to make them "pop" against a `surface` background.
*   **DO** align all text to a strict vertical rhythm based on the `4px` (0.25rem) base unit.

### Don't
*   **DON'T** use 100% black text on 100% white backgrounds. Use `on-surface` (#1a1c1c) on `surface` (#f9f9f9) to reduce eye strain and look "bespoke."
*   **DON'T** use icons with varying stroke weights. All icons must be minimal, "thin-line" style, matching the `outline` token weight.
*   **DON'T** use rounded corners larger than 4px unless it is a "Full" pill-shaped button. Consistency in the 4px radius is vital for the architectural look.