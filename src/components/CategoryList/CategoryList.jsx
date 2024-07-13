import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>KATEGORI POPULER</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.edukasi}`}>
          <Image
            src="/svg/github.svg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          EDUKASI
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.progamming}`}>
          <Image
            src="/svg/github.svg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          PROGAMMING
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.sekolah}`}>
          <Image
            src="/svg/github.svg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          SEKOLAH
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.motivasi}`}>
          <Image
            src="/svg/github.svg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          MOTIVASI
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.keseharian}`}>
          <Image
            src="/svg/github.svg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          KESEHARIAN
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.pekerjaan}`}>
          <Image
            src="/svg/github.svg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          PEKERJAAN
        </Link>
      </div>
    </div>
  );
};
