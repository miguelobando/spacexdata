import { useEffect, useState } from "react";
import * as API from '../services/launches'

export const useLaunches = () =>{
    const [launches,setlaunches] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() =>{
        API.getAllLaunches()
        .then(data => setlaunches(data))
        .catch(error =>{
            setError(true)
            throw(error)
        })
        .finally(()=> setLoading(false))
    },[])

   
    return{
        launches,
        isLoading,
        error
    }
}
