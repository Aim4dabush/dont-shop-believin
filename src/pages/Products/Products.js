import { useEffect } from "react";

//components
import Card from "../../Components/Products/Card/Card";
import SortMenu from "../../Components/Products/SortMenu/SortMenu";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/thunks/productsThunk";
import {
  getShoppingSize,
  getWishListSize,
} from "../../redux/thunks/cartsThunk";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArr);
  const isLoading = useSelector((state) => state.products.isLoading);
  const user = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
    const unsub =
      (dispatch(getShoppingSize(user)), dispatch(getWishListSize(user)));

    return () => unsub;
  }, [dispatch, products, user]);

  return (
    <div className={styles.container}>
      <SortMenu />
      <div className={styles.cardWrapper}>
        {isLoading && <p>...Loading</p>}
        {!isLoading &&
          products?.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Products;
