//components
import PaymentInput from "./PaymentInput/PaymentInput";

//styles
import styles from "./Payment.module.scss";

const Payment = () => {
  return (
    <div className={styles.payment}>
      <h2>Payment</h2>
      <PaymentInput
        controlStyle={styles.inputControl}
        id={"name"}
        inputStyle={styles.name}
        type={"text"}
      >
        Name On The Card
      </PaymentInput>

      <div className={styles.wrapper}>
        <PaymentInput
          controlStyle={styles.cardControl}
          id={"number"}
          inputStyle={styles.creditCard}
          type={"number"}
        >
          Card Number
        </PaymentInput>
        <div className={styles.companyControl}>
          <label htmlFor="company">Company</label>
          <select className={styles.company} name="company" id="company">
            <option value="MA">MasterCard</option>
            <option value="VA">Visa</option>
            <option value="DR">Discover</option>
            <option value="AE">American Express</option>
          </select>
        </div>
        <PaymentInput
          controlStyle={styles.dateControl}
          id={"exp"}
          inputStyle={styles.date}
          type={"date"}
        >
          Expiration Date
        </PaymentInput>
      </div>
    </div>
  );
};

export default Payment;
