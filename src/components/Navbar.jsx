import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css"
import { useDispatch } from 'react-redux';
import { getCountries } from '../actions';


export default function Navbar() {

    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleToggle(e) {
        setToggle(!toggle)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.titulo}>
                <h3>COUNTRIES </h3>
                <h5 className={styles.app}>app</h5>
            </div>
            <a onClick={e => { handleToggle(e) }} href='#' className={styles.toggle} id="toggle">
                <span className={styles.bar} id="bar"></span>
                <span className={styles.bar} id="bar"></span>
                <span className={styles.bar} id="bar"></span>
            </a>

            <div className={styles.linkContainer} id="linkcontainer">
                <Link className={styles.link} to="/home">Home</Link>
            </div>

            <div className={styles.linkContainer} id="linkcontainer">
                <Link className={styles.link} to="/activity">Crear actividad turística</Link>

            </div>


            <div className={styles.linkContainer} id="linkcontainer">
                {/* <button className={styles.btn}  onClick={e => { handleClick(e) }}>volver a cargar los paises</button> */}
                <Link className={styles.link} onClick={e => { handleClick(e) }}>volver a cargar los paises</Link>
            </div>
            {
                !toggle ?
                    <div className={styles.linkResponsive} id="linkcontainer">
                        <Link className={styles.link2} to="/home">Home</Link>
                    </div>
                    : null
            }
            {
                !toggle ?
                    <div className={styles.linkResponsive} id="linkcontainer">
                        <Link className={styles.link2} to="/activity">Crear actividad turística</Link>

                    </div>
                    : null
            }
            {
                !toggle ?
                    <div className={styles.linkResponsive} id="linkcontainer">
                        {/* <button className={styles.btn}  onClick={e => { handleClick(e) }}>volver a cargar los paises</button> */}
                        <Link className={styles.link2} onClick={e => { handleClick(e) }}>volver a cargar los paises</Link>
                    </div>
                    : null
            }

        </nav>
    )
}

{/* <div className={styles.navbar}>
            <div className={styles.titulo}>
                <h3>COUNTRIES </h3>
                <h5 className={styles.app}>app</h5>
            </div>
            <div>
                <Link className={styles.link} to="/home">Home</Link>
            </div>
            <div>
                <Link className={styles.link} to="/activity">Crear actividad turística</Link>

            </div>
            <div>
               
                <Link className={styles.link} onClick={e => { handleClick(e) }}>volver a cargar los paises</Link>

            </div>
            <div>
                <SearchBar />
            </div>
</div> */}