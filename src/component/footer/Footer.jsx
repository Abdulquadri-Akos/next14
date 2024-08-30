import styles from "./footer.module.css";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo}>Supertek</div>
        <div className={styles.text}>
          {year} Super Technologies &#169; All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
