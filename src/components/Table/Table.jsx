import React from 'react'
import TableHeader from '../TableHeader'
import TableList from '../TableList'
import styles from './Table.module.css'

export const Table = () => {
  return (
    <table className={styles.table_container}>
        <TableHeader />
        <TableList />
    </table>
  )
}
