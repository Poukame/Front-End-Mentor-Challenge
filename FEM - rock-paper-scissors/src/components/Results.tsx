import {
	Text,
	Image,
	HStack,
	VStack,
	Circle,
	Flex,
	Button,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IResultsProps } from '../Types';
import { sizeResults } from '../assets/iconsStyle';
import { getIconBorderColor, getIconPath, getTextResult, animation } from '../assets/utils';

function Results({ switchState, playerPick, AiPick, whoIsWinner }: IResultsProps) {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setToggle(true);
		}, 1000);
	}, []);



	return (
		<>
			<Grid templateColumns={templateColums} templateRows={templateRows} gap='10'>
				<GridItem colStart={[1, 1]}>
					<Flex
						gap={['6', '12']}
						justifyItems='flex-end'
						flexDirection={['column', 'column-reverse']}
						alignItems='center'
					>
						<Circle
							size={sizeResults}
							bg='#fafbf8'
							outline={outline}
							outlineColor={[getIconBorderColor(playerPick), getIconBorderColor(playerPick)]}
							p='2'
						>
							<Image src={getIconPath(playerPick)} width='60%' />
						</Circle>
						<Text
							fontSize={['sm', 'lg']}
							textTransform='uppercase'
							color='#fafbf8'
							letterSpacing='1px'
						>
							You picked
						</Text>
					</Flex>
				</GridItem>
				<GridItem colStart={[2,3]}>
					<Flex
						gap={['6', '12']}
						flexDirection={['column', 'column-reverse']}
						alignItems='center'
					>
						<Circle
							size={sizeResults}
							bgColor={toggle ? '#fafbf8' : 'bgColor.100'}
							outline={outline}
							outlineColor={toggle ? [getIconBorderColor(playerPick), getIconBorderColor(playerPick)] : ['transparent','transparent']}
							p='2'
							as={motion.div}
							animation={toggle ? animation : ''}
						>
							{toggle ? <Image src={getIconPath(AiPick)} width='60%' /> : ''}
						</Circle>
						<Text
							fontSize={['sm', 'lg']}
							textTransform='uppercase'
							color='#fafbf8'
							letterSpacing='1px'
						>
							The house picked
						</Text>
					</Flex>
				</GridItem>
				<GridItem rowStart={[2, 1]} colSpan={[2, 1]} colStart={[1, 2]} alignSelf='end'>
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
				</GridItem>
			</Grid>
		</>
	);
}

export default Results;

const templateColums = ['repeat(2, 1fr', '1fr min-content 1fr'];
const templateRows = ['repeat(2, 1fr', 'repeat(1, min-content)'];
const outline = ['15px solid', '25px solid']
