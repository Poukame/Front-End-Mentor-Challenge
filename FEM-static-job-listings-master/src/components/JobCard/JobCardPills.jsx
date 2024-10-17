function JobCardPills({newAd, featured}) {
    
	return (
		<>
			{newAd && <div className='uppercase font-bold bg-cyan-primary text-white w-fit px-3 py-1 rounded-full'>New!</div>}
			{featured && <div className='uppercase font-bold w-fit px-3 py-1 rounded-full bg-cyan-dark-gray text-white'>featured</div>}
		</>
	);
}

export default JobCardPills;
