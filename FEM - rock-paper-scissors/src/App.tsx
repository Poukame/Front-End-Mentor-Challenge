import { useState, useEffect } from 'react';
import { Box, VStack, Flex, Image } from '@chakra-ui/react';
import Header from './components/Header';
import Rules from './components/Rules';
import Results from './components/Results';
import bgPentagon from './assets/images/bg-pentagon.svg';
import IconCircle from './components/IconCircle';
import icons from './assets/iconsStyle';
import {generateAiPick, determineWinner} from './assets/utils';
import { TPowers } from './Types';

function App() {
	const initialState = [
		{
			gameStatus: 'pick', // pick, result
			score: 0,
			playerPick: '',
			AiPick: '',
			whoIsWinner: 1, // 0 = player win, 1 = draw, 2 = ai win
		},
	];

	const [gameState, setGameState] = useState(initialState);
	console.log('file: App.tsx ~ line 24 ~ gameState', gameState);

	const [refresh, setRefresh] = useState(false);

	const handleSelect = function (name: TPowers) {
		setGameState((prev) => {
			return prev.map((state) => {
				return {
					...state,
					playerPick: name,
					AiPick: generateAiPick(),
					gameStatus: 'result'
				};
			});
		});

		setRefresh((prev) => !prev);
	};

	useEffect(() => {
		setGameState((prev) => {
			return prev.map((state) => {
				return {
					...state,
					whoIsWinner: determineWinner(gameState),
					score: determineWinner(gameState) === 0 ? state.score++ : state.score
				};
			});
		});
	}, [refresh]);

	const SelectIconsHTML = icons.map((icon) => {
		return (
			<IconCircle
				name={icon.name}
				size={icon.sizeSelect}
				outlineColor={icon.outlineColor}
				top={icon.top}
				left={icon.left}
				imgPath={icon.imgPath}
				handleSelect={(name) => handleSelect(name)}
			/>
		);
	});

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

			<Box flex='0 1 auto' position='relative'>
				<Image src={bgPentagon} width='85%' mx='auto' />
				{SelectIconsHTML}
			</Box>

			{/* <Results /> */}
			<Rules />
		</Flex>
	);
}

export default App;
