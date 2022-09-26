import React from 'react'
import FilterElement from './FilterElement'
import styles from './Filter.module.css'

export const Filter = (props) => {

const {filterSettings} = props
    
  return (
    <div className={styles.container}>
      {
        filterSettings.map(item => <FilterElement filterCheckboxSettings={item} />)
      }
    </div>
  )
}
