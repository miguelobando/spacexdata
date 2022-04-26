import { Flex, Spinner } from "@chakra-ui/react"
import { useState, useMemo } from "react"
import { LaunchList } from "../components/LaunchList"
import { SearchBar } from "../components/SearchBar"
import { useLaunches } from "../hooks/useLaunches"



export const Home = () =>{
    const { launches, isLoading, error } = useLaunches()
    const [search, setLaunches] = useState('') 
     
    const filteredLaunches = useMemo(() => launches.filter(e=>{
        return e.mission_name.toLowerCase().includes(search.toLowerCase())
    }), [search, launches])   
    
    if(isLoading){
        return(
            <Flex alignContent="center" justifyContent="center">
                <Spinner size="lg" />
            </Flex>
        )
    }

    if(error){
        return(
            <>
                <p>Error</p>
            </>
        )
    }

   

    return(
        <>
            <SearchBar handler={setLaunches}  />
            <LaunchList launches={filteredLaunches} />
        </>    
    )
}