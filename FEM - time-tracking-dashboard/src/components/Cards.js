import React from 'react';
import dots from '../images/icon-ellipsis.svg';
import iconwork from '../images/icon-work.svg'

export default function Card() {
	return (
		<div className='card-wrapper'>
			<div className='card-work card work'>
                <img className='icon' src={iconwork} alt="" srcset="" />
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
