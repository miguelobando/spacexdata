import './App.css'
import logo from './assets/logo_spacex.png'
import { Heading, Image } from '@chakra-ui/react'
import { LaunchList } from './components/LaunchList'
import { LaunchDetails } from './components/LaunchDetails'
import { Route, Routes, Link } from 'react-router-dom'

export function App() {

  return (
    <>
      <Link to="/">
        <Image src={logo} width={300} style={{ "cursor": "pointer" }} />
      </Link>
      <Heading as="h1" size="lg">Space X Launches</Heading >
      <Routes> 
        <Route path="/" element={<LaunchList />} /> 
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
IMPLEMENT SEARCH BAR COMPONENT
IMPLEMENT OAUTH TO REGISTER AN USER AND CREATE SCREEN 
IMPLEMENT REDUX OR REACT-QUERY TO STORE AN USER ALREADY SIGNED UP
*/