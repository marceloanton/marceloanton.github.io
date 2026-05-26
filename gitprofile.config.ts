// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'marceloanton',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Repositorios Destacados',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true,
          projects: [
            'marceloanton/marceloanton.github.io',
            'marceloanton/marceloanton',
          ],
        },
      },
      manual: {
        projects: [
          'marceloanton/MRASysCont',
          'marceloanton/MRAdepartments',
          'marceloanton/mrfitos',
          'marceloanton/portfolio2',
          'marceloanton/portfolio',
          'marceloanton/TPFINAL',
        ],
      },
    },
    external: {
      header: 'Proyectos en Produccion',
      projects: [
        {
          title: 'MRAnalytics - CRM de Gestion de Cobranzas',
          description:
            'Sistema web multi-sede para rechazos de tarjeta, seguimiento de socios y recupero de deuda. KPIs en tiempo real, RBAC, auditoria, logs y notificaciones por WhatsApp/email. 18 usuarios activos.',
          imageUrl:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          link: 'https://app.manager.net.ar',
        },
        {
          title: 'MRAnalytics POS - Punto de Venta',
          description:
            'POS con stock por ubicacion, integracion Mercado Pago, turnos manana/noche, historial de caja, exportacion PDF y modulo de aptos medicos. Admin multi-sede independiente.',
          imageUrl:
            'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
          link: 'https://pos.manager.net.ar',
        },
        {
          title: 'Admin POS Multi-sede',
          description:
            'Panel administrativo centralizado para supervision operativa, configuracion de sedes y control integral del ecosistema POS.',
          imageUrl:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
          link: 'https://adminpos.manager.net.ar',
        },
        {
          title: 'Web Medico - Gestion de Aptos y Turnos',
          description:
            'Aplicacion para medicos con cola diaria, refresco automatico cada 7 segundos, adjuntos, certificados y acceso por QR. Integrada al flujo del POS.',
          imageUrl:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
          link: 'https://aptos.manager.net.ar',
        },
      ],
    },
  },
  seo: {
    title: 'Marcelo Ruben Anton | Soporte IT Senior y Desarrollo AI-Assisted',
    description:
      'Soporte IT Senior con mas de 15 anos de experiencia en infraestructura y desarrollo de sistemas internos en produccion con React, PHP y MySQL.',
    imageURL: '',
  },
  social: {
    linkedin: 'marcelo-anton',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'marceloanton.online',
    phone: '+5491158327633',
    email: 'marceloanton@outlook.com',
  },
  profile: {
    name: 'Marcelo Ruben Anton',
    headline:
      'Soporte IT Senior | Administracion de Sistemas | Desarrollo y Automatizacion con IA',
    summary:
      'Profesional IT con mas de 15 anos de experiencia en soporte tecnico corporativo, redes e infraestructura. Diseno y desarrollo sistemas internos en produccion con React, PHP y MySQL, integrando IA para resolver operaciones reales de punta a punta.',
  },
  resume: {
    fileUrl: '/CV_Marcelo_Anton.pdf',
  },
  skills: [
    'Soporte IT N1/N2 corporativo',
    'Administracion de sistemas e infraestructura',
    'Redes TCP/IP, DNS, DHCP, NAT, VPN',
    'Mikrotik: routing, firewall y VPN',
    'LAN/WiFi/cableado estructurado',
    'Microsoft 365: Exchange, Teams, SharePoint',
    'Windows Server y Linux Ubuntu (basico/intermedio)',
    'HubSpot CRM: tickets y SLA',
    'React',
    'PHP (API REST)',
    'MySQL',
    'Integracion de APIs (WhatsApp, Mercado Pago, Email)',
    'Exportacion PDF y procesamiento Excel/CSV',
    'GitHub Copilot / OpenAI Codex / Claude (AI-assisted)',
  ],
  experiences: [
    {
      company: 'SportClub',
      position: 'Soporte IT Senior y Desarrollo Interno',
      from: '2024',
      to: 'Actualidad',
      companyLink: 'https://www.sportclub.com.ar',
    },
    {
      company: 'Ing. Juan Aluiceti / ZHARAL',
      position: 'Soporte IT',
      from: '2014',
      to: '2022',
      companyLink: '',
    },
    {
      company: 'Italgas S.A.',
      position: 'Soporte Informatico Interno',
      from: '2010',
      to: '2013',
      companyLink: '',
    },
    {
      company: 'Grupo Solunet SRL',
      position: 'Lider de Soporte Tecnico',
      from: '2007',
      to: '2010',
      companyLink: '',
    },
    {
      company: 'ISFD Ndeg44',
      position: 'Ayudante de Catedra - Algoritmos I, II y III',
      from: '2022',
      to: '2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'UTN - Desarrollo Web Full Stack',
      body: 'HTML, CSS, PHP, MySQL',
      year: 'Finalizado',
      link: '',
    },
    {
      name: 'UTN - AutoCAD Proyectista',
      body: 'Diseno y documentacion tecnica',
      year: 'Finalizado',
      link: '',
    },
    {
      name: 'Image Campus - Modelado y Visualizacion 3D',
      body: 'Modelado y pipeline visual',
      year: 'Finalizado',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'ISFD Ndeg44',
      degree:
        'Tecnicatura en Analisis de Sistemas (en curso, 1 materia pendiente)',
      from: 'En curso',
      to: 'Actualidad',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  blog: {
    source: 'dev',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'executive',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['executive'],
  },
  footer: `Marcelo Ruben Anton | Soporte IT Senior | Desarrollo y Automatizacion con IA`,
  enablePWA: true,
};

export default CONFIG;
