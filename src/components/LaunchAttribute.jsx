import { Box, Flex, Icon, Text } from "@chakra-ui/react"
export function LaunchAttribute(props){
    return(
        <Box
        bg="gray.100" 
        p={4} 
        m={4} 
        borderRadius="lg"
        w="100%"
        maxW="500px"
        >
            <Flex 
            flexDirection="column" 
            alignContent="center"
            wrap="wrap"
            >
                <Flex wrap="nowrap" alignSelf="center">
                    <Icon as={props.icon} mr="2" />
                    <Text fontSize="lg" fontWeight="semibold" mb="1">
                        {props.name}
                    </Text>
                </Flex>
                <Text fontSize="md" alignSelf="center">
                    {props.value}
                </Text>
            </Flex>
        </Box>
    )
}