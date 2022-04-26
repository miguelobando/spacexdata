import '@testing-library/jest-dom/extend-expect'
import { HiCalendar } from 'react-icons/hi'
import { LaunchAttribute } from './LaunchAttribute'
import { render, screen  } from '@testing-library/react'
import React from 'react'


test('Render Launch Attribute Component', ()=>{
    render(<LaunchAttribute 
        icon={HiCalendar}
        value="Loremp Impsu"
        name="fake-name"
        />)
    
    screen.getByText('Loremp Impsu')
})
    
