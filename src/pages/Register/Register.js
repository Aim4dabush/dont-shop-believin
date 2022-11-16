//components
import RegisterForm from "../../Components/Register/RegisterForm/RegisterForm";

//styles
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h2>Registration Form</h2>
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
