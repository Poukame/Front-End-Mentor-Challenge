import { Text, Box, Image, HStack, VStack, Circle, Flex, Button } from '@chakra-ui/react';
import lizard from '../assets/images/icon-lizard.svg';
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import spock from '../assets/images/icon-spock.svg';
import Header from './Header';

function Results() {
	const style = `size='120px' bgColor={'bgColor.100'}`;

	return (
		<>
			<Flex flexDirection='column' gap='10'>
				<HStack alignItems='flex-start' flex='2 1 auto' w='95%' mx='auto' fontSize='.9em'>
					<VStack gap='4' width='50%' justifyItems='flex-end'>
						<Circle
							size='100px'
							bg='#fafbf8'
							outline='15px solid'
							outlineColor={'scissors.100'}
							p='2'
						>
							<Image src={scissors} />
						</Circle>
						<Text textTransform='uppercase' color='#fafbf8' letterSpacing='1px'>
							You picked
						</Text>
					</VStack>

					<VStack gap='4' width='50%'>
						<Circle
							size='100px'
							bgColor={'bgColor.100'}
							outline='15px solid'
							outlineColor={'transparent'}
							p='2'
						/>
						<Text textTransform='uppercase' color='#fafbf8' letterSpacing='1px'>
							The house picked
						</Text>
					</VStack>
				</HStack>
				<VStack>
					<Text textTransform='uppercase' color='#fafbf8' fontSize='5xl' fontWeight='700'>You WIN</Text>
					<Button size='lg' letterSpacing='2px' textTransform='uppercase'>PLAY AGAIN</Button>
				</VStack>
			</Flex>
		</>
	);
}

export default Results;
