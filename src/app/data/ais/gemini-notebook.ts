import { AiProfile } from '../ai-model';

export const GEMINI_NOTEBOOK: AiProfile = {
  slug: 'gemini-notebook',
  name: 'Gemini Notebook',
  category: 'Productividad',
  summary: 'Antes NotebookLM: estudia y resume a partir de tus apuntes.',
  title: 'Gemini Notebook (antes NotebookLM)',
  subtitle:
    'El cuaderno con IA de Google, que antes se llamaba NotebookLM. Le subes tus apuntes, PDFs o vídeos y responde basándose solo en esas fuentes. Es oro para estudiar y para documentar un TFG.',
  chips: ['Estudio', 'Tus fuentes', 'Resúmenes de audio', 'Investigación'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'light',
    accent: '#0b57d0',
    accent2: '#34a853',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Responde basándose en tus fuentes: se inventa mucho menos que un chat normal.',
        'Convierte tus apuntes en resúmenes de audio y de vídeo, tarjetas para estudiar y presentaciones.',
        'Busca fuentes nuevas por ti (Descubrimiento de fuentes y Deep Research).',
        'Hay plan gratis y no usa tus datos para entrenar (salvo que envíes comentarios).',
        'Hay cuadernos públicos para inspirarte antes de crear el tuyo.',
      ],
      cons: [
        'Si tus fuentes son malas, las respuestas también lo serán.',
        'Hay un límite de fuentes por cuaderno (50 en el plan gratis).',
        'No es un chat “para todo”: está pensado para trabajar con documentos.',
        'Algunas funciones dependen del plan y del país.',
        'Ha cambiado de nombre hace poco: muchos tutoriales aún lo llaman NotebookLM.',
      ],
    },
    {
      type: 'cards',
      title: 'Cómo sacarle partido',
      intro: 'La idea clave: primero subes las fuentes y después preguntas.',
      cards: [
        {
          title: 'Estudiar para un examen',
          badge: '🎓 Estudio',
          text: 'Sube los temas y pide un resumen de audio para repasar o tarjetas didácticas.',
          pills: ['Resumen de audio', 'Tarjetas', 'Preguntas tipo test'],
        },
        {
          title: 'Documentar el TFG',
          badge: '📚 Investigación',
          text: 'Mete papers, documentación técnica y tus notas, y pídele que lo conecte todo.',
          pills: ['Estado del arte', 'Citas a tus fuentes', 'Informes'],
        },
        {
          title: 'Presentar el proyecto',
          badge: '🎬 Vídeo',
          text: 'Genera un resumen de vídeo o una presentación a partir de tu memoria.',
          pills: ['Resumen de vídeo', 'Presentaciones', 'Guion de defensa'],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'Los planes de pago van incluidos en las suscripciones de IA de Google. Precios de la web oficial de Gemini para España.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 €',
          forWho: 'Para proyectos personales y estudiar.',
          includes: ['Límites estándar', 'Hasta 50 fuentes por cuaderno'],
        },
        {
          tier: 'Con Google AI Plus',
          price: '4,99 € / mes',
          forWho: 'Para estudiar a fondo.',
          includes: ['El doble de uso que el gratis', 'Hasta 100 fuentes por cuaderno', 'Acceso anticipado a novedades'],
        },
        {
          tier: 'Con Google AI Pro',
          price: '21,99 € / mes',
          forWho: 'Para investigar a diario.',
          includes: ['Cuatro veces más uso que el gratis', 'Hasta 300 fuentes por cuaderno', 'Acceso prioritario'],
        },
        {
          tier: 'Con Google AI Ultra',
          price: 'Desde 99,99 € / mes',
          forWho: 'Para proyectos muy grandes.',
          includes: ['De 5 a 20 veces el uso de Pro', 'Hasta 600 fuentes por cuaderno'],
        },
      ],
      buttons: [
        { label: 'Abrir Gemini Notebook', url: 'https://notebook.google/', variant: 'primary' },
        { label: 'Ver planes oficiales', url: 'https://notebook.google/plans', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Úsalos después de subir tus fuentes al cuaderno.',
      prompts: [
        {
          title: 'Examen de prueba',
          badge: '🎓',
          prompt:
            'Con estas fuentes, hazme un examen de 10 preguntas tipo test con 4 opciones. Al final, dame las soluciones explicadas y dime en qué fuente está cada respuesta.',
        },
        {
          title: 'Resumen para repasar',
          badge: '📝',
          prompt:
            'Resume los conceptos clave de estas fuentes en una tabla con tres columnas: concepto, explicación en una frase y ejemplo práctico.',
        },
        {
          title: 'Preparar la defensa',
          badge: '🎤',
          prompt:
            'A partir de mi memoria del TFG, dime las 8 preguntas más probables del tribunal y una respuesta corta y segura para cada una.',
        },
      ],
    },
  ],
};
