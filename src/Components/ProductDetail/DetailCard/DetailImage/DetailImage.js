//styles
import styles from "./DetailImage.module.scss";

const DetailImage = ({ image, title }) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
};

export default DetailImage;
