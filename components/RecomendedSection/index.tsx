import type { GetStaticProps, NextPage } from "next";
import ArticleCard from "./../ArticleCard";
import styles from "./recommended-section.module.css";
import NotionService from "../../services/notion-service";
import { Article } from "../../types/BlogTypes";

interface Props {
  articles: Article[];
}

const RecommendedSection: NextPage<Props> = ({ articles }: Props) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameItem} />
      <b className={styles.youMayAlso}>You may also like</b>
      <div className={styles.frameDiv}>
        {articles.map((article: Article) => {
          return (
            <ArticleCard
              image={article.cover}
              title={article.title}
              description={article.description}
              slug={article.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedSection;
