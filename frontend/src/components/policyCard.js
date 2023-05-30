"use client";
import styles from "./policyCard.module.css";
import Image from "next/image";
import { useState } from "react";

export default function PolicyCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.card}
      onClick={() => {
        expanded ? setExpanded(false) : setExpanded(true);
      }}
    >
      <div className={styles.title}>
        <p>{props.title}</p>
        <Image src="/down.svg" alt="down" height={14} width={12} />
      </div>
      {expanded && <p className={styles.body}>{props.body}</p>}
    </div>
  );
}
