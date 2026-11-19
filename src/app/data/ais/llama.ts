import { AiProfile } from '../ai-model';

export const LLAMA: AiProfile = {
  slug: 'llama',
  name: 'Llama',
  category: 'Open',
  summary: 'Ecosistema grande, fine-tuning y comunidad.',
  title: 'Llama (Meta)',
  subtitle:
    'Modelo open-ish muy usado en el mundo “local / open-source”: ideal si quieres control, privacidad y montar cosas a tu manera (Ollama, LM Studio, servidores propios).',
  chips: ['Local', 'Open-source', 'Privacidad', 'RAG'],
  theme: {
    mode: 'dark',
    accent: '#8b5cf6',
    accent2: '#22c55e',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy buena opción si quieres control (local, on-prem, tu infra).',
        'Comunidad enorme: hay variantes, fine-tunes y recursos a saco.',
        'Privacidad: puedes usarlo sin mandar datos a terceros (si lo corres local).',
        'Flexible para integraciones: APIs propias, RAG, agentes, etc.',
        'Perfecto para prototipos y herramientas internas.',
      ],
      cons: [
        'Calidad depende del modelo/versión y del setup (no todo rinde igual).',
        'Si lo corres local: necesitas hardware decente y algo de configuración.',
        'No siempre trae “herramientas” (search/browsing) como otros servicios.',
        'Más fácil liarla con configs/latencia si vas en local.',
        'Para datos actuales: necesitas RAG o fuentes externas.',
      ],
    },
    {
      type: 'cards',
      title: 'Usos reales (donde brilla)',
      intro:
        'Idea clave: Llama brilla cuando quieres control (local/empresa) y lo combinas con tus docs (RAG). Si lo quieres “plug & play”, otros servicios suelen ser más directos.',
      cards: [
        {
          title: 'Modo local (privacidad)',
          badge: '🔒 Privacidad',
          bullets: [
            'Ideal si trabajas con textos internos o sensibles',
            'Útil para pruebas sin depender de internet',
            'Control total del entorno',
          ],
        },
        {
          title: 'Chat para programar (con criterio)',
          badge: '💻 Dev',
          bullets: [
            'Refactors, explicaciones, tests y debugging guiado',
            'Muy top con contexto + ejemplos',
            'Mejor si lo acompañas con tu repo / snippets',
          ],
        },
        {
          title: 'RAG con tus docs',
          badge: '📚 Docs',
          bullets: [
            'Le das PDFs/MDs y respondes “sobre tu material”',
            'Perfecto para manuales, specs, requisitos',
            'Más fiable que “memoria mágica”',
          ],
        },
        {
          title: 'Automatización',
          badge: '⚙️ Automatiza',
          bullets: [
            'Generar plantillas, resúmenes, informes',
            'Clasificar textos (tickets, emails, incidencias)',
            'Extraer datos estructurados (JSON)',
          ],
        },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Cortos, claros y con estructura. Te ahorran tiempo real.',
      prompts: [
        {
          title: 'Refactor limpio (Angular/TS)',
          badge: '🧩 Código',
          prompt: `Te paso este componente. Refactorízalo para que quede limpio y mantenible:
- No cambies el comportamiento
- Reduce duplicación
- Nombra variables mejor
- Devuélveme: 1) explicación breve, 2) código final`,
        },
        {
          title: 'JSON desde texto',
          badge: '🧾 Datos',
          prompt: `Convierte este texto a un JSON válido con este esquema:
{ "titulo": "", "puntos": [], "riesgos": [], "acciones": [] }
Reglas: sin inventar datos, si falta algo pon null.`,
        },
        {
          title: 'Checklist de entrega',
          badge: '✅ Calidad',
          prompt: `Hazme un checklist corto y en orden de prioridad para entregar un proyecto:
- funcionalidad
- UX básica
- rendimiento
- accesibilidad mínima
- documentación
- capturas/demo`,
        },
        {
          title: 'Resumen + acción',
          badge: '📝 Productividad',
          prompt: `Resume este texto en 7 bullets y luego dame:
1) 3 acciones concretas
2) 2 riesgos
3) una recomendación final en 1 frase`,
        },
      ],
    },
    {
      type: 'cards',
      title: 'Recursos',
      intro: 'Links útiles (nada de relleno).',
      cards: [
        {
          title: 'Correr Llama en local',
          badge: '🖥️ Local',
          links: [
            { label: 'Ollama', url: 'https://ollama.com/' },
            { label: 'LM Studio', url: 'https://lmstudio.ai/' },
          ],
        },
        {
          title: 'Modelos y comunidad',
          badge: '🌍 Open',
          links: [
            { label: 'Hugging Face', url: 'https://huggingface.co/' },
            { label: 'Llama (Meta AI)', url: 'https://ai.meta.com/llama/' },
          ],
        },
        {
          title: 'RAG / embeddings (para docs)',
          badge: '📚 RAG',
          links: [
            { label: 'LangChain', url: 'https://www.langchain.com/' },
            { label: 'LlamaIndex', url: 'https://www.llamaindex.ai/' },
          ],
        },
      ],
    },
  ],
};
