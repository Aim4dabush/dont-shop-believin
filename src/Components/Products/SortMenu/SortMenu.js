//components
import AlphabetSort from "./AlphabetSort/AlphabetSort";
import CategorySort from "./CategorySort/CategorySort";
import RatingSort from "./RatingSort/RatingSort";

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
      <p className={styles.title}>Alphabetical</p>
      <AlphabetSort />
      <p className={styles.title}>Rating</p>
      <RatingSort />
    </div>
  );
};

export default SortMenu;
