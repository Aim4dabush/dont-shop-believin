import { useEffect } from "react";

//components
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";
import {
  addShoppingData,
  addWishListData,
} from "../../../../redux/thunks/cartsThunk";

//styles
import styles from "./WishButtons.module.scss";

const WishButtons = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.carts.loadData);
  const shoppingData = useSelector((state) => state.carts.shoppingData);
  const user = useSelector((state) => state.auth.user.id);
  const wishData = useSelector((state) => state.carts.wishData);
  console.log(shoppingData);

  const addCartHandler = () => {
    if (Array.isArray(shoppingData)) {
      const item = shoppingData.find((item) => {
        return item.id === product.id;
      });
      const index = shoppingData.findIndex((item) => {
        return item.id === product.id;
      });

      if (index === -1) {
        const data = {
          id: product.id,
          image: product.image,
          quantity: quantity,
          price: product.price,
          subTotal: quantity * product.price,
          title: product.title,
        };
        dispatch(cartsActions.setShoppingData(data));
      } else {
        const data = {
          id: item.id,
          image: item.image,
          quantity: quantity,
          price: item.price,
          subTotal: quantity * product.price,
          title: product.title,
        };
        dispatch(
          cartsActions.setReplaceShoppingData({
            index: index,
            data: data,
          })
        );
      }
    } else {
      const data = {
        id: product.id,
        image: product.image,
        quantity: quantity,
        price: product.price,
        subTotal: quantity * product.price,
        title: product.title,
      };
      dispatch(cartsActions.setShoppingData(data));
    }

    if (wishData.length > 0) {
      const index = wishData.findIndex((item) => {
        return item.id === product.id;
      });
      dispatch(cartsActions.setDeleteWishData(index));
    }

    dispatch(cartsActions.setLoadData(true));
  };

  const deleteItemHandler = () => {
    const index = wishData.findIndex((item) => {
      return item.id === product.id;
    });
    console.log(index);
    dispatch(cartsActions.setDeleteWishData(index));
    dispatch(cartsActions.setLoadData(true));
  };

  useEffect(() => {
    if (loadData) {
      dispatch(addShoppingData(user, shoppingData));
      dispatch(addWishListData(user, wishData));
      dispatch(cartsActions.setLoadData(false));
    }
  }, [dispatch, loadData, shoppingData, user, wishData]);

  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={deleteItemHandler}>
        <FaTrashAlt /> Remove
      </button>
      <button className={styles.btn} onClick={addCartHandler}>
        <FaShoppingCart />
        Add To Cart
      </button>
    </div>
  );
};

export default WishButtons;
