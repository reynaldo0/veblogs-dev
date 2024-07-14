import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src='/svg/instagram.svg' alt='instagram' width={24} height={24}></Image>
            <Image src='/svg/github.svg' alt='github' width={24} height={24}></Image>
            <Image src='/svg/linkedin.svg' alt='linkedin' width={24} height={24}></Image>
            <Image src='/svg/discord.svg' alt='linkedin' width={24} height={24}></Image>
        </div>
        <div className={styles.logo}>VEBLOGS</div>
        <div className={styles.links}>
          <ThemeToggle/>
          <Link href='/' className={styles.link}>Homepage</Link>
          <Link href='/' className={styles.link}>About</Link>
          <Link href='/' className={styles.link}>Contact</Link>
          <AuthLinks/>
        </div>
    </div>
  )
}
