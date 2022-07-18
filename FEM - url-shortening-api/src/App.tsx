import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Cta from './components/Cta';
import { nanoid } from 'nanoid';

function App() {
	const [display, setDisplay] = useState(false);
	const [linkData, setLinkData] = useState(JSON.parse(localStorage.getItem('links') || '[]'));
	const [inputURL, setInputURL] = useState('');
	const [submit, setSubmitStatus] = useState(true);
	const [savedLinks, setSavedLinks] = useState('');
	const [, setLoading] = useState(false);

	window.addEventListener('load', renderLinks);

	function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
		setInputURL((e.target as HTMLTextAreaElement).value);
	}

	function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		setSubmitStatus(!submit);
	}

	function copyClipBoard(e:any) {
		navigator.clipboard.writeText((e.target as HTMLTextAreaElement).value);
		(e.target as HTMLTextAreaElement).style.backgroundColor = 'var(--clr-dark-violet)';
		(e.target as HTMLTextAreaElement).innerHTML = 'Copied!';
	}

	function renderLinks() {
		setSavedLinks(
			linkData.map((el:any) => {
				return (
					<div className='shortlink-wrapper' key={(el.id = nanoid())}>
						<div className='longlink'>{el.longLink}</div>
						<div className='shortlink'>
							<a href={el.shortLink} target='_blank'>
								{el.shortLink}
							</a>
						</div>
						<button className='btn btn--shortlink' value={el.shortLink} onClick={copyClipBoard}>
							Copy
						</button>
					</div>
				);
			})
		);
		setInputURL('')
		return savedLinks;
	}

	useEffect(() => {
		async function getShortLink(url: string) {
			if (url) {
				try {
					const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
					const data = await res.json();

					setLinkData((prevLinkData:any) => {
						prevLinkData.push({
							longLink: data.result.original_link,
							shortLink: data.result.full_short_link,
						});
						return prevLinkData;
					});

					renderLinks();
					localStorage.setItem('links', JSON.stringify(linkData));
				} catch (err) {
					alert('An error occured. Please check your connection and try again');
				}
			}
		}
		getShortLink(inputURL);
		setLoading(true);
		
	}, [submit]);

	return (
		<>
			<Header handleClick={() => setDisplay(!display)} display={display} />
			<main>
				<Hero />
				<Features
					onSubmit={(e: React.FormEvent<HTMLInputElement>) => handleSubmit(e)}
					onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e)}
					value={inputURL}
					savedLinks={savedLinks}
				/>
				<Cta />
			</main>
			<Footer />
		</>
	);
}

export default App;
