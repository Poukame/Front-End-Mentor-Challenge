import Header from './components/Header';
import Layout from './components/Layout';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import ThreePositionSwitch from './components/ThreePositionSwitch';
import { useState } from 'react';
import { IOperations } from './interface';

function App() {
	const [themeColor, setThemeColor] = useState('blue');
	const [currentValue, setCurrentValue] = useState('');
	const [savedValue, setSavedValue] = useState<null | number>(null);
	const [operand, setOperand] = useState<null | string>(null);

	function onPositionChange(newPosition: number): void {
		const themeColors = ['blue', 'gray', 'purple'];

		if (newPosition >= 1 && newPosition <= themeColors.length) {
			setThemeColor(themeColors[newPosition - 1]);
		}
	}

	const getValue = (label: string) => {
		if (label === 'del') {
			setCurrentValue('');
		}

		if (label === 'reset') {
			setCurrentValue('');
			setSavedValue(null);
			setOperand(null);
		}
		if (label === '=') {
			calcResult();
		}
		if (/^[\d.]+$/.test(label)) {
			setCurrentValue((prev) => (prev += label));
		}
		if (label === '/' || label === 'x' || label === '-' || label === '+') {
			calculate(label);
		}
	};

	const operations: IOperations = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		x: (a, b) => a * b,
		'/': (a, b) => a / b
	};

	function calculate(label: string) {
		if (operand && currentValue !== '') {
			setSavedValue((prev) => {
				const safePrev = prev ?? 0;
				const result = operations[operand](safePrev, Number(currentValue));
				setCurrentValue('');
				return result;
			});
		} else if (currentValue !== '') {
			setSavedValue(Number(currentValue));
			setCurrentValue('');
		}

		setOperand(label);
	}

	function calcResult() {
		if (operand && savedValue != null && currentValue !== '') {
			const result = operations[operand](savedValue, Number(currentValue));
			setCurrentValue(String(result));
			setSavedValue(null);
			setOperand(null);
		}
	}

	return (
		<div className={themeColor}>
			<div className='background-body mx-auto flex h-screen w-screen flex-col gap-4 p-8'>
				<Layout>
					<Header>
						<ThreePositionSwitch onPositionChange={onPositionChange} />
					</Header>
					<Display currentValue={currentValue} />
					<Keyboard getValue={getValue} />
				</Layout>
			</div>
		</div>
	);
}

export default App;
