import { useRef } from "react";

//components
import FormButton from "./FormButton/FormButton";
import FormInput from "./FormInput/FormInput";

//redux
import { useDispatch, useSelector } from "react-redux";
import { newUserRegistration } from "../../../redux/thunks/registerThunk";

//styles
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      newUserRegistration(
        emailInputRef.current.value,
        passwordInputRef.current.value
      )
    );
  };

  return (
    <form className={styles.formCard} onSubmit={onSubmitHandler}>
      <div className={styles.inputWrapper}>
        <FormInput id={"email"} inputRef={emailInputRef}>
          Email
        </FormInput>
        <FormInput id={"password"} inputRef={passwordInputRef}>
          Password
        </FormInput>
      </div>
      <FormButton />
    </form>
  );
};

export default RegisterForm;
