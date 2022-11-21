//components
import Price from "./Price/Price";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../../redux/slices/productsSlice";

//styles
import styles from "./PriceSort.module.scss";

const PriceSort = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArr);

  const cheapOnClickHandler = () => {
    const newArr = [...products];
    const filter = newArr.filter((product) => {
      return product.price < 500;
    });
    console.log(filter);
    dispatch(productsActions.setProductsArr(filter));
  };

  const expensiveOnClickHandler = () => {
    const newArr = [...products];
    const filter = newArr.filter((product) => {
      return product.price >= 1000;
    });
    console.log(filter);
    dispatch(productsActions.setProductsArr(filter));
  };

  const highLowOnClickHandler = () => {
    const newArr = [...products];
    const sort = newArr.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    });
    dispatch(productsActions.setProductsArr(sort));
  };

  const lowHighOnClickHandler = () => {
    const newArr = [...products];
    const sort = newArr.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    dispatch(productsActions.setProductsArr(sort));
  };

  const mediumOnClickHandler = () => {
    const newArr = [...products];
    const filter = newArr.filter((product) => {
      return product.price < 1000;
    });
    console.log(filter);
    dispatch(productsActions.setProductsArr(filter));
  };

  return (
    <ul className={styles.priceWrapper}>
      <Price onClickHandler={lowHighOnClickHandler} price={"Low to High"} />
      <Price onClickHandler={highLowOnClickHandler} price={"High to Low"} />
      <Price onClickHandler={cheapOnClickHandler} price={"$0 - $499"} />
      <Price onClickHandler={mediumOnClickHandler} price={"$500 - $999"} />
      <Price onClickHandler={expensiveOnClickHandler} price={"$1000 >"} />
    </ul>
  );
};

export default PriceSort;
