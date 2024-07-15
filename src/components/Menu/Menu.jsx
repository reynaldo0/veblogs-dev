import React from 'react'
import styles from '@/components/Menu/Menu.module.css'
import { MenuPosts } from '../MenuPosts/MenuPosts'
import MenuCategories from '../MenuCategories/MenuCategories'

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Kabar Terpanas?</h2>
      <h1 className={styles.title}>Paling Populer</h1>
      <MenuPosts withImage={false}/>
      <h2 className={styles.subtitle}>Yang berkaitan dengan topik</h2>
      <h1 className={styles.title}>Kategori</h1>
      <MenuCategories/>
      <h2 className={styles.subtitle}>Konten pilihan populer</h2>
      <h1 className={styles.title}>Pilihan Terbaik!</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}
