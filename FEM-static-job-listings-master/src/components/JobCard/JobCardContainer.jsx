import { useState, createContext, useEffect } from 'react';
import FilterBox from '../FilterBox';
import data from '../../assets/data.json';
import JobCard from './JobCard';

const CardContext = createContext();

export default function JobCardContainer() {
	const [isFilter, setIsFilter] = useState(false);
	const [filtersList, setFiltersList] = useState([]);

	useEffect(() => {
		filtersList.length == 0 && setIsFilter(false);
	}, [filtersList]);

	function setFilter(e) {
		setFiltersList((prev) => (prev.includes(e.target.textContent) ? [...prev] : [...prev, e.target.textContent]));
		setIsFilter(true);
	}

	function removeFilter(e) {
		setFiltersList((prev) => prev.filter((el) => el !== e.target.value));
	}

	function clearFilter() {
		setFiltersList([]);
		setIsFilter(false);
	}

	const renderCards = data.map((job) => {
		const {
			id,
			logo,
			newAd,
			featured,
			position,
			role,
			level,
			postedAt,
			contract,
			languages,
			tools,
			company,
			location,
		} = job;

		const jobSkills = [role, level, ...languages, ...tools];

		return (
			<JobCard
				key={id}
				logo={logo}
				newAd={newAd}
				featured={featured}
				position={position}
				role={role}
				level={level}
				postedAt={postedAt}
				contract={contract}
				location={location}
				languages={languages}
				tools={tools}
				company={company}
			>
				{jobSkills}
			</JobCard>
		);
	});

	const filteredCards = isFilter
		? renderCards.filter((el) => el.props.children.some((el) => filtersList.includes(el)))
		: renderCards;

	return (
		<CardContext.Provider value={{ setFilter, removeFilter, clearFilter }}>
			<div className='bg-cyan-light-bg'>
				<div className={`max-w-2xl lg:max-w-5xl mb-4 px-6 ${isFilter ? 'min-h-min' : 'h-14'} transition-height duration-300 ease-in-out mx-auto`}>
					{isFilter && <FilterBox>{filtersList}</FilterBox>}
				</div>
				<div className='max-w-2xl lg:max-w-5xl px-6 mx-auto min-h-screen flex flex-col gap-10'>{filteredCards}</div>
			</div>
		</CardContext.Provider>
	);
}

export { CardContext };
