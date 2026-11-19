import { AiProfile } from '../ai-model';

export const IDEOGRAM: AiProfile = {
  slug: 'ideogram',
  name: 'Ideogram',
  category: 'Imagen',
  summary: 'Imágenes con texto legible: logos, pósters y carteles.',
  title: 'Ideogram',
  subtitle:
    'Generador y editor de imágenes famoso por escribir texto bien dentro de la imagen. Perfecto para pósters, logos, miniaturas y cartelería. Además, sus modelos 4.0 son abiertos.',
  chips: ['Texto en imagen', 'Logos', 'Pósters', 'Edición'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'light',
    accent: '#e11d48',
    accent2: '#f59e0b',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Escribe texto legible dentro de la imagen (lo que a otras IAs se les da fatal).',
        'Edición muy precisa con Ideogram 4.6: cambia colores o estilos sin romper el resto.',
        'Imágenes de hasta 4K.',
        'Los pesos de Ideogram 4.0 están disponibles para usarlo en local.',
        'Puedes usar lo que generes, también con fines comerciales.',
      ],
      cons: [
        'En el plan gratis todo lo que generas es público.',
        'Los créditos gratis son semanales y la cantidad puede variar.',
        'Si te registras con email y contraseña, no recibes créditos gratis (sí con Google, Apple o Microsoft).',
        'Eres responsable de no infringir derechos de terceros (marcas, personas…).',
        'Para fotos muy realistas, otras herramientas pueden ir mejor.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Ejemplo de la página oficial de Ideogram 4.0, que usa prompts estructurados en JSON con cajas de posición.',
      examples: [
        {
          title: 'Póster con mucho texto',
          kind: 'imagen',
          description:
            'Póster de cine generado a partir de un prompt en JSON: cada bloque de texto tiene su caja (posición) y su descripción. Este es el texto de uno de esos bloques; en la página puedes ver el JSON completo.',
          prompt:
            'Small credit block in the top right corner. Centered alignment, uppercase serif font in a dark grey or black color.',
          promptExcerpt: true,
          source: { label: 'Ver el ejemplo en ideogram.ai', url: 'https://ideogram.ai/models/4.0/' },
        },
      ],
    },
    {
      type: 'keyValues',
      title: 'Modelos actuales',
      items: [
        { key: 'Ideogram 4.6', value: 'Lo más nuevo: edición precisa, edición tras edición, hasta 4K' },
        { key: 'Ideogram 4.5', value: 'Personajes y retratos coherentes a partir de imágenes de referencia' },
        { key: 'Ideogram 4.0', value: 'Modelo abierto: puedes descargarlo y personalizarlo (según su licencia)' },
        { key: 'Ideogram 3.0', value: 'Sigue disponible, también en la API de personajes' },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'Tiene plan gratis y tres suscripciones (Plus, Pro y Team), más créditos de pago por uso. Su página de precios bloquea las comprobaciones automáticas, así que consulta los importes allí.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 €',
          forWho: 'Para probarlo.',
          includes: ['Créditos semanales (si entras con Google, Apple o Microsoft)', 'Todos los modelos de Ideogram'],
          limitations: ['Todo lo que generas es público'],
        },
        { tier: 'Plus', price: 'Consultar web oficial', forWho: 'Uso personal frecuente.' },
        { tier: 'Pro', price: 'Consultar web oficial', forWho: 'Uso profesional.' },
        { tier: 'Team', price: 'Consultar web oficial', forWho: 'Equipos de diseño o marketing.' },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://ideogram.ai/pricing', variant: 'primary' },
        { label: 'Abrir Ideogram', url: 'https://ideogram.ai/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Pon el texto que quieres que salga entre comillas.',
      prompts: [
        {
          title: 'Póster de evento',
          badge: '🪧 Póster',
          prompt:
            'Póster vertical para una hackathon de estudiantes, estilo tipográfico suizo, fondo azul noche con detalles naranjas. Texto grande: "HACK DAW 2027". Texto pequeño abajo: "Valencia · 15 de marzo".',
        },
        {
          title: 'Logo sencillo',
          badge: '🔤 Logo',
          prompt:
            'Logo minimalista para una app llamada "IA Hub": icono de un nodo conectado a tres puntos, línea fina, colores azul y violeta, fondo blanco, sin degradados.',
        },
        {
          title: 'Miniatura de YouTube',
          badge: '🎬 Miniatura',
          prompt:
            'Miniatura 16:9 de YouTube con un portátil y código en pantalla, mucho contraste y texto grande en amarillo: "ANGULAR EN 10 MIN".',
        },
      ],
    },
  ],
};
