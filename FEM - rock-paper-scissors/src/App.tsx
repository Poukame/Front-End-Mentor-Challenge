import { useState } from 'react';
import { Box, VStack, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Rules from './components/Rules';
import SelectIcon from './components/SelectIcon';
import Results from './components/Results';

function App() {
	return (
		<Flex
			flexDirection='column'
			height='90vh'
			px='4'
			justifyContent='space-between'
			justifyItems='flex-end'
			maxW='650px'
			mx='auto'
			gap='20'
		>
			<Header />
			{/* <SelectIcon /> */}
			<Results />
			<Rules />
		</Flex>
	);
}

export default App;
