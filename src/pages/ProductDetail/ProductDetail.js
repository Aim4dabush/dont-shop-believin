import { useParams } from "react-router-dom";

//components
import DetailCard from "../../Components/ProductDetail/DetailCard/DetailCard";
import SimilarItems from "../../Components/ProductDetail/SimilarItems/SimilarItems";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.productsArr);

  const product = products.find((product) => {
    return product.id === parseInt(id);
  });
  console.log(product);

  return (
    <div className={styles.container}>
      <DetailCard product={product} />
      <SimilarItems product={product} />
    </div>
  );
};

export default ProductDetail;
