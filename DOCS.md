# 📚 LibertadVNZL: Technical Documentation

**Project Overview**
LibertadVNZL is a next-generation news and data intelligence platform designed for high-availability, security, and censorship resistance. This document serves as the central repository for technical architecture, design specifications, and implementation details.

---

## 🏗️ 1. System Architecture

For detailed architectural diagrams and logic flows.

- **[Architectural Map](file:///Users/luissambrano/.gemini/antigravity/brain/a7e3c57b-d6fa-464f-9047-854ba13adff0/architecture_visual_map.md)**
  - _Contents_: Authentication Flows (Middleware), Component Hierarchy, Site Map.
  - _Usage_: Reference for backend logic and routing structure.

## 🕹️ 2. Functional Specification (UX/UI)

Detailed guide on user interactions and interface elements.

- **[UI/UX Specification](file:///Users/luissambrano/.gemini/antigravity/brain/a7e3c57b-d6fa-464f-9047-854ba13adff0/project_element_documentation.md)**
  - _Contents_: Page-by-page breakdown (Landing, News, Registry), navigation logic, and state definitions.
  - _Usage_: Reference for design implementation and QA.

## 🚀 3. Project Status

Tracking of development progress and milestones.

- **[Task Checklist](file:///Users/luissambrano/.gemini/antigravity/brain/a7e3c57b-d6fa-464f-9047-854ba13adff0/task.md)**
  - _Current Status_: Phase 12 (Refactoring & Professionalization).
- **[Visual Evidence](file:///Users/luissambrano/.gemini/antigravity/brain/a7e3c57b-d6fa-464f-9047-854ba13adff0/walkthrough.md)**
  - _Contents_: Screenshots of current build and UI audit.

---

## 🧠 Engineering Principles

### Core Design Philosophy

The project emphasizes **Reliability**, **Security**, and **Clarity**.

1.  **Minimalist Aesthetic**: Utilization of `Zinc-950` and Glassmorphism creates a distraction-free, high-contrast interface suitable for data-heavy content.
2.  **Security-First Architecture**: The Administrative Interface (`/admin`) is strictly isolated from the Public Frontend (`(marketing)`), sharing no layout components to prevent leakage.
3.  **Immutable Data Source**: Supabase is the single source of truth. The frontend acts as a readonly presentation layer for public data, ensuring integrity.

### Key Technical Decisions

- **Next.js App Router**: Optimized for SEO and performance via Server Components.
- **Semantic CSS**: Usage of abstract tokens (`destructive`, `primary`, `background`) over raw values allows for seamless theming (Dark/Light modes).
- **Edge Middleware**: Authentication and routing logic handling at the edge for low-latency security checks.

---

## 📂 Key File Index

| File                               | Purpose                                    |
| :--------------------------------- | :----------------------------------------- |
| `src/proxy.ts`                     | Request interception and route protection. |
| `src/app/layout.tsx`               | Global Root Layout (Providers, Fonts).     |
| `src/app/(marketing)/layout.tsx`   | Public Interface Layout.                   |
| `src/components/ui/glass-card.tsx` | Standardized UI container component.       |
| `src/lib/supabase/`                | Database client instantiation logic.       |
