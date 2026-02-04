# Sistema de Diseño: Estándares Unificados

Este documento define la **fuente de verdad** para el diseño de la interfaz de usuario. La consistencia y la precisión son mandatorios.

## 1. Principios de Diseño

- **Minimalismo Funcional**: Cada elemento debe tener un propósito claro. Eliminar lo superfluo.
- **Alto Contraste y Legibilidad**: Fondo oscuro profundo (`#000000` o `#09090b`) con texto claro para máxima legibilidad.
- **Física de Interacción**: Animaciones naturales y sutiles que aportan contexto, no distracción.
- **Materialidad**: Uso de efectos de desenfoque (`backdrop-blur`) para mantener el contexto espacial sin ruido visual.

## 2. Tokenización del Sistema

### Colores (Paleta Monocromática)

Uso restringido del color para mantener la sobriedad editorial.

| Token                  | Valor (Dark)             | Uso Práctico                      |
| :--------------------- | :----------------------- | :-------------------------------- |
| `bg-background`        | `#000000`                | Lienzo base.                      |
| `bg-surface`           | `#09090b` (Zinc-950)     | Contenedores, tarjetas.           |
| `bg-surface-highlight` | `#18181b` (Zinc-900)     | Estados interactivos (hover).     |
| `text-primary`         | `#FFFFFF`                | Títulos, Datos clave.             |
| `text-secondary`       | `#71717a` (Zinc-500)     | Metadatos, etiquetas secundarias. |
| `border-subtle`        | `rgba(255,255,255,0.08)` | División estructural sutil.       |
| `border-highlight`     | `rgba(255,255,255,0.15)` | Foco e interacción.               |

### Tipografía (Editorial Técnica)

Tipografía sans-serif moderna (`Inter` o `Geist Sans`) configurada para legibilidad en pantallas de alta densidad.

- **Encabezados (H1-H2)**: `font-semibold`, espaciado ajustado (`tracking-tighter`) para impacto.
- **Cuerpo (P)**: `font-normal`, espaciado estándar, color `text-zinc-500` para lectura prolongada.
- **Micro-copy (Labels)**: `font-medium`, espaciado amplio (`tracking-wide`) para claridad en UI.

### Iconografía

- **Librería**: `lucide-react`.
- **Estilo**: Trazo fino (`1.5px` - `2px`). Sobrio y consistente.

## 3. Profundidad e Iluminación

Evitamos efectos de "brillo" excesivos. Buscamos una separación de planos natural.

- **Foco**: Iluminación sutil al interactuar.
- **Sombra Estructural**: `0 0 0 1px rgba(255,255,255,0.05)` para definición de bordes.
- **Separación Ambiental**: Sombras difusas para jerarquía de capas.

## 4. Implementación Global (CSS)

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

## 5. Componentes Base

- **Botones**: Forma de "Pill" (`rounded-full`) para ergonomía táctil y visual. Estilo sutil (`white/10`).
- **Tarjetas**: Bordes redondeados amplios (`24px` - `32px`) para suavidad visual.
- **Campos de Entrada**: Diseño minimalista, sin bordes intrusivos hasta el foco.
