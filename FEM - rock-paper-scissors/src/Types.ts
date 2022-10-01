// PROPS
export type TPowers = 'lizard' | 'paper' | 'rock' | 'spock' | 'scissors' | '';

export interface IPropsIconCircle {
	name: TPowers;
	size: string;
	outlineColor: string;
	top: string;
	left: string;
	imgPath: string;
	handleSelect: (name: TPowers) => void;
}

export interface IHeaderProps {
	score: IGameState['score'];
	whoIsWinner: IGameState['whoIsWinner'];
	gameStatus: IGameState['gameStatus'];
}

export interface IResultsProps {
	switchState: () => void;
	playerPick: IGameState['playerPick'];
	AiPick: IGameState['AiPick'];
	whoIsWinner: IGameState['whoIsWinner'];
}

// VARIABLES

export interface IIconCircle {
	name: TPowers;
	sizeSelect: string[];
	sizeResults: string[];
	outlineColor: string;
	top: string[];
	left: string[];
	imgPath: string;
	beats: string[];
	isBeatenBy: string[];
}

export interface IGameState {
	gameStatus: 'pick' | 'result';
	score: number;
	playerPick: TPowers;
	AiPick: TPowers;
	whoIsWinner: 0 | 1 | 2;
}