import type { NextPage } from "next";
import styles from "./news-letter-text.module.css";

type NewsLetterTextType = {
  dimensions?: string;
};

const NewsLetterText: NextPage<NewsLetterTextType> = ({ dimensions }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.keepYourLocoModeOnParent}>
        <b className={styles.keepYourLoco}>Keep your loco mode on!</b>
        <div className={styles.stayUpdatedOn}>
          Stay updated on the latest aoly announcements and product updates
        </div>
      </div>
      <img className={styles.frameChild} alt="" src={dimensions} />
    </div>
  );
};

export default NewsLetterText;
