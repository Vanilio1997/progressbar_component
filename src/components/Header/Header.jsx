import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <tr className={styles.header_container}> 
        <td> <a href="#" title="Start" class={styles.arrow}>up</a><span>All</span>Project<i class="fa-solid fa-caret-up"></i> <i class="fa-solid fa-caret-down"></i></td>
        <td> <a href="#" title="Start" class={styles.arrow}>up</a><span>All</span>Token Type<i class="fa-solid fa-caret-up"></i> <i class="fa-solid fa-caret-down"></i></td>
        <td> <a href="#" title="Start" class={styles.arrow}>up</a><span>All</span>Conditions</td>
        <td><span>All</span>Volume<i class="fa-solid fa-caret-up"></i> <i class="fa-solid fa-caret-down"></i></td>
        <td>ROI</td>
        <td>Free float</td>
        <td>Insurance hedge</td>
    </tr>
  )
}




