import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.union([z.number(), z.string()]),
    role: z.string().optional(),
    client: z.string().optional(),
    category: z.enum([
      'hardware',
      'fabrication',
      'software',
      'research',
      'art',
      'community',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    proBono: z.boolean().default(false),
    order: z.number().default(0),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    oneLiner: z.string(),
    externalLinks: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    relatedPublication: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    venueShort: z.string().optional(),
    location: z.string().optional(),
    year: z.number(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    status: z.enum(['published', 'in-preparation', 'thesis']).default('published'),
    order: z.number().default(0),
    relatedProject: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const fabacademy = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/fabacademy' }),
  schema: z.object({
    title: z.string(),
    week: z.number(),
    assignment: z.string(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, publications, fabacademy };
