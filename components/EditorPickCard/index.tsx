import type { NextPage } from "next";
import styles from "./editor-pick-card.module.css";
import MinRead from "../MinRead";
import { formatDate } from "../../helpers/dateHelper";

type EditorPickCardType = {
  image?: string;
  tag?: string;
  title?: string;
  avatar?: string;
  date: string;
  slug?: string;
};

const EditorPickCard: NextPage<EditorPickCardType> = ({
  image,
  tag,
  title,
  date,
  slug,
}) => {
  return (
    <div
      className={styles.frameParent}
      onClick={() => {
        window.location.href = `/article/${slug}`;
      }}
    >
      <div className={styles.rectangleWrapper}>
        <img className={styles.frameChild} alt="" src={image} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.designToCodeParent}>
            <div className={styles.designToCode}>{tag}</div>
            <MinRead mins={3} />
          </div>
          <b className={styles.figmaForDevelopers}>{title}</b>
        </div>
        <div className={styles.postedJustNow}>{formatDate(date)}</div>
      </div>
    </div>
  );
};

export default EditorPickCard;
