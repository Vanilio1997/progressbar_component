import {tableData, projectsTypeArr ,tokenTypeArr} from '../../data'
import sortingByNumber from '../../commons/sortingByNumber'
import sortingByText from '../../commons/sortingByText'
import mainFilterFunc from '../../commons/mainFilterFunc'


let initialState = {
    tableData: tableData,
    projectsFilter: projectsTypeArr,
    tokenTypeFilter: tokenTypeArr,
    filterSortData: tableData,
    sortValue: '',
    searchInputValue: ''
}


export const dataReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'SORT_BY_NUMBER' : {           
            const newData = sortingByNumber(state.filterSortData , action.payload)
            return {...state , filterSortData: newData ,sortValue: action.payload}
        }
        case 'SORT_BY_TEXT' : {
            const newData = sortingByText( state.filterSortData , action.payload)
            return {...state , filterSortData: newData,sortValue: action.payload}
        }
        case 'PROJECTS_FILTER' : {

            const {tableData , projectFilterData} = mainFilterFunc({data:state.tableData , checkboxId:action.payload, projectFilterObj:state.projectsFilter ,inputValue:state.searchInputValue, sortValue: state.sortValue})
            return {...state , filterSortData: tableData , projectsFilter: projectFilterData}
        }
        case 'TOKEN_TYPE_SEARCH' : {
            const {tableData} = mainFilterFunc({data: state.tableData ,inputValue: state.searchInputValue ,projectFilterObj: state.projectsFilter , checkboxId: false })
            return {...state, filterSortData: tableData}
        }
        case 'CHANGE_INPUT_VALUE' : {
            return {...state , searchInputValue: action.payload}
        }
        default: 
            return state
    }
}





