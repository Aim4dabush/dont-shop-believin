//components
import PaymentInput from "./PaymentInput/PaymentInput";

//hooks
import { useValidation } from "../../../../hooks/useValidation";

//styles
import styles from "./Payment.module.scss";

const Payment = ({ cardRef, companyRef, expRef, nameRef }) => {
  const {
    value: cardValue,
    error: cardError,
    handleOnBlur: cardOnBlur,
    handleOnChange: cardOnChange,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: companyValue,
    error: companyError,
    handleOnBlur: companyOnBlur,
    handleOnChange: companyOnChange,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: expValue,
    error: expError,
    handleOnBlur: expOnBlur,
    handleOnChange: expOnChange,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: nameValue,
    error: nameError,
    handleOnBlur: nameOnBlur,
    handleOnChange: nameOnChange,
  } = useValidation((value) => value.trim() !== "");

  const cardClassName = cardError ? styles.error : null;
  const companyClassName = companyError ? styles.error : null;
  const expClassName = expError ? styles.error : null;
  const nameClassName = nameError ? styles.error : null;

  return (
    <div className={styles.payment}>
      <h2>Payment</h2>
      <PaymentInput
        controlStyle={styles.inputControl}
        error={nameError}
        errorMessage={"Please enter a name!"}
        errorStyle={nameClassName}
        handleOnBlur={nameOnBlur}
        handleOnChange={nameOnChange}
        id={"name"}
        inputRef={nameRef}
        inputStyle={styles.name}
        type={"text"}
        value={nameValue}
      >
        Name On The Card
      </PaymentInput>
      <div className={styles.wrapper}>
        <PaymentInput
          controlStyle={styles.cardControl}
          error={cardError}
          errorMessage={"Please enter a card number!"}
          errorStyle={cardClassName}
          handleOnBlur={cardOnBlur}
          handleOnChange={cardOnChange}
          id={"number"}
          inputRef={cardRef}
          inputStyle={styles.creditCard}
          type={"number"}
          value={cardValue}
        >
          Card Number
        </PaymentInput>
        <div className={styles.companyControl}>
          <label htmlFor="company">Company</label>
          <select
            className={`${styles.company} ${companyClassName}`}
            id="company"
            name="company"
            onBlur={companyOnBlur}
            onChange={companyOnChange}
            ref={companyRef}
            value={companyValue}
          >
            <option value="MA">MasterCard</option>
            <option value="VA">Visa</option>
            <option value="DR">Discover</option>
            <option value="AE">American Express</option>
          </select>
          {companyError && (
            <p className={styles.errorText}>Please select a card company!</p>
          )}
        </div>
        <PaymentInput
          controlStyle={styles.dateControl}
          error={expError}
          errorStyle={expClassName}
          errorMessage={"Please select an expiration date!"}
          handleOnBlur={expOnBlur}
          handleOnChange={expOnChange}
          id={"exp"}
          inputRef={expRef}
          inputStyle={styles.date}
          type={"date"}
          value={expValue}
        >
          Expiration Date
        </PaymentInput>
      </div>
    </div>
  );
};

export default Payment;
