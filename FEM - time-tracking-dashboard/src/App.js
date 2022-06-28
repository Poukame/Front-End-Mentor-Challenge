import React from 'react';
import User from './components/User';
import Cards from './components/Cards';

export function App() {
	const [timeChoice, setTimeChoice] = React.useState('daily');

	function getTime(event) {
		setTimeChoice(event.target.innerHTML);
	}

	return (
		<div className='container'>
			<User getTime={getTime} />

			<Cards timeChoice={timeChoice} />
		</div>
	);
}
