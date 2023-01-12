import NavBar from "@components/layout/navbar/NavBar";
import styles from "@components/layout/RootLayout.module.css";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={styles.root}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
