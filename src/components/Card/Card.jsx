import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>2 Januari 2023 - </span>
            <span className={styles.category}>Sekolah</span>
        </div>
        <Link href='/'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quis alias eos eius voluptatem vel, sed aperiam ea autem omnis?...
        </p>
        <Link href='/' className={styles.link}>Baca Selengkapnya</Link>
      </div>
    </div>
  );
};
