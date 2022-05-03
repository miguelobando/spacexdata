import { LaunchList } from "./LaunchList";
import { fireEvent, render, screen  } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import bookmarks from "../store/slices/bookmarks";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import '@testing-library/jest-dom/extend-expect'

const mockLaunch = [
    {
        
        "flight_number": 1,
        "mission_name": "FalconSat",
        "launch_date_local": "2006-03-25T10:30:00+12:00",
        "launch_year": "2006",
        "launch_site": {
            "site_id": "kwajalein_atoll",
            "site_name": "Kwajalein Atoll",
            "site_name_long": "Kwajalein Atoll Omelek Island"
        },
        "launch_success": false,
        "launch_failure_details": {
            "time": 33,
            "altitude": null,
            "reason": "merlin engine failure"
        }
    }
]

const store  = configureStore({
    reducer: { bookmarks},
    preloadedState: {
        bookmarks: {
            bookmarks: []
        }
    } 
})

describe('LaunchList component', () =>{
    

    test('Render the launch item FalconSat', () =>{
        const history = createMemoryHistory()
        history.push('/')
    
        const view = render(
        <Router location={history.location} navigator={history}>
        <Provider store={store} >
            <LaunchList launches={mockLaunch} />
        </Provider>
        </Router>)
       
        expect(view.container).toHaveTextContent('FalconSat')
    })

    test('Add bookmark', () =>{
        const history = createMemoryHistory()
        history.push('/')
    
        render(
        <Router location={history.location} navigator={history}>
        <Provider store={store} >
            <LaunchList launches={mockLaunch} />
        </Provider>
        </Router>)
   
        const button = screen.getByText('Save Flight')
        fireEvent.click(button)
       
       expect(store.getState().bookmarks.bookmarks).toHaveLength(1)
    })
   
    test('Dont duplicate bookmarks',()=>{
        const history = createMemoryHistory()
        history.push('/')
    
        render(
        <Router location={history.location} navigator={history}>
        <Provider store={store} >
            <LaunchList launches={mockLaunch} />
        </Provider>
        </Router>)
   
        const button = screen.getByText('Save Flight')
       fireEvent.click(button)
       fireEvent.click(button)
       
       expect(store.getState().bookmarks.bookmarks).toHaveLength(1)
    })

   

})