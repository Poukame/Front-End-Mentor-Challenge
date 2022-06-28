import React from 'react';
import User from './components/User';
import Card from './components/Cards';

export function App() {
	const [timeChoice, setTimeChoice] = React.useState('Daily');

	function getTime(event) {
		setTimeChoice(event.target.innerHTML);
	}

	return (
		<div className='container'>
			<User
			getTime={getTime}
			 />
			 
			<Card
			timeChoice = {timeChoice}
			 />
		</div>
	);
}
