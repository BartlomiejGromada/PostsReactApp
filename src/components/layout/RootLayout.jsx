import { Outlet } from "react-router-dom";
import NavBar from "@components/layout/navbar/NavBar";
import styles from "@components/layout/RootLayout.module.css";

const RootLayout = () => {
    return (
        <div className={styles.root}>
            <NavBar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
};

export default RootLayout;