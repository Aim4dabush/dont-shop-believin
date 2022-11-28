import { useEffect } from "react";

//components
import { FaHeart, FaShoppingCart } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";
import { modalActions } from "../../../../redux/slices/modalSlice";
import {
  addShoppingData,
  addWishListData,
} from "../../../../redux/thunks/cartsThunk";

//styles
import styles from "./DetailButtons.module.scss";

const DetailButtons = () => {
  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.carts.loadData);
  const product = useSelector((state) => state.carts.product);
  const quantity = useSelector((state) => state.carts.quantity);
  const shoppingData = useSelector((state) => state.carts.shoppingData);
  const user = useSelector((state) => state.auth.user.id);
  const wishList = useSelector((state) => state.carts.wish.cart);

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
          image: product.images[0],
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
          quantity: item.quantity + quantity,
          price: item.price,
          subTotal: (item.quantity + quantity) * item.price,
          title: item.title,
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
        image: product.images[0],
        quantity: quantity,
        price: product.price,
        subTotal: quantity * product.price,
        title: product.title,
      };
      dispatch(cartsActions.setShoppingData(data));
    }

    dispatch(cartsActions.setLoadData(true));
    dispatch(
      modalActions.setProductDetail({
        title: "cart",
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
      const data = {
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
      };
      dispatch(addWishListData(user, data));
    } else {
      const data = {
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
      };
      dispatch(addWishListData(user, data));
    }
    dispatch(
      modalActions.setProductDetail({
        title: "Wish List",
        isShown: true,
      })
    );
    dispatch(cartsActions.setQuantityReset());
  };

  useEffect(() => {
    if (loadData) {
      dispatch(addShoppingData(user, shoppingData));
      dispatch(cartsActions.setLoadData(false));
    }
  }, [dispatch, loadData, user, shoppingData]);

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
