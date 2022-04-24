import { Flex, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../services/launches'
import { LaunchAttribute } from "./LaunchAttribute"
import { VscOutput } from "react-icons/vsc"
import { RiLandscapeFill } from "react-icons/ri"
import { IoRocketSharp } from "react-icons/io5"
import { AiOutlineFieldNumber } from "react-icons/ai"
import { MdDriveFileRenameOutline } from "react-icons/md"

export function LaunchDetails(){
    const { launchId } = useParams()
    const [launch, setLaunch] = useState(null)
    useEffect(()=>{
       API.getLaunchByFlightNumber(launchId).then(setLaunch) 
    },[launchId])

    return(
        <>
        {
            launch === null 
            ? ( <Flex align="center" justify="center"> <Spinner /> </Flex> )  
            : (
                <Flex  
                flexDir={{ 
                    sm: 'column', 
                    md: 'column',
                    lg: 'row' 
                }}
                wrap="wrap"
                alignItems="center"
                justifyContent="center"> 
                    <LaunchAttribute 
                    icon={AiOutlineFieldNumber} 
                    name="Flight Number" 
                    value={launch.flight_number}
                     />
                    
                    <LaunchAttribute 
                    icon={MdDriveFileRenameOutline}
                    name="Mission Name"
                    value={launch.mission_name}
                    />     
                    
                    <LaunchAttribute 
                    icon={VscOutput} 
                    name="Launch Details" 
                    value={launch.details} />
                    
                    <LaunchAttribute 
                    icon={RiLandscapeFill} 
                    name="Launch Site" 
                    value={launch.launch_site.site_name_long} />

                    <LaunchAttribute 
                    icon={IoRocketSharp}
                    name="Rocket Name"
                    value={launch.rocket.rocket_name} />

                </Flex>
            ) 
        }
        </>
    )
}