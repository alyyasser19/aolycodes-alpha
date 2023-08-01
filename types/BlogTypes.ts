import { MdStringObject } from "notion-to-md/build/types";

export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  tags: Tag[];
  created: string;
};

export type ArticleContent = {
  markdown: MdStringObject;
  article: Article;
};
