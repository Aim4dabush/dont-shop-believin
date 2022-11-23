//styles
import styles from "./WishImage.module.scss";

const WishImage = ({ image, title }) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default WishImage;
