import React, { useState, useEffect } from 'react';
import brandIco from '../images/icon-brand-recognition.svg';
import detailledIco from '../images/icon-detailed-records.svg';
import fullCusIco from '../images/icon-fully-customizable.svg';
import Shortener from './Shortener';


export default function Features({ onSubmit, onChange, value, savedLinks }) {
	
	console.log('feature saved links', savedLinks)

	return (
		<section className='feature'>
			<Shortener
				onSubmit={onSubmit}
				onChange={onChange}
				value={value}
				savedLinks={savedLinks}
			/>

			<div className='feature-head'>
				<h2 className='feature__title'>Advanced Statistics</h2>
				<p className='feature__body'>
					Track how your links are performing across the web with our advanced statistics dashboard.
				</p>
			</div>

			<div className='feature__item item-brand'>
				<div className='feature_icon_wrapper'>
					<img src={brandIco} className='feature__icon' alt='' />
				</div>
				<h2 className='feature__title'>Brand Recognition</h2>
				<p className='feature__body'>
					Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help
					instil confidence in your content.
				</p>
			</div>

			<div className='feature__item item-detail'>
				<div className='feature_icon_wrapper'>
					<img src={detailledIco} className='feature__icon' alt='' />
				</div>
				<h2 className='feature__title'>Detailed Records</h2>
				<p className='feature__body'>
					Gain insights into who is clicking your links. Knowing when and where people engage with your
					content helps inform better decisions.
				</p>
			</div>

			<div className='feature__item item-custom'>
				<div className='feature_icon_wrapper'>
					<img src={fullCusIco} className='feature__icon' alt='' />
				</div>
				<h2 className='feature__title'>Fully Customizable</h2>
				<p className='feature__body'>
					Improve brand awareness and content discoverability through customizable links, supercharging
					audience engagement.
				</p>
			</div>
		</section>
	);
}
