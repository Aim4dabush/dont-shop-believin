import { useEffect } from "react";

//components
import Card from "../../Components/Products/Card/Card";
import SortMenu from "../../Components/Products/SortMenu/SortMenu";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/thunks/productsThunk";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArr);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products]);

  return (
    <div className={styles.container}>
      <SortMenu />
      <div className={styles.cardWrapper}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
