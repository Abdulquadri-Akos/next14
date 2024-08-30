import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About page for Super",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Carefinder</h2>
        <h1 className={styles.title}>
          Carefinder is committed to simplifying access to healthcare
          information.
        </h1>
        <p className={styles.description}>
          We understand the importance of staying healthy, and we know that
          finding the right healthcare facility can sometimes be a challenge.
          That&rsquo;s why we&rsquo;ve created Carefinder, a user-friendly
          platform that helps you find, export, and share hospitals within your
          region. Whether you&rsquo;re looking for a local hospital, need to
          share information with loved ones, or manage healthcare data,
          Carefinder is here to assist you. With our intuitive search feature,
          easy export options, and robust sharing capabilities, you can take
          control of your healthcare journey. Carefinder is your reliable guide
          to quality healthcare.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1,000+</h1>
            <p>Hospitals Listed</p>
          </div>

          <div className={styles.box}>
            <h1>1,000+</h1>
            <p>Hospitals Listed</p>
          </div>

          <div className={styles.box}>
            <h1>5,000+</h1>
            <p>Users Served</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About image"
          fill
          className={styles.imgContain}
        />
      </div>
    </div>
  );
};

export default About;
