import axios from 'axios';
const baseUrl = "http://localhost:3003/"
export function getCountries(){
    return async function(dispatch){
        try {
            var json = await axios.get(baseUrl + "countries",{
    
            });
            return dispatch({
                type: "GET_COUNTRIES",
                payload: json.data
            })
        
        } catch (error) {
            alert("countries App not found!!")
            console.log(error)
        }
    }
    
}

export function getByActivity(){
    return async function(dispatch){
        var json = await axios.get(baseUrl + "actividades",{

        });
        return dispatch({
            type: "GET_BY_ACTIVITY",
            payload: json.data
        })
    }
}

export function getNameCountries(name){
    return async function(dispatch){
        try {
            var json = await axios.get( baseUrl + "countries?name=" + name);
            return dispatch ({
                type: "GET_NAME_COUNTRIES",
                payload: json.data
            })
        }catch (error){
            alert("country not found")
            console.log(error);
        }
    }
}

export function filterCountriesByActivity(name){
    return async function(dispatch){
        try {
            var json = await axios.get( baseUrl + "activities?name=" + name);
            return dispatch ({
                type: "GET_ACTIVITY_COUNTRIES",
                payload: json.data
            })
        }catch (error){
            console.log(error);
        }
    }
} 

export function getNameActivity(name){
    return async function(dispatch){
        try {
            var json = await axios.get( baseUrl + "activities?name=" + name);
            return dispatch ({
                type: "GET_NAME_ACTIVITY",
                payload: json.data
            })
        }catch (error){
            console.log(error);
        }
    }
} 


/* export function getActivities(){
    return async function(dispatch){
            var json = await axios.get( "http://localhost:3001/activity")
            return dispatch ({
                type: "GET_ACTIVITIES",
                payload: json.data
            })
        }
} */

export function postActivity(payload){
    return async function(dispatch){
            const res = await axios.post( baseUrl + "activity",payload)
            return res; 
        }
}

export function findByContinents(payload){
    return {
        type: 'FIND_BY_CONTINENTS',
        payload
    }
}

export function findPopulation(payload){
    return {
        type: 'FIND_POPULATION',
        payload
    }
}

export function findByActivity(payload){
    return {
        type: 'FIND_BY_ACTIVITY',
        payload
    }
}

export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function findDetail(id){
    return async function(dispatch){
        try{
            var json =await axios.get(baseUrl + "countries/" + id);
            return dispatch({
                type: "FIND_DETAIL",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}