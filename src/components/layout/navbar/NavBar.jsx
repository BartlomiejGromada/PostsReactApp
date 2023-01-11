import styles from "@components/layout/navbar/NavBar.module.css";
import NavBarItem from "@components/layout/navbar/NavBarItem";

const navbarItems = [
    {
        id: 1,
        name: "Posts",
        url: "/posts",
    },
    {
        id: 2,
        name: "About",
        url: "/about"
    }
];

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            {navbarItems.map((navbarItem) => (
                <NavBarItem key={navbarItem.id} navbarItem={navbarItem} />
            ))}
        </div>
    )
};

export default NavBar;