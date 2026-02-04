# DESIGN SYSTEM: MANIFEST & RULES

> **"Protocol Zero: Semantic Core"**

This document defines the **ONLY** allowed methods for styling in this project.
Direct usages of `bg-zinc-950`, `text-black`, or hardcoded `rgba` are **FORBIDDEN** in generic UI components.

## 1. The Glass Engine (Automated)

We do NOT write:
`bg-white/10 dark:bg-black/20 backdrop-blur-md border...`

We write:
`glass` or `glass-panel`

### Why?

Because `globals.css` manages the physics of light for us.

- **Light Mode**: High opacity, darker borders, soft shadows.
- **Dark Mode**: Low opacity, white-alpha borders, deep shadows.

## 2. Semantic Surfaces

| Class           | Usage                                    |
| :-------------- | :--------------------------------------- |
| `bg-background` | The infinite void (Page root)            |
| `glass`         | Navbars, inputs, small floaters          |
| `glass-panel`   | Cards, modals, sidebars                  |
| `glass-hover`   | Interactive elements (adds shine + lift) |

## 3. Brand Colors (Use Sparingly)

- **Electric Blue**: `text-electric-blue` (Cyan Neon) - Used for: **Hyperlinks, Action Buttons, Active States**.
- **Venezuela Gold**: `text-venezuela-gold` (Status) - Used for: **Warnings, "Live" indicators, Metadata**.

## 4. Typography

- **Headings**: `tracking-tighter font-black` (Inter/Geist).
- **Body**: `leading-relaxed text-muted-foreground` (Readable Grey).
- **Data**: `font-mono text-xs uppercase tracking-widest` (Forensic).

## 5. Animation (Physics)

Use standard durations:

- `duration-300` + `ease-out` (UI interactions)
- `duration-700` + `ease-[0.16,1,0.3,1]` (Apple Spring Entrances)

---

**RULE**: If you find yourself typing `dark:`, **STOP**.
Check if a semantic token exists. If not, create it in `globals.css` first.
