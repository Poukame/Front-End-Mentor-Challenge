import React from 'react';
import dots from '../images/icon-ellipsis.svg';


export default function Card() {
	return (
        <div>
		<div className='card play'>
			<div className='inner-wrapper'>
				<img className='dots' src={dots} alt='' />
				<h2 className='card-title'>Work</h2>
				<p className='card-current'>32hrs</p>
				<p className='card-past'>Last Week - 36hrs</p>
			</div>
		</div>
        </div>
	);
}
