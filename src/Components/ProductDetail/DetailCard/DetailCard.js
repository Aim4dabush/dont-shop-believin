import { useParams } from "react-router-dom";

//components
import DetailButtons from "./DetailButtons/DetailButtons";
import DetailForm from "./DetailForm/DetailForm";
import DetailImage from "./DetailImage/DetailImage";
import DetailTags from "./DetailTags/DetailTags";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailCard.module.scss";

const DetailCard = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.productsArr);

  const product = products.find((product) => {
    return product.id === parseInt(id);
  });
  console.log(product);

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
