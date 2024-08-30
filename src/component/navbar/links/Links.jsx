"use client";

import styles from "./link.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Image from "next/image";
import { doLogout } from "@/lib/action";

const links = [
  {
    title: "Homepage",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },

  {
    title: "Contact",
    path: "/contact",
  },

  {
    title: "Hospital",
    path: "/hospitals",
  },
];
const Links = ({ session }) => {
  // State for the menu
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={doLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt="menu-icon"
        height={30}
        width={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
