import type { NextPage } from "next";
import styles from "./featured-entry.module.css";
import MinRead from "../MinRead";
const FeaturedEntry: NextPage = () => {
  return (
    <div className={styles.guestAuthorEntryParent}>
      <div className={styles.guestAuthorEntry}>Guest Author Entry</div>
      <div className={styles.frameParent} >
        <div className={styles.image34Wrapper}>
          <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.aolyEventsParent}>
                <div className={styles.aolyEvents}>aoly Events</div>
                <MinRead mins={3}/>
              </div>
              <a className={styles.buildFasterLike}>
                Build faster like a boss - aoly Hackathon 2022
              </a>
            </div>
            <div className={styles.moreThan100UsersHavePartiWrapper}>
              <div
                className={styles.moreThan100}
              >{`More than 100 users have participated in the recently concluded aoly Hackathon. `}</div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.articleAuthor}>
            <div className={styles.postedByJustinContainer}>
              <span>Posted by</span>
              <span className={styles.justinBenito}> Justin Benito</span>
            </div>
            <div className={styles.postedOnSep}>Posted on Sep 4, 2022</div>
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar10@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedEntry;
