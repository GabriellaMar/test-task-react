import { NavLink } from "react-router-dom"
import styles from './Navigation.module.css'
export const Navigation = ()=>{
    return (
        <nav>  
        <ul className={styles.navList}>
            <li >
                <NavLink to='/'>
                   Create
                </NavLink>
            </li>
            <li  >
                <NavLink to='/list'>
                   List
                </NavLink>
            </li>
          
        </ul>
        </nav>
    )
}