//components
import DetailCard from "../../Components/ProductDetail/DetailCard/DetailCard";
import SimilarItems from "../../Components/ProductDetail/SimilarItems/SimilarItems";

//styles
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <DetailCard />
      <SimilarItems />
    </div>
  );
};

export default ProductDetail;
