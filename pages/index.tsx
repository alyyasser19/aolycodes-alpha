import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import styles from "./index.module.css";
import DiscoverContainer from "../components/DiscoverContainer";
import EditorContainer from "../components/EditorContainer";
import FeaturedBlogContainer from "../components/FeaturedBlogContainer";
import FeaturedEntry from "../components/FeaturedEntry";
import NewsLetterBox from "../components/NewsLetterBox";
import Tags from "../components/Tags";
import NotionService from "../services/notion-service";

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  const articles = await notionService.getPublishedArticles();

  return {
    props: {
      articles,
    },
  };
};

const BlogHome: NextPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const onAolyGuieLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  console.log(articles);

  return (
    <div className={styles.blogHome}>
      <Header
        logo="/logo.svg"
        aolyGuieLogoIconAlignSelf="stretch"
        aolyHomeLinkWidth="29.25rem"
        homeIconFlex="1"
        frameDivWidth="unset"
        frameDivFlex="1"
        onaolyGuieLogoImageClick={onAolyGuieLogoImageClick}
      />
      <section className={styles.blogContainer}>
        <FeaturedBlogContainer
          tag={articles[0].tags[0].name}
          title={articles[0].title}
          description={articles[0].description}
          date={articles[0].created}
          minsToRead={5}
          image={articles[0].cover}
          slug={articles[0].slug}
        />
        <EditorContainer articles={articles.slice(0, 3)} />
        <div className={styles.blogCatHeadersParent}>
          <Tags />
          <DiscoverContainer articles={articles.slice(0, 3)} />
        </div>
        {/* <FeaturedEntry /> */}
      </section>
      <div className={styles.aolyPteLtd}>
        © 2023, Aoly. All Rights Reserved.
      </div>
    </div>
  );
};

export default BlogHome;
