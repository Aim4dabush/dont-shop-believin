//components
import AlphabetSort from "./AlphabetSort/AlphabetSort";
import CategorySort from "./CategorySort/CategorySort";
import PriceSort from "./PriceSort/PriceSort";
import RatingSort from "./RatingSort/RatingSort";

//redux
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/thunks/productsThunk";

//styles
import styles from "./SortMenu.module.scss";

const SortMenu = ({ showSort }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(getAllProducts());
  };

  return (
    <div className={showSort ? styles.show : styles.menuWrapper}>
      <p className={styles.products} onClick={onClickHandler}>
        All Products
      </p>
      <div className={styles.sortWrapper}>
        <p className={styles.title}>Alphabetical</p>
        <AlphabetSort />
      </div>
      <div>
        <p className={styles.title}>Category</p>
        <CategorySort />
      </div>
      <div>
        <p className={styles.title}>Price</p>
        <PriceSort />
      </div>
      <div>
        <p className={styles.title}>Rating</p>
        <RatingSort />
      </div>
    </div>
  );
};

export default SortMenu;
