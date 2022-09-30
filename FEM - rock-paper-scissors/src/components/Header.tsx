import { useEffect, useState } from 'react';
import { Text, Box, Image, HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IHeaderProps } from '../Types';
import rulesBonus from '../assets/images/logo-bonus.svg';
import { animation } from '../assets/utils';

function Header({ score, gameStatus }: IHeaderProps) {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		if (gameStatus === 'result') {
			setToggle(true);
			setTimeout(() => {
				setToggle(false);
			}, 1500);
		}
	}, [gameStatus]);

	return (
		<HStack
			width='100%'
			p='4'
			border='3px solid'
			borderColor='headerOutline'
			borderRadius='5px'
			justifyContent='space-between'
		>
			<Box>
				<Image
					maxWidth='80%'
					src={rulesBonus}
					alt='a logo with the words rock paper scissors lizard spock'
				/>
			</Box>
			<Box px='5' py='1' border='3px solid #fafbf8' borderRadius='5px' bgColor='#fafbf8'>
				<VStack fontWeight='700'>
					<Text
						fontSize='sm'
						mb='-20px'
						color='scoreText'
						textTransform='uppercase'
						letterSpacing='1px'
					>
						Score
					</Text>
					<Text
						fontSize='5xl'
						color='#666667'
						visibility={toggle ? 'hidden' : 'visible'}
						as={motion.p}
						animation={animation}
					>
						{score}
					</Text>
				</VStack>
			</Box>
		</HStack>
	);
}

export default Header;
