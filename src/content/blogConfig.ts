import { defineCollection, z } from "astro:content";

const tags = [z.literal("ひとりごと"), z.literal("Astro"), z.literal("React")] as const;

export const blogTags = tags.map((tag) => tag._def.value);

export const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.union(tags)).min(1, "タグを1つ以上指定してください"),
    published: z.boolean(),
    publishedDate: z.string(),
  }),
});
