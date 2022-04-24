import { Box, Button, Flex, Spacer, Tag, Text } from "@chakra-ui/react"
import { HiCalendar } from 'react-icons/hi'
import dayjs from "dayjs" 
import { Link } from "react-router-dom"

export function LaunchItem (launch) {
    return (
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
              {dayjs(launch.launch_date_local)
              .locale("en")
              .format("D MMMM, YYYY")}
            </Text>
          </Flex>

          <Link to={`/launch/${launch.flight_number}`}> 
            <Button mt={2} colorScheme="facebook"> More details </Button>
          </Link>
    </Box>)
} 