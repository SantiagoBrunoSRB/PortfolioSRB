import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects_es: collection({
      label: 'Proyectos (ES)',
      slugField: 'title',
      path: 'src/content/projects/es/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        client: fields.text({ label: 'Cliente / Contexto' }),
        role: fields.text({ label: 'Rol técnico' }),
        year: fields.number({ label: 'Año' }),
        summary: fields.text({ label: 'Resumen corto (para grids)', multiline: true }),
        stack: fields.array(fields.text({ label: 'Tecnología' }), {
          label: 'Stack de tecnologías (tags)',
          itemLabel: (item) => item,
        }),
        repoUrl: fields.text({ label: 'URL del Repositorio (GitHub)' }),
        demoUrl: fields.text({ label: 'URL de la Demo' }),
        coverImage: fields.image({
          label: 'Imagen de portada',
          directory: 'public/assets/projects',
          publicPath: '/assets/projects',
        }),
        content: fields.markdoc({
          label: 'Contenido del Case Study (Markdoc)',
        }),
      },
    }),
    projects_en: collection({
      label: 'Projects (EN)',
      slugField: 'title',
      path: 'src/content/projects/en/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        client: fields.text({ label: 'Client / Context' }),
        role: fields.text({ label: 'Technical Role' }),
        year: fields.number({ label: 'Year' }),
        summary: fields.text({ label: 'Short summary (for grids)', multiline: true }),
        stack: fields.array(fields.text({ label: 'Technology' }), {
          label: 'Tech Stack (tags)',
          itemLabel: (item) => item,
        }),
        repoUrl: fields.text({ label: 'Repository URL (GitHub)' }),
        demoUrl: fields.text({ label: 'Demo URL' }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/assets/projects',
          publicPath: '/assets/projects',
        }),
        content: fields.markdoc({
          label: 'Case Study Content (Markdoc)',
        }),
      },
    }),
  },
  singletons: {
    home_es: singleton({
      label: 'Inicio (ES)',
      path: 'src/content/home/es',
      schema: {
        heroTitle: fields.text({ label: 'Título Hero' }),
        heroSubtitle: fields.text({ label: 'Subtítulo Hero (Propuesta de valor)', multiline: true }),
        aboutText: fields.text({ label: 'Sobre Mí (Párrafos)', multiline: true }),
        availabilityBadge: fields.text({ label: 'Badge de disponibilidad' }),
      },
    }),
    home_en: singleton({
      label: 'Home (EN)',
      path: 'src/content/home/en',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle (Value proposition)', multiline: true }),
        aboutText: fields.text({ label: 'About Me (Paragraphs)', multiline: true }),
        availabilityBadge: fields.text({ label: 'Availability Badge' }),
      },
    }),
    settings: singleton({
      label: 'Configuración General',
      path: 'src/content/settings/global',
      schema: {
        contactEmail: fields.text({ label: 'Email de Contacto' }),
        socialLinks: fields.object({
          linkedIn: fields.text({ label: 'URL de LinkedIn' }),
          gitHub: fields.text({ label: 'URL de GitHub' }),
        }, { label: 'Enlaces de Redes Sociales' }),
        seoDefaultsEs: fields.object({
          title: fields.text({ label: 'Título SEO por defecto (ES)' }),
          description: fields.text({ label: 'Meta Descripción por defecto (ES)', multiline: true }),
        }, { label: 'SEO por defecto (Español)' }),
        seoDefaultsEn: fields.object({
          title: fields.text({ label: 'SEO Default Title (EN)' }),
          description: fields.text({ label: 'SEO Default Description (EN)', multiline: true }),
        }, { label: 'SEO por defecto (Inglés)' }),
      },
    }),
  },
});
