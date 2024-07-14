import Link from "next/link";
import React from "react";
import styles from "./MenuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=edukasi"
        className={`${styles.category} ${styles.edukasi}`}
      >
        Edukasi
      </Link>
      <Link href="/blog" className={`${styles.category} ${styles.progamming}`}>
        Progamming
      </Link>
      <Link href="/blog" className={`${styles.category} ${styles.sekolah}`}>
        Sekolah
      </Link>
      <Link href="/blog" className={`${styles.category} ${styles.motivasi}`}>
        Motivasi
      </Link>
      <Link href="/blog" className={`${styles.category} ${styles.liburan}`}>
        Liburan
      </Link>
      <Link href="/blog" className={`${styles.category} ${styles.pekerjaan}`}>
        Progamming
      </Link>
    </div>
  );
};

export default MenuCategories;
