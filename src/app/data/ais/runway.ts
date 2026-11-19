import { AiProfile } from '../ai-model';

export const RUNWAY: AiProfile = {
  slug: 'runway',
  name: 'Runway',
  category: 'Vídeo',
  summary: 'Estudio de vídeo con IA: genera, edita y anima.',
  title: 'Runway',
  subtitle:
    'Un estudio creativo de vídeo e imagen con IA. Tiene sus propios modelos (Gen-4.5, Aleph 2.0, Act-Two) y además te deja usar otros como Kling o Nano Banana Pro desde el mismo sitio.',
  chips: ['Vídeo', 'Gen-4.5', 'Edición', 'Créditos'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Todo en un sitio: generar vídeo, imagen y audio, editar y mejorar la calidad.',
        'Modelos propios muy potentes (Gen-4.5) y también de terceros (Kling 4.0, Seedance 2.5, Nano Banana Pro…).',
        'Workflows para encadenar pasos y automatizar.',
        'Plan gratis con 125 créditos que no caducan.',
        'Los planes de pago quitan la marca de agua.',
      ],
      cons: [
        'Los créditos vuelan: Gen-4.5 gasta 12 créditos por segundo de vídeo.',
        'En gratis, los créditos son de una sola vez (no se recargan cada mes).',
        'Para resultados buenos hay que iterar mucho (y eso cuesta créditos).',
        'Los precios están en USD y sin impuestos.',
        'Las funciones más nuevas suelen llegar solo al plan más caro.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Resultados publicados en la web oficial, con el prompt que se usó tal y como lo publican (normalmente en inglés). El resultado no se copia aquí: pulsa el enlace para verlo.',
      examples: [
        {
          title: 'El viaje del barco de papel',
          kind: 'vídeo',
          description:
            'Plano continuo de Gen-4.5: el agua de un grifo llena un cubo y un barco de papel viaja por el reguero hasta dentro de una casa.',
          prompt:
            'A continuous shot with no scene cut. We see water coming out of a garden faucet filling up a rusty metal bucket. Right below the bucket is a perfect folded white paper boat with a small yellow flower. The boat rides down a small river of water and enters a house, ending the journey in front of a broken TV.',
          source: { label: 'Ver el vídeo en runway.com', url: 'https://runway.com/research/introducing-runway-gen-4.5' },
        },
        {
          title: 'Oso polar en un remolque',
          kind: 'vídeo',
          description:
            'Gen-4.5 coloca cada objeto donde dice el prompt y mueve la cámara para la sorpresa final.',
          prompt:
            'A polar bear sits huddled inside a clear frozen ice block, strapped securely to a small silver utility trailer. The camera follows the trailer pulled by a cord at eye level, then pans to the right to reveal a goat pulling the trailer.',
          source: { label: 'Ver el vídeo en runway.com', url: 'https://runway.com/research/introducing-runway-gen-4.5' },
        },
        {
          title: 'Torre de objetos en equilibrio',
          kind: 'vídeo',
          description:
            'Prueba de física: objetos apilados que se tambalean de forma realista.',
          prompt:
            'An open watermelon, a chrome colander, a long skinny cactus in a green ceramic pot and a parrot balancing on top of each other, wobbling and shaking.',
          source: { label: 'Ver el vídeo en runway.com', url: 'https://runway.com/research/introducing-runway-gen-4.5' },
        },
      ],
    },
    {
      type: 'cards',
      title: 'Modelos y herramientas clave',
      cards: [
        {
          title: 'Gen-4.5',
          badge: '🎬 Vídeo',
          text: 'Su modelo estrella de generación de vídeo a partir de texto o imagen.',
          pills: ['Texto a vídeo', 'Imagen a vídeo'],
        },
        {
          title: 'Aleph 2.0',
          badge: '✂️ Edición',
          text: 'Edita vídeos que ya tienes: cambiar elementos, estilo o ángulo.',
          pills: ['Editar vídeo', 'Restyle'],
        },
        {
          title: 'Act-Two',
          badge: '🎭 Animación',
          text: 'Anima personajes a partir de una interpretación grabada.',
          pills: ['Personajes', 'Expresiones'],
        },
        {
          title: 'Workflows',
          badge: '🔗 Flujos',
          text: 'Encadena modelos y pasos para producir en serie.',
          pills: ['Automatizar', 'Plantillas'],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro: 'Precios de la web oficial en USD al mes, sin impuestos. Pagando el año entero sale un 20 % más barato.',
      plans: [
        {
          tier: 'Free',
          price: '$0',
          forWho: 'Para probar las herramientas.',
          includes: ['125 créditos (una sola vez)', 'Una selección de modelos', '5 GB de almacenamiento'],
        },
        {
          tier: 'Standard',
          price: '$15 / mes ($12 en pago anual)',
          forWho: 'Para quien empieza a crear vídeo con IA.',
          includes: ['625 créditos al mes (unos 52 s de Gen-4.5)', 'Todos los modelos de vídeo e imagen', 'Sin marca de agua', '20 GB'],
        },
        {
          tier: 'Pro',
          price: '$35 / mes ($28 en pago anual)',
          forWho: 'Si creas contenido a menudo.',
          includes: ['2.250 créditos al mes (unos 187 s de Gen-4.5)', 'Recargar créditos cuando quieras', 'Reescalado a 4K ilimitado', '100 GB'],
        },
        {
          tier: 'Max',
          price: '$95 / mes ($76 en pago anual)',
          forWho: 'Producción seria o profesional.',
          includes: ['9.500 créditos al mes (unos 791 s de Gen-4.5)', 'Acceso anticipado a modelos nuevos', '20 generaciones en paralelo', '500 GB'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://runway.com/pricing', variant: 'primary' },
        { label: 'Abrir Runway', url: 'https://runway.com/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'En vídeo, describe el plano como lo haría un director: cámara, acción y luz.',
      prompts: [
        {
          title: 'Plano de presentación',
          badge: '🎬',
          prompt:
            'Travelling lento hacia delante por un pasillo de oficina moderna con luz natural, una persona se gira y sonríe a cámara, estilo anuncio corporativo, 5 segundos.',
        },
        {
          title: 'Animar una imagen',
          badge: '🖼️→🎬',
          prompt:
            '(Con una imagen de referencia) Las nubes se mueven despacio, el agua del lago refleja la luz y la cámara hace un zoom muy suave hacia la montaña.',
        },
        {
          title: 'Vídeo para redes',
          badge: '📱',
          prompt:
            'Vídeo vertical 9:16: primer plano de manos montando un ordenador, cortes rápidos, luz de neón azul y morada, ritmo dinámico, 6 segundos.',
        },
      ],
    },
  ],
};
