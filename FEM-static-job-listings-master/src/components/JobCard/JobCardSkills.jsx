import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { CardContext } from '../JobCard/JobCardContainer';

function JobCardSkills({ children }) {
	const { setFilter } = useContext(CardContext);

	const skillList = children.map((skill) => (
		<button
			key={uuid()}
			className='bg-cyan-light-bg text-cyan-primary hover:text-white hover:bg-cyan-primary focus:text-white focus:bg-cyan-primary font-bold px-2 py-1 rounded-sm capitalize hover:cursor-pointer'
			onClick={setFilter}
		>
			{skill}
		</button>
	));

	return <>{skillList}</>;
}

export default JobCardSkills;
