"use client";
import { useRouter } from "next/navigation";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "@/lib/action";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  //   useEffect(() => {
  //     if (state?.success) {
  //       router.push("/login");
  //     }
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="username" />

      <input type="password" name="password" placeholder="password" />

      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
