import { z } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import matter from "gray-matter";

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string().optional(),
});

export type ArticleData = z.infer<typeof articleSchema> & {
  readingTime: string;
};

export async function getArticles() {
  const articles = import.meta.glob("../content/articles/*.typ", {
    eager: true,
  });

  return Object.entries(articles).map(([path, module]: [string, any]) => {
    const slug = path.split("/").pop()?.replace(".typ", "") || "";
    const absolutePath = resolve("src/content/articles", `${slug}.typ`);
    const rawContent = readFileSync(absolutePath, "utf-8");
    const contentForMatter = rawContent
      .replace(/^\/\*([\s\S]*?)\*\//, "$1")
      .trim();
    const { data: rawData } = matter(contentForMatter);
    const parsedData = articleSchema.parse(rawData);

    const cleanBodyText = rawContent.replace(/^\/\*([\s\S]*?)\*\//, "").trim();
    const wordCount = cleanBodyText.split(/\s+/).filter(Boolean).length;
    const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min`;

    const data: ArticleData = {
      ...parsedData,
      readingTime,
    };

    return {
      slug,
      data,
      Content: module.default,
    };
  });
}
