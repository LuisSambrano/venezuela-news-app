# Protocol Zero Design System: "Cupertino Deep Space"

Este documento define la **ÚNICA** verdad de diseño para el proyecto. Cualquier desviación debe ser justificada explícitamente.

## 1. Filosofía (The "Apple Vibe")

- **Minimalismo Radical**: Si se puede quitar, quítalo.
- **Contraste Infinito**: Fondo `#000000` absoluto. Texto Principal `#FFFFFF`. Texto Secundario `Zinc-500`.
- **Física Realista**: Las animaciones no son lineales; usan curvas `spring` (masa, tensión, fricción).
- **Cristal Ahumado**: El glassmorphism no es blanco translúcido; es "material" que desenfoca lo que hay detrás (Backdrop Blur > 20px).

## 2. Tokenización Estricta

### Colores (Monochrome Luxury)

Prohibido usar colores saturados (Rojo, Verde, Azul chillón) excepto para **alertas críticas de estado**.

| Token                  | Valor (Dark)             | Uso                                  |
| :--------------------- | :----------------------- | :----------------------------------- |
| `bg-background`        | `#000000`                | Canvas base. Sin gris oscuro, NEGRO. |
| `bg-surface`           | `#09090b` (Zinc-950)     | Tarjetas, paneles.                   |
| `bg-surface-highlight` | `#18181b` (Zinc-900)     | Hover states.                        |
| `text-primary`         | `#FFFFFF`                | Títulos, Data importante.            |
| `text-secondary`       | `#71717a` (Zinc-500)     | Subtítulos, UI labels.               |
| `border-subtle`        | `rgba(255,255,255,0.08)` | Bordes estructurales.                |
| `border-highlight`     | `rgba(255,255,255,0.15)` | Bordes al interactuar.               |

### Tipografía (SF Pro Simulation)

Usamos `Inter` (o `Geist Sans`) pero "tuneada" para parecerse a Apple.

- **Display (H1-H2)**: `font-semibold` + `tracking-tighter` (-0.04em).
- **Body (P)**: `font-normal` + `tracking-normal` + `text-zinc-500`.
- **Labels (Buttons)**: `font-medium` + `tracking-wide` (0.02em).

### Iconografía

- **Librería**: `lucide-react`.
- **Stroke Width**: Siempre `1.5` o `2` máximo. Nunca `bold`.
- **Tamaño**: 16px (small), 20px (standard), 24px (large).

## 3. Sombras y Profundidad (The "Glowless" Glow)

Evitamos el "Neon Glow" de sitios crypto baratos. Usamos luz difusa.

- **Spotlight**: Luz blanca al 10% de opacidad que sigue el cursor.
- **Shadow-Card**: `0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px -2px rgba(0,0,0,0.5)`
- **Shadow-Ambient**: Luz ambiental para separar capas, no para decorar.

## 4. Reglas de Implementación (Global CSS)

Para forzar esto, actualizaremos `globals.css`:

```css
@layer base {
  body {
    @apply bg-black text-white antialiased selection:bg-white/20;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-semibold tracking-tighter text-white;
  }
  p {
    @apply text-zinc-400 font-light leading-relaxed;
  }
}
```

## 5. Componentes Clave

- **Buttons**: Pill shape (`rounded-full`), altura 44px (touch target), background `white/10` -> hover `white/20`.
- **Cards**: `rounded-[24px]` o `rounded-[32px]`. Borde sutil.
- **Inputs**: Sin borde visible hasta focus. Fondo `zinc-900`.
