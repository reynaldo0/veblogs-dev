import React from 'react'
import styles from '@/components/Pagination/Pagination.module.css'

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Sebelumnya</button>
      <button className={styles.button}>Selanjutnya</button>
    </div>
  )
}
