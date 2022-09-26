import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import TableList from '../TableList'
import styles from './TableItem.module.css'

const TableItem = () => {

  let tableElements = useSelector(store => store.table.filterSortData)
  const sortValue = useSelector(store => store.table.sortValue)

  useEffect( () => {} ,[sortValue] )
  return (
    <>
        {
            tableElements.map(element => <TableList  tableElement={element} />)
        }
    </>
  )
}

export default TableItem