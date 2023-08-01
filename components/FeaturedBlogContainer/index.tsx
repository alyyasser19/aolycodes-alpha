import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./featured-blog-container.module.css";
import MinRead from "../MinRead";
import CyberButton from "../CyberButton";
import { formatDate } from "../../helpers/dateHelper";

interface featuredBlogProps {
  title: string;
  tag: string;
  minsToRead: number;
  description: string;
  image: string;
  date: string;
  slug: string;
}

const FeaturedBlogContainer: NextPage<featuredBlogProps> = ({
  title,
  tag,
  minsToRead,
  description,
  image,
  date,
  slug
}) => {
  const router = useRouter();

  const goToArticle = useCallback(() => {
    router.push(`/article/${slug}`);
  }, [router]);

  return (
    <div className={styles.featuredBlog} onClick={goToArticle}>
      <div className={styles.featureBlogInfo}>
        <div className={styles.featBlogDetails}>
          <div className={styles.blogInfoTop}>
            <b className={styles.designToCode}>{tag}</b>
            <MinRead mins={minsToRead} />
          </div>
          <b className={styles.title}>{title}</b>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>{description}</div>
            <CyberButton>Continue reading</CyberButton>
          </div>
        </div>
        <div className={styles.date}>Posted {formatDate(date)}</div>
      </div>
      <div className={styles.image32Wrapper}>
        <img className={styles.image32Icon} alt="" src={image} />
      </div>
    </div>
  );
};

export default FeaturedBlogContainer;
