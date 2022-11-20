//components
import CategorySort from "./CategorySort/CategorySort";

//redux
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/thunks/productsThunk";

//styles
import styles from "./SortMenu.module.scss";

const SortMenu = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(getAllProducts());
  };

  return (
    <div className={styles.sortWrapper}>
      <p className={styles.products} onClick={onClickHandler}>
        All Products
      </p>
      <p className={styles.title}>Category</p>
      <CategorySort />
    </div>
  );
};

export default SortMenu;
