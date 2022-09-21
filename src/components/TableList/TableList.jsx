import React from 'react'

export const TableList = (props) => {
    const {id, name, status, roi, type, conditions, free, hedge, volume} = props.tableElement
    console.log(props)
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>{conditions}</td>
      <td>${volume}</td>
      <td>{roi} %</td>
      <td>{free}</td>
      <td>{hedge}%</td>
      <td><button>buy</button></td>
    </tr>
  )
}
