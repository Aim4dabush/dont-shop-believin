//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailTags.module.scss";

const DetailTags = () => {
  const product = useSelector((state) => state.carts.product);

  return (
    <div className={styles.tagWrapper}>
      <p>
        Tags: Brand({product.brand}) Category({product.category})
      </p>
    </div>
  );
};

export default DetailTags;
