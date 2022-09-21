import React from 'react'
import { useSelector } from 'react-redux'
import TableList from '../TableList'

const TableItem = () => {

    let tableElements = useSelector(store => store.table.filtrSortData)
  return (
    <div>
        {
            tableElements.map(element => <TableList tableElement={element} />)
        }
    </div>
  )
}

export default TableItem