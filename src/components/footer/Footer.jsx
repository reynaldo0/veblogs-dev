import React from 'react'
import styles from '@/components/Footer/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/svg/instagram.svg' alt='VEBLOGS' width={50} height={50} />
          <h1 className={styles.logoText}>VEBLOGS</h1>
        </div>
        <p className={styles.desc}>tempat terbaik untuk buat blogger anda, bersama VEBLOGS buat website blog lebih mudah!</p>
        <div className={styles.icons}>
          <Image src='/svg/github.svg' alt='' width={18} height={18}/>
          <Image src='/svg/discord.svg' alt='' width={18} height={18}/>
          <Image src='/svg/instagram.svg' alt='' width={18} height={18}/>
          <Image src='/svg/linkedin.svg' alt='' width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Akses</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Konten</span>
          <Link href='/'>Edukasi</Link>
          <Link href='/'>Progamming</Link>
          <Link href='/'>Sekolah</Link>
          <Link href='/'>Motivasi</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Sosial</span>
          <Link href='/'>Instagram</Link>
          <Link href='/'>LinkedIn</Link>
          <Link href='/'>Github</Link>
          <Link href='/'>Discord</Link>
        </div>
      </div>
    </div>
  )
}
