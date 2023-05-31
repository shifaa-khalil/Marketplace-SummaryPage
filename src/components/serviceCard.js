"use client";
import { useState } from "react";
import styles from "./serviceCard.module.css";
import Image from "next/image";

export default function ServiceCard(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.card}>
      {checked ? (
        <div
          className={`${styles.radioButton} ${styles.checked}`}
          onClick={() => setChecked(false)}
        >
          <Image src="/vector.svg" alt="checked" height={6.5} width={9} />
        </div>
      ) : (
        <div
          className={`${styles.radioButton}`}
          onClick={() => setChecked(true)}
        ></div>
      )}
      <div className={styles.data}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.details}>{props.details}</p>
      </div>

      <div className={styles.price}>${props.price}</div>
    </div>
  );
}
