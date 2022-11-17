//styles
import styles from "./ProductInfo.module.scss";

const ProductInfo = ({ infoOne, infoTwo }) => {
  return (
    <div className={styles.infoWrapper}>
      <p>{infoOne}</p>
      <p>{infoTwo}</p>
    </div>
  );
};

export default ProductInfo;
