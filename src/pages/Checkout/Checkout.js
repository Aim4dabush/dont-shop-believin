import { useEffect } from "react";

//component
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";

//redux
import { useDispatch, useSelector } from "react-redux";
import { deleteShoppingCart } from "../../redux/thunks/cartsThunk";
import { getCustomerOrder } from "../../redux/thunks/checkoutThunk";

//styles
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const dispatch = useDispatch();
  const receipt = useSelector((state) => state.checkout.order.receipt);
  const user = useSelector((state) => state.auth.user.id);

  const deleteCartHandler = () => {
    dispatch(deleteShoppingCart(user));
  };

  useEffect(() => {
    if (receipt) {
      dispatch(getCustomerOrder(receipt));
    }
  }, [dispatch, receipt]);

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <CheckoutForm />
      <button onClick={deleteCartHandler}>delete</button>
    </div>
  );
};

export default Checkout;
