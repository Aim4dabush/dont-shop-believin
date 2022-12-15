import { useRef } from "react";
import { useNavigate } from "react-router-dom";

//components
import FormButton from "./FormButton/FormButton";
import FormInput from "./FormInput/FormInput";

//custom hook
import { useValidation } from "../../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";
import { newUserRegistration } from "../../../redux/thunks/registerThunk";

//styles
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  //checks if inputs are valid
  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  //submits registration data
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //if form is valid submit data
    if (formIsValid) {
      dispatch(
        newUserRegistration(emailRef.current.value, passwordRef.current.value)
      );

      emailReset();
      passwordReset();
      navigate("/login", { replace: true });
    }
  };

  //checks for errors and use error styles
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
