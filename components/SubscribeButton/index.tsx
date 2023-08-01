import React from "react";
import styles from "./subscribe-button.module.css";

interface Props {
  children: React.ReactNode;
}

function SubscribeButton({ children }: Props) {
  return <button
  className={styles.button}
  >{children}</button>;
}

export default SubscribeButton;
