//components
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";
import {
  addShoppingData,
  deleteWishListItem,
} from "../../../../redux/thunks/cartsThunk";

//styles
import styles from "./WishButtons.module.scss";

const WishButtons = ({ product, quantity }) => {
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
    dispatch(deleteWishListItem(user, product.id));
    dispatch(cartsActions.setQuantityReset());
  };

  const deleteItem = () => {
    dispatch(deleteWishListItem(user, product.id));
  };

  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={deleteItem}>
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
