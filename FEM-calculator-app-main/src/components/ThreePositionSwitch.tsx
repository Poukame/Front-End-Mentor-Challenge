import { useState } from 'react';

interface IThreePositionSwitchProps {
  onPositionChange: (position: number) => void;
};

const ThreePositionSwitch = ({onPositionChange}:IThreePositionSwitchProps) => {
	const [position, setPosition] = useState<number>(1);

	function nextPosition():number {
		return position < 3 ? position + 1 : 1;
	};

	function handlePositionChange(): void {
    const newPosition = nextPosition();
    setPosition(newPosition);
    onPositionChange(newPosition);
	};

	return (
		<div className='switch-container'>
			<div role='button' className='switch-labels' onClick={handlePositionChange}>
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
			<div className='switch-slider' onClick={handlePositionChange}>
				<div
					className={`slider-button position-${position}`}
					onClick={handlePositionChange}
				></div>
			</div>
		</div>
	);
};

export default ThreePositionSwitch;
