import type { NextPage } from "next";
import NewsLetterText from "./../NewsLetterText";
import styles from "./news-letter-box.module.css";
import SubscribeButton from "../SubscribeButton";
const NewsLetterBox: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <NewsLetterText dimensions="/group-74181.svg" />
      <div className={styles.frameGroup}>
        <input
          className={styles.frameChild}
          type="text"
          placeholder="Enter email address"
        />
          <SubscribeButton>Subscribe</SubscribeButton>
      </div>
    </div>
  );
};

export default NewsLetterBox;
