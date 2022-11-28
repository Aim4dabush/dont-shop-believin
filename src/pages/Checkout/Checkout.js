import { useEffect } from "react";

//component
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCustomerOrder } from "../../redux/thunks/checkoutThunk";

//styles
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const dispatch = useDispatch();
  const receipt = useSelector((state) => state.checkout.order.receipt);

  useEffect(() => {
    if (receipt) {
      dispatch(getCustomerOrder(receipt));
    }
  }, [dispatch, receipt]);

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
