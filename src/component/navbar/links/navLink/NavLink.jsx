"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  //Using the usePathname() to allow the toggle works with the item path
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
