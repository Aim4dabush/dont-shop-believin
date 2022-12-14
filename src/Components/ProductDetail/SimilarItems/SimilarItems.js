//components
import SimilarCard from "./SimilarCard/SimilarCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./SimilarItems.module.scss";

const SimilarItems = () => {
  const products = useSelector((state) => state.products.productsArr);
  const product = useSelector((state) => state.carts.product);

  const items = products.filter((item) => {
    return item.category === product?.category;
  });

  const similar = items.filter((item) => {
    return item.id !== product.id;
  });

  return (
    <div className={styles.similarWrapper}>
      <h2>Similar Products</h2>
      <div className={styles.productsWrapper}>
        {Array.isArray(similar) &&
          similar.map((item) => {
            return (
              <SimilarCard
                id={item.id}
                image={item.images[0]}
                key={item.id}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SimilarItems;
