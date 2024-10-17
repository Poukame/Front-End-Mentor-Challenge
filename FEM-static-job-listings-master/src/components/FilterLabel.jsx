import { useContext } from 'react';
import { CardContext } from './JobCard/JobCardContainer';

export default function FilterLabel({ children }) {
	const { removeFilter } = useContext(CardContext);

	return (
		<div className='flex rounded-sm overflow-clip'>
			<div
				className='bg-cyan-light-bg text-cyan-primary font-bold px-2 py-1 capitalize'
			>
				{children}
			</div>
            <button className='bg-cyan-primary hover:bg-cyan-dark-gray focus:bg-cyan-dark-gray text-white font-bold h-8 w-8 flex justify-center items-center' value={children} onClick={removeFilter}>X</button>
		</div>
	);
}
