import styles from "./sellerCard.module.css";
import Image from "next/image";

export default function SellerCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.sellerDetails}>
          <Image
            className={styles.image}
            src={props.image}
            alt="image"
            height={56}
            width={56}
          />
          <p className={styles.name}>{props.name}</p>
        </div>
        <button className={styles.button}>CONTACT</button>
      </div>
      <p className={styles.message}>{props.message}</p>
    </div>
  );
}
