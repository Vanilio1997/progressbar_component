import {tableData, projectsTypeArr ,tokenTypeArr} from '../../data'
import sortingByNumber from '../../commons/sortingByNumber'
import sortingByText from '../../commons/sortingByText'


let initialState = {
    tableData: tableData,
    projectsFilter: projectsTypeArr,
    tokenTypeFilter: tokenTypeArr,
    filterSortData: tableData,
    sortValue: ''
}


export const dataReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'SORT_BY_NUMBER' : {
                
            const newData = sortingByNumber(state.filterSortData , action.payload)
            return {...state , filterSortData: newData ,sortValue: action.payload}
        }
        case 'SORT_BY_TEXT' : {
            console.log(action.payload , state.filterSortData);
            const newData = sortingByText( state.filterSortData , action.payload)
            console.log(newData);
            return {...state , filterSortData: newData,sortValue: action.payload}
        }
        default: 
            return state
    }
}