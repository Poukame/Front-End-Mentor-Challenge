import JobCardSkills from './JobCardSkills';
import JobCardPills from './JobCardPills';

function JobCard({ id, logo, newAd, featured, position, postedAt, contract, location, company, children }) {
	return (
		<div id={id} className='bg-white rounded-md shadow-md border-l-4 border-l-cyan-dark px-4 pb-4 pt-10 relative'>
			<img src={logo} className='h-12 w-12 absolute -top-6' alt={`logo of the company ${company}`} />
			<div className='flex flex-col gap-2'>
				<div className='flex flex-wrap items-center gap-4'>
					<h2 className='font-bold text-cyan-primary capitalize'>{company}</h2>
					<JobCardPills newAd={newAd} featured={featured}></JobCardPills>
				</div>
				<h3 className='font-bold capitalize hover:cursor-pointer active:cursor-pointer'>{position}</h3>
				<div className="text-cyan-dark flex before:content-none [&>*:not(:first-child)]:before:content-['•'] [&>*:not(:first-child)]:before:mx-2">
					<p className='lowercase'>{postedAt}</p>
					<p className='capitalize'>{contract}</p>
					<p className='capitalize'>{location}</p>
				</div>
			</div>
			<hr className='my-3' />
			<div className='flex flex-wrap gap-4'>
				<JobCardSkills>{children}</JobCardSkills>
			</div>
		</div>
	);
}

export default JobCard;
