import React from 'react';
import portrait from '../images/image-jeremy.png';

export default function User() {
	return (
		<div className='user-card'>
			<div className='user__details'>
				<img className='user__portrait' src={portrait} alt='portrait of Jeremy' />
				<p className='user__copy'>Report for</p>
				<h1 className='user__name'>Jeremy Robson</h1>
			</div>

			<div className='user__option'>
				<p>Daily</p>
				<p>Weekly</p>
				<p>Monthly</p>
			</div>
		</div>
	);
}
