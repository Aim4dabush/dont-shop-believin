//component
import Rating from "./Rating/Rating";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../../redux/slices/productsSlice";

//styles
import styles from "./RatingSort.module.scss";

const RatingSort = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsArr);

  const lowerRatingOnClickHandler = () => {
    const newArr = [...products];
    const sort = newArr.sort((a, b) => {
      if (a.rating < b.rating) {
        return -1;
      }
      return 0;
    });
    dispatch(productsActions.setProductsArr(sort));
  };

  const higherRatingOnClickHandler = () => {
    const newArr = [...products];
    const sort = newArr.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
    dispatch(productsActions.setProductsArr(sort));
  };

  return (
    <ul className={styles.ratingWrapper}>
      <Rating
        onClickHandler={lowerRatingOnClickHandler}
        rating={"Lower to Higher"}
      />
      <Rating
        onClickHandler={higherRatingOnClickHandler}
        rating={"Higher to Lower"}
      />
    </ul>
  );
};

export default RatingSort;
