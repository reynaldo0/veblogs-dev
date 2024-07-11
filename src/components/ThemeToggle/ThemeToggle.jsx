"use client"

import React, { useContext } from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const {toggle, theme} = useContext(ThemeContext)

  console.log(theme)
  
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src='/svg/moon.svg' alt='' width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src='/svg/sun.svg' alt='' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle