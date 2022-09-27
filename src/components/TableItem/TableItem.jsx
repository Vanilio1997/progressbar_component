import React from 'react'
import styles from './TableItem.module.css'
import {Link} from 'react-router-dom'
export const TableItem = (props) => {
    const {id, name, status, roi, type, conditions, free, hedge, volume} = props.tableElement
    
    let backgroundColor = ''
    switch(status){
      case 'red' :
        backgroundColor = '#FFB6C1';
        break
      case 'green' : 
      backgroundColor = '#90EE90';
        break        
      default :
      backgroundColor = '#FFFFE0'
    }

    let currentVolume = []
    let valueNumberArr = volume.toString().split('')
    let numberPlace = 0

    const btnClick = (e) => {
      e.stopPropagation()
      alert(id)
    }

    for(let i = valueNumberArr.length - 1 ;  i>= 0 ; i--){
      numberPlace++
      if(numberPlace === 3){
        numberPlace = 0;
        currentVolume.push(valueNumberArr[i])
        if(i!== 0){
          currentVolume.push(' ')
        }
      } else {
        currentVolume.push(valueNumberArr[i])
      }
    }

    currentVolume = currentVolume.reverse().join('')

  return (
    <>
      
     
          <tr style={{backgroundColor: backgroundColor}} className={styles.container}>
            <td>
              <div className={styles.projectName_container}>
                <div  className={styles.circle} style={{backgroundColor: status}}/>
                <Link to={`project/${id}`}> {name}</Link>
              </div>
            </td>
            <td> <Link to={`project/${id}`}>{type}</Link></td>
            <td><Link to={`project/${id}`}>{conditions}</Link></td>
            <td><Link to={`project/${id}`}>${currentVolume}</Link></td>
            <td><Link to={`project/${id}`}>{roi} %</Link></td>
            <td><Link to={`project/${id}`}>{free}</Link></td>
            <td><Link to={`project/${id}`}>{hedge}%</Link></td>
            <td><button onClick={btnClick} className={styles.btn}>buy</button></td>
          </tr>
    </>
  )
}
