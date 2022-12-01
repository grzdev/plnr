import React from 'react'
import { Box, Flex, useColorMode, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { BiNotepad } from "react-icons/bi"

const navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex>
        <Box 
          mr="auto"  
          p="2.5rem"
          display="flex"
        >
            <BiNotepad 
                fontSize="2rem"
                color='#7CB9E8'
            />
            <Text
                fontSize="1.3rem"
                fontWeight="700"
                ml="0.2rem"
                mt="0.1rem"
            >
                plnr
            </Text>
        </Box>

        <Box
            p="2.5rem"
        >
            <Button 
                onClick={toggleColorMode}
                size={["xs", "sm", "sm"]}
            >
                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
            </Button>    
        </Box>
      
    </Flex>
  )
}

export default navbar