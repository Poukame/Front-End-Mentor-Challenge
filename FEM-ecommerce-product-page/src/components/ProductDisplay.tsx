import iconNext from '../assets/icon-next.svg';
import iconPrevious from '../assets/icon-previous.svg';
import { WithChildren } from '../types';
import { useContext } from 'react';
import { AppContext } from '../App';

function ProductDisplay({ children }: WithChildren) {
	const { isCart, productIndex, changeProductIndex, productData } = useContext(AppContext);
  
	return (
		<div
			style={{ backgroundImage: `url(${productData[productIndex].imageUrl})` }}
			className='relative flex bg-cover bg-top bg-no-repeat min-h-80 px-4 items-center'
		>
			<div className='flex justify-between  flex-1'>
				{isCart && children}
				<button className='bg-white rounded-full h-10 w-10 flex justify-center items-center' onClick={() => {changeProductIndex('minus')}}>
					<img src={iconPrevious} alt='icon to go to the previous item' />
				</button>
				<button className='bg-white rounded-full h-10 w-10 flex justify-center items-center' onClick={() => {changeProductIndex('plus')}}>
					<img src={iconNext} alt='icon to go to the next item' />
				</button>
			</div>
		</div>
	);
}

export default ProductDisplay;
