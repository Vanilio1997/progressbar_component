export const filterByProjectName = ({data,projectFilterObj,checkboxId}) =>{
    let projectsFiltredData = projectFilterObj
    let newData 

    projectsFiltredData = projectFilterObj.map(project  => {
          if(project.id === checkboxId) {
               return ({...project , isChecked: !project.isChecked}) 
          } else {
               return project
          }
    })
console.log(projectsFiltredData , data);
    
     projectsFiltredData.forEach(item => {
          if( item.filterType === data.name && item.isChecked){
               newData = data
          } 
    })
 
    return newData

}