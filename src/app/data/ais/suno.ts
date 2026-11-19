import { AiProfile } from '../ai-model';

export const SUNO: AiProfile = {
  slug: 'suno',
  name: 'Suno',
  category: 'Audio',
  summary: 'Crea canciones completas a partir de una idea.',
  title: 'Suno',
  subtitle:
    'Describe una canción (estilo, tema, letra) y Suno te la crea entera, con voz e instrumentos. Con Suno Studio puedes editarla como en un programa de música.',
  chips: ['Música', 'Canciones', 'Letras', 'Suno Studio'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#db2777',
    accent2: '#f59e0b',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Canciones completas en segundos, con letra, voz e instrumentos.',
        'Plan gratis con 50 créditos al día.',
        'Puedes grabar o subir tu voz y crear con ella (en los planes de pago).',
        'Separación de pistas (stems) para remezclar.',
        'Suno Studio: MIDI, efectos y automatizaciones para afinar el resultado.',
      ],
      cons: [
        'En el plan gratis no hay derechos comerciales ni descargas mensuales.',
        'Las canciones a veces suenan “genéricas” si el prompt es vago.',
        'Las letras en español a veces fallan en acentos o rimas: revísalas.',
        'Imitar a artistas reales puede dar problemas legales.',
        'Los mejores modelos solo están en los planes de pago.',
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro: 'Precios de la web oficial en USD al mes. Pagando el año entero ahorras hasta un 20 %.',
      plans: [
        {
          tier: 'Free',
          price: '$0',
          forWho: 'Para jugar y probar ideas.',
          includes: ['50 créditos al día', 'Modelos gratuitos', 'Subir hasta 8 minutos de audio'],
          limitations: ['Sin descargas mensuales', 'Sin derechos comerciales', 'Cola compartida'],
        },
        {
          tier: 'Pro',
          price: '$10 / mes ($8 en pago anual)',
          forWho: 'Si vas a usar tus canciones en serio.',
          includes: [
            'Los mejores modelos',
            '2.500 créditos y 20 descargas al mes',
            'Derechos de uso comercial',
            'Crear con tu propia voz',
          ],
        },
        {
          tier: 'Premier',
          price: '$30 / mes ($24 en pago anual)',
          forWho: 'Control creativo total.',
          includes: ['Suno Studio (MIDI, efectos, automatización)', '10.000 créditos y 60 descargas al mes', 'Separación de pistas avanzada'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://suno.com/pricing', variant: 'primary' },
        { label: 'Abrir Suno', url: 'https://suno.com/', variant: 'ghost' },
      ],
    },
    {
      type: 'keyValues',
      title: 'Cómo escribir un buen prompt musical',
      intro: 'Cuanto más concreto, mejor. Piensa en estos ingredientes:',
      items: [
        { key: 'Estilo', value: 'Género y época: “pop rock de los 2000”, “lo-fi hip hop”' },
        { key: 'Ambiente', value: 'Emoción: alegre, nostálgico, épico, tranquilo' },
        { key: 'Voz', value: 'Tipo de voz y en qué idioma: “voz femenina suave, en español”' },
        { key: 'Instrumentos', value: 'Los protagonistas: guitarra acústica, sintes, batería electrónica' },
        { key: 'Letra', value: 'Escríbela tú o da el tema y la estructura (estrofa, estribillo…)' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      prompts: [
        {
          title: 'Himno de clase',
          badge: '🎉',
          prompt:
            'Canción pop-punk animada en español de España sobre terminar DAW y entregar el TFG a última hora. Estribillo pegadizo, voz masculina enérgica, guitarras eléctricas.',
        },
        {
          title: 'Música de fondo',
          badge: '🎧',
          prompt: 'Lo-fi hip hop instrumental, tranquilo, para estudiar, con piano suave, vinilo y lluvia de fondo. Sin voz.',
        },
        {
          title: 'Jingle para tu app',
          badge: '📣',
          prompt:
            'Jingle de 15 segundos, alegre y moderno, para una app llamada "IA Hub". Voz femenina que canta el nombre al final.',
        },
      ],
    },
  ],
};
