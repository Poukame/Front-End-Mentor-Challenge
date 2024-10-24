import { WithChildren } from '../types';
import { useContext } from 'react';
import { AppContext } from '../App';

function ProductDetails({ children }: WithChildren) {
	const { productIndex, productData, countFromCounter } = useContext(AppContext);

	const { brand, name, description, regularPrice, isDiscount, discountValue } = productData[productIndex];

	const calcPrice = (regularPrice * (1 - discountValue / 100) * countFromCounter).toFixed(2);
	const regularTotalPrice = regularPrice * countFromCounter

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
						<p className='font-bold text-dark-gray-blue line-through ml-auto self-center text-xl'>${regularTotalPrice}</p>
					</>
				)}
			</div>
			{children}
		</div>
	);
}

export default ProductDetails;
