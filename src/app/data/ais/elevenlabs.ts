import { AiProfile } from '../ai-model';

export const ELEVENLABS: AiProfile = {
  slug: 'elevenlabs',
  name: 'ElevenLabs',
  category: 'Audio',
  summary: 'Voces realistas, doblaje y clonación de voz.',
  title: 'ElevenLabs',
  subtitle:
    'La referencia en voz con IA: convierte texto en voz muy natural, transcribe, dobla vídeos a otros idiomas, clona voces y crea efectos de sonido y música.',
  chips: ['Texto a voz', 'Doblaje', 'Clonación', 'Efectos'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'light',
    accent: '#334155',
    accent2: '#a78bfa',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Voces muy naturales, con diseño de voces a medida.',
        'Todo en uno: texto a voz, voz a texto, efectos de sonido, música y doblaje.',
        'Plan gratis con 10.000 créditos al mes.',
        'Desde el plan Starter tienes licencia comercial y clonación de voz instantánea.',
        'API muy completa para meter voz en tu app.',
      ],
      cons: [
        'En el plan gratis no tienes licencia comercial.',
        'La clonación de voz profesional empieza en el plan Creator.',
        'Clonar la voz de alguien sin su permiso puede ser ilegal y no es ético: no lo hagas.',
        'Los créditos se gastan rápido con textos largos.',
        'Las ofertas cambian a menudo: fíjate en el precio de después del primer mes.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Demo de texto a voz de la web oficial. Fíjate en las etiquetas entre corchetes: cambian la forma de hablar.',
      examples: [
        {
          title: 'Narración con emociones',
          kind: 'audio',
          description:
            'Fragmento de cuento narrado con voz sintética. Las etiquetas [sarcastically], [giggles] y [whispers] hacen que la voz suene sarcástica, se ría o susurre.',
          prompt:
            'In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the “burn it all down” kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed.',
          source: { label: 'Escuchar la demo en elevenlabs.io', url: 'https://elevenlabs.io/' },
        },
      ],
    },
    {
      type: 'cards',
      title: 'Ideas para tu proyecto',
      cards: [
        {
          title: 'Narrar la demo del TFG',
          badge: '🎙️ Voz',
          text: 'Escribe el guion y genera una voz en off profesional para el vídeo de presentación.',
          pills: ['Guion', 'Voz en off', 'Vídeo demo'],
        },
        {
          title: 'Accesibilidad',
          badge: '♿ Web',
          text: 'Añade lectura en voz alta a tu web o tus apuntes.',
          pills: ['Texto a voz', 'API'],
        },
        {
          title: 'Doblar un vídeo',
          badge: '🌍 Idiomas',
          text: 'Pasa un vídeo a inglés manteniendo una voz parecida a la original.',
          pills: ['Dubbing Studio', 'Subtítulos'],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'Precios normales de la web oficial en USD al mes, sin impuestos. Suele haber ofertas para el primer mes (por ejemplo, Black Friday), pero aquí ponemos el precio que pagas después.',
      plans: [
        {
          tier: 'Free',
          price: '$0',
          forWho: 'Para probar.',
          includes: ['10.000 créditos al mes', 'Texto a voz, voz a texto, efectos y música', '3 proyectos en Studio'],
          limitations: ['Sin licencia comercial'],
        },
        {
          tier: 'Starter',
          price: '$6 / mes',
          forWho: 'Proyectos pequeños o tu primer canal.',
          includes: ['30.000 créditos al mes', 'Licencia comercial', 'Clonación de voz instantánea', 'Dubbing Studio'],
        },
        {
          tier: 'Creator',
          price: '$22 / mes',
          forWho: 'Creadores de contenido.',
          includes: ['121.000 créditos al mes', 'Clonación de voz profesional', 'Comprar créditos extra'],
        },
        {
          tier: 'Pro',
          price: '$99 / mes',
          forWho: 'Uso profesional y por API.',
          includes: ['600.000 créditos al mes', 'Audio de mayor calidad (44,1 kHz PCM por API, 192 kbps)'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://elevenlabs.io/pricing', variant: 'primary' },
        { label: 'Abrir ElevenLabs', url: 'https://elevenlabs.io/', variant: 'ghost' },
      ],
    },
    {
      type: 'keyValues',
      title: 'Planes para empresas',
      items: [
        { key: 'Scale · $299 / mes', value: '1,8M de créditos, 3 puestos y 3 voces profesionales' },
        { key: 'Business · $990 / mes', value: '6M de créditos, 10 puestos y voz de baja latencia' },
        { key: 'Enterprise', value: 'Precio a medida: contacto con ventas' },
      ],
    },
  ],
};
