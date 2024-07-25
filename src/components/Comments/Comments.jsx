import React from "react";
import styles from "./Comments.module.css";
import Link from "next/link";
import Image from "next/image";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
            <textarea placeholder="Tuliskan komen di sini..." className={styles.input}/>
            <button className={styles.button}>Kirim</button>
        </div>
      ) : (
        <Link href="/login">Login untuk menulis komen</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                <div className={styles.userInfo}>
                    <span className={styles.username}>Reynals</span>
                    <span className={styles.date}>10.10.2024</span>
                </div>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptatibus voluptas harum sint provident, atque deserunt ipsa itaque tempora.</p>
        </div>
      </div>
    </div>
  );
};