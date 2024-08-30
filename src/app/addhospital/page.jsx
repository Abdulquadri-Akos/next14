"use client";
import { newHospital } from "@/lib/action";
import styles from "./addhospital.module.css";
import { useFormState } from "react-dom";

const AddHospital = () => {
  const [state, formAction] = useFormState(newHospital, undefined);

  return (
    <div>
      <form action={formAction} className={styles.container}>
        <h1>Add New Hospital</h1>

        <input type="text" name="hospitalName" placeholder="Hospital Name" />
        <input type="text" name="address" placeholder="Hospital Address" />
        <input type="text" name="contact" placeholder="Phone Number" />
        <textarea
          type="text"
          name="description"
          placeholder="description"
          rows={10}
        />

        <button>Add</button>
        {state && state.error}
      </form>
    </div>
  );
};

export default AddHospital;
