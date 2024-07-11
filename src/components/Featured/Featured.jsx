import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}><b>Selamat datang!</b> VEBLOGS tempat terbaik buat blogger anda!</p>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/vector/hero.jpg' alt='' fill className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eos!</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio nostrum distinctio atque vel rerum aliquam saepe eum earum placeat?</p>
          <button className={styles.button}>Selengkapnya</button>
        </div>  
      </div>
    </div>
  )
}