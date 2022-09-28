import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Rules from './components/Rules'

function App() {
 


  return (
    <Box maxW='90%' mx='auto'>
 
      <Header />
      
      <Rules />
    </Box>
  )
}

export default App

