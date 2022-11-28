//styles
import styles from "./ReturnSummary.module.scss";

const ReturnSummary = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Return Summary</h3>
      <hr />
      <p className={styles.info}>Receipt: #4654d546dfada5fd</p>
      <hr />
      <p className={styles.info}>Credit Card: Mastercard #4568123698741254</p>
      <hr />
      <p className={styles.info}>Number Items: 1</p>
      <hr />
      <p className={styles.info}>Order Total: $456</p>
      <hr />
      <button className={styles.btn}>Refund Order</button>
    </div>
  );
};

export default ReturnSummary;
