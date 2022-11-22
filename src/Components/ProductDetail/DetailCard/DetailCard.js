//components
import DetailButtons from "./DetailButtons/DetailButtons";
import DetailForm from "./DetailForm/DetailForm";
import DetailImage from "./DetailImage/DetailImage";
import DetailTags from "./DetailTags/DetailTags";

//styles
import styles from "./DetailCard.module.scss";

const DetailCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <DetailImage image={product.images[0]} title={product.title} />
      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>{product.title}</h2>
        <DetailTags brand={product.brand} category={product.category} />
        <p className={styles.description}>{product.description}</p>
        <div className={styles.infoWrapper}>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <DetailForm />
        </div>
        <DetailButtons />
      </div>
    </div>
  );
};

export default DetailCard;
