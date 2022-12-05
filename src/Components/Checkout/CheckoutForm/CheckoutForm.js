import { useRef } from "react";

//component
import Payment from "./Payment/Payment";
import Shipping from "./Shipping/Shipping";

//hooks
import { useValidation } from "../../../hooks/useValidation";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../redux/slices/cartsSlice";
import { addCustomerOrder } from "../../../redux/thunks/checkoutThunk";
import { deleteShoppingCart } from "../../../redux/thunks/cartsThunk";

//styles
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.carts.shoppingCart);
  const total = useSelector((state) => state.checkout.order.total);
  const user = useSelector((state) => state.auth.user.id);
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

  const {
    error: cardError,
    isValid: cardValid,
    value: cardValue,
    handleOnBlur: cardOnBlur,
    handleOnChange: cardOnChange,
    reset: cardReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: cityError,
    isValid: cityValid,
    value: cityValue,
    handleOnBlur: cityOnBlur,
    handleOnChange: cityOnChange,
    reset: cityReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: companyError,
    isValid: companyValid,
    value: companyValue,
    handleOnBlur: companyOnBlur,
    handleOnChange: companyOnChange,
    reset: companyReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: emailError,
    isValid: emailValid,
    value: emailValue,
    handleOnBlur: emailOnBlur,
    handleOnChange: emailOnChange,
    reset: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    error: expError,
    isValid: expValid,
    value: expValue,
    handleOnBlur: expOnBlur,
    handleOnChange: expOnChange,
    reset: expReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: fullNameError,
    isValid: fullNameValid,
    value: fullNameValue,
    handleOnBlur: fullNameOnBlur,
    handleOnChange: fullNameOnChange,
    reset: fullNameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: nameError,
    isValid: nameValid,
    value: nameValue,
    handleOnBlur: nameOnBlur,
    handleOnChange: nameOnChange,
    reset: nameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: stateError,
    isValid: stateValid,
    value: stateValue,
    handleOnBlur: stateOnBlur,
    handleOnChange: stateOnChange,
    reset: stateReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: streetError,
    isValid: streetValid,
    value: streetValue,
    handleOnBlur: streetOnBlur,
    handleOnChange: streetOnChange,
    reset: streetReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    error: zipError,
    isValid: zipValid,
    value: zipValue,
    handleOnBlur: zipOnBlur,
    handleOnChange: zipOnChange,
    reset: zipReset,
  } = useValidation((value) => value.trim() !== "");

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
      address: {
        street: street.current.value,
        city: city.current.value,
        state: state.current.value,
        zip: zip.current.value,
      },
      creditCard: {
        company: company.current.value,
        name: name.current.value,
        card: card.current.value,
        exp: exp.current.value,
      },
      email: email.current.value,
      fullName: fullName.current.value,
      items: shoppingCart,
      total: total,
      user: user,
    };

    if (formIsValid) {
      dispatch(addCustomerOrder(order));
      dispatch(deleteShoppingCart(order.user));
      dispatch(cartsActions.setShoppingCart([]));
      dispatch(cartsActions.setShoppingDataReset());
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
        city={{ city, cityError, cityValue, cityOnBlur, cityOnChange }}
        email={{ email, emailError, emailValue, emailOnBlur, emailOnChange }}
        fullName={{
          fullName,
          fullNameError,
          fullNameValue,
          fullNameOnBlur,
          fullNameOnChange,
        }}
        state={{ state, stateError, stateValue, stateOnBlur, stateOnChange }}
        street={{
          street,
          streetError,
          streetValue,
          streetOnBlur,
          streetOnChange,
        }}
        zip={{ zip, zipError, zipValue, zipOnBlur, zipOnChange }}
      />
      <Payment
        card={{ card, cardError, cardValue, cardOnBlur, cardOnChange }}
        company={{
          company,
          companyError,
          companyValue,
          companyOnBlur,
          companyOnChange,
        }}
        exp={{ exp, expError, expValue, expOnBlur, expOnChange }}
        name={{ name, nameError, nameValue, nameOnBlur, nameOnChange }}
      />
      <button className={styles.btn}>Submit</button>
    </form>
  );
};

export default CheckoutForm;
