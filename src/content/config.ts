// 1. ユーティリティを`astro:content`からインポート
import { defineCollection, z } from "astro:content";

const tags = [z.literal("ひとりごと"), z.literal("Astro"), z.literal("React")] as const;

// 2. 各コレクションに`type`と`schema`を定義
const blogCollection = defineCollection({
  type: "content", // v2.5.0以降
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.union(tags)).min(1, "タグを1つ以上指定してください"),
    published: z.boolean(),
    publishedDate: z.string(),
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
  blog: blogCollection,
};
