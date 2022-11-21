//component
import Alphabet from "./Alphabet/Alphabet";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../../redux/slices/productsSlice";

//styles
import styles from "./AlphabetSort.module.scss";

const AlphabetSort = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArr);

  const aZHandler = () => {
    const newArr = [...products];
    const sort = newArr.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    console.log(sort);
    dispatch(productsActions.setProductsReset());
    dispatch(productsActions.setProductsArr(sort));
  };

  const zAHandler = () => {
    const newArr = [...products];
    const sort = newArr.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    console.log(sort);
    dispatch(productsActions.setProductsReset());
    dispatch(productsActions.setProductsArr(sort));
  };

  return (
    <ul className={styles.alphabetWrapper}>
      <Alphabet alphabet={"A-Z"} onClickHandler={aZHandler} />
      <Alphabet alphabet={"Z-A"} onClickHandler={zAHandler} />
    </ul>
  );
};

export default AlphabetSort;
