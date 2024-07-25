import React from "react";
import styles from "@/app/[slug]/SinglePage.module.css";
import { Menu } from "@/components/Menu/Menu";
import Image from "next/image";
import { Comments } from "@/components/Comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            sint?
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>Reynal</span>
                <span className={styles.date}>09-10-2007</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis corrupti quasi culpa ipsa error esse nulla blanditiis distinctio magnam.</p>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, suscipit!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis corrupti quasi culpa ipsa error esse nulla blanditiis distinctio magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis corrupti quasi culpa ipsa error esse nulla blanditiis distinctio magnam.</p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
