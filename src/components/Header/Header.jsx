
import { Navigation } from "../Navigation/Navigation"
import styles from './Header.module.css'
export const Header = ()=>{
    return (
    <header className={styles.header}>
     <Navigation />
     <div>
        <ul>
            <li>Curent Page:</li>
            <li>Previous Page:</li>
        </ul>
     </div>
     </header>
    )
}