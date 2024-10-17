function FilterBox() {
	return (
		<div className='min-w-[300px] bg-white rounded-md flex justify-between shadow-md mx-auto overflow-clip -translate-y-6'>
			<div className="p-4">filters</div>
			<button className='text-cyan-dark font-bold p-4 border-l-2'>Clear</button>
		</div>
	);
}

export default FilterBox;
