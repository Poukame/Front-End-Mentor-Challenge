import React from 'react';
import CardData from './CardData';
import iconwork from '../images/icon-work.svg';
import iconplay from '../images/icon-play.svg';
import iconstudy from '../images/icon-study.svg';
import iconexercise from '../images/icon-exercise.svg';
import iconsocial from '../images/icon-social.svg';
import iconcare from '../images/icon-self-care.svg';

export default function Card() {
	return (
		<div className='card-boxes'>
			<div className='card-wrapper wrap-work'>
				<img className='icon' src={iconwork} alt='' srcset='' />
				<CardData />
			</div>

			<div className='card-wrapper wrap-play'>
				<img className='icon' src={iconplay} alt='' srcset='' />
				<CardData />
			</div>

			<div className='card-wrapper wrap-study'>
				<img className='icon' src={iconstudy} alt='' srcset='' />
				<CardData />
			</div>

			<div className='card-wrapper wrap-exercise'>
				<img className='icon' src={iconexercise} alt='' srcset='' />
				<CardData />
			</div>

			<div className='card-wrapper wrap-social'>
				<img className='icon' src={iconsocial} alt='' srcset='' />
				<CardData />
			</div>

			<div className='card-wrapper wrap-care'>
				<img className='icon' src={iconcare} alt='' srcset='' />
				<CardData />
			</div>
		</div>
	);
}
