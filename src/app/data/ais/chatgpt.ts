import { AiProfile } from '../ai-model';

export const CHATGPT: AiProfile = {
  slug: 'chatgpt',
  name: 'ChatGPT',
  category: 'Chat',
  summary: 'Chat conversacional, redacción, ideas, código.',
  title: 'ChatGPT',
  subtitle:
    'IA conversacional para escribir, resumir, planificar, aprender y programar. Ideal si lo usas con buen criterio (y verificas cuando toca).',
  chips: ['Texto', 'Código', 'Productividad', 'Estudio'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'light',
    accent: '#10a37f',
    heroImage: '/img/chatgpt/fondodeaguachatgpt.png',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy versátil: texto, ideas, resúmenes, emails, guiones…',
        'Muy útil para programar: ejemplos, refactors, explicaciones.',
        'Iteración rápida: le dices “mejor esto” y lo afina.',
        'Puede ayudarte a estructurar proyectos.',
        'Ahorra tiempo en tareas repetitivas (documentación, plantillas).',
      ],
      cons: [
        'Puede equivocarse con seguridad (alucinaciones) si no verificas.',
        'Si el prompt es vago, el resultado suele ser meh.',
        'No sustituye criterio profesional (tú mandas).',
        'En gratis van limitadas las imágenes, la voz y los archivos.',
        'Temas sensibles: mejor contrastar con fuentes oficiales.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Resultados publicados en la web oficial, con el prompt que se usó tal y como lo publican (normalmente en inglés). El resultado no se copia aquí: pulsa el enlace para verlo. Es un ejemplo de marzo de 2025: los modelos actuales son más nuevos.',
      examples: [
        {
          title: 'Foto de una pizarra con texto',
          kind: 'imagen',
          description:
            'Imagen generada en ChatGPT (generación de imágenes de GPT-4o): una foto hecha con el móvil de una pizarra de cristal con un esquema escrito a mano y el reflejo del fotógrafo. La mejor de 8 generaciones.',
          prompt:
            'A wide image taken with a phone of a glass whiteboard, in a room overlooking the Bay Bridge. The field of view shows a woman writing, sporting a tshirt wiith a large OpenAI logo. The handwriting looks natural and a bit messy, and we see the photographer\'s reflection.',
          promptExcerpt: true,
          source: { label: 'Ver la imagen en openai.com', url: 'https://openai.com/es-ES/index/introducing-4o-image-generation/' },
        },
        {
          title: 'La misma escena, segundo turno',
          kind: 'imagen',
          description:
            'Siguiente mensaje de la misma conversación: ChatGPT mantiene la escena y los personajes de la imagen anterior y cambia solo la acción.',
          prompt:
            'selfie view of the photographer, as she turns around to high five him',
          source: { label: 'Ver la imagen en openai.com', url: 'https://openai.com/es-ES/index/introducing-4o-image-generation/' },
        },
      ],
    },
    {
      type: 'cards',
      title: 'Ideas reales + comunidad + recursos',
      intro: 'Cero chapa: entra, mira, copia ideas y crea cosas.',
      cards: [
        {
          title: 'Vídeo “Top 10 jugadores CS:GO” (guion + estructura + voz)',
          badge: '🎬 Real',
          links: [
            { label: 'CapCut (plantillas de vídeo)', url: 'https://www.capcut.com/' },
            { label: 'Pexels (vídeo e imágenes gratis)', url: 'https://www.pexels.com/' },
          ],
        },
        {
          title: 'Fondos, mockups e imágenes (sin pagar)',
          badge: '🖼️ Visual',
          links: [
            { label: 'Unsplash (imágenes top)', url: 'https://unsplash.com/' },
            { label: 'Canva (diseño rápido)', url: 'https://www.canva.com/' },
          ],
        },
        {
          title: 'Prompts buenos de la comunidad (ideas listas)',
          badge: '🧠 Comunidad',
          links: [
            { label: 'Awesome ChatGPT Prompts (GitHub)', url: 'https://github.com/f/awesome-chatgpt-prompts' },
            { label: 'Reddit r/ChatGPT', url: 'https://www.reddit.com/r/ChatGPT/' },
          ],
        },
        {
          title: 'Programación: ejemplos reales y guías (nivel pro)',
          badge: '💻 Dev',
          links: [
            { label: 'OpenAI Cookbook (GitHub)', url: 'https://github.com/openai/openai-cookbook' },
            { label: 'Docs OpenAI', url: 'https://platform.openai.com/docs' },
          ],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes (qué cambia) + precios',
      intro:
        'Planes de la web oficial (noviembre de 2026). La web calcula el precio según tu país y no lo muestra hasta que entras, así que no lo copiamos aquí: consúltalo en el enlace oficial.',
      plans: [
        {
          tier: 'Gratis',
          price: 'Consultar web oficial',
          img: '/img/chatgpt/freechatgpt.png',
          forWho: 'Para probar, tareas puntuales y uso ligero.',
          highlights: ['Chats de texto ilimitados con GPT-6 (con medidas antiabuso)', 'Perfecto para empezar y aprender a “promptear”'],
          includes: ['Modelo GPT-6 Luna', 'Imágenes, voz e investigación avanzada, pero limitadas'],
          limitations: ['Menos subidas de archivos, memoria y contexto', 'Acceso limitado a Codex'],
        },
        {
          tier: 'Go',
          price: 'Consultar web oficial',
          forWho: 'Si el gratis se te queda corto pero no necesitas lo más potente.',
          highlights: ['Todo lo del Gratis con más margen'],
          includes: ['Más mensajes con herramientas y más subidas', 'Más imágenes, chats de voz y memoria'],
          limitations: ['Puede incluir anuncios', 'Sin los modelos de razonamiento avanzado'],
        },
        {
          tier: 'Plus',
          price: 'Consultar web oficial',
          img: '/img/chatgpt/pluschatgpt.png',
          forWho: 'Si lo usas a diario: estudio, curro, creación de contenido, programación.',
          highlights: [
            'Recomendado si lo usas varias veces por semana',
            'Modelos de razonamiento avanzado con GPT-6',
            'Proyectos, tareas programadas y GPT personalizados',
          ],
          includes: ['Investigación avanzada', 'Uso ampliado de Codex', 'Acceso anticipado a funciones nuevas'],
          limitations: ['Los modelos más potentes (GPT-6 Sol / Astra) van con uso limitado'],
        },
        {
          tier: 'Pro',
          price: 'Consultar web oficial',
          img: '/img/chatgpt/prochatgpt.png',
          forWho: 'Uso intensivo/avanzado: gente que exprime modelos y herramientas a saco.',
          highlights: ['3 niveles de uso para elegir', 'Razonamiento Pro con GPT-6 Astra', 'Solo compensa si lo amortizas'],
          includes: [
            'Sesiones más largas de Codex y ChatGPT Work',
            'Creación de imágenes ilimitada y más rápida',
            'Créditos de API incluidos',
          ],
          limitations: ['No es “magia”: sigue necesitando prompts buenos'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://chatgpt.com/pricing', variant: 'primary' },
        { label: 'Abrir ChatGPT', url: 'https://chatgpt.com/', variant: 'ghost' },
      ],
    },
  ],
};
