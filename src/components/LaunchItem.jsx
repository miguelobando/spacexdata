import dayjs from "dayjs" 
import { useDispatch, useStore } from "react-redux"
import { Link } from "react-router-dom"
import { HiCalendar } from 'react-icons/hi'
import { Box, Button, Flex, Spacer, Tag, Text, useToast } from "@chakra-ui/react"
import { addBookmark } from "../store/slices/bookmarks"
export function LaunchItem (launch) {
  const dispatch = useDispatch()
  const toast = useToast()
  const store = useStore()
  
  const manageAddBookmark = ( arg ) =>{
    const bookmarks = store.getState().bookmarks.bookmarks
    if(bookmarks.find(e=> e.mission_name === arg.mission_name)){
      toast({
        title: 'Bookmark already added',
        description: `${arg.mission_name}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }else{
      dispatch(addBookmark(arg))
      toast({
        title: 'Bookmark added',
        description: `${arg.mission_name}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }

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
            <Button mt={2} colorScheme="facebook">
               More details 
            </Button>
          </Link>
          
          <Button 
          ml={2} 
          mt={2} 
          colorScheme="yellow"
          onClick={() => manageAddBookmark(launch)}> 
            Save Flight 
          </Button>
    </Box>)
} 