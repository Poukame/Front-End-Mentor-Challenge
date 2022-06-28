import React from 'react';
import portrait from '../images/image-jeremy.png';

export default function User(props) {
	return (
		<div className='user-card'>
			<div className='user__details'>
				<img className='user__portrait' src={portrait} alt='portrait of Jeremy' />
				<p className='user__copy'>Report for</p>
				<h1 className='user__name'>Jeremy Robson</h1>
			</div>

			<div className='user__option'>
				<ul>
					<li><a href='#' onClick={props.getTime}>Daily</a></li>
					<li><a href='#' onClick={props.getTime}>Weekly</a></li>
					<li><a href='#' onClick={props.getTime}>Monthly</a></li>
				</ul>
			</div>
		</div>
	);
}
