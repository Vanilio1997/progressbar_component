import {tableData, projectsTypeArr ,tokenTypeArr} from '../../data'
import sortingByNumber from '../../commons/sortingByNumber'
import sortingByText from '../../commons/sortingByText'
import mainFilterFunc from '../../commons/mainFilterFunc'


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
            const newData = sortingByText( state.filterSortData , action.payload)
            console.log(newData);
            return {...state , filterSortData: newData,sortValue: action.payload}
        }
        case 'PROJECTS_FILTER' : {

            const {tableData , projectFilterData} = mainFilterFunc(state.tableData , action.payload,state.projectsFilter ,state.sortValue)
            return {...state , filterSortData: tableData , projectsFilter: projectFilterData}
        }
        default: 
            return state
    }
}