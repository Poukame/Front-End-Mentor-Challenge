import { v4 as uuid} from 'uuid'

function JobCardSkills({ children }) {

	const skillList = children.map((skill) => (
		<div key={uuid()} className='bg-cyan-light-bg text-cyan-primary font-bold px-2 py-1 rounded-sm capitalize hover:cursor-pointer'>{skill}</div>
	));

	return <>{skillList}</>;
}

export default JobCardSkills;
