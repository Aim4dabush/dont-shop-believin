//redux
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../../../../redux/thunks/productsThunk";

//styles
import styles from "./Category.module.scss";

const Category = ({ children, category }) => {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    dispatch(getProductsByCategory(e.target.title));
  };

  return (
    <li className={styles.category} onClick={onClickHandler}>
      <p className={styles.title} title={category}>
        {children}
      </p>
    </li>
  );
};

export default Category;
