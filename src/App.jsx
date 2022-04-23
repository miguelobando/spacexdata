import { useState, useEffect } from 'react'
import './App.css'
import * as API from './services/launches'
import logo from './assets/logo_spacex.png'
import { HiCalendar } from 'react-icons/hi'
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from '@chakra-ui/react'

export function App() {
  const [launches, setLaunches] = useState([])
  
  useEffect(()=>{
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <img src={logo} width={300} />
      <Heading as="s1" size="lg">Space X Launches</Heading >
      <ul>
        {
          launches.map((launch) =>
            <Box key={launch.flight_number} 
            bg="gray.100" 
            p={4} 
            m={4} 
            borderRadius="lg"> 
              <Flex> 
                <Text fontSize="2xl">
                  <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                  {launch.launch_success ? "Sucess" : "Failure"}
                </Tag>
              </Flex>
              
              <Flex align="center">
                <HiCalendar />
                <Text fontSize="sm" marginLeft="2">
                  {launch.launch_date_local.split("T")[0]}
                </Text>
              </Flex>
            </Box>
          )
        }
      </ul>
    </>
  )
}

