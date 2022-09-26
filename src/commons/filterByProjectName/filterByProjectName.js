export const filterByProjectName = (data , id , projectsFilterData,sortingValue) =>{
    let projectsFiltredData = projectsFilterData
    let newData 

    projectsFiltredData = projectsFilterData.map(project  => {
       if(project.id === id) {
            return ({...project , isChecked: !project.isChecked}) 
       } else{
            return project
       }
    })


    projectsFiltredData.forEach(item => {
       if( item.filterType === data.name && item.isChecked){
         newData = data
        } 
    })
    return newData

}