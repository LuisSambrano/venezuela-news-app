# Cinemática de Interfaz: Peso y Respuesta

En **Protocol Zero**, la interacción no es una animación; es una respuesta física a una fuerza aplicada por el usuario. La interfaz tiene "masa" y "resistencia".

## 1. Óptica de Precisión (No solo "Blur")

Tratamos los paneles como **materiales técnicos** que procesan la luz.

### Material: `Structural Polycarbonate`

```css
.glass-structural {
  background-color: rgba(9, 9, 11, 0.75); /* Alta densidad */
  backdrop-filter: blur(40px) saturate(120%);
  /* Los bordes simulan corte industrial */
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05) inset;
}
```

**Propósito**: Bases de navegación y paneles de control críticos. La alta densidad transmite estabilidad.

---

## 2. Dinámica de Resortes (System Mass)

Rechazamos las curvas de animación lineales o excesivamente "bouncy". Buscamos una respuesta **amortiguada crítica**.

- **Sensación**: Hidráulica, precisa, controlada.
- **Técnica**: `cubic-bezier(0.2, 0, 0, 1)` - Similar a la apertura de una compuerta de aire. Rápida al inicio, frenado suave y firme al final.

### Orquestación (Cascada de Datos)

La información nunca golpea al usuario de golpe. Se despliega como una secuencia de inicialización.

1.  **Estructura (Layout)**: Aparece primero (instantáneo).
2.  **Contenido Primario**: 50ms delay.
3.  **Metadatos**: 100ms delay.

---

## 3. Feedback Táctil Visual

Cada acción del usuario debe tener una confirmación visual inmediata, validando que el sistema está "vivo" y "escuchando".

- **Micro-Depresión**: Los botones se hunden (scale 0.98) para confirmar la presión mecánica virtual.
- **Spotlight Tracking**: En superficies oscuras, el cursor actúa como una linterna de inspección, revelando texturas o bordes solo donde hay atención activa.

---

## 4. Filosofía de Movimiento

> "Si puedes ver la animación, es demasiado lenta. Si no puedes sentirla, es demasiado rápida."

El movimiento debe ser **invisible**. Solo debe notarse su ausencia (la rigidez).
