# INFRASTRUCTURE X-RAY: MASTER LOGIC & AGENTIC STACK

Este reporte detalla los protocolos de inteligencia y los "Prompts Maestros" que definen la ejecución técnica de M&T Venezuela.

---

## 1. AGENTIC SKILLS (Habilidades del Sistema)

Cada herramienta (Skill) opera bajo una directiva de "Senior Software Auditor" para garantizar calidad industrial.

### skill: STITCH (UI Native Generation)

- **Lógica Interna:** "Pixel-Perfect Mathematical Aesthetic".
- **Prompt Maestro:**
  > "Actúa como un Prime Designer de Apple/Vercel. Genera código que no parezca IA. Prioriza: 1. Jerarquía basada en $\phi$. 2. Micro-interacciones sutiles. 3. Uso estricto de `semantic tokens`. No uses colores arbitrarios; usa el sistema HSL definido en el `Root`. El diseño debe ser adaptable ('fluid') y sobrevivir a inspecciones de diseño forense."
- **Impacto:** Eliminación de la "estética de plantilla" y adopción de un diseño premium nativo.

### skill: SUPABASE (Infrastructure & Data)

- **Lógica Interna:** "Relational Integrity & Zero-Trust Architecture".
- **Prompt Maestro:**
  > "Configura el backend como una fortaleza. Cada tabla debe seguir la Tercera Forma Normal. El RLS (Row Level Security) es innegociable. Todas las conexiones pasan por el Singleton en `src/lib/supabase.ts` para evitar fugas de memoria y asegurar que la sesión sea persistente y segura."
- **Impacto:** Velocidad de respuesta en milisegundos y seguridad de grado inteligencia.

### skill: BROWSER SUBAGENT (Operational Audit)

- **Lógica Interna:** "The Skeptical User & Design Critic".
- **Prompt Maestro:**
  > "No verifiques solo 'que cargue'. Verifica: 1. Tiempo de respuesta visual. 2. Fiducia de color en Dark vs Light. 3. Comportamiento en Mobile real (Viewport). Si un elemento de la UI no es intuitivo o rompe la simetría del 'Protocolo Zero', márcalo como fallo crítico."
- **Impacto:** Ciclos de verificación continuos que evitan errores que un humano podría pasar por alto.

### skill: GENERATE IMAGE (Asset Intelligence)

- **Lógica Interna:** "Brand-Aligned Visual Context".
- **Prompt Maestro:**
  > "Crea visuales que refuercen la narrativa de 'Inteligencia Informativa'. Estética minimalista, monocromática o con tintes Zinc. Evita el 'stock art' genérico. Los assets deben parecer tomados de una terminal de Bloomberg o una interfaz de inteligencia avanzada."
- **Impacto:** Coherencia visual absoluta entre el código y el branding.

---

## 2. OPERATIONAL PROTOCOLS (Reglas de Ejecución)

### Protocolo Zero (P0): El "Core" Matemático

Este no es un prompt, es una **restricción estructural** que aplico a cada `className`:

- **Espaciado:** Todo margen/padding es heredero de la secuencia Fibonacci aplicada a `0.25rem`. No hay valores "random" como `p-3` o `m-7`.
- **Tipografía:** Uso de escalas modulares ($\phi = 1.618$).

### Workflow: Atomic Reliability

1.  **Auditoría Previa:** Verificación de colisiones de layout (ej. el fallo del Footer duplicado).
2.  **Plan de Acción:** Documentado en `implementation_plan.md` antes de escribir un solo carácter.
3.  **Refactorización Limpia:** Eliminación inmediata de código muerto o "bypass hacks".

---

## 3. ESTADO DE DEUDA TÉCNICA (Senior Review)

- **Logic Leakage:** Actualmente la lógica de validación de noticias vive en el cliente. **Plan:** Migrar a `Server Actions` para proteger la integridad de los datos.
- **Structural Ghosting:** Los layouts `(marketing)` y `(platform)` están compitiendo por el renderizado del Header/Footer. **Plan aprobado:** Unificación en `RootLayout`.

**Veredicto Final:** El proyecto está operando con una arquitectura de primer nivel, pero la implementación de los layouts seguía un patrón de "aislamiento" que resultó contraproducente para componentes compartidos. La transición a la Opción 3 (Consolidación Global) es el movimiento lógico para limpiar la arquitectura de raíz.
