# Tipografía y Estructura: Rigor Geométrico

En visualización de datos de alta densidad, la estructura no es artística; es matemática.

## 1. Tipografía "Sans-Distraction"

Utilizamos una tipografía Grotesque Neo-Humanista (Inter/SF) despojada de adornos para maximizar la relación señal/ruido.

### Protocolo de Tracking Dinámico

La legibilidad de un dato depende de su espaciado relativo. Ajustamos el tracking para compensar la ilusión óptica de "bloqueo" en tamaños grandes y "fusión" en tamaños pequeños.

| Rol                 | Tamaño | Tracking   | Propósito                                                        |
| :------------------ | :----- | :--------- | :--------------------------------------------------------------- |
| **Monolith (Hero)** | 72px+  | `-0.05em`  | Compacta los titulares para crear formas sólidas.                |
| **Headline**        | 32px   | `-0.025em` | Mantiene el ritmo de lectura rápido.                             |
| **Body (Data)**     | 16px   | `0`        | Estándar neutral para lectura sostenida.                         |
| **Label (Meta)**    | 12px   | `+0.05em`  | Aumenta la diferenciación de caracteres en baja resolución.      |
| **Eyebrow**         | 10px   | `+0.15em`  | Mayúsculas espaciadas para evitar confusión con el texto cuerpo. |

---

## 2. La Rejilla Octal (8-Point Grid)

Eliminamos la toma de decisiones arbitraria. Todo espacio es múltiplo de **8**.

### Escala de Ritmo

- **Base (1x)**: 8px. La unidad fundamental.
- **Micro (0.5x)**: 4px. Ajustes ópticos finos.
- **Sección (8x)**: 64px. Pausa narrativa clara.
- **Macro (16x)**: 128px. Cambio de contexto total.

### Columnas de Datos

- **High-Density (Desktop)**: 12 Columnas. Permite combinaciones 3/4/6 para dashboards complejos.
- **Focused (Mobile)**: 4 Columnas. Prioridad vertical estricta.

---

## 3. Geometría de Contenedores

Las formas no son "suaves" por capricho. Usamos **Superelipses** (n=2.6) porque matemáticamente distribuyen la tensión visual mejor que un arco circular simple.

- **Contenedor de Datos (Card)**: `rounded-[24px]` o `rounded-[32px]`.
- **Elemento de Acción (Button)**: `rounded-full` (Máxima diferenciación táctil).
- **Media**: Radio interno calculado (`R_outer - Padding`) para paralelismo concéntrico perfecto.
