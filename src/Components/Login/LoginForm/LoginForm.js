import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

//components
import FormButton from "./FormButton/FormButton";
import FormInput from "./FormInput/FormInput";

//redux
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../../redux/thunks/authThunk";

//styles
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const isAuth = useSelector((state) => state.auth.user.isAuth);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(authLogin(emailRef.current.value, passwordRef.current.value));
    // emailRef.current.value = "";
    // passwordRef.current.value = "";
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/products", { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <form className={styles.loginCard} onSubmit={onSubmitHandler}>
      <div className={styles.inputWrapper}>
        <FormInput id={"email"} inputRef={emailRef}>
          Email
        </FormInput>
        <FormInput id={"password"} inputRef={passwordRef}>
          Password
        </FormInput>
      </div>
      <FormButton />
    </form>
  );
};

export default LoginForm;
