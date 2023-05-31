import styles from "./reviewCard.module.css";
import Image from "next/image";

export default function ReviewCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <Image
          className={styles.image}
          src={props.image}
          alt="image"
          height={56}
          width={56}
        />
        <div className={styles.userDetails}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
      </div>
      <p className={styles.content}>{props.review}</p>
    </div>
  );
}
