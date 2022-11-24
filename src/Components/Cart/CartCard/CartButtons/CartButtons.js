//components
import { FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  addShoppingData,
  deleteShoppingItem,
} from "../../../../redux/thunks/cartsThunk";
import { cartsActions } from "../../../../redux/slices/cartsSlice";

//styles
import styles from "./CartButtons.module.scss";

const CartButtons = ({ quantity, product }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.carts.shopping.cart);
  const user = useSelector((state) => state.auth.user.id);

  const addCartHandler = () => {
    const item = shoppingCart.find((item) => {
      return item.id === product.id;
    });
    const index = shoppingCart.findIndex((item) => {
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
      dispatch(addShoppingData(user, data));
    } else {
      const data = {
        id: item.id,
        image: item.image,
        quantity: item.quantity + quantity,
        price: item.price,
        subTotal: (item.quantity + quantity) * item.price,
        title: item.title,
      };
      dispatch(addShoppingData(user, data));
    }
    dispatch(cartsActions.setQuantityReset());
  };

  const deleteItemHandler = () => {
    dispatch(deleteShoppingItem(user, product.id));
  };

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
