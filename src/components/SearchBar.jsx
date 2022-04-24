import { Input } from '@chakra-ui/react'

export function SearchBar(props){
    return(
        <Input 
        marginLeft="12px" 
        placeholder='Search Launch' 
        htmlSize={40} 
        width='auto' 
        onChange={e=> props.handler(e.target.value) }
        />       
    )
}