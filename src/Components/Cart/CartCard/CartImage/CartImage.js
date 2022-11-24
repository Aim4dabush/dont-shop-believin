//styles
import styles from "./CartImage.module.scss";

const CartImage = ({ image, title }) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default CartImage;
