import React from 'react';
import styles from "./BackDrop.module.css";

const BackDrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.click} />
    )
};

export default BackDrop;