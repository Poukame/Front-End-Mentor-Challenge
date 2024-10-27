import minusIcon from '../assets/icon-minus.svg';
import plusIcon from '../assets/icon-plus.svg';
import { IoCartOutline } from 'react-icons/io5';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { CounterProps } from '../types';

function Counter({children, calcPrice, productId, calcUnitPriceDiscount}:CounterProps) {
	const { sendToCart, productIndex } = useContext(AppContext);
	const [count, setCount] = useState(1);

	const handleCountChange = (newCount:number) => {
		setCount(newCount);
		if (typeof children === 'function') {
			children(newCount);
		}
	};

	useEffect(() => {
		handleCountChange(1)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productIndex])

	return (
		<div className='lg:flex lg:justify-between lg:gap-4 lg:mt-8'>
			<div className='flex lg:w-1/3 mt-6 lg:mt-0 justify-between items-center bg-light-gray-blue rounded-xl'>
				<button
					className='p-6 hover:opacity-50'
					onClick={() => {
						handleCountChange(count - 1 < 1 ? 1 : count - 1);
					}}
				>
					<img src={minusIcon} alt='icon minus to decrease the amount' />
				</button>
				<p className='font-bold text-xl'>{count}</p>
				<button
					className='p-6 hover:opacity-50'
					onClick={() => {
						handleCountChange(count + 1);
					}}
				>
					<img src={plusIcon} alt='icon minus to increase the amount' />
				</button>
			</div>
			<button
				className='mt-4 lg:mt-0 lg:flex-grow text-very-dark-blue text-xl bg-main-orange hover:bg-main-pale-orange p-4 rounded-xl font-bold flex justify-center items-center gap-4 w-full lg:w-fit'
				onClick={() => {
					sendToCart(count, productId, calcPrice, calcUnitPriceDiscount);
				}}
			>
				<IoCartOutline />
				<p>Add to Cart</p>
			</button>
		</div>
	);
}

export default Counter;
