# Auditoría Técnica: Arquitectura y Stack del Sistema

Este documento detalla los protocolos técnicos y directivas de configuración que definen la ejecución de M&T Venezuela.

---

## 1. Módulos del Sistema

Cada componente opera bajo estándares estrictos de ingeniería de software para garantizar calidad y estabilidad.

### Generación de UI (Frontend Standards)

- **Estándar**: Precisión Geométrica y Estética Nativa.
- **Directiva**:
  > Generar código optimizado y limpio. Priorizar: 1. Jerarquía visual basada en proporciones matemáticas ($\phi$). 2. Interacciones sutiles y funcionales. 3. Uso estricto de tokens semánticos definidos en el sistema de diseño. El diseño debe ser adaptable y resistente a pruebas de estrés visual.
- **Objetivo**: Interfaz profesional, nativa y libre de artefactos de "plantilla".

### Infraestructura de Datos (Supabase)

- **Estándar**: Integridad Referencial y Arquitectura Zero-Trust.
- **Directiva**:
  > Configuración de backend robusta. Normalización de bases de datos (3NF). Implementación obligatoria de seguridad a nivel de fila (RLS). Uso de patrón Singleton en `src/lib/supabase.ts` para gestión eficiente de conexiones y sesiones.
- **Objetivo**: Latencia mínima, consistencia de datos y seguridad empresarial.

### Auditoría Visual (Browser Testing)

- **Estándar**: Verificación de Experiencia de Usuario (UX) Crítica.
- **Directiva**:
  > Validación funcional y visual. Verificar: 1. Tiempo de respuesta (TBT). 2. Contraste y legibilidad en modos Dark/Light. 3. Comportamiento responsive real en diversos viewports. Identificar cualquier ruptura en la consistencia del sistema de diseño.
- **Objetivo**: Detección proactiva de regresiones visuales y funcionales.

### Gestión de Assets (Visual Context)

- **Estándar**: Coherencia de Marca.
- **Directiva**:
  > Generación de activos visuales alineados con la identidad de "Inteligencia Informativa". Estética minimalista, sobria, utilizando la paleta monocromática del sistema. Evitar estéticas genéricas.
- **Objetivo**: Integración visual completa entre interfaz y contenido gráfico.

---

## 2. Protocolos Operativos

### Estándares de Implementación (Core)

Restricciones estructurales aplicadas al código base:

- **Espaciado**: Sistema basado en escala modular (Fibonacci / 0.25rem). Evitar valores arbitrarios.
- **Tipografía**: Escala tipográfica consistente ($\phi = 1.618$).

### Flujo de Trabajo: Fiabilidad Atómica

1.  **Verificación**: Análisis de impacto antes de cambios estructurales.
2.  **Planificación**: Documentación técnica (`implementation_plan.md`) requerida antes de la implementación.
3.  **Refactorización**: Limpieza continua de código y eliminación de deuda técnica.

---

## 3. Estado de Deuda Técnica

- **Validación de Lógica**: Migración de lógica de validación de cliente a `Server Actions` para mejorar la seguridad.
- **Estructura de Layouts**: Unificación de layouts bajo `RootLayout` para resolver conflictos de renderizado en componentes globales (Header/Footer).

**Evaluación**: La arquitectura actual es sólida. La consolidación de layouts es el paso crítico para optimizar la mantenibilidad del proyecto.
