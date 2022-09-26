import React , {useState} from 'react'
import styles from './Header.module.css'
import { useSelector , useDispatch} from 'react-redux'
import Filter from '../Filter'


export const Header = () => {

  const projectsFilter = useSelector(store => store.table.projectsFilter)
  const tokenTypeFilter = useSelector(store => store.table.tokenTypeFilter)

  const dispatch = useDispatch()
  
  const [isProojectsFilter, setIsProojectsFilter] = useState(false);
  const [isTokensTypeFilter, setIsTokensTypeFilter] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState('')
  
  function selectSortParams(objToDispatch , currentValue){
    dispatch(objToDispatch)
    setIsActiveTab(currentValue)
  }
  console.log(isActiveTab);
  
  return (
    <> 
    
    <tr className={styles.header_container}> 
        <td> 
          <div className={styles.header_sortElement_container}>
            <span className={styles.filterSettings} onClick={()=> setIsProojectsFilter(!isProojectsFilter)}>All</span>
            {isProojectsFilter && <Filter filterSettings={projectsFilter} />}
              Project
            <div  className={styles.sortElement_direction_container}>
              <div 
                data-item='ascendingText'
                onClick={(e) =>  selectSortParams({type: 'SORT_BY_TEXT' , payload:e.target.dataset.item } , e.target.dataset.item)} 
                className={isActiveTab === 'ascendingText' ? styles.active_triangleUp :styles.triangleUp}
                >        
              </div>
              <div 
                data-item='descendingText'
                onClick={(e) =>  selectSortParams({type: 'SORT_BY_TEXT' , payload:e.target.dataset.item } , e.target.dataset.item)}
                className={isActiveTab === 'descendingText' ? styles.active_triangleDown :  styles.triangleDown}></div>
            </div>
          </div>
        </td>
        <td> 
          <span className={styles.filterSettings} onClick={() => setIsTokensTypeFilter(!isTokensTypeFilter)}>All</span>
          {isTokensTypeFilter && <Filter filterSettings={tokenTypeFilter} />}
          Token Type
        </td>
        <td>Conditions</td>
        <td>
          <div className={styles.header_sortElement_container}>
            Volume
            <div  className={styles.sortElement_direction_container}>
              <div 
                data-item='ascendingNumber' 
                onClick={(e) => selectSortParams({type: 'SORT_BY_NUMBER' , payload:e.target.dataset.item } , e.target.dataset.item)} 
                className={isActiveTab === 'ascendingNumber' ? styles.active_triangleUp :styles.triangleUp}>
              </div>
              <div 
                data-item='descendingNumber' 
                onClick={(e) => selectSortParams({type: 'SORT_BY_NUMBER' , payload:e.target.dataset.item } , e.target.dataset.item)} 
                className={isActiveTab === 'descendingNumber' ? styles.active_triangleDown :styles.triangleDown}>
              </div>
            </div>
          </div>
        </td>
        <td>ROI</td>
        <td>Free float</td>
        <td>Insurance hedge</td> 
    </tr>
    </>
  )
}




