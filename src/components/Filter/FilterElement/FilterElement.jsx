import React from 'react'

export const FilterElement = (props) => {
  const {filterCheckboxSettings} = props
  console.log(filterCheckboxSettings);
  return (
<div> <input type='checkbox' checked={filterCheckboxSettings.isChecked} /> <span>{filterCheckboxSettings.filterType}</span> </div> 
  )
}
