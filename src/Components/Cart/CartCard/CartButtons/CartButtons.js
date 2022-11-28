import { useEffect } from "react";

//components
import { FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addShoppingData } from "../../../../redux/thunks/cartsThunk";
import { cartsActions } from "../../../../redux/slices/cartsSlice";

//styles
import styles from "./CartButtons.module.scss";

const CartButtons = ({ quantity, product }) => {
  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.carts.loadData);
  const shoppingData = useSelector((state) => state.carts.shoppingData);
  const user = useSelector((state) => state.auth.user.id);
  const addCartHandler = () => {
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
        subTotal: quantity * item.price,
        title: item.title,
      };
      dispatch(
        cartsActions.setReplaceShoppingData({
          index: index,
          data: data,
        })
      );
    }
    dispatch(cartsActions.setLoadData(true));
  };

  const deleteItemHandler = () => {
    const index = shoppingData.findIndex((item) => {
      return item.id === product.id;
    });

    dispatch(cartsActions.setDeleteShoppingData(index));
    dispatch(cartsActions.setLoadData(true));
  };

  useEffect(() => {
    if (loadData) {
      dispatch(addShoppingData(user, shoppingData));
      dispatch(cartsActions.setLoadData(false));
    }
  }, [dispatch, loadData, shoppingData, user]);

  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={addCartHandler}>
        <GrUpdate /> Update
      </button>
      <button className={styles.btn} onClick={deleteItemHandler}>
        <FaTrashAlt /> Remove
      </button>
    </div>
  );
};

export default CartButtons;
