import React from 'react';
import dots from '../images/icon-ellipsis.svg';

export default function CardData(props) {
	switch (props.timeChoice) {
		case 'daily':
			current = props.timeframes.daily.current;
			previous = props.timeframes.daily.previous;
			break;
		case 'weekly':
			current = props.timeframes.weekly.current;
			previous = props.timeframes.weekly.previous;
			break;
		case 'monthly':
			current = props.timeframes.monthly.current;
			previous = props.timeframes.monthly.previous;
			break;
	}

	return (
		<div className='card'>
			<div className='inner-wrapper'>
				<img className='dots' src={dots} alt='' />
				<h2 className='card-title'>{props.title}</h2>
				<p className='card-current'>{current}hrs</p>
				<p className='card-past'>Last Week - {previous} hrs</p>
			</div>
		</div>
	);
}
