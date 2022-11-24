import { useRef } from "react";

//component
import Shipping from "./Shipping/Shipping";

//styles
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
  const form = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form.current);
  };
  return (
    <form className={styles.container} onSubmit={onSubmitHandler} ref={form}>
      <Shipping />
      <button className={styles.btn}>Submit</button>
    </form>
  );
};

export default CheckoutForm;
