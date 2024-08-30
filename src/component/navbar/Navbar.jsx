import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  // console.log(session);

  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>Logo.</div> */}
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};
export default Navbar;
