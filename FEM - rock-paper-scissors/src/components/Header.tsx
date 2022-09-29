import { Text, Box, Image, HStack, VStack } from '@chakra-ui/react';
import rulesBonus from '../assets/images/logo-bonus.svg';

function Header() {
	return (
	
			<HStack width='100%' p='4' border='3px solid' borderColor='headerOutline' borderRadius='5px' justifyContent='space-between' >
				<Box>
                <Image maxWidth='80%' src={rulesBonus} alt='a logo with the words rock paper scissors lizard spock' />

                </Box>
				<Box px='5' py='1' border='3px solid #fafbf8' borderRadius='5px' bgColor='#fafbf8'>
					<VStack fontWeight='700'>
						<Text fontSize='sm' mb='-20px' color='scoreText' textTransform='uppercase' letterSpacing='1px'>Score</Text>
						<Text  fontSize='5xl' color='#666667'>12</Text>
					</VStack>
				</Box>
			</HStack>
	
	);
}

export default Header;
