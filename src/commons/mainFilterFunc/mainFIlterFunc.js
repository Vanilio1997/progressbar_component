import { filterByProjectName } from "../filterByProjectName/filterByProjectName";
import searchTokenType from "../searchTokenType";
import sortingByNumber from "../sortingByNumber";
import sortingByText from "../sortingByText";


export const mainFilterFunc = (objParams) => {
    const {data,checkboxId,projectFilterObj,sortValue} = objParams
    console.log(sortValue);
    let tableData = []
    let filterSettings = 
    data.forEach( (tableElem) => {
        if(filterByProjectName({...objParams, data:tableElem}) && searchTokenType({...objParams, data:tableElem})){
            tableData.push(tableElem)
        }
    })

    filterSettings =  projectFilterObj.map(project => {  
        if(project.id === checkboxId){
            return ({...project , isChecked: !project.isChecked})
        } else {
            return project
        }
    })

    if(sortValue === 'descendingNumber' || sortValue === 'ascendingNumber'){
        tableData = sortingByNumber(tableData , sortValue)
    } else if(sortValue === 'descendingText' || sortValue === 'ascendingText'){
        tableData = sortingByText(tableData , sortValue)
    }

    return {tableData: tableData ,projectFilterData: filterSettings}
}
