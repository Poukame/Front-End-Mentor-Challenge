import {
	Text,
	Image,
	HStack,
	VStack,
	Circle,
	Flex,
	Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IResultsProps } from '../Types';
import { getIconBorderColor, getIconPath, getTextResult, animation } from '../assets/utils';

function Results({ switchState, playerPick, AiPick, whoIsWinner }: IResultsProps) {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setToggle(true);
		}, 1500);
	}, []);

	return (
		<>
			<Flex flexDirection='column' gap='10'>
				<HStack alignItems='flex-start' flex='2 1 auto' w='95%' mx='auto' fontSize='.9em'>
					<VStack gap='4' width='50%' justifyItems='flex-end'>
						<Circle
							size='100px'
							bg='#fafbf8'
							outline='15px solid'
							outlineColor={getIconBorderColor(playerPick)}
							p='2'
						>
							<Image src={getIconPath(playerPick)} />
						</Circle>
						<Text textTransform='uppercase' color='#fafbf8' letterSpacing='1px'>
							You picked
						</Text>
					</VStack>

					<VStack gap='4' width='50%'>
						<Circle
							size='100px'
							bgColor={toggle ? '#fafbf8' : 'bgColor.100'}
							outline='15px solid'
							outlineColor={toggle ? getIconBorderColor(AiPick) : 'transparent'}
							p='2'
							as={motion.div}
							animation={toggle ? animation : ''}
						>
							{toggle ? <Image src={getIconPath(AiPick)} /> : ''}
						</Circle>
						<Text textTransform='uppercase' color='#fafbf8' letterSpacing='1px'>
							The house picked
						</Text>
					</VStack>
				</HStack>

				<VStack animation={toggle ? animation : ''} visibility={toggle ? 'visible' : 'hidden'}>
					<Text textTransform='uppercase' color='#fafbf8' fontSize='5xl' fontWeight='700'>
						{getTextResult(whoIsWinner)}
					</Text>
					<Button
						onClick={() => switchState()}
						size='lg'
						letterSpacing='2px'
						textTransform='uppercase'
					>
						PLAY AGAIN
					</Button>
				</VStack>
			</Flex>
		</>
	);
}

export default Results;
