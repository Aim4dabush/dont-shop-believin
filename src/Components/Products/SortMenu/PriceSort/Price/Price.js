//styles
import styles from "./Price.module.scss";

const Price = ({ onClickHandler, price }) => {
  return (
    <li className={styles.price}>
      <p className={styles.title} onClick={onClickHandler}>
        {price}
      </p>
    </li>
  );
};

export default Price;
