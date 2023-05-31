import styles from "./gameCard.module.css";
import Image from "next/image";

export default function GameCard(props) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={props.image}
        alt="image"
        height={107}
        width={80}
      />
      <div className={styles.data}>
        <p className={styles.label}>Game</p>
        <p className={styles.value}>{props.game}</p>
      </div>
      <div className={styles.data}>
        <p className={styles.label}>Languages</p>
        <p className={styles.value}>{props.languages}</p>
      </div>
    </div>
  );
}
