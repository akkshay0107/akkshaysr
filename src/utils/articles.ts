import { z } from 'astro:content';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string().optional(),
});

export type ArticleData = z.infer<typeof articleSchema>;

export async function getArticles() {
  const articles = import.meta.glob('../content/articles/*.typ', { eager: true });
  
  return Object.entries(articles).map(([path, module]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.typ', '') || '';
    const absolutePath = resolve('src/content/articles', `${slug}.typ`);
    const rawContent = readFileSync(absolutePath, 'utf-8');
    // Strip Typst block comments if they wrap the frontmatter
    const contentForMatter = rawContent.replace(/^\/\*([\s\S]*?)\*\//, '$1').trim();
    const { data: rawData } = matter(contentForMatter);
    const data = articleSchema.parse(rawData);
    
    return {
      slug,
      data,
      Content: module.default,
    };
  });
}
