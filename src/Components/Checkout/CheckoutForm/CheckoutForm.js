import { useRef } from "react";

//component
import Payment from "./Payment/Payment";
import Shipping from "./Shipping/Shipping";

//hooks
import { useValidation } from "../../../hooks/useValidation";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
  const card = useRef();
  const city = useRef();
  const company = useRef();
  const email = useRef();
  const exp = useRef();
  const fullName = useRef();
  const name = useRef();
  const state = useRef();
  const street = useRef();
  const zip = useRef();
  const user = useSelector((state) => state.auth.user.id);

  const { isValid: cardValid, reset: cardReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: cityValid, reset: cityReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: companyValid, reset: companyReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: emailValid, reset: emailReset } = useValidation((value) =>
    value.includes("@")
  );
  const { isValid: expValid, reset: expReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: fullNameValid, reset: fullNameReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: nameValid, reset: nameReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: stateValid, reset: stateReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: streetValid, reset: streetReset } = useValidation(
    (value) => value.trim() !== ""
  );
  const { isValid: zipValid, reset: zipReset } = useValidation(
    (value) => value.trim() !== ""
  );

  let formIsValid = false;

  if (
    cardValid &&
    cityValid &&
    companyValid &&
    emailValid &&
    expValid &&
    fullNameValid &&
    nameValid &&
    stateValid &&
    streetValid &&
    zipValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const order = {
      card: card.current.value,
      city: city.current.value,
      company: company.current.value,
      email: email.current.value,
      exp: exp.current.value,
      fullName: fullName.current.value,
      name: name.current.value,
      state: state.current.value,
      street: street.current.value,
      user: user,
      zip: zip.current.value,
    };
    if (formIsValid) {
      cardReset();
      cityReset();
      companyReset();
      emailReset();
      expReset();
      fullNameReset();
      nameReset();
      stateReset();
      streetReset();
      zipReset();
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmitHandler}>
      <Shipping
        cityRef={city}
        emailRef={email}
        fullNameRef={fullName}
        stateRef={state}
        streetRef={street}
        zipRef={zip}
      />
      <Payment
        cardRef={card}
        companyRef={company}
        expRef={exp}
        nameRef={name}
      />
      <button className={styles.btn}>Submit</button>
    </form>
  );
};

export default CheckoutForm;
