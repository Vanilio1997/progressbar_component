import React from 'react'
import { useSelector , useDispatch} from 'react-redux'

export const FilterElement = (props) => {
  const dispatch = useDispatch()
  const {filterCheckboxSettings} = props
  return (
    <div> 
      <input 
        type='checkbox' 
        checked={filterCheckboxSettings.isChecked} 
        onChange={() => dispatch({type:'PROJECTS_FILTER' , payload: filterCheckboxSettings.id})} />        
        <span>{filterCheckboxSettings.filterType}</span>
    </div> 
  )
}
