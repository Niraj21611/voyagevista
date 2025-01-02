import { NavLink } from "react-router-dom";
import styles from "../components/AppNav.module.css";

function AppNav() {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="cities">Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries">countries</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AppNav
