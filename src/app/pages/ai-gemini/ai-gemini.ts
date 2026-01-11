import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type Plan = {
  tier: 'Gratis' | 'Pro' | 'Ultra';
  priceText: string;
  forWho: string;
  notes: string[];
};

type FeatureCard = {
  title: string;
  badge: string;
  desc: string;
  bullets: string[];
  links?: { label: string; url: string }[];
};

type PromptCard = {
  title: string;
  badge: string;
  prompt: string;
};

@Component({
  selector: 'app-ai-gemini',
  standalone: false,
  templateUrl: './ai-gemini.html',
  styleUrl: './ai-gemini.scss',
})
export class AiGemini {
  title = 'Gemini';
  subtitle =
    'La IA de Google: muy conectada al ecosistema (Drive/Docs/Gmail), buena para productividad y capaz de generar imágenes. Si usas Google a diario, aquí brilla.';

  chips = ['Google', 'Cloud', 'Imágenes', 'Productividad'];

  pros: string[] = [
    'Muy top si ya usas herramientas en Google como Drive/Docs/Gmail/Workspace.',
    'Buen “modo curro”: resúmenes, organización, tareas y docs.',
    'Generación de imágenes (según plan/función disponible).',
    'Ideal para investigar y aterrizar ideas en entregables.',
    'Buen combo para DAW: documentación + planificación + contenido.',
  ];

  cons: string[] = [
    'No es “verdad automática”: si son datos críticos, verifica.',
    'Funciones potentes dependen de plan/país (y cambian).',
    'A veces se nota más “corporativo” en el tono.',
    'Para dev hard (refactors complejos), depende del caso.',
    'Precio: Pro/Ultra pueden no compensar si lo usas poco.',
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i],
    }));
  }

  features: FeatureCard[] = [
    {
      title: 'Cloud + Workspace vibes',
      badge: '☁️ Drive/Docs',
      desc: 'Cuando tu trabajo vive en Google, Gemini es literal “pegarlo” a tus archivos.',
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
      desc: 'Puede generar imágenes (Imagen) y también ayudarte a analizar imágenes en Drive.',
      bullets: [
        'Útil para mockups, portadas, fondos, recursos visuales para libros, tiktoks.',
        'Puedes pedir variantes: “más minimal”, “más corporate”, “más color”.',
        'Ojo: revisa licencias/uso final si lo vas a publicar.',
      ],
      links: [
        { label: 'Imagen (docs)', url: 'https://ai.google.dev/gemini-api/docs/imagen' },
      ],
    },
    {
      title: 'Precio (sí importa aquí)',
      badge: '💸 Planes',
      desc: 'Si lo usas mucho y a diario, Pro puede compensar. Si es puntual, gratis suele valer.',
      bullets: [
        'Pro: más acceso y funciones (según disponibilidad).',
        'Ultra: para uso intensivo (muy caro si no lo amortizas).',
      ],
      links: [
        { label: 'Planes oficiales', url: 'https://gemini.google/subscriptions/' },
      ],
    },
  ];

  plans: Plan[] = [
    {
      tier: 'Gratis',
      priceText: '$0',
      forWho: 'Para empezar, tareas normales y probar el flujo.',
      notes: ['Perfecto si lo usas “a ratos”', 'Te sirve para doc + ideas + estudio'],
    },
    {
      tier: 'Pro',
      priceText: '$19.99 / mes',
      forWho: 'Si lo usas bastante y quieres más acceso/estabilidad.',
      notes: ['Más límites y features', 'Compensa si lo abres casi a diario'],
    },
    {
      tier: 'Ultra',
      priceText: '$249.99 / mes',
      forWho: 'Uso intensivo pro (si no lo amortizas, duele).',
      notes: ['Muy caro para un TFG', 'Solo si lo exprimes heavy'],
    },
  ];

  pricingNote =
    'Precios orientativos (USD) y pueden variar por país/impuestos. Revisa el enlace oficial para tu región.';
    prompts = [
    {
      title: 'Drive (organización + resumen)',
      badge: '☁️',
      prompt:
        'Tengo una carpeta con PDFs y notas. Resúmeme los 5 puntos clave, saca una lista de tareas accionables y ordénalas por prioridad (alta/media/baja).'
    },
    {
      title: 'Docs (escribir rápido y bien)',
      badge: '📝',
      prompt:
        'Escríbeme un texto claro y corto (máx 200 palabras) para presentar una idea de proyecto. Tono profesional, sin humo, con estructura: problema → solución → beneficios.'
    },
    {
      title: 'Imagen (mini branding)',
      badge: '🖼️',
      prompt:
        'Genera una imagen moderna para portada: fondo degradado azul-violeta con estilo tech, sin texto, limpio, y con un toque futurista. Formato 16:9, alta resolución.'
    }
  ];
}
