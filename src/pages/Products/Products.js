import { useEffect } from "react";

//components
import ProductCard from "../../Components/Products/ProductCard/ProductCard";
import SortMenu from "../../Components/Products/SortMenu/SortMenu";

//redux
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/thunks/authThunk";
import { getAllProducts } from "../../redux/thunks/productsThunk";
import { getShoppingCart, getWishList } from "../../redux/thunks/cartsThunk";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const expiration = useSelector((state) => state.auth.user.expiration);
  const products = useSelector((state) => state.products.productsArr);
  const isLoading = useSelector((state) => state.products.isLoading);
  const user = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getAllProducts());
    }

    const unsub =
      (dispatch(getWishList(user)), dispatch(getShoppingCart(user)));

    return () => unsub;
  }, [dispatch, products, user]);

  useEffect(() => {
    if (user !== null) {
      setTimeout(() => {
        dispatch(authLogout());
      }, expiration);
    }

    return () => clearTimeout();
  }, [dispatch, expiration, user]);

  return (
    <div className={styles.container}>
      <SortMenu />
      <div className={styles.cardWrapper}>
        {isLoading && <p className={styles.loading}>...Loading</p>}
        {!isLoading &&
          products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Products;
