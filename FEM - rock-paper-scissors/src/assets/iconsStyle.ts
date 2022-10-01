import lizard from '../assets/images/icon-lizard.svg';
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import spock from '../assets/images/icon-spock.svg';
import { IIconCircle } from '../Types';

const sizeSelect = ['80px', '110px']
const sizeResults = ['100px', '150px']

const icons:IIconCircle[] = [
	{
		name: 'lizard',
		sizeSelect: sizeSelect,
		sizeResults: sizeResults,
		outlineColor: 'lizard.100',
		top: ['95%'],
		left: ['-5%'],
		imgPath: lizard,
		beats: ['spock', 'paper'],
		isBeatenBy: ['scissors', 'rock']
	},
    {
		name: 'scissors',
		sizeSelect: sizeSelect,
		sizeResults: sizeResults,
		outlineColor: 'scissors.100',
		top: ['0%'],
		left: ['25%'],
		imgPath: scissors,
		beats: ['paper', 'lizard'],
		isBeatenBy: ['rock', 'spock']
	},
    {
		name: 'rock',
		sizeSelect: sizeSelect,
		sizeResults: sizeResults,
		outlineColor: 'rock.100',
		top: ['95%'],
		left: ['50%'],
		imgPath: rock,
		beats: ['lizard', 'scissors'],
		isBeatenBy: ['paper', 'spock']
	},
    {
		name: 'paper',
		sizeSelect: sizeSelect,
		sizeResults: sizeResults,
		outlineColor: 'paper.100',
		top: ['35%'],
		left: ['65%'],
		imgPath: paper,
		beats: ['rock', 'spock'],
		isBeatenBy: ['scissors', 'lizard']
	},
    {
		name: 'spock',
		sizeSelect: sizeSelect,
		sizeResults: sizeResults,
		outlineColor: 'spock.100',
		top: ['35%'],
		left: ['-20%'],
		imgPath: spock,
		beats: ['scissors', 'rock'],
		isBeatenBy: ['lizard', 'paper']
	},
];

export {icons, sizeResults};
