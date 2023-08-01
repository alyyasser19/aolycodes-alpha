import React from "react";
import styles from "./cyber-button.module.css";

interface Props {
  children: React.ReactNode; 
  size?: string;
  color?: string;
}

function CyberButton({ children, size, color }: Props) {
  return (
    <div className={styles.buttonBorders}>
      <button className={styles.cyberButton}> 
      {
        children
      }
      </button>
    </div>
  );
}

export default CyberButton;
