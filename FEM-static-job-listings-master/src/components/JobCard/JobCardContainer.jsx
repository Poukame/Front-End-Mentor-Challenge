import FilterBox from "../FilterBox";

function JobCardContainer({ children }) {
	const isVisible = true;

	return (
		<div className="bg-red-300">
			<div className={`px-6 ${isVisible ? 'h-24' : 'h-14'} transition-height duration-300 ease-in-out`}>
				{isVisible && <FilterBox />}
			</div>
			<div className='max-w-[1440px] px-6 mx-auto min-h-screen flex flex-col gap-10'>
				{children}
			</div>
		</div>
	);
}

export default JobCardContainer;
