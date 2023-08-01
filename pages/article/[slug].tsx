import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./blog-article.module.css";
import Header from "../../components/Header";
import RecommendedSection from "../../components/RecomendedSection";
import MinRead from "../../components/MinRead";
import NotionService from "../../services/notion-service";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const notionService = new NotionService();

  const articles = await notionService.getPublishedArticles();

  const paths = articles.map((article) => {
    return `/article/${article.slug}`;
  });

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  //@ts-ignore
  const article = await notionService.getArticleContent(context.params?.slug);

  const articles = await notionService.getPublishedArticles();
  console.log(articles);
  return {
    props: {
      article,
      articles,
    },
  };
};

const BlogArticle: NextPage = ({
  article,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const onaolyGuieLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);
  console.log(article);
  return (
    <>
      <Head>
        <title>{article.article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="og:title" content={article.title} />
        <meta name="og:description" content={article.description} />
        <meta name="og:image" content={article.cover} />
      </Head>
      <div className={styles.blogArticle}>
        <Header
          logo="/logo.svg"
          onaolyGuieLogoImageClick={onaolyGuieLogoImageClick}
        />
        <img src={article.article.cover} alt="" style={{ height: "10vh" }} />
        <h1>{article.article.title}</h1>
        <article>
          <ReactMarkdown>{article.markdown.parent}</ReactMarkdown>
        </article>

        <RecommendedSection articles={articles.slice(0, 3)} />
        <div className={styles.aolyPteLtd}>
          © 2023, aoly. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
