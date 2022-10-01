import { useState, useEffect } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Header from './components/Header';
import Rules from './components/Rules';
import Results from './components/Results';
import bgPentagon from './assets/images/bg-pentagon.svg';
import IconCircle from './components/IconCircle';
import {icons} from './assets/iconsStyle';
import { generateAiPick, determineWinner } from './assets/utils';
import { IGameState, TPowers } from './Types';

function App() {

	const initialState = [
		{
			gameStatus: 'pick' as IGameState['gameStatus'], // pick, result
			score: 0,
			playerPick: '' as TPowers,
			AiPick: '' as TPowers,
			whoIsWinner: 1 as IGameState['whoIsWinner'], // 0 = player win, 1 = draw, 2 = ai win
		},
	];

	const [gameState, setGameState] = useState(initialState);
	const { gameStatus, score, playerPick, AiPick, whoIsWinner } = gameState[0];

	const [refresh, setRefresh] = useState(false);

	const handleSelect = function (name: TPowers) {
		setGameState((prev) => {
			return prev.map((state) => {
				return {
					...state,
					playerPick: name,
					AiPick: generateAiPick(),
					gameStatus: 'result',
				};
			});
		});

		setRefresh((prev) => !prev);
	};

	const switchState = function() {
		setGameState((prev) => {
			return prev.map((state) => {
				return {
					...state,
					gameStatus: 'pick',
					playerPick: '',
					AiPick: '',
					whoIsWinner: 1,
				};
			});
		});
	}

	useEffect(() => {
		setGameState((prev) => {
			return prev.map((state) => {
				return {
					...state,
					whoIsWinner: determineWinner(gameState),
					score: determineWinner(gameState) === 0 ? state.score++ : state.score,
				};
			});
		});
	}, [refresh]);

	const SelectIconsHTML = icons.map((icon) => {
		return (
			<IconCircle
				key={icon.name}
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
			maxW='750px'
			mx='auto'
			gap='20'
			position='relative'
		>
			<Header score={score} whoIsWinner={whoIsWinner} gameStatus={gameStatus} />

			{gameStatus === 'pick' && (
				<Box flex='0 1 auto' position='relative' width={['290px', '400px']} mx='auto'>
					<Image src={bgPentagon} width='100%'  mx='auto' />
					{SelectIconsHTML}
				</Box>
			)}

			{gameStatus === 'result' && <Results switchState={switchState} playerPick={playerPick} AiPick={AiPick} whoIsWinner={whoIsWinner} />}
			<Rules />
		</Flex>
	);
}

export default App;
