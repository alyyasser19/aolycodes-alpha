import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { Article, ArticleContent } from "../types/BlogTypes";

import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI()

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPublishedArticles(): Promise<Article[]> {
    const databaseId = process.env.BLOG_ID ?? "";

    const response = await this.client.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    const articles: Article[] = response.results.map((page) => {
      return NotionService.convertToArticle(page);
    });

    return articles;
  }

  private static convertToArticle(page: any): Article {
    let cover = page.cover;

    switch (cover.type) {
      case "file":
        cover = cover.file;
        break;
      case "external":
        cover = cover.external.url;
        break;
      default:
        cover = "https://placehold.co/600x400";
        break;
    }

    return {
      id: page.id,
      cover: cover,
      title: page.properties.Title.title[0].plain_text,
      tags: page.properties.Tags.multi_select,
      description: page.properties.Description.rich_text[0].plain_text,
      slug: page.properties.Slug.formula.string,
      created: page.properties.Created.created_time,
    };
  }

  public async getArticleContent(slug: string): Promise<ArticleContent> {
    const databaseId = process.env.BLOG_ID ?? "";
    const response = await this.client.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    const page = response.results[0];

    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    const markdown = this.n2m.toMarkdownString(mdBlocks);
    const article = NotionService.convertToArticle(page);

    return {
        markdown: markdown,
        article: article,
    };


  }
}
