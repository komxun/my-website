import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content collections for the portfolio.
 *
 * To add new content, simply drop a Markdown (.md / .mdx) file into the
 * matching folder under `src/content/<collection>/` and fill in the
 * frontmatter fields described by each schema below. The listing and detail
 * pages pick it up automatically — no code changes required.
 */

const tags = z.array(z.string()).default([]);

// Shared image object used for cover images.
const cover = z
  .object({
    src: z.string(),
    alt: z.string().default(""),
  })
  .optional();

/** Research areas / topics. */
const research = defineCollection({
  loader: glob({ base: "./src/content/research", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    area: z.string().default("General"),
    date: z.coerce.date(),
    status: z.enum(["ongoing", "completed", "exploratory"]).default("ongoing"),
    tags,
    cover,
    // Publication details (all optional).
    venue: z.string().optional(), // journal / conference, e.g. "IEEE Access, 2025"
    authors: z.array(z.string()).default([]),
    paperUrl: z.string().url().optional(), // link to the published paper / DOI
    pdf: z.string().optional(), // path to a PDF, e.g. "/papers/my-paper.pdf"
    doi: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

/** Engineering projects. */
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default("Engineering"),
    date: z.coerce.date(),
    status: z.enum(["active", "completed", "archived"]).default("active"),
    tags,
    cover,
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

/** Software / code — typically GitHub-backed. */
const software = defineCollection({
  loader: glob({ base: "./src/content/software", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.string().default("Python"),
    date: z.coerce.date(),
    tags,
    github: z.string().url(),
    demo: z.string().url().optional(),
    docs: z.string().url().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

/** Knowledge hub / blog — technical writing. */
const knowledge = defineCollection({
  loader: glob({ base: "./src/content/knowledge", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default("Komsun Tamanakijprasart"),
    category: z.string().default("Article"),
    tags,
    cover,
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** YouTube videos. */
const videos = defineCollection({
  loader: glob({ base: "./src/content/videos", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // The ID from the YouTube URL, e.g. https://youtu.be/<youtubeId>
    youtubeId: z.string(),
    date: z.coerce.date(),
    category: z.string().default("Video"),
    tags,
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { research, projects, software, knowledge, videos };
