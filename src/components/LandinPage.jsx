import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Landing.module.css"
import Navbar from './Navbar';

export default function LandingPage() {
    return (
        <div className={styles.cou}>
            <Navbar />
            {/* <div className={styles.container}> */}

                <div className={styles.container}>
                    <h1 className={styles.eslogan}>Planear tus proximos destinos, es el primer paso para hacerlo realidad</h1>
                    <Link className={styles.link} to="/home">
                        <button className={styles.btn}>Empezar</button>
                    </Link>
                </div>
                {/* <h1>¡ Welcome to the world !</h1>
            <Link to ='/home'>
            <button className={styles.btn}>get in</button>
        </Link> */}
            {/* </div> */}
        </div>
    )
}