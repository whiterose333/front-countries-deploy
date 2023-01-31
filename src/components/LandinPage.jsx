import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Landing.module.css"
import Navbar from './Navbar';

export default function LandingPage(){
    return(
        <div className={styles.cou}>
            <Navbar/>
            {/* <h1>¡ Welcome to the world !</h1>
            <Link to ='/home'>
                <button className={styles.btn}>get in</button>
            </Link> */}
        </div>
    )
}