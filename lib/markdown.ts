import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { slugify } from "./slug";

export { slugify };

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  featured?: boolean;
  excerpt: string;
  contentHtml: string;
  rawMarkdown: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticles(): ArticleItem[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);
      const contentHtml = marked.parse(matterResult.content) as string;

      return {
        id: matterResult.data.id || id,
        title: matterResult.data.title || "",
        category: matterResult.data.category || "General",
        date: matterResult.data.date || "",
        readTime: matterResult.data.readTime || "5 min read",
        author: matterResult.data.author || "Arya Naufal",
        authorRole: matterResult.data.authorRole || "Developer",
        authorAvatar: matterResult.data.authorAvatar || "",
        image: matterResult.data.image || "",
        featured: Boolean(matterResult.data.featured),
        excerpt: matterResult.data.excerpt || "",
        contentHtml,
        rawMarkdown: matterResult.content,
      };
    });

  // Sort articles numerically/alphabetically by id (html-01, html-02...)
  return allArticlesData.sort((a, b) => a.id.localeCompare(b.id));
}

export function getArticleById(id: string): ArticleItem | null {
  const articles = getAllArticles();
  const found = articles.find((a) => a.id === id);
  return found || null;
}
