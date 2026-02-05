# 🧠 KEY FINDINGS - M&T Venezuela

> _Destilado de toda la investigación realizada para informar decisiones de arquitectura y producto._

Este documento consolida los hallazgos clave del proyecto M&T Venezuela, creando contexto máximo para IAs y humanos que trabajen en el repositorio.

---

## Hallazgo #1: Filosofía de Diseño "Protocol Zero"

**Descubrimiento**: Necesidad de un sistema de diseño rígido que prevenga "deuda visual" y código inconsistente.

**Decisión**: Implementar "Protocol Zero: Semantic Core" con reglas estrictas:

- ❌ **Prohibido**: `bg-zinc-950`, `text-black`, hardcoded `rgba`
- ✅ **Obligatorio**: Tokens semánticos (`glass`, `glass-panel`, `bg-background`)

**Beneficio**: Cambio automático Light/Dark sin tocar componentes individuales.

📄 Fuente: [DESIGN_SYSTEM_MANIFEST.md](./docs/brain/DESIGN_SYSTEM_MANIFEST.md)

---

## Hallazgo #2: Glass Engine (Automatización Visual)

**Problema**: Escribir `bg-white/10 dark:bg-black/20 backdrop-blur-md...` en cada componente.

**Solución**: `globals.css` maneja la "física de la luz":

| Clase         | Uso                                   |
| ------------- | ------------------------------------- |
| `glass`       | Navbars, inputs, elementos flotantes  |
| `glass-panel` | Cards, modals, sidebars               |
| `glass-hover` | Elementos interactivos (shine + lift) |

📄 Fuente: [DESIGN_SYSTEM_MANIFEST.md](./docs/brain/DESIGN_SYSTEM_MANIFEST.md)

---

## Hallazgo #3: Arquitectura Zero-Trust

**Principios de Datos**:

- **Supabase**: Single source of truth
- **RLS**: Row-Level Security obligatorio
- **Singleton**: Patrón en `src/lib/supabase.ts` para gestión eficiente

**Principios de Seguridad**:

- **Separación estricta**: `/admin` aislado de `(marketing)` sin layouts compartidos
- **Edge Middleware**: Auth y routing en el edge para baja latencia

📄 Fuente: [TECHNICAL_AUDIT_REPORT.md](./docs/brain/TECHNICAL_AUDIT_REPORT.md), [DOCS.md](./DOCS.md)

---

## Hallazgo #4: Estándares de Implementación

**Espaciado**: Sistema basado en escala Fibonacci / 0.25rem (evitar valores arbitrarios).

**Tipografía**: Escala tipográfica con proporción áurea (φ = 1.618).

**Animación**:

- `duration-300` + `ease-out` → Interacciones UI
- `duration-700` + `ease-[0.16,1,0.3,1]` → Entradas estilo Apple

📄 Fuente: [TECHNICAL_AUDIT_REPORT.md](./docs/brain/TECHNICAL_AUDIT_REPORT.md)

---

## Hallazgo #5: Deuda Técnica Identificada

**Pendientes**:

1. Migrar validación de cliente a `Server Actions` (seguridad)
2. Unificar layouts bajo `RootLayout` (conflictos de renderizado)

**Evaluación**: Arquitectura sólida, consolidación de layouts es el paso crítico.

📄 Fuente: [TECHNICAL_AUDIT_REPORT.md](./docs/brain/TECHNICAL_AUDIT_REPORT.md)

---

## 📚 Mapa de Documentación Existente

| Archivo                                                               | Contenido                    |
| --------------------------------------------------------------------- | ---------------------------- |
| [DOCS.md](./DOCS.md)                                                  | Índice técnico principal     |
| [DESIGN_SYSTEM_MANIFEST.md](./docs/brain/DESIGN_SYSTEM_MANIFEST.md)   | Reglas del sistema de diseño |
| [DESIGN_SYSTEM_STANDARDS.md](./docs/brain/DESIGN_SYSTEM_STANDARDS.md) | Estándares adicionales       |
| [TECHNICAL_AUDIT_REPORT.md](./docs/brain/TECHNICAL_AUDIT_REPORT.md)   | Auditoría técnica y stack    |
| [SYSTEM_AUDIT_REPORT.md](./docs/brain/SYSTEM_AUDIT_REPORT.md)         | Auditoría de sistema         |

---

_Última actualización: 2026-02-05_
_Generado por Antigravity Research-First Protocol_
