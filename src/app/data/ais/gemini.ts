import { AiProfile } from '../ai-model';

export const GEMINI: AiProfile = {
  slug: 'gemini',
  name: 'Gemini',
  category: 'Multimodal',
  summary: 'Texto + imagen, enfoque Google.',
  title: 'Gemini',
  subtitle:
    'La IA de Google: muy conectada al ecosistema (Drive/Docs/Gmail), buena para productividad y capaz de generar imágenes. Si usas Google a diario, aquí brilla.',
  chips: ['Google', 'Cloud', 'Imágenes', 'Productividad'],
  theme: {
    mode: 'dark',
    accent: '#4285f4',
    accent2: '#0f9d58',
    heroImage: '/img/gemini/fondoaguagemini.png',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy top si ya usas herramientas en Google como Drive/Docs/Gmail/Workspace.',
        'Buen “modo curro”: resúmenes, organización, tareas y docs.',
        'Generación de imágenes (según plan/función disponible).',
        'Ideal para investigar y aterrizar ideas en entregables.',
        'Buen combo para DAW: documentación + planificación + contenido.',
      ],
      cons: [
        'No es “verdad automática”: si son datos críticos, verifica.',
        'Funciones potentes dependen de plan/país (y cambian).',
        'A veces se nota más “corporativo” en el tono.',
        'Para dev hard (refactors complejos), depende del caso.',
        'Precio: Pro/Ultra pueden no compensar si lo usas poco.',
      ],
    },
    {
      type: 'cards',
      title: 'Lo diferencial (cloud + imágenes + precio)',
      intro: 'Aquí está el “porque” de Gemini.',
      cards: [
        {
          title: 'Cloud + Workspace vibes',
          badge: '☁️ Drive/Docs',
          text: 'Cuando tu trabajo vive en Google, Gemini es literal “pegarlo” a tus archivos.',
          bullets: [
            'Resumir docs y PDFs, sacar tareas, crear tablas.',
            'Exportar resultados a Docs o Sheets (flow rápido).',
            'Ideal para documentación de trabajos.',
          ],
          links: [
            { label: 'Gemini (web)', url: 'https://gemini.google.com/' },
            { label: 'Gemini en Drive (ayuda)', url: 'https://support.google.com/drive/answer/14217860' },
          ],
        },
        {
          title: 'Imágenes (estilo Google)',
          badge: '🖼️ Imagen',
          text: 'Puede generar imágenes (Imagen) y también ayudarte a analizar imágenes en Drive.',
          bullets: [
            'Útil para mockups, portadas, fondos, recursos visuales para libros, tiktoks.',
            'Puedes pedir variantes: “más minimal”, “más corporate”, “más color”.',
            'Ojo: revisa licencias/uso final si lo vas a publicar.',
          ],
          links: [{ label: 'Imagen (docs)', url: 'https://ai.google.dev/gemini-api/docs/imagen' }],
        },
        {
          title: 'Precio (sí importa aquí)',
          badge: '💸 Planes',
          text: 'Si lo usas mucho y a diario, Pro puede compensar. Si es puntual, gratis suele valer.',
          bullets: [
            'Pro: más acceso y funciones (según disponibilidad).',
            'Ultra: para uso intensivo (muy caro si no lo amortizas).',
          ],
          links: [{ label: 'Planes oficiales', url: 'https://gemini.google/subscriptions/' }],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro: 'Precios orientativos (USD) y pueden variar por país/impuestos. Revisa el enlace oficial para tu región.',
      plans: [
        {
          tier: 'Gratis',
          price: '$0',
          forWho: 'Para empezar, tareas normales y probar el flujo.',
          notes: ['Perfecto si lo usas “a ratos”', 'Te sirve para doc + ideas + estudio'],
        },
        {
          tier: 'Pro',
          price: '$19.99 / mes',
          forWho: 'Si lo usas bastante y quieres más acceso/estabilidad.',
          notes: ['Más límites y features', 'Compensa si lo abres casi a diario'],
        },
        {
          tier: 'Ultra',
          price: '$249.99 / mes',
          forWho: 'Uso intensivo pro (si no lo amortizas, duele).',
          notes: ['Muy caro para un TFG', 'Solo si lo exprimes heavy'],
        },
      ],
      buttons: [
        { label: 'Ver planes oficiales', url: 'https://gemini.google/subscriptions/', variant: 'primary' },
        { label: 'Abrir Gemini', url: 'https://gemini.google.com/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      prompts: [
        {
          title: 'Drive (organización + resumen)',
          badge: '☁️',
          prompt:
            'Tengo una carpeta con PDFs y notas. Resúmeme los 5 puntos clave, saca una lista de tareas accionables y ordénalas por prioridad (alta/media/baja).',
        },
        {
          title: 'Docs (escribir rápido y bien)',
          badge: '📝',
          prompt:
            'Escríbeme un texto claro y corto (máx 200 palabras) para presentar una idea de proyecto. Tono profesional, sin humo, con estructura: problema → solución → beneficios.',
        },
        {
          title: 'Imagen (mini branding)',
          badge: '🖼️',
          prompt:
            'Genera una imagen moderna para portada: fondo degradado azul-violeta con estilo tech, sin texto, limpio, y con un toque futurista. Formato 16:9, alta resolución.',
        },
      ],
    },
  ],
};
