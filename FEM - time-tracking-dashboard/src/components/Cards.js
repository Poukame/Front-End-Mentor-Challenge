import React from 'react';
import CardData from './CardData';
import iconwork from '../images/icon-work.svg';
import iconplay from '../images/icon-play.svg';
import iconstudy from '../images/icon-study.svg';
import iconexercise from '../images/icon-exercise.svg';
import iconsocial from '../images/icon-social.svg';
import iconcare from '../images/icon-self-care.svg';
import data from '../data.json'

export default function Cards(props) {

	const cards = data.map((item, index) => {
        return (
            <CardData
                key = {item.index}
				timeChoice = {props.timeChoice.toLowerCase()}
                {...item}
            />
        )
    })

	return (
		<div className='card-boxes'>
			<div className='card-wrapper wrap-work'>
				<img className='icon' src={iconwork} alt=''/>
				{cards[0]}
			</div>

			<div className='card-wrapper wrap-play'>
				<img className='icon' src={iconplay} alt=''/>
				{cards[1]}
			</div>

			<div className='card-wrapper wrap-study'>
				<img className='icon' src={iconstudy} alt=''/>
				{cards[2]}
			</div>

			<div className='card-wrapper wrap-exercise'>
				<img className='icon' src={iconexercise} alt=''/>
				{cards[3]}
			</div>

			<div className='card-wrapper wrap-social'>
				<img className='icon' src={iconsocial} alt=''/>
				{cards[4]}
			</div>

			<div className='card-wrapper wrap-care'>
				<img className='icon' src={iconcare} alt=''/>
				{cards[5]}
			</div>
		</div>
	);
}
