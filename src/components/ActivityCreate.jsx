import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../actions';
import styles from "./create.module.css"
import Navbar from './Navbar';



function validate(input) {
    let error = {};
    if (!input.name) {
        error.name = 'a name is required'
    }
    if (!input.duration) {
        error.duration = 'a duration is required'
    } if (input.duration > 1000) {
        error.duration = 'duracion excesiva'
    }
    return error;
}

function validateCountry(input) {
    let errors = [];
    if (!input.country.length !== 0) {
        errors.country = 'a country is required'
    }
    return errors;
}



export default function ActivityCreate() {
    const dispatch = useDispatch();
    const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        //country:""
        country: []
    })

    const [error, setError] = useState({})
    const [errors, setErrors] = useState({})


    const allCountries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries())

    }, []);

    function handleOnChange(e) {
        console.log(e)
        /* if(e.target.name === cou) */
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleSelect(e) {
        if (!input.country.includes(e.target.value)) {

            setInput({
                ...input,
                //country: e.target.value
                country: [...input.country, e.target.value]
            })
            setErrors(validateCountry({
                ...input,
                country: [...input.country, e.target.value]
            }))
        }

    }

    function handleSelectD(e) {
        setInput({
            ...input,
            difficulty: e.target.value
        })
    }

    function handleSelectS(e) {
        setInput({
            ...input,
            season: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postActivity(input))
        alert('activity created !')
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            //country:""
            country: []
        })
        history.push('/home')

    }

    function handleDelete(e) {
        setInput({
            ...input,
            country: input.country.filter(c => c !== e)
        })
    }




    return (
        <div className={styles.form}>
            <Navbar />
            {/* <Link className={styles.btn} to='/home'><button>Back</button></Link> */}
            {/* <h1>Add a new activity</h1> */}
            <div className={styles.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.detail}>
                        <label className={styles.label}>NAME:</label>
                        {error.name && (
                            <p className={styles.errors}>{error.name}</p>
                        )}
                        <input className={styles.input} type="text" value={input.name} name="name" onChange={(e) => handleOnChange(e)} />

                    </div>
                    <div className={styles.detail}>
                        {/*  <label className={styles.label}>DIFFICULTY:</label> */}
                        <select className={styles.sel} onChange={(e) => handleSelectD(e)}>
                            <option id='dif' disabled hidden selected='select'>DIFFICULTY...</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                    </div>
                    <div className={styles.detail}>
                        <label className={styles.label}>DURATION:</label>
                        {error.duration && (
                            <p className={styles.errors}>{error.duration}</p>
                        )}
                        <input className={styles.input} type="text" value={input.duration} name="duration" onChange={(e) => handleOnChange(e)} />

                    </div>
                    <div className={styles.detail}>
                        {/* <label>SEASON:</label> */}
                        <select className={styles.sel} onChange={(e) => handleSelectS(e)}>
                            <option id='sea' disabled hidden selected='select'>SEASON...</option>
                            <option value='Summer'>Summer</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                        </select>
                    </div>
                    <div className={styles.detail}>
                        {/* <label>COUNTRIES:</label> */}
                        <select className={styles.sel} name="country" onChange={(e) => handleSelect(e)}>
                            <option id='cou' disabled hidden selected='select'>COUNTRIES...</option>
                            {
                                allCountries.map(e => {
                                    return (
                                        <option value={e.name} key={e.id}>{e.name} </option>
                                    )
                                })
                            }
                        </select>{!input.country.length && (
                            <p className={styles.errors}>{errors.country}</p>
                        )}


                    </div>
                    <div>
                        <button className={styles.btn} type='submit'>Agregar</button>
                    </div>
                    <div className={styles.countries}>
                        {input.country.length < 7 ?
                            input.country.map(e =>
                                <div className={styles.country}>
                                    <p>{e}</p>
                                    <button className={styles.btnDelete} type="button" onClick={() => handleDelete(e)}>x</button>
                                </div>)
                            :
                            <p>{input.country.length} paises seleccionados</p>
                        }

                        {/* <ul><li>{input.country.map(e => e + " ,")}</li></ul>  */}
                    </div>
                </form>
            </div>
        </div>
    )
}