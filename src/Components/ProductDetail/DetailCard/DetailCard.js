//components
import DetailButtons from "./DetailButtons/DetailButtons";
import DetailQuantity from "./DetailQuantity/DetailQuantity";
import DetailImage from "./DetailImage/DetailImage";
import DetailTags from "./DetailTags/DetailTags";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailCard.module.scss";

const DetailCard = () => {
  const product = useSelector((state) => state.carts.product);

  return (
    <div className={styles.card}>
      <DetailImage />
      {product && (
        <div className={styles.mainWrapper}>
          <h2 className={styles.title}>{product.title}</h2>
          <DetailTags />
          <p className={styles.description}>{product.description}</p>
          <div className={styles.infoWrapper}>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <DetailQuantity />
          </div>
          <DetailButtons />
        </div>
      )}
    </div>
  );
};

export default DetailCard;
