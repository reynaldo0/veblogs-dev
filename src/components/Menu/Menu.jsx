import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { MenuPosts } from '../MenuPosts/MenuPosts'

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Kabar Terpanas?</h2>
      <h1 className={styles.title}>Paling Populer</h1>
      <MenuPosts withImage={false}/>
      <h2 className={styles.subtitle}>Yang berkaitan dengan topik</h2>
      <h1 className={styles.title}>Kategori</h1>
      <div className={styles.categoryList}>
        <Link href='/blog?cat=edukasi' className={`${styles.category} ${styles.edukasi}`}>Edukasi</Link>
        <Link href='/blog' className={`${styles.category} ${styles.progamming}`}>Progamming</Link>
        <Link href='/blog' className={`${styles.category} ${styles.sekolah}`}>Sekolah</Link>
        <Link href='/blog' className={`${styles.category} ${styles.motivasi}`}>Motivasi</Link>
        <Link href='/blog' className={`${styles.category} ${styles.liburan}`}>Liburan</Link>
        <Link href='/blog' className={`${styles.category} ${styles.pekerjaan}`}>Progamming</Link>
      </div>

      <h2 className={styles.subtitle}>Konten pilihan populer</h2>
      <h1 className={styles.title}>Pilihan Terbaik!</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}
