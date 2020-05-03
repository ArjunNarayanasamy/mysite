import React from "react";
import styles from "./SideBar.module.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const SideBar = (props) => {
    return (
        <header className={styles.sidebar}>
            <nav className={styles.sidebar_navigation}>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className={styles.sidebar_logo}><a href="/">Arjun Narayanasamy</a></div>
                <div className={styles.spacer}></div>
                <div className={styles.sidebar_nav_list}>
                    <ul>
                        <li><a href="/">About me</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default SideBar;