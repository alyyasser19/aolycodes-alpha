import type { NextPage } from "next";
import EditorPickCard from "./../EditorPickCard";
import styles from "./editor-container.module.css";
import { Article } from "../../types/BlogTypes";

interface EditorContainerProps {
  articles: Article[];
}

const EditorContainer: NextPage<EditorContainerProps> = ({ articles }) => {
  return (
    <div className={styles.editorsPickParent}>
      <div className={styles.editorsPick}>Editor’s Pick</div>
      <div className={styles.frameParent}>
        {articles.map((article, index) => {
          return (
            <EditorPickCard
              key={index}
              image={article.cover}
              tag={article.tags[0].name}
              title={article.title}
              date={article.created}
              slug={article.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditorContainer;
