import { keyframes } from '@chakra-ui/react';
import {icons} from './iconsStyle';
import { IGameState, TPowers } from '../Types';

const generateAiPick = function ():TPowers {
	const rndNb = Math.floor(Math.random() * 5 + 1);
	let aiPick = '';

	switch (rndNb) {
		case 1:
			return (aiPick = 'lizard');
		case 2:
			return (aiPick = 'rock');
		case 3:
			return (aiPick = 'paper');
		case 4:
			return (aiPick = 'scissors');
		case 5:
			return (aiPick = 'spock');
		default:
			return (aiPick = 'rock');
	}
};

const determineWinner = function (gameState: IGameState[]) {
	const { playerPick, AiPick } = gameState[0];
	let result = 1;

	if (playerPick === '' || AiPick === '') {
		return (result = 1);
	} else if (playerPick === AiPick) {
		return (result = 1);
	} else {
		const playerBeats = icons.find((power) => power.name === playerPick)?.beats;

		const isInBeats = playerBeats?.includes(AiPick);

		result = isInBeats ? 0 : 2;
		return result as IGameState['whoIsWinner'];
	}
};

function getIconBorderColor(pick: string = 'rock') {
	const borderColor = icons.find((el) => el.name === pick)?.outlineColor;
	return borderColor ?? 'lizard.100';
}

function getIconPath(pick: string = 'rock') {
	const iconPath = icons.find((el) => el.name === pick)?.imgPath;
	return iconPath;
}

function getTextResult(whoIsWinner: number = 1) {
	switch (whoIsWinner) {
		case 0:
			return 'YOU WIN';
		case 1:
			return 'DRAW';
		case 2:
			return 'YOU LOSE';
	}
}

const animationKeyframes = keyframes`
0% { opacity: 0 }
50% {opacity: 0}
100% { opacity: 1 }
`;

const animation = `${animationKeyframes} 150ms ease-in`;

export {
	generateAiPick,
	determineWinner,
	getIconBorderColor,
	getIconPath,
	getTextResult,
	animationKeyframes,
	animation,
};
