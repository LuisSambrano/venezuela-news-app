# System Audit: Protocol Zero (UX/UI & Health)

**Date**: 2026-02-01
**Status**: Critical Review
**Objective**: Unify criteria across Frontend components and Logic.

## 1. Visual Architecture (The "Glass & Math" Standard)

### A. Radius Fragmentation (Critical)

The application currently uses three conflicting radius standards, breaking the "subconscious harmony" of Protocol Zero:

- **Primitives (`globals.css`)**: `0.75rem` (12px). Used by inputs/dialogs.
- **Cards (`LandingHero.tsx`)**: `24px`. Hardcoded.
- **Glass Panels (`Footer.tsx`)**: `32px` (Full Pill). Hardcoded.
- **Buttons (`button.tsx`)**: `rounded-md` (6px). **Violation**.

> **Recommendation**: Unify into specific tokens:
>
> - `--radius-sm`: 6px (Badges)
> - `--radius-md`: 12px (Inputs, Primitives)
> - `--radius-lg`: 24px (Cards, Modals)
> - `--radius-full`: 9999px (Buttons, Pills)

### B. Button Components (Standardization)

- **Current State**: `src/components/ui/button.tsx` is a raw Shadcn/Primitive component (`rounded-md`). It is **NOT** used in the Hero or Footer, which implement their own "Pill" styles inline.
- **Risk**: Any new developer using `<Button />` will create a UI clash (Square vs Round).
- **Fix**: Update `button.tsx` to default to `rounded-full` and add `glass` variants.

### C. Spacing Logic (Phi)

- **Status**: Mostly consistent (`p-phi-5`, `gap-phi-8`).
- **Gap**: Some legacy files still use `p-6` or `gap-4`.
- **Fix**: Run a global replace to enforce `phi` tokens where applicable.

## 2. Frontend Logic & Components

### A. Layout Redundancy

- **Resolved**: "Double Footer" and "Orphaned Homepage" were fixed in the previous sprint.
- **Current Structure**:
  - `(marketing)`: Public Shell (Header + Footer).
  - `(platform)`: Admin Shell (Clean).
- **Status**: **Healthy**.

### B. Component "Ghosting"

- **Issue**: `src/components/ui` contains unused primitives (`SectionDivider.tsx`) or "One-off" demos (`aurora-background.tsx`, `spotlight.tsx`).
- **Fix**: Organize `ui` into:
  - `primitives/` (Button, Input, Label) - Reusable atoms.
  - `effects/` (Aurora, Spotlight) - Visual sugar.

## 3. Unification Plan (Immediate Actions)

1.  **Global Radius Fix**: Define `--radius-lg` (24px) in `globals.css` and strictly apply it to all Cards.
2.  **Button Upgrade**: Refactor `button.tsx` to be the "Truth" for interactions (Rounded Full + Glass Variant).
3.  **Refactor Hero**: Replace inline button divs in `LandingHero` with the authoritative `<Button />` component.

---

**Verdict**: The system has "Visual Debt" in its atoms (Buttons/Inputs). The Layout logic is solid, but the granular UI elements need their "Uniform" issued.
