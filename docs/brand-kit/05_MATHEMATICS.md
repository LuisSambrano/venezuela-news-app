# Protocol Zero: Mathematics & Geometry

"God Geometrizes." — Plato

The visual harmony of Protocol Zero is not artistic preference; it is mathematical necessity. The entire interface is governed by the Golden Ratio ($\phi \approx 1.618$) and the Fibonacci Sequence. This ensures that every element feels "right" at a subconscious level.

## 1. The Universal Constant ($\phi$)

$$ \phi = 1.61803398875 $$

All scaling factors, modular scales, and layout proportions are derived from this constant.

---

## 2. Typography: The Modular Scale

We abandon arbitrary sizing for a strict Phi-based scale.
**Base Size ($1\mu$):** 16px (1rem)

| Token                   | Math                 | Value (px) | Value (rem) | Usage                   |
| :---------------------- | :------------------- | :--------- | :---------- | :---------------------- |
| **Hero ($\alpha$)**     | $1\mu \times \phi^3$ | 67.77      | ~4.236      | Main Landing Headlines  |
| **Title ($\beta$)**     | $1\mu \times \phi^2$ | 41.89      | ~2.618      | Section Headers         |
| **Subtitle ($\gamma$)** | $1\mu \times \phi$   | 25.89      | ~1.618      | Card Titles, Subheaders |
| **Body ($1\mu$)**       | $1\mu$               | 16.00      | 1.000       | Standard Text           |
| **Caption ($\delta$)**  | $1\mu \div \phi$     | 9.89       | ~0.618      | Metadata, Labels        |
| **Micro ($\epsilon$)**  | $1\mu \div \phi^2$   | 6.11       | ~0.382      | Legal, Footnotes        |

_Note: Values are rounded to the nearest pixel for rendering crispness, but the proportional relationship is maintained._

---

## 3. Spacing: The Fibonacci Lattice

Spacing is not linear; it is exponential. We use the Fibonacci sequence for padding, margins, and gaps.

**Sequence:** 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

| Token      | Value (px) | Tailwind Equiv | Usage                         |
| :--------- | :--------- | :------------- | :---------------------------- |
| `space-1`  | 4px        | `p-1`          | Tight grouping (icon + text)  |
| `space-2`  | 8px        | `p-2`          | Component internal padding    |
| `space-3`  | 12px       | `p-3`          | ...                           |
| `space-5`  | 20px       | `p-5`          | Card padding                  |
| `space-8`  | 32px       | `p-8`          | Section separation (internal) |
| `space-13` | 52px       | `p-[3.25rem]`  | Major section breaks          |
| `space-21` | 84px       | `p-[5.25rem]`  | Hero top/bottom padding       |

---

## 4. Layout: The Golden Rectangles

Grid structures obey the Golden Cut ($1 : 0.618$).

### The 62/38 Rule

For main content with sidebars (e.g., News Feed), the layout is split:

- **Primary Column:** $61.8\%$
- **Secondary Column:** $38.2\%$

### Aspect Ratios

Images and cards should default to Golden Rectangles or squares.

- **Landscape:** $16:10$ (approx $\phi$) - _Deviating slightly from 16:9 for math purity._
- **Portrait:** $10:16$
- **Ultrawide:** $2.35:1$ (Cinematographic)

---

## 5. Implementation Strategy (Tailwind v4)

We will extend the Tailwind theme in `globals.css` to enforce these values natively.

```css
@theme {
  /* Typography */
  --text-hero: 4.236rem;
  --text-title: 2.618rem;
  --text-subtitle: 1.618rem;
  --text-body: 1rem;
  --text-caption: 0.618rem;

  /* Spacing (Fibonacci) */
  --spacing-phi-1: 0.25rem; /* 4px */
  --spacing-phi-2: 0.5rem; /* 8px */
  --spacing-phi-3: 0.75rem; /* 12px */
  --spacing-phi-5: 1.25rem; /* 20px */
  --spacing-phi-8: 2rem; /* 32px */
  --spacing-phi-13: 3.25rem; /* 52px */
  --spacing-phi-21: 5.25rem; /* 84px */
}
```

This ensures that "Protocol Zero" is not just a style, but a system.
