import { useState } from 'react';
import { IThreePositionSwitchProps } from '../interface';

function ThreePositionSwitch({ onPositionChange }: IThreePositionSwitchProps) {
	const [position, setPosition] = useState<number>(1);

	function nextPosition(): number {
		return position < 3 ? position + 1 : 1;
	}

	function handlePositionChange(): void {
		const newPosition = nextPosition();
		setPosition(newPosition);
		onPositionChange(newPosition);
	}

	return (
		<div className='flex w-16 flex-col items-center gap-[2px]'>
			<div
				role='button'
				className='switch-labels flex w-full justify-between px-[10px] text-[12px]'
				onClick={handlePositionChange}
			>
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
			<div className='switch-slider relative h-5 w-full rounded-full' onClick={handlePositionChange}>
				<div
					className={`slider-button position-${position} absolute top-[2px] h-4 w-4 rounded-full transition-[left] duration-200 ease-linear hover:cursor-pointer`}
					onClick={handlePositionChange}
				></div>
			</div>
		</div>
	);
}

export default ThreePositionSwitch;
