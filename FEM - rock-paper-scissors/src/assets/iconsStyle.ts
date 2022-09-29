import lizard from '../assets/images/icon-lizard.svg';
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import spock from '../assets/images/icon-spock.svg';
import { IIconCircle } from '../Types';

const sizeSelect = '80px'
const sizeResults = '100px'

const icons:IIconCircle[] = [
	{
		name: 'lizard',
		sizeSelect: sizeSelect,
		sizeResults: sizeResults,
		outlineColor: 'lizard.100',
		top: '90%',
		left: '-5%',
		imgPath: lizard,
		beats: ['spock', 'paper'],
		isBeatenBy: ['scissors', 'rock']
	},
    {
		name: 'scissors',
		sizeSelect: '80px',
		sizeResults: '100px',
		outlineColor: 'scissors.100',
		top: '0%',
		left: '25%',
		imgPath: scissors,
		beats: ['paper', 'lizard'],
		isBeatenBy: ['rock', 'spock']
	},
    {
		name: 'rock',
		sizeSelect: '80px',
		sizeResults: '100px',
		outlineColor: 'rock.100',
		top: '90%',
		left: '50%',
		imgPath: rock,
		beats: ['lizard', 'scissors'],
		isBeatenBy: ['paper', 'spock']
	},
    {
		name: 'paper',
		sizeSelect: '80px',
		sizeResults: '100px',
		outlineColor: 'paper.100',
		top: '35%',
		left: '60%',
		imgPath: paper,
		beats: ['rock', 'spock'],
		isBeatenBy: ['scissors', 'lizard']
	},
    {
		name: 'spock',
		sizeSelect: '80px',
		sizeResults: '100px',
		outlineColor: 'spock.100',
		top: '35%',
		left: '-10%',
		imgPath: spock,
		beats: ['scissors', 'rock'],
		isBeatenBy: ['lizard', 'paper']
	},
];

export default icons;
