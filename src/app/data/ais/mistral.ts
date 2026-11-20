import { AiProfile } from '../ai-model';

export const MISTRAL: AiProfile = {
  slug: 'mistral',
  name: 'Mistral',
  category: 'Chat',
  summary: 'Modelos eficientes, self-hosting friendly.',
  title: 'Mistral',
  subtitle:
    'IA europea con enfoque muy “dev”: rápida, directa y perfecta si te mola control + modelos abiertos. Su modelo estrella, Mistral Large 4, es de pesos abiertos y está entrenado en Europa. Ideal para prototipar, construir features y entender código sin humo.',
  chips: ['Dev', 'Docs', 'Arquitectura', 'Prototipos'],
  lastReviewed: '2026-11-20',
  theme: {
    mode: 'dark',
    accent: '#a3b466',
    accent2: '#10b981',
    heroImage: '/img/mistral/fondoaguamistral.png',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy buena para tareas de dev: explicación + refactor + estructura.',
        'Modelos abiertos de verdad: Mistral Large 4 se puede descargar, modificar y usar comercialmente.',
        'Buena para texto técnico: docs, requisitos, README, specs.',
        'Rinde bien en flujos tipo “asistente de código”.',
        'Suele ser más “to the point” (menos charla, más acción).',
      ],
      cons: [
        'Si buscas creatividad “marketing”, a veces se nota más sobria.',
        'Como todas: puede fallar o inventar → toca verificar.',
        'Algunas funciones dependen de plataforma/plan/entorno.',
        'Si el prompt es flojo, el resultado se queda a medio gas.',
        'Para info “en tiempo real”, necesitas fuentes externas.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Demos oficiales del anuncio de Mistral Large 4 (octubre de 2026).',
      examples: [
        {
          title: 'Análisis financiero en varios pasos',
          kind: 'vídeo',
          description:
            'Vídeo de demostración: Mistral Large 4 resuelve el mismo problema de finanzas corporativas, en varios pasos y buscando información, frente a otros modelos abiertos.',
          source: { label: 'Ver la demo en mistral.ai', url: 'https://mistral.ai/news/mistral-large-4/' },
        },
      ],
    },
    {
      type: 'keyValues',
      title: 'Modelo estrella: Mistral Large 4 (“Le Chonk”)',
      intro:
        'Salió en octubre de 2026, primero en versión preliminar y semanas después con los pesos abiertos. Datos de los anuncios oficiales de Mistral.',
      items: [
        { key: 'Tamaño', value: '1 billón de parámetros (52.000 millones activos), multimodal de serie' },
        { key: 'Pesos abiertos', value: 'Descargables desde Hugging Face para usarlo en tu propia infraestructura (vLLM o SGLang)' },
        {
          key: 'Licencia',
          value:
            'Mistral Ecosystem Open-Weight (MIT modificada): libre para usar, modificar y comercializar; solo quien lo venda como servicio de modelos necesita una licencia aparte',
        },
        { key: 'En qué destaca', value: 'Programación con agentes y ciberseguridad defensiva: según Mistral, el mejor modelo abierto para programar' },
        { key: 'Razonamiento', value: 'Tres modos de razonamiento para equilibrar rendimiento y coste' },
        { key: 'Hecho en Europa', value: 'Entrenado desde cero en centros de datos propios de Mistral en Europa, con datos de más de 160 idiomas' },
        { key: 'Dónde probarlo', value: 'Mistral Studio, la API de Mistral u OpenRouter' },
      ],
      buttons: [
        { label: 'Anuncio de los pesos abiertos', url: 'https://mistral.ai/news/mistral-large-4-oss/', variant: 'primary' },
        { label: 'Anuncio de la versión preliminar', url: 'https://mistral.ai/news/mistral-large-4/', variant: 'ghost' },
      ],
    },
    {
      type: 'cards',
      title: 'Cuándo usar Mistral (y cuándo no)',
      intro: 'Aquí es donde se nota que esto no es “enciclopedia”: es práctico.',
      cards: [
        {
          title: 'Para programar (DAW)',
          badge: '💻 Dev',
          text: 'Cuando quieres avanzar rápido sin perder control.',
          bullets: [
            'Debug: “por qué peta esto” con pasos',
            'Refactor limpio (componentes, servicios, patrones)',
            'Tests y edge-cases',
          ],
        },
        {
          title: 'Documentación técnica',
          badge: '📄 Docs',
          text: 'Si tu proyecto tiene que sonar profesional, no “apuntes”.',
          bullets: [
            'README, guías de instalación',
            'Casos de uso, requisitos, historias de usuario',
            'Estructura de módulos / rutas',
          ],
        },
        {
          title: 'Arquitectura y decisiones',
          badge: '🏗️ Arch',
          text: 'Para justificar en memoria del proyecto por qué hiciste X.',
          bullets: ['Pros/cons de enfoques', 'Qué patrón usar y por qué', 'Riesgos + mitigaciones'],
        },
        {
          title: 'Prototipos rápidos',
          badge: '⚡ Speed',
          text: 'Para “sacar algo ya” y luego pulir.',
          bullets: ['Plantillas UI', 'Componentes base + routing', 'Ideas de features y backlog'],
        },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Prompts cortos, claros y con estructura. Te ahorran tiempo real.',
      prompts: [
        {
          title: 'Refactor Angular (limpio)',
          badge: '🧩',
          prompt:
            'Te pego este componente Angular. Refactorízalo para que sea más limpio y mantenible.\n' +
            '- Separa responsabilidades\n' +
            '- Evita lógica en plantilla\n' +
            '- Mantén el mismo comportamiento\n' +
            'Devuélveme: 1) explicación corta, 2) código final.',
        },
        {
          title: 'Caso de uso (bien escrito)',
          badge: '📌',
          prompt:
            'Redáctame un caso de uso profesional con:\n' +
            'Actores, precondiciones, flujo principal, alternativos, postcondiciones y reglas de negocio.\n' +
            'Contexto: [describe aquí la funcionalidad].\n' +
            'Formato tabla + bullets, tono claro.',
        },
        {
          title: 'Debug paso a paso',
          badge: '🧯',
          prompt:
            'Tengo este error: [pega error + fragmento de código].\n' +
            'Quiero que lo analices como si fueras mi mentor:\n' +
            '1) hipótesis\n2) cómo reproducir\n3) fix mínimo\n4) fix “bien”\n5) cómo evitarlo.',
        },
        {
          title: 'Checklist deploy (Angular)',
          badge: '✅',
          prompt:
            'Voy a subir una app Angular a producción. Hazme un checklist corto (10-12 puntos) con:\n' +
            '- build y entorno\n' +
            '- rutas (routing/refresh)\n' +
            '- assets (imágenes, paths)\n' +
            '- rendimiento (lazy load, tamaños)\n' +
            '- errores/logs\n' +
            '- rollback (plan B)\n' +
            'Formato: bullets + 1 consejo final.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Recursos útiles',
      cards: [
        {
          title: 'Web y producto',
          badge: '🌍',
          links: [
            { label: 'Mistral (web oficial)', url: 'https://mistral.ai/' },
            { label: 'Vibe (antes Le Chat)', url: 'https://chat.mistral.ai/' },
          ],
        },
        {
          title: 'Para devs',
          badge: '🧑‍💻',
          links: [
            { label: 'Docs / plataforma', url: 'https://docs.mistral.ai/' },
            { label: 'GitHub', url: 'https://github.com/mistralai' },
          ],
        },
        {
          title: 'Recursos visuales (para tu web)',
          badge: '🖼️',
          links: [
            { label: 'Unsplash', url: 'https://unsplash.com/' },
            { label: 'Pexels', url: 'https://www.pexels.com/' },
          ],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios (sin drama)',
      intro:
        'Su asistente, que antes se llamaba Le Chat, ahora se llama Vibe. Precios de la web oficial para España, IVA incluido. Si tu uso es normal, con el gratis muchas veces vas sobrado.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 €',
          forWho: 'Perfecto para usarlo a diario sin complicarte.',
          includes: ['Web y móvil', 'Generación y edición de imágenes básica', 'Más de 100 conectores'],
          limitations: ['Mensajes, búsquedas web y sesiones de código limitados'],
        },
        {
          tier: 'Pro',
          price: '18,14 € / mes',
          forWho: 'Si lo usas mucho, sobre todo para programar.',
          includes: [
            'Más mensajes, búsquedas y respuestas más rápidas',
            'Programar todo el día en la terminal, el IDE o la web',
            'Crear hojas de cálculo y presentaciones',
            'Créditos de API incluidos cada mes',
          ],
          notes: [
            'Hay plan para estudiantes verificados (hasta 12 meses): precio en la web oficial',
          ],
        },
        {
          tier: 'Team',
          price: '30,24 € / usuario / mes',
          forWho: 'Para equipos que trabajan juntos con IA.',
          includes: ['Límites aún más altos', 'Hasta 30 GB por usuario', 'Verificación de dominio y exportación de datos'],
        },
        {
          tier: 'Enterprise',
          price: 'A medida (contactar con ventas)',
          forWho: 'Despliegues privados con modelos y agentes a medida.',
        },
      ],
      buttons: [
        { label: 'Abrir Vibe', url: 'https://chat.mistral.ai/', variant: 'primary' },
        { label: 'Ver precios oficiales', url: 'https://mistral.ai/pricing', variant: 'ghost' },
      ],
    },
  ],
};
