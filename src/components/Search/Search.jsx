import React, {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'


export const Search = () => {
    const dispatch = useDispatch()
    const [handelInput, setHandelInput] = useState('')
    const inputValue = useSelector(state => state.table.searchInputValue)

    return (
        <div>
            <input 
                value={inputValue} 
                onChange={(e) => dispatch({type: 'CHANGE_INPUT_VALUE'  ,payload:e.target.value})} 
                type="search" />
            <button onClick={() => dispatch({type:'TOKEN_TYPE_SEARCH'})}>Search</button>
        </div>
    )
}
