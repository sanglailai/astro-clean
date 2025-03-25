import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDatetime: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
