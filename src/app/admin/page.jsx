"use client";
import { Suspense } from "react";
import styles from "./admin.module.css";
import HospitalList from "@/component/hospitalList/hospitalList";
import Link from "next/link";

const admin = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.btn} href="/addhospital">
        <b>Add Hospital</b>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <HospitalList />
      </Suspense>
    </div>
  );
};

export default admin;
