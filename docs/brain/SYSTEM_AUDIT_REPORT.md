# Auditoría de Sistema: UX/UI y Salud del Proyecto

**Fecha**: 2026-02-04
**Estado**: Revisión Crítica
**Objetivo**: Unificar criterios entre componentes Frontend y Lógica de Negocio.

## 1. Arquitectura Visual (Estándar de Consistencia)

### A. Fragmentación de Radio (Crítico)

La aplicación actualmente presenta inconsistencias en los radios de borde, afectando la armonía visual:

- **Primitivas (`globals.css`)**: `0.75rem` (12px). Usado en inputs/dialogs.
- **Tarjetas (`LandingHero.tsx`)**: `24px`. Hardcoded.
- **Paneles (`Footer.tsx`)**: `32px` (Full Pill). Hardcoded.
- **Botones (`button.tsx`)**: `rounded-md` (6px). **Inconsistencia**.

> **Recomendación**: Unificar en tokens específicos:
>
> - `--radius-sm`: 6px (Badges)
> - `--radius-md`: 12px (Inputs, Primitivas)
> - `--radius-lg`: 24px (Tarjetas, Modales)
> - `--radius-full`: 9999px (Botones, Pills)

### B. Componentes de Botón (Estandarización)

- **Estado Actual**: `src/components/ui/button.tsx` usa un estilo primitivo (`rounded-md`) que no coincide con los estilos "Pill" usados en Hero o Footer.
- **Riesgo**: Inconsistencia visual al usar el componente estándar.
- **Solución**: Actualizar `button.tsx` para usar `rounded-full` por defecto y añadir variantes `glass`.

### C. Lógica de Espaciado

- **Estado**: Mayormente consistente.
- **Acción**: Asegurar uso de tokens de espaciado estándar en archivos legacy.

## 2. Lógica Frontend y Componentes

### A. Redundancia de Layout

- **Estructura Actual**:
  - `(marketing)`: Shell Pública (Header + Footer).
  - `(platform)`: Shell Administrativa (Limpia).
- **Estado**: **Saludable**.

### B. Organización de Componentes

- **Problema**: `src/components/ui` contiene primitivas y demos mezclados.
- **Solución**: Organizar `ui` en:
  - `primitives/` (Button, Input, Label) - Átomos reutilizables.
  - `effects/` (Aurora, Spotlight) - Efectos visuales.

## 3. Plan de Unificación (Acciones Inmediatas)

1.  **Corrección Global de Radios**: Definir `--radius-lg` (24px) en `globals.css`.
2.  **Mejora de Botones**: Refactorizar `button.tsx` como fuente de verdad (Rounded Full + Variante Glass).
3.  **Refactorización de Hero**: Reemplazar divs inline por el componente `<Button />` oficial.

---

**Veredicto**: El sistema requiere estandarización en sus átomos (Botones/Inputs) para alcanzar el nivel de pulido profesional deseado. La arquitectura de Layout es sólida.
