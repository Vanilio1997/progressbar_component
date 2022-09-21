import {tableData} from '../../data'

let initialState = {
    tableData: tableData,
    filtrSortData: tableData
}


export const dataReducer = (state = initialState , action) =>{
    switch(action.type){
        default: 
            return state
    }
}