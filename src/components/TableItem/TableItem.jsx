import React from 'react'
import { useSelector } from 'react-redux'
import TableList from '../TableList'
import styles from './TableItem.module.css'

const TableItem = () => {

    let tableElements = useSelector(store => store.table.filtrSortData)
    console.log(tableElements.status);
  return (
    <>
        {
            tableElements.map(element => <TableList  tableElement={element} />)
        }
    </>
  )
}

export default TableItem