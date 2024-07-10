import React from 'react'
import styles from './CardList.module.css'
import { Pagination } from '../Pagination/Pagination'

export const CardList = () => {
  return (
    <div className={styles.container}>CardList
    <Pagination/>
    </div>
  )
}
