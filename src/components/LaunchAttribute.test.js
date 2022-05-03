import '@testing-library/jest-dom/extend-expect'
import { HiCalendar } from 'react-icons/hi'
import { LaunchAttribute } from './LaunchAttribute'
import { render  } from '@testing-library/react'

import React from 'react'


describe('Launch Attribute Component', ()=>{
    let view  = render(<LaunchAttribute 
        icon={HiCalendar}
        value="Loremp Impsu"
        name="fake-name"
        />)
    
    test('Rendering props', () =>{
        expect(view.container).toHaveTextContent('Loremp Impsu')
    })
    
})
    
