import logo from './assets/logo_spacex.png'
import { Route, Routes, Link } from 'react-router-dom'
import { LaunchDetails } from './components/LaunchDetails'
import { Home } from './views/Home'
import { Heading, Image, Flex } from '@chakra-ui/react'
import './App.css'

export function App() {

  return (
    <>
      <Link to="/">
        <Image src={logo} width={300} style={{ "cursor": "pointer" }} />
      </Link>

      <Flex justify="space-around">
        <Heading as="h1" size="lg">Space X Launches</Heading >
      </Flex>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
      
    </>
  )
}

/* 
TODO: 
IMPLEMENT COMPONENT TO KNOW ABOUT THE ROCKET 
IMPLEMENT COMPONENT TO WATCH YOUTUBE VIDEO ABOUT THE ROCKET 
IMPLEMENT PAGINATION TO ALL THE LAUNCHES (API) 
IMPLEMENT FOOTER COMPONENT
IMPLEMENT OAUTH TO REGISTER AN USER AND CREATE SCREEN 
IMPLEMENT REDUX OR REACT-QUERY TO STORE AN USER ALREADY SIGNED UP
CREATE A CUSTOM HOOK TO IMPLEMENT ALL THE LOGIC OF THE LIST 
LIFT UP THE SEARCHBAR AND LET THE LAUNCH COMPONENT AS JUST VIEW 
USE MEMO AND DEBOUNCER HOOK TO IMPROVE SEARCHBAR PERFORMANCE
ADD PROPTYPES  

*/