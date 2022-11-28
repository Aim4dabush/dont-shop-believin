//styles
import styles from "./ItemImage.module.scss";

const ItemImage = ({ image, title }) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default ItemImage;
