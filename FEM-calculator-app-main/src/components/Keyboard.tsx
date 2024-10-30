import KeyButton from './KeyButton';
import { v4 as uuidv4 } from 'uuid';
import { IPropsKeyboard } from '../interface';
import { keys } from '../assets/keys';

function Keyboard({ getValue }: IPropsKeyboard) {
	const renderKeys = keys.map((key) => {
		return (
			<KeyButton
				key={uuidv4()}
				label={key.label}
				gridArea={key.position}
				className={key.className}
				getValue={getValue}
			/>
		);
	});

	return (
		<div className='background-keypad mx-auto grid grid-cols-[repeat(4,minmax(50px,100px))] grid-rows-[repeat(5,minmax(50px,_1fr))] items-stretch justify-items-stretch gap-4 rounded-lg p-4'>
			{renderKeys}
		</div>
	);
}

export default Keyboard;
