import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./article-card.module.css";
import MinRead from "../MinRead";

type ArticleCardType = {
  image?: string;
  tag?: string;
  title?: string;
  description?: string;
  avatar?: string;
  author?: string;
  date?: string;
  slug?: string;

  /** Style props */
  propWidth?: Property.Width;
  frameATransition?: Property.Transition;
};

const ArticleCard: NextPage<ArticleCardType> = ({
  image,
  tag,
  title,
  description,
  slug,
  propWidth,
  frameATransition,
}) => {
  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameAStyle: CSS.Properties = useMemo(() => {
    return {
      transition: frameATransition,
    };
  }, [frameATransition]);

  return (
    <a
      className={styles.rectangleParent}
      href={slug ? `/article/${slug}` : "#"}
      style={frameAStyle}
    >
      <img className={styles.frameChild} alt="" src={image} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.designToCodeParent}>
              <div className={styles.designToCode}>{tag}</div>
              <MinRead mins={2} />
            </div>
            <b className={styles.figmaForDevelopers}>{title}</b>
          </div>
          <div className={styles.developersOftenBelieveTheyWrapper}>
            <div className={styles.developersOftenBelieve}>{description}</div>
          </div>
        </div>
        <div className={styles.lineParent}></div>
      </div>
    </a>
  );
};

export default ArticleCard;
