import RegisterForm from "@/component/registerForm/registerForm";
import styles from "./register.module.css";
import { doSocialLogin } from "@/lib/action";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={doSocialLogin}>
          <div className={styles.btn}>
            <button type="submit" name="action" value="google">
              Sign Up With Google
            </button>

            <button type="submit" name="action" value="github">
              Sign Up With GitHub
            </button>
          </div>
        </form>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
