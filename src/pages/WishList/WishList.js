import { useEffect } from "react";

//component
import NavigationButtons from "../../Components/WishList/NavigationButtons/NavigationButtons";
import WishCard from "../../Components/WishList/WishCard/WishCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../../redux/thunks/cartsThunk";

//styles
import styles from "./WishList.module.scss";

const WishList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.id);
  const wishCart = useSelector((state) => state.carts.wishCart);

  useEffect(() => {
    const unsub = dispatch(getWishList(user));

    return () => unsub;
  }, [user, dispatch]);

  return (
    <div
      className={`${styles.container} ${
        wishCart?.length <= 3 && styles.height
      }`}
    >
      <h1>Wish List</h1>
      <NavigationButtons />
      {Array.isArray(wishCart) &&
        wishCart.map((item) => {
          return <WishCard key={item.id} product={item} />;
        })}
    </div>
  );
};

export default WishList;
