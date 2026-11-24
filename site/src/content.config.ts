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
    // Newspaper / magazine / broadcast coverage. Rendered as its own
    // "In the press" section, separate from the plain externalLinks list.
    press: z
      .array(
        z.object({
          outlet: z.string(),
          title: z.string(),
          url: z.string().url(),
          date: z.string().optional(),
          lang: z.string().optional(),
        })
      )
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

// Long-form posts with interactive figures (see src/components/post/).
// Drafts render only under `npm run dev`, at /sandbox/<slug>/; a production
// build skips them entirely, so nothing goes live until `draft` is false.
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.enum(['post', 'proposal', 'specimen']).default('post'),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, publications, fabacademy, posts };
