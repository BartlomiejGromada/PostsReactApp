import { NavLink } from "react-router-dom"
import styles from "@components/layout/navbar/NavBarItem.module.css";

const NavBarItem = ({ navbarItem }) => {
    return (
        <NavLink
            to={navbarItem.url}
            key={navbarItem.id}
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            end={navbarItem.url === "/" ? true : false}
        >
            <div>
                {navbarItem.name}
            </div>
        </NavLink>
    )
};

export default NavBarItem;