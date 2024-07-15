import React from 'react'
import styles from '@/components/CardList/CardList.module.css'
import { Pagination } from '../Pagination/Pagination'
import Image from 'next/image'
import { Card } from '../Card/Card'

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Berita Terkini</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    <Pagination/>
    </div>
  )
}
