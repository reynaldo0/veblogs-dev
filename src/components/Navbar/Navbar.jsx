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
            <Image src='/facebook.png' alt='facebook' width={24} height={24}></Image>
            <Image src='/facebook.png' alt='facebook' width={24} height={24}></Image>
            <Image src='/facebook.png' alt='facebook' width={24} height={24}></Image>
        </div>
        <div className={styles.logo}>VEBLOGS</div>
        <div className={styles.links}>
          <ThemeToggle/>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Homepage</Link>
          <AuthLinks/>
        </div>
    </div>
  )
}
