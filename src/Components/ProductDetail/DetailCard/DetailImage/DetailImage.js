//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailImage.module.scss";

const DetailImage = () => {
  const product = useSelector((state) => state.carts.product);

  return (
    <div className={styles.imageWrapper}>
      {product && (
        <img
          alt={product.title}
          className={styles.image}
          src={product.images[0]}
        />
      )}
    </div>
  );
};

export default DetailImage;
