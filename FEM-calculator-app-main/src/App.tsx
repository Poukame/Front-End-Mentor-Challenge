import Header from './components/Header';
import Layout from './components/Layout';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import ThreePositionSwitch from './components/ThreePositionSwitch';
import { useState } from 'react';

function App() {
	const [themeColor, setThemeColor] = useState('blue');

	function onPositionChange(newPosition: number): void {
		const themeColors = ['blue', 'gray', 'purple'];

		if (newPosition >= 1 && newPosition <= themeColors.length) {
			setThemeColor(themeColors[newPosition - 1]);
		}
	}

	return (
		<div className={themeColor}>
			<div className='background-body flex flex-col mx-auto p-8 gap-4 w-screen h-screen'>
				<Layout>
					<Header>
						<ThreePositionSwitch onPositionChange={onPositionChange} />
					</Header>
					<Display />
					<Keyboard />
				</Layout>
			</div>
		</div>
	);
}

export default App;
