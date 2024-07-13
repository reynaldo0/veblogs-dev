import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Kabar Terpanas?</h2>
      <h1 className={styles.title}>Paling Populer</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.progamming}`}>Progamming</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.motivasi}`}>Motivasi</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.edukasi}`}>Edukasi</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.liburan}`}>Liburan</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={styles.subtitle}>Konten pilihan populer</h2>
      <h1 className={styles.title}>Pilihan Terbaik!</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.progamming}`}>Progamming</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.motivasi}`}>Motivasi</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.edukasi}`}>Edukasi</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.liburan}`}>Liburan</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, autem.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Reys - </span>
              <span className={styles.date}>2 Januari 2099</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
