import {tableData, projectsTypeArr ,tokenTypeArr} from '../../data'


let initialState = {
    tableData: tableData,
    projectsFilter: projectsTypeArr,
    tokenTypeFilter: tokenTypeArr,
    filtrSortData: tableData
}


export const dataReducer = (state = initialState , action) =>{
    switch(action.type){
        default: 
            return state
    }
}