import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { LaunchItem } from './LaunchItem'
import { Flex, Spinner } from '@chakra-ui/react'

export function LaunchList(){
 
    const [launches, setLaunches] = useState([])
  
    useEffect(()=>{
      API.getAllLaunches().then(setLaunches)
    }, [])
    return(
      <>
        {launches.length === 0 ? (
          <Flex align="center" justify="center"> <Spinner /> </Flex>
        ) : launches.map((launch) =>
        <ul>
          <LaunchItem key={launch.flight_number} {...launch} />
        </ul>
        ) }
      </>
    )
}