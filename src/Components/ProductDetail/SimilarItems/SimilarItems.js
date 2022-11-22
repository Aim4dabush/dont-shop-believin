//components
import SimilarCard from "./SimilarCard/SimilarCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./SimilarItems.module.scss";

const SimilarItems = ({ product }) => {
  const products = useSelector((state) => state.products.productsArr);

  const items = products.filter((item) => {
    return item.category === product.category;
  });

  return (
    <div className={styles.similarWrapper}>
      {Array.isArray(items) &&
        items.map((item) => {
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
  );
};

export default SimilarItems;
