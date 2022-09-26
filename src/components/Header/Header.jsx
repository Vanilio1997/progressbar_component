import React , {useState} from 'react'
import styles from './Header.module.css'
import { useSelector } from 'react-redux'
import Filter from '../Filter'


export const Header = () => {
  // <a href="#" title="Start" className={styles.arrow}>up</a>

  const projectsFilter = useSelector(store => store.table.projectsFilter)
  const tokenTypeFilter = useSelector(store => store.table.tokenTypeFilter)
  
  const [isProojectsFilter, setIsProojectsFilter] = useState(false);
  const [isTokensTypeFilter, setIsTokensTypeFilter] = useState(false);
  
  return (
    <> 
    
    <tr className={styles.header_container}> 
        <td> 
          <div className={styles.header_sortElement_container}>
            <span className={styles.filterSettings} onClick={()=> setIsProojectsFilter(!isProojectsFilter)}>All</span>
            {isProojectsFilter && <Filter filterSettings={projectsFilter} />}
              Project
            <div  className={styles.sortElement_direction_container}>
              <div className={styles.triangleUp}></div>
              <div className={styles.triangleDown}></div>
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
              <div className={styles.triangleUp}></div>
              <div className={styles.triangleDown}></div>
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




