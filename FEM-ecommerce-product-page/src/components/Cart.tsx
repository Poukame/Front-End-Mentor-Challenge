import { RiDeleteBin6Line } from 'react-icons/ri';
import { useContext } from 'react';
import { AppContext } from '../App';

function Cart() {
	const { cartRef, cartItems, deleteFromCart } = useContext(AppContext) ?? {};

	const isEmpty = !cartItems.length

	const renderCart = cartItems.map((el) => {
		return (
			<div key={el.id} className='grid grid-cols-12 grid-rows-2 gap-y-0 gap-x-2 w-full mt-2'>
				<div className='col-span-2 row-span-2 place-self-center'>
					<img className='rounded-md max-h-20' src={el.thumbUrl} />
				</div>
				<div className='col-span-9 col-start-3 row-start-1 text-dark-gray-blue content-end'>{el.name}</div>
				<div className='col-span-9 col-start-3 row-start-2 content-start'>
					<span className='text-dark-gray-blue'>
						${el.calcUnitPriceDiscount.toFixed(2)} x {el.count}
					</span>{' '}
					<span className='font-bold ml-4'>${el.total.toFixed(2)}</span>
				</div>
				<div className='row-span-2 col-start-12 row-start-1 text-dark-gray-blue place-self-center' onClick={() => deleteFromCart(el.id)}>
					<RiDeleteBin6Line />
				</div>
			</div>
		);
	});

	return (
		<div ref={cartRef} className='flex flex-col bg-white md:w-96 w-11/12 min-h-72 rounded-xl absolute top-2 md:right-0 md:-top-4 md:shadow-md'>
			<h3 className='font-bold p-4'>Cart</h3>
			<hr />
			<div className='flex flex-col flex-grow justify-start items-center p-4'>
				{isEmpty && <p className='font-bold text-dark-gray-blue my-auto'>Your cart is empty.</p>}

				{!isEmpty && renderCart}
				{!isEmpty && <button className='mt-6 bg-main-orange w-full rounded-lg py-3 font-bold'>Checkout</button>}
			</div>
		</div>
	);
}

export default Cart;
