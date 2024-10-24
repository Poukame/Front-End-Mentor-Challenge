import { useContext, useState } from 'react';
import { AppContext } from '../App';
import Counter from './Counter';

function ProductDetails() {
	const { productIndex, productData } = useContext(AppContext);
	// get the value of count with render props
	const [countFromCounter, setCountFromCounter] = useState(1);

	const { id, brand, name, description, regularPrice, isDiscount, discountValue } = productData[productIndex];
	const calcPrice = Number((regularPrice * (1 - discountValue / 100) * countFromCounter).toFixed(2));
	const calcUnitPriceDiscount = Number((regularPrice * (1 - discountValue / 100)).toFixed(2));
	const regularTotalPrice = regularPrice * countFromCounter;

	return (
		<div className='p-6'>
			<p className='uppercase text-dark-gray-blue font-bold text-sm'>{brand}</p>
			<h2 className='mt-4 font-bold text-4xl capitalize'>{name}</h2>
			<p className='mt-4 text-dark-gray-blue leading-6'>{description}</p>
			<div className='mt-6 flex items-middle'>
				<p className='font-bold text-3xl'>${calcPrice}</p>
				{isDiscount && (
					<>
						<p className='bg-black text-white rounded-lg px-3 py-1 font-bold ml-4'>{discountValue}%</p>
						<p className='font-bold text-dark-gray-blue line-through ml-auto self-center text-xl'>
							${regularTotalPrice}
						</p>
					</>
				)}
			</div>
			<Counter calcPrice={calcPrice} productId={id} calcUnitPriceDiscount={calcUnitPriceDiscount} >
				{(countFromCounter: number) => {
					setCountFromCounter(countFromCounter);
					return <></>;
				}}
			</Counter>
		</div>
	);
}

export default ProductDetails;
