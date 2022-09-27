import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import TableItem from '../TableItem'



export const TableList = () => {

  let tableElements = useSelector(store => store.table.filterSortData)
  const sortValue = useSelector(store => store.table.sortValue)

  useEffect( () => {} ,[sortValue] )
  return (
    <>
        {
            tableElements.map(element =>  <TableItem  tableElement={element} /> )
        }
    </>
  )
}

