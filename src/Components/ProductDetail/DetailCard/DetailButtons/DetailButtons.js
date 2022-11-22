//components
import { FaHeart, FaShoppingCart } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";
import { modalActions } from "../../../../redux/slices/modalSlice";

//styles
import styles from "./DetailButtons.module.scss";

const DetailButtons = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.carts.shopping);
  const quantity = useSelector((state) => state.carts.quantity);
  const product = useSelector((state) => state.carts.product);
  const wishList = useSelector((state) => state.carts.wish);

  const addCartHandler = () => {
    const item = shoppingCart.find((item) => {
      return item.id === product.id;
    });
    const index = shoppingCart.findIndex((item) => {
      return item.id === product.id;
    });

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
    } else {
      dispatch(
        cartsActions.setReplaceShoppingProduct({
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
    dispatch(
      modalActions.setProductDetail({
        title: "Cart",
        isShown: true,
      })
    );
    dispatch(cartsActions.setQuantityReset());
  };

  const addWishHandler = () => {
    const item = wishList.find((item) => {
      return item.id === product.id;
    });
    const index = wishList.findIndex((item) => {
      return item.id === product.id;
    });

    if (index === -1) {
      dispatch(
        cartsActions.setWish({
          date: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          },
          id: product.id,
          image: product.images[0],
          price: product.price,
          quantity: quantity,
          rating: product.rating,
          title: product.title,
        })
      );
    } else {
      dispatch(
        cartsActions.setReplaceWishItem({
          index: index,
          product: {
            date: {
              day: new Date().getDate(),
              month: new Date().getMonth(),
              year: new Date().getFullYear(),
            },
            id: item.id,
            image: item.image,
            price: item.price,
            quantity: item.quantity + quantity,
            rating: item.rating,
            title: item.title,
          },
        })
      );
    }
    dispatch(
      modalActions.setProductDetail({
        title: "Wish List",
        isShown: true,
      })
    );
    dispatch(cartsActions.setQuantityReset());
  };

  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.btn} onClick={addCartHandler}>
        <FaShoppingCart className={styles.icon} />
        Add to Cart
      </button>
      <button className={styles.btn} onClick={addWishHandler}>
        <FaHeart className={styles.icon} />
        Add to Wishlist
      </button>
    </div>
  );
};

export default DetailButtons;
