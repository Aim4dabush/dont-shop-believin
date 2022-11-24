//components
import PaymentInput from "./PaymentInput/PaymentInput";

//hooks
import { useValidation } from "../../../../hooks/useValidation";

//styles
import styles from "./Payment.module.scss";

const Payment = (props) => {
  const { card, cardError, cardValue, cardOnBlur, cardOnChange } = props.card;
  const {
    company,
    companyError,
    companyValue,
    companyOnBlur,
    companyOnChange,
  } = props.company;
  const { exp, expError, expValue, expOnBlur, expOnChange } = props.exp;
  const { name, nameError, nameValue, nameOnBlur, nameOnChange } = props.name;

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
        inputRef={name}
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
          inputRef={card}
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
            ref={company}
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
          inputRef={exp}
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
