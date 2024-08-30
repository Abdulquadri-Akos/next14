// "use client";
import Image from "next/image";
import styles from "./contact.module.css";

// const a = Math.random();
// console.log(a);

export const metadata = {
  title: "Contact Page",
  description: "Contact page for Super",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact-image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
