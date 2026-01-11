import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type AppCard = {
  name: string;
  badge: string;
  why: string;
  examples: string[];
};

type ResourceCard = {
  title: string;
  badge: string;
  links: { label: string; url: string }[];
};

type AccessCard = {
  title: string;
  badge: string;
  text: string;
  bullets: string[];
};

@Component({
  selector: 'app-ai-copilot',
  standalone: false,
  templateUrl: './ai-copilot.html',
  styleUrl: './ai-copilot.scss',
})
export class AiCopilot {
  title = 'Microsoft Copilot (365)';
  subtitle =
    'IA integrada en Word/Excel/PowerPoint/Outlook/Teams. Su punto fuerte no es “ser el más listo”, sino estar dentro del flujo de trabajo y ayudarte con documentos, mails, tablas y reuniones.';

  pros: string[] = [
    'Integración brutal con Microsoft 365: Word, Excel, PowerPoint, Outlook, Teams.',
    'Ideal para cosas de oficina: informes, emails, resúmenes y presentaciones.',
    'Convierte texto → slide deck / documento con estructura muy rápido.',
    'Para reuniones: resumir hilos, decisiones, tareas y próximos pasos.',
    'Bueno para “trabajo con contexto” (archivos y entorno de M365, si tu org lo permite).'
  ];

  cons: string[] = [
    'No siempre está disponible: depende de licencia/empresa y configuración.',
    'Si no le das contexto (documento, tabla, mail), el resultado se queda genérico.',
    'Excel “potente” requiere prompts concretos (campos, columnas, objetivo).',
    'Como cualquier IA: puede equivocarse → hay que revisar antes de enviar.',
    'En empresas, a veces hay políticas que limitan qué puede leer/usar.'
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i],
    }));
  }

  apps: AppCard[] = [
    {
      name: 'Word',
      badge: '📝 Docs',
      why: 'Te monta documentos con estructura, tono y resumen. Perfecto para memorias/TFG.',
      examples: ['Indice + secciones', 'Resumen ejecutivo', 'Reescritura formal', 'Corrección estilo']
    },
    {
      name: 'PowerPoint',
      badge: '🎯 Slides',
      why: 'Convierte una idea o un doc en una presentación presentable en minutos.',
      examples: ['Guion + slides', 'Resumen de documento', 'Puntos clave', 'Storytelling']
    },
    {
      name: 'Excel',
      badge: '📊 Data',
      why: 'Te ayuda a explicar datos, crear fórmulas y sacar insights (si lo guías bien).',
      examples: ['Fórmulas', 'Resumen de tabla', 'Insights', 'Ideas de gráficos']
    },
    {
      name: 'Outlook',
      badge: '✉️ Mail',
      why: 'Redacta emails y te resume hilos largos con tono profesional.',
      examples: ['Respuesta con tono', 'Resumen de hilo', 'Follow-up', 'Email “corto y claro”']
    },
    {
      name: 'Teams',
      badge: '🎧 Reuniones',
      why: 'Resúmenes de reuniones, tareas, acuerdos y “quién hace qué”.',
      examples: ['Minuta', 'To-dos', 'Decisiones', 'Próximos pasos']
    },
    {
      name: 'OneNote / Loop',
      badge: '🧠 Notas',
      why: 'Organización de notas y tareas en plan “proyecto”.',
      examples: ['Checklist', 'Plan de trabajo', 'Resumen de notas', 'Plantillas']
    }
  ];
  resources: ResourceCard[] = [
    {
      title: 'Docs oficiales (lo que sí funciona)',
      badge: '📘 Microsoft',
      links: [
        { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/' },
        { label: 'Copilot (Microsoft)', url: 'https://www.microsoft.com/copilot' }
      ]
    },
    {
      title: 'Prompts y buenas prácticas',
      badge: '🧩 Workflow',
      links: [
        { label: 'Prompting (Microsoft Learn)', url: 'https://learn.microsoft.com/' },
        { label: 'M365 (portal Microsoft)', url: 'https://www.microsoft.com/microsoft-365' }
      ]
    }
  ];

  access: AccessCard[] = [
    {
      title: 'Copilot dentro de Microsoft 365',
      badge: '🏢 Empresa / centro',
      text: 'Normalmente lo activa tu organización: depende de licencia y permisos.',
      bullets: [
        'Pregunta a IT o al admin de Microsoft 365',
        'Comprueba si aparece en Word/Excel/PowerPoint',
        'Ojo: puede tener límites por políticas'
      ]
    },
    {
      title: 'Copilot “fuera” de M365',
      badge: '🌍 Alternativas',
      text: 'Si no lo tienes en 365, puedes usar Copilot web/Windows/Edge según tu entorno.',
      bullets: [
        'Útil para dudas rápidas y borradores',
        'No tiene el mismo contexto de tus documentos de M365',
        'Mejor para ideas que para “trabajo con archivos”'
      ]
    }
  ];

  quickPrompts = [
    {
       title: 'Word (documento)',
       prompt:
        'Necesito terminar la documentación de un caso de uso: “Buscar tiendas de consumo en Valencia”. ' +
        'Redáctalo en formato profesional y claro con: objetivo, actores, precondiciones, postcondiciones, flujo principal, flujos alternativos, reglas de negocio, datos de entrada/salida y criterios de aceptación. ' +
        'Incluye también un apartado de “excepciones” y una mini tabla con requisitos (ID, descripción, prioridad).'
    },
    {
      title: 'PowerPoint (slides)',
      prompt: 'Convierte este texto de como configurar el angular en Santalucia en una presentación en diapositivas: introduccion, extensiones a usar, que programas internos hay que descargarse y como inicializarlo una vez entras a la aplicación.'
    },
    {
      title: 'Excel',
      prompt: 'En esta tabla: quiero que me dividas estos productos en los posibles alérgenos que puedes producir'
    }
  ];
}
