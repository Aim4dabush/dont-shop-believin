import { useEffect } from "react";

//components
import Card from "../../Components/Products/Card/Card";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/thunks/productsThunk";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArr);

  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products]);

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
