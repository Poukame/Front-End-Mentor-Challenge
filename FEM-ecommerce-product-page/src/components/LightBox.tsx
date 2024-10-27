import ProductDisplay from './ProductDisplay';
import { AppContext } from '../App';
import { useContext } from 'react';

function LightBox() {
	const { toggleLightBoxFn } = useContext(AppContext) ?? {};
	return (
		<div
			className='absolute top-0 left-0 lg:flex items-center z-50 bg-slate-800 bg-opacity-60 w-full h-full hidden'
			onClick={(e) => {
				e.stopPropagation(); toggleLightBoxFn();
			}}
		>
			<ProductDisplay width={600} height={600}></ProductDisplay>
		</div>
	);
}

export default LightBox;
