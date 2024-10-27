import iconNext from '../assets/icon-next.svg';
import iconPrevious from '../assets/icon-previous.svg';
import { IoCloseSharp } from 'react-icons/io5';

import { IProductDisplayProps } from '../types';
import { useContext } from 'react';
import { AppContext } from '../App';

declare module 'react' {	interface CSSProperties {
		'--min-h'?: string;
		'--min-w'?: string;
	}
}

function ProductDisplay({ children, height = 320, width = 400}: IProductDisplayProps) {
	const { isCart, productIndex, changeProductIndex, productData, toggleLightBox, toggleLightBoxFn } = useContext(AppContext) ?? {};

	const renderThumb = productData.map((el, index) => {
		return (
			<div
				key={el.id}
				style={{
					borderColor: productIndex === index ? 'hsl(26 100% 55%)' : 'transparent',
					opacity: productIndex === index ? '0.4' : '1',
				}}
				className='rounded-lg overflow-clip border-2'
			>
				<img className='hover:opacity-40' src={el.imageUrl} />
			</div>
		);
	});

	return (
		<div className='flex flex-col gap-4 flex-grow sm:mt-4'>
			<div
				style={{
					backgroundImage: `url(${productData[productIndex].imageUrl})`,
					'--min-h': `${height}px`,
					'--min-w': `${width}px`,
				}}
				className='max-w-xl mx-auto relative md:static flex bg-cover lg:rounded-xl bg-top bg-no-repeat min-h-80 lg:min-h-[var(--min-h)] px-4 items-center lg:min-w-[var(--min-w)] min-w-full sm:min-w-[460px]'
				onClick={() => toggleLightBoxFn()}
			>
				{toggleLightBox && (
					<button className='absolute -top-10 text-white hover:text-main-orange right-0 hidden lg:block text-3xl' onClick={() => toggleLightBoxFn()}>
						<IoCloseSharp />
					</button>
				)}
				<div className='flex justify-between flex-1'>
					{isCart && children}
					<button
						className='bg-white rounded-full h-10 w-10 flex justify-center items-center'
						onClick={(e) => {
							e.stopPropagation()
							changeProductIndex('minus');
						}}
					>
						<img src={iconPrevious} alt='icon to go to the previous item' />
					</button>
					<button
						className='bg-white rounded-full h-10 w-10 flex justify-center items-center'
						onClick={(e) => {
							e.stopPropagation()
							changeProductIndex('plus');
						}}
					>
						<img src={iconNext} alt='icon to go to the next item' />
					</button>
				</div>
			</div>
			<div className='hidden lg:flex justify-between w-[400px] mx-auto gap-2'>{renderThumb}</div>
		</div>
	);
}

export default ProductDisplay;
