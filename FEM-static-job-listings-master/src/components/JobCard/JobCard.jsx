import JobCardSkills from './JobCardSkills';
import JobCardPills from './JobCardPills';

function JobCard({ id, logo, newAd, featured, position, postedAt, contract, location, company, children }) {
	return (
		<div id={id} className={`bg-white rounded-md shadow-md ${featured && `border-l-cyan-primary border-l-4`} px-4 pb-4 pt-10 lg:p-6 relative lg:flex lg:gap-6 lg:align-center`}>
			<img src={logo} className='h-12 lg:h-24 w-12 lg:w-24 absolute lg:relative -top-6 lg:top-0' alt={`logo of the company ${company}`} />
			<div className='flex flex-col gap-2'>
				<div className='flex flex-wrap items-center gap-4'>
					<h2 className='font-bold text-cyan-primary capitalize'>{company}</h2>
					<JobCardPills newAd={newAd} featured={featured}></JobCardPills>
				</div>
				<h3 className='font-bold capitalize hover:cursor-pointer active:cursor-pointer hover:text-cyan-primary focus:text-cyan-primary' tabIndex={'0'}>{position}</h3>
				<div className="text-cyan-dark flex before:content-none [&>*:not(:first-child)]:before:content-['•'] [&>*:not(:first-child)]:before:mx-2">
					<p className='lowercase'>{postedAt}</p>
					<p className='capitalize'>{contract}</p>
					<p className='capitalize'>{location}</p>
				</div>
			</div>
			<hr className='my-3 lg:hidden' />
			<div className='flex flex-wrap gap-4 self-center ml-auto'>
				<JobCardSkills>{children}</JobCardSkills>
			</div>
		</div>
	);
}

export default JobCard;
