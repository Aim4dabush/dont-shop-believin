//components
import { FaHeart, FaShoppingCart } from "react-icons/fa";

//styles
import styles from "./DetailButtons.module.scss";

const DetailButtons = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.btn} type="submit">
        <FaShoppingCart className={styles.icon} />
        Add to Cart
      </button>
      <button className={styles.btn}>
        <FaHeart className={styles.icon} />
        Add to Wishlist
      </button>
    </div>
  );
};

export default DetailButtons;
