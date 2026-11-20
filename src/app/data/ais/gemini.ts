import { AiProfile } from '../ai-model';

export const GEMINI: AiProfile = {
  slug: 'gemini',
  name: 'Gemini',
  category: 'Chat',
  summary: 'Texto + imagen, enfoque Google.',
  title: 'Gemini',
  subtitle:
    'La IA de Google: muy conectada al ecosistema (Drive/Docs/Gmail), buena para productividad y capaz de generar imágenes. Si usas Google a diario, aquí brilla.',
  chips: ['Google', 'Cloud', 'Imágenes', 'Productividad'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#4285f4',
    accent2: '#0f9d58',
    heroImage: '/img/gemini/fondoaguagemini.png',
    heroImageSize: { width: 893, height: 221 },
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
        'Precio: Pro y sobre todo Ultra pueden no compensar si lo usas poco.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Resultados publicados en la web oficial, con el prompt que se usó tal y como lo publican (normalmente en inglés). El resultado no se copia aquí: pulsa el enlace para verlo.',
      examples: [
        {
          title: 'Vídeo con diálogo y sonido (Veo)',
          kind: 'vídeo',
          description:
            'Vídeo generado con Veo, el modelo de vídeo de Google DeepMind (la página oficial invita a probarlo en Gemini): un búho y un tejón en un bosque de noche, con sonido ambiente y música generados a la vez.',
          prompt:
            'A follow shot of a wise old owl high in the air, peeking through the clouds in a moonlit sky above a forest. The wise old owl carefully circles a clearing looking around to the forest floor. After a few moments, it dives down to a moonlit path and sits next to a badger. Audio: wings flapping, birdsong, loud and pleasant wind rustling and the sound of intermittent pleasant sounds buzzing, twigs snapping underfoot, croaking. A light orchestral score with woodwinds throughout with a cheerful, optimistic rhythm, full of innocent curiosity.',
          source: { label: 'Ver el vídeo en Google DeepMind', url: 'https://deepmind.google/models/veo/' },
        },
        {
          title: 'Retrato de estudio retro',
          kind: 'imagen',
          description:
            'Edición de imagen en Gemini (Nano Banana): subes una foto tuya y la convierte en un retrato de estudio de centro comercial con estética retro.',
          prompt:
            'Turn this into a retro-style mall studio portrait.',
          source: { label: 'Ver el ejemplo en gemini.google', url: 'https://gemini.google/overview/image-generation/' },
        },
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
          text: 'Si lo usas mucho y a diario, Plus o Pro pueden compensar. Si es puntual, gratis suele valer.',
          bullets: [
            'Plus: el doble de uso que el gratis y 400 GB en la nube.',
            'Pro: cuatro veces más uso, Gemini en Gmail/Docs y 5 TB.',
            'Ultra: para uso intensivo (muy caro si no lo amortizas).',
          ],
          links: [{ label: 'Planes oficiales', url: 'https://gemini.google/es/subscriptions/' }],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'Precios de la web oficial para España, en euros al mes. Ojo: los límites se renuevan cada 5 horas hasta llegar al tope semanal.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 € / mes',
          forWho: 'Para empezar, tareas normales y probar el flujo.',
          includes: ['Gemini 4 Hydrogen', 'Imágenes, Deep Research, Gemini Live y Canvas', '15 GB en la nube'],
          notes: ['Perfecto si lo usas “a ratos”', 'Te sirve para doc + ideas + estudio'],
        },
        {
          tier: 'Google AI Plus',
          price: '4,99 € / mes',
          forWho: 'El paso intermedio: más uso sin gastar mucho.',
          includes: ['Gemini 4 Neon', 'El doble de uso que el gratis y generación de vídeo', 'Gemini en Gmail y Vids', '400 GB en la nube'],
        },
        {
          tier: 'Google AI Pro',
          price: '21,99 € / mes',
          forWho: 'Si lo usas bastante y quieres más acceso/estabilidad.',
          includes: [
            'Gemini 4 Carbon',
            'Cuatro veces más uso que el gratis',
            'Gemini en Gmail, Docs y más apps de Google',
            '5 TB en la nube',
          ],
          notes: ['Compensa si lo abres casi a diario', 'La web anuncia un año de Plus sin coste para estudiantes (promoción temporal)'],
        },
        {
          tier: 'Google AI Ultra',
          price: 'Desde 99,99 € / mes',
          forWho: 'Uso intensivo pro (si no lo amortizas, duele).',
          includes: ['99,99 €: 5 veces el uso de Pro', '219,99 €: 20 veces el uso de Pro', 'Desde 20 TB en la nube'],
          notes: ['Muy caro para un TFG', 'Solo si lo exprimes heavy'],
        },
      ],
      buttons: [
        { label: 'Ver planes oficiales', url: 'https://gemini.google/es/subscriptions/', variant: 'primary' },
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
