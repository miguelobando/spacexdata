import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { LaunchItem } from './LaunchItem'
import { Flex, Spinner } from '@chakra-ui/react'
import { SearchBar } from './searchBar'

export function LaunchList(){
 
    const [launches, setLaunches] = useState([])
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    useEffect(()=>{
      API.getAllLaunches()
      .then((data) =>{
        setLaunches(data)
        setList(data)
      })
    }, [])

    useEffect(()=>{
      const result = launches.filter(e=>{
        return e.mission_name.toLowerCase().includes(search.toLowerCase())
      })
      setList(result)
    },[search])
  
    return(
      <>
        <SearchBar  handler={setSearch} />
        {launches.length === 0 ? (
          <Flex align="center" justify="center"> <Spinner /> </Flex>
        ) : list.map((launch) =>
        <ul>
          <LaunchItem key={launch.flight_number} {...launch} />
        </ul>
        ) }
      </>
    )
}