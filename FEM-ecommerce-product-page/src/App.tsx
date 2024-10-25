import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { useState, createContext } from 'react';
import { productData } from './assets/productData';
import { IProductsCarts } from './types';

const initialValues = {
	isCart: false,
	productIndex: 0,
	isMenu: false,
	productData: { productData },
	changeProductIndex: (param: string) => {},
	sendToCart: (count: number, productId: number, calcPrice: number, calcUnitPriceDiscount:number) => {},
};

const AppContext = createContext(initialValues);

export default function App() {
	const [isMenu, setIsMenu] = useState(false);
	const [isCart, setIsCart] = useState(false);
	const [productIndex, setProductIndex] = useState(0);
	const [cartItems, setCartItems] = useState<IProductsCarts[]>([]);

	function changeProductIndex(param: 'minus' | 'plus') {
		const maxIndex = productData.length;
		setProductIndex((productIndex) => {
			const step = param === 'plus' ? 1 : -1;
			const newIndex = (productIndex + step + maxIndex) % maxIndex;
			return newIndex;
		});
	}

	function deleteFromCart(id:number) {
		setCartItems(prev => {
			if(prev.filter(el=> el.id !== id).length === 0) {
				setIsCart(false)
				return prev.filter(el=> el.id !== id)
			} else {
				return prev.filter(el=> el.id !== id)
			}
		})
	}

	function sendToCart(count: number, productId: number, calcPrice: number, calcUnitPriceDiscount:number) {

		setCartItems((prev) => {
			const existingCartItem = prev.find((el) => el.id === productId);

			if (existingCartItem) {
				return prev.map((el) => {
					if (el.id === productId) {
						return {
							...el,
							total: el.total + calcPrice,
							count: el.count + count,
						};
					}
					return el;
				});
			} 

			const getProduct = productData.find((el) => el.id === productId);

			if (!getProduct) {
				console.error(`Product with ID ${productId} not found in productData`);
				return prev;
			}
	
			const newProduct = {
				...getProduct,
				total: calcPrice,
				count: count,
				calcUnitPriceDiscount: calcUnitPriceDiscount
			};
	
			return [...prev, newProduct];
		});
	}

	return (
		<div className='w-full h-screen'>
			<div className='md:max-w-screen-lg mx-auto'>
				<AppContext.Provider value={{ isCart, sendToCart, isMenu, productIndex, changeProductIndex, productData, cartItems, deleteFromCart }}>
					<Header setToggleMenu={() => setIsMenu(!isMenu)} setIsCart={() => setIsCart(!isCart)} />
					<ProductDisplay>
						<Cart />
					</ProductDisplay>
					<ProductDetails />
				</AppContext.Provider>
			</div>
		</div>
	);
}

export { AppContext };
