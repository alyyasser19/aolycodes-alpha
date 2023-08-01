import type { NextPage } from "next";
import styles from "./tags.module.css";
import { useState } from "react";

interface Tag {
  name: string;
  id: number;
}

const tagsList: Tag[] = [
  { name: "All", id: 1 },
  { name: "Design", id: 2 },
  { name: "Code", id: 3 },
  { name: "findings", id: 4 },
];

const Tags: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const handleTagClick = (tag: Tag) => {
    setSelectedTag(tag);
  };

  return (
    <form action="" className={styles.container}>
      {tagsList.map((tag) => (
        <div key={tag.id}>
          <input
            className={styles.inputBtn}
            type="radio"
            id={`valueIs-${tag.id}`}
            name="valueIs-radio"
            checked={selectedTag?.id === tag.id}
            value={`valueIs-${tag.id}`}
            onChange={() => handleTagClick(tag)}
          />
          <label className={styles.neonBtn} htmlFor={`valueIs-${tag.id}`}>
            <span className={styles.span}></span>
            <span className={styles.txt}>{tag.name}</span>
          </label>
        </div>
      ))}
    </form>
  );
};

export default Tags;