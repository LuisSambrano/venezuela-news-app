# Sistema de Color: Entorno de Análisis de Baja Fatiga

En operaciones de inteligencia y análisis de datos, el operador pasa horas frente a la pantalla. Nuestro sistema de color no es una elección estética; es una **medida de salud ocupacional y ergonomía visual**.

## 1. La Escala "Isotope" (Zinc Derivados)

Utilizamos una escala de grises fríos (Zinc) que reduce la vibración visual y maximiza la legibilidad del texto blanco durante sesiones prolongadas ("Longest-Exposure Environments").

| Token                 | Hex                  | Propósito Ergonómico                                            |
| :-------------------- | :------------------- | :-------------------------------------------------------------- |
| **Piso (Floor)**      | `#09090b` (Zinc 950) | Simula un cuarto oscuro. Absorbe el exceso de luz ambiente.     |
| **Superficie (Desk)** | `#18181b` (Zinc 900) | Contraste suficiente para diferenciar zonas sin cansar el iris. |
| **Borde (Edge)**      | `#27272a` (Zinc 800) | Define límites por cambio de luminancia, no por líneas duras.   |
| **Texto Alta Señal**  | `#ffffff` (White)    | Solo para datos críticos y lectura activa.                      |
| **Texto Baja Señal**  | `#a1a1aa` (Zinc 400) | Meta-data presencial que no compite por atención.               |

## 2. Semántica Funcional

Los colores no son "bonitos", son **indicadores de estado del sistema**.

- **Estado: Nominal (Normal)**: Escala de Grises. El sistema funciona, no hay novedad.
- **Estado: Activo/Foco**: Iluminación local.
- **Estado: Alerta**: Color de alta frecuencia.

## 3. Protocolo de Acentos

Restringimos el uso de color saturado al 5% de la interfaz.

### "Signal Green" (Confirmación)

No es un verde "eco-friendly". Es el verde del fósforo de un terminal antiguo o de un LED de servidor.

- **Uso**: Validaciones exitosas, sistemas online.
- **Hex**: `#10b981` (Emerald 500) en modo "Glow".

### "Critical Rose" (Error/Destrucción)

Un rojo técnico, desaturado para evitar el efecto de "sangrado" en pantallas.

- **Uso**: Error de conexión, eliminación de datos irreversibles.
- **Hex**: `#be123c` (Rose 700).

---

## 4. Implementación Técnica

```css
:root {
  /* PALETA TÉCNICA DE ALTO RENDIMIENTO */
  --background: 0 0% 3.5%; /* Void - Absorción de luz */
  --foreground: 0 0% 98%; /* Signal - Emisión de luz */

  --card: 240 5.9% 10%; /* Panel Modular */
  --card-foreground: 0 0% 98%;

  /* ... resto de variables ... */
}
```
