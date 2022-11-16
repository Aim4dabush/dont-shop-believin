//components
import LoginForm from "../../Components/Login/LoginForm/LoginForm";

//styles
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Member Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
