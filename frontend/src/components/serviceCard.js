import styles from "./serviceCard.module.css";

export default function ServiceCard(props) {
  return (
    <div className={styles.card}>
      <div className={`${styles.radioButton} ${props.style}`}></div>
      <div className={styles.data}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.details}>{props.details}</p>
      </div>

      <div className={styles.price}>${props.price}</div>
    </div>
  );
}
