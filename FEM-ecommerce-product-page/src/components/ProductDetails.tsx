function ProductDetails({children}) {
	return (
		<div className='p-6'>
			<p className='uppercase text-dark-gray-blue font-bold text-sm'>Sneaker company</p>
			<h2 className='mt-4 font-bold text-4xl capitalize'>fall limited</h2>
			<p className='mt-4 text-dark-gray-blue leading-6'>
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
				they'll withstand everything the weather can offer.
			</p>
			<div className='mt-6 flex items-middle'>
				<p className='font-bold text-3xl'>$125.00</p>
				<p className='bg-black text-white rounded-lg px-3 py-1 font-bold ml-4'>50%</p>
				<p className='font-bold text-dark-gray-blue line-through ml-auto self-center text-xl'>$250.00</p>
			</div>
			{children}
		</div>
	);
}

export default ProductDetails;
