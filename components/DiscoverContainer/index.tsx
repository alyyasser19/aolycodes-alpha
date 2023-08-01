import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ArticleCard from "./../ArticleCard";
import styles from "./discover-container.module.css";
import { Article } from "../../types/BlogTypes";

interface DiscoverContainerProps {
  articles: Article[];
}

const DiscoverContainer: NextPage<DiscoverContainerProps> = ({articles}) => {
  const router = useRouter();

  const onFrameLinkClick = useCallback(() => {
    router.push("/blog-article");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      {
        articles.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              image={article.cover}
              tag={article.tags[0].name}
              title={article.title}
              description={article.description}
              slug={article.slug}
              />
          );
        })
      }
    </div>
  );
};

export default DiscoverContainer;
