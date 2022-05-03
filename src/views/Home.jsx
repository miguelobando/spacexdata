import { Flex, Spinner, Icon } from "@chakra-ui/react"
import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { LaunchList } from "../components/LaunchList"
import { SearchBar } from "../components/SearchBar"
import { useLaunches } from "../hooks/useLaunches"
import {BsBookmarkCheck} from 'react-icons/bs'


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
            <Flex justifyContent="space-between" ml={2} mr={4}>
                <SearchBar handler={setLaunches} /> 
                    <Link to="/bookmarks" >
                        <Icon as={ BsBookmarkCheck } h={6} w={6}   mt="4" />
                    </Link>
            </Flex>
            <LaunchList launches={filteredLaunches} />
        </>    
    )
}