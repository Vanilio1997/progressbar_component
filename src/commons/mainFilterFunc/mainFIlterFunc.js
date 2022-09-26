import { filterByProjectName } from "../filterByProjectName/filterByProjectName";
import searchTokenType from "../searchTokenType";


export const mainFilterFunc = (objParams) => {
    console.log(objParams);
    const {data,checkboxId,projectFilterObj} = objParams
    const tableData = []
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

    return {tableData: tableData ,projectFilterData: filterSettings}
}
