import minusIcon from '../assets/icon-minus.svg';
import plusIcon from '../assets/icon-plus.svg';
import { IoCartOutline } from 'react-icons/io5';

function Counter() {
	return (
		<>
			<div className='flex mt-6 justify-between items-center bg-light-gray-blue  rounded-xl'>
				<button className='p-6'>
					<img src={minusIcon} />
				</button>
				<p className='font-bold text-xl'>0</p>
				<button className='p-6'>
					<img src={plusIcon} />
				</button>
			</div>
			<button className='mt-4 text-very-dark-blue text-xl bg-main-orange p-4 rounded-xl font-bold flex justify-center items-center gap-4 w-full'>
				<IoCartOutline />
				<p>Add to cart</p>
			</button>
		</>
	);
}

export default Counter;
