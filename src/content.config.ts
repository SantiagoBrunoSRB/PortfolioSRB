import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de proyectos gestionada por Keystatic
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional().or(z.literal('')),
    role: z.string(),
    year: z.number(),
    summary: z.string(),
    stack: z.array(z.string()),
    repoUrl: z.string().optional().or(z.literal('')),
    demoUrl: z.string().optional().or(z.literal('')),
    coverImage: z.string().optional().or(z.literal('')),
  }),
});

// Singleton de la página Home para Español e Inglés
const home = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/home' }),
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    aboutText: z.string(),
    availabilityBadge: z.string(),
  }),
});

// Singleton de configuración y SEO global
const settings = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/settings' }),
  schema: z.object({
    contactEmail: z.string(),
    socialLinks: z.object({
      linkedIn: z.string(),
      gitHub: z.string(),
    }),
    seoDefaultsEs: z.object({
      title: z.string(),
      description: z.string(),
    }),
    seoDefaultsEn: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const collections = {
  projects,
  home,
  settings,
};
