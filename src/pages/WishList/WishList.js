import { useEffect } from "react";

//component
import NavigationButtons from "../../Components/WishList/NavigationButtons/NavigationButtons";
import WishCard from "../../Components/WishList/WishCard/WishCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getWishList, getWishListSize } from "../../redux/thunks/cartsThunk";

//styles
import styles from "./WishList.module.scss";

const WishList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.id);
  const wishList = useSelector((state) => state.carts.wish.cart);
  console.log(wishList);

  useEffect(() => {
    const unsub =
      (dispatch(getWishList(user)), dispatch(getWishListSize(user)));

    return () => unsub;
  }, [user, dispatch]);

  return (
    <div className={styles.container}>
      <h1>Wish List</h1>
      <NavigationButtons />
      {Array.isArray(wishList) &&
        wishList.map((item) => {
          return <WishCard key={item.id} product={item} />;
        })}
    </div>
  );
};

export default WishList;
