import React from 'react'
import styles from '@/components/Featured/Featured.module.css'
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
          <h1 className={styles.postTitle}>Membantu anda dalam pembuatan Blogger!</h1>
          <p className={styles.postDesc}>VEBLOGS hadir membantu anda membuat suatu blog dan terdapat kategori blog yang dapat anda buat, bersama VEBLOGS buat website blog lebih mudah!</p>
          <button className={styles.button}>Selengkapnya</button>
        </div>  
      </div>
    </div>
  )
}