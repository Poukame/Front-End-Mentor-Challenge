import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Shortener from './components/Shortener';
import Footer from './components/Footer';



function App() {

	const [display, setDisplay] = useState(false);




	return (
		<>
			<Header 
			handleClick={() => setDisplay(!display)}
			display={display}
			/>
			<main>
				<Hero />
				<Features />
				<Cta />
			</main>
			<Footer />
		</>
	);
}

export default App;

// quokka lines
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Features from './components/Features';
import Cta from './components/Cta';

ReactDOM.render(<App />, document.getElementById('root'));
