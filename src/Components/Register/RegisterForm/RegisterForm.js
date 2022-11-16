import { useRef } from "react";

//components
import FormButton from "./FormButton/FormButton";
import FormInput from "./FormInput/FormInput";

//custom hook
import { useValidation } from "../../../hooks/useValidation";

//redux
import { useDispatch, useSelector } from "react-redux";
import { newUserRegistration } from "../../../redux/thunks/registerThunk";

//styles
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const {
    value: email,
    isValid: emailValid,
    error: emailError,
    handleOnBlur: emailOnBlur,
    handleOnChange: emailOnChange,
    reset: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    value: password,
    isValid: passwordValid,
    error: passwordError,
    handleOnBlur: passwordOnBlur,
    handleOnChange: passwordOnChange,
    reset: passwordReset,
  } = useValidation((value) => value.trim() !== "" && value.length >= 6);

  let formIsValid = false;

  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      dispatch(
        newUserRegistration(emailRef.current.value, passwordRef.current.value)
      );

      emailReset();
      passwordReset();
    }
  };

  const emailClassName = emailError ? styles.error : null;
  const passwordClassName = passwordError ? styles.error : null;

  return (
    <form className={styles.formCard} onSubmit={onSubmitHandler}>
      <div className={styles.inputWrapper}>
        <FormInput
          classStyle={emailClassName}
          error={emailError}
          errorMessage={"Please use a valid email address!"}
          handleOnBlur={emailOnBlur}
          handleOnChange={emailOnChange}
          id={"email"}
          inputRef={emailRef}
          value={email}
        >
          Email
        </FormInput>
        <FormInput
          classStyle={passwordClassName}
          error={passwordError}
          errorMessage={"Your password is invalid!"}
          handleOnBlur={passwordOnBlur}
          handleOnChange={passwordOnChange}
          id={"password"}
          inputRef={passwordRef}
          value={password}
        >
          Password
        </FormInput>
      </div>
      <FormButton />
    </form>
  );
};

export default RegisterForm;
