import LoginForm from "@/component/loginForm/loginForm";
import { doSocialLogin } from "@/lib/action";
import styles from "./login.module.css";


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <form action={handleWithGoogle}>
          <button className={styles.github}>Login with Google</button>
        </form> */}

        <form className={styles.form} action={doSocialLogin}>
          <div className={styles.btn}>
            <button type="submit" name="action" value="google">
              Sign In With Google
            </button>

            <button type="submit" name="action" value="github">
              Sign In With GitHub
            </button>
          </div>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
