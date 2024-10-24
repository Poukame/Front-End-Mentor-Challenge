import { RiDeleteBin6Line } from 'react-icons/ri';
import thumb from '../assets/image-product-1-thumbnail.jpg';
import { useContext } from 'react';
import {AppContext} from '../App'

function Cart() {
const {isCart} = useContext(AppContext)

	return (
		<div className='flex flex-col bg-white w-11/12 min-h-72 rounded-xl absolute top-2'>
			<h3 className='font-bold p-4'>Cart</h3>
			<hr />
			<div className='flex flex-col flex-grow justify-start items-center p-4'>
				{!isCart && <p className='font-bold text-dark-gray-blue my-auto'>Your cart is empty.</p>}

				{isCart && (
					<div className='grid grid-cols-12 grid-rows-2 gap-y-0 gap-x-2 w-full'>
						<div className='col-span-2 row-span-2 place-self-center'>
							<img className='rounded-md max-h-20' src={thumb} />
						</div>
						<div className='col-span-9 col-start-3 row-start-1 text-dark-gray-blue content-end'>
							Fall Limited Edition Sneakers
						</div>
						<div className='col-span-9 col-start-3 row-start-2 content-start'>$125.00 x3 $375.00</div>
						<div className='row-span-2 col-start-12 row-start-1 text-dark-gray-blue place-self-center'>
							<RiDeleteBin6Line />
						</div>
					</div>
				)}
				{isCart && <button className='mt-6 bg-main-orange w-full rounded-lg py-3 font-bold'>Checkout</button>}
			</div>
		</div>
	);
}

export default Cart;
