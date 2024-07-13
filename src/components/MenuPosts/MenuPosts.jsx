import Link from "next/link";
import React from "react";
import styles from './MenuPosts.module.css'
import Image from "next/image";

export const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.progamming}`}>
            Progamming
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            autem.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Reys - </span>
            <span className={styles.date}>2 Januari 2099</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.motivasi}`}>
            Motivasi
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            autem.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Reys - </span>
            <span className={styles.date}>2 Januari 2099</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.edukasi}`}>
            Edukasi
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            autem.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Reys - </span>
            <span className={styles.date}>2 Januari 2099</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.liburan}`}>
            Liburan
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            autem.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Reys - </span>
            <span className={styles.date}>2 Januari 2099</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
