//components
import { FaHeart, FaShoppingCart } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";

//styles
import styles from "./DetailButtons.module.scss";

const DetailButtons = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.carts.shopping);
  const quantity = useSelector((state) => state.carts.quantity);
  const product = useSelector((state) => state.carts.product);
  console.log(shoppingCart);

  const addCartHandler = () => {
    const item = shoppingCart.find((item) => {
      return item.id === product.id;
    });
    const index = shoppingCart.findIndex((item) => {
      return item.id === product.id;
    });
    console.log(index, item);

    if (index === -1) {
      dispatch(
        cartsActions.setShopping({
          id: product.id,
          image: product.images[0],
          quantity: quantity,
          price: product.price,
          subTotal: quantity * product.price,
          title: product.title,
        })
      );
      dispatch(cartsActions.setQuantityReset());
    } else {
      dispatch(
        cartsActions.setReplaceProduct({
          index: index,
          product: {
            id: item.id,
            image: item.image,
            quantity: item.quantity + quantity,
            price: item.price,
            subTotal: (item.quantity + quantity) * item.price,
            title: item.title,
          },
        })
      );
    }
  };
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.btn} onClick={addCartHandler}>
        <FaShoppingCart className={styles.icon} />
        Add to Cart
      </button>
      <button className={styles.btn}>
        <FaHeart className={styles.icon} />
        Add to Wishlist
      </button>
    </div>
  );
};

export default DetailButtons;
