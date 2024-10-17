import { useState } from 'react';
import Header from './components/Header';
import JobCard from './components/JobCard/index';
import data from './assets/data.json';

function App() {
	const [filters, setFilters] = useState([]);
	
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

		const jobSkills = [role, level, ...languages, ...tools]

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

	return (
		<>
			<Header />
			<JobCard.Container>{renderCards}</JobCard.Container>
		</>
	);
}

export default App;
