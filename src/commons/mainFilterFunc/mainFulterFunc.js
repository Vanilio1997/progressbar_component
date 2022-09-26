import { filterByProjectName } from "../filterByProjectName/filterByProjectName";

export const mainFilterFunc = (data ,id,projectsFilterData,sortingValue) => {
    console.log(projectsFilterData);
    const tableData = []
    let filterSettings = 
    data.forEach( (tableElem) => {
        if(filterByProjectName(tableElem ,id ,projectsFilterData)){
            tableData.push(tableElem)
        }
    })


    filterSettings =  projectsFilterData.map(project => {  
        if(project.id === id){
            return ({...project , isChecked: !project.isChecked})
        } else {
            return project
        }
    })

    return {tableData: tableData ,projectFilterData: filterSettings}
}
