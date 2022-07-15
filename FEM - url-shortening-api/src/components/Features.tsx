import React, { useState, useEffect } from 'react';
import brandIco from '../images/icon-brand-recognition.svg';
import detailledIco from '../images/icon-detailed-records.svg';
import fullCusIco from '../images/icon-fully-customizable.svg';
import Shortener from './Shortener';

export default function Features() {
	const [linkData, setLinkData] = useState([]);
	const [inputURL, setInputURL] = useState('');

	const [submit, setSubmitStatus] = useState(true);

	useEffect(() => {
		async function getShortLink(url: string) {
			if (url) {
				try {
					const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
					const data = await res.json();

					setLinkData((prevLinkData) => {
						prevLinkData.push({
							longLink: data.result.original_link,
							shortLink: data.result.full_short_link,
						});
						return prevLinkData;
					});
					console.log(linkData);
				} catch (err) {
					console.log(err);
				}
			}
		}
		getShortLink(inputURL);
	}, [submit]);

	function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
		setInputURL(e.target.value);
		console.log(inputURL);
	}

	function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		setSubmitStatus(!submit);
	}

	return (
		<section className='feature'>
			<Shortener
				onSubmit={(e: React.FormEvent<HTMLInputElement>) => handleSubmit(e)}
				onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e)}
				value={inputURL}
				shortLink={linkData}
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
