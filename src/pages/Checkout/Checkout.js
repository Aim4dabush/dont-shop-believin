//component
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";

//styles
import styles from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
