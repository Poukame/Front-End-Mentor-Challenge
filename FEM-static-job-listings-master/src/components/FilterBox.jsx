import { v4 as uuid } from 'uuid';
import FilterLabel from './FilterLabel';
import { useContext } from 'react';
import { CardContext } from './JobCard/JobCardContainer';

function FilterBox({ children }) {
	const renderFiltersList = children.map((filter) => <FilterLabel key={uuid()}>{filter}</FilterLabel>);
	const {clearFilter} = useContext(CardContext)

	return (
		<div className='min-w-[300px] bg-white rounded-md flex justify-between shadow-md mx-auto overflow-clip -translate-y-6'>
			<div className='p-4 flex flex-wrap gap-2'>{renderFiltersList}</div>
			<button onClick={clearFilter} className='text-cyan-dark font-bold p-4 border-l-2 hover:text-cyan-primary hover:underline focus:text-cyan-primary focus:underline'>
				Clear
			</button>
		</div>
	);
}

export default FilterBox;
