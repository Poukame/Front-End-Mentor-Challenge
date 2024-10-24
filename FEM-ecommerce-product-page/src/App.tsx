import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Counter from './components/Counter';
import { useState, createContext } from 'react';
import { productData } from './assets/productData';

const initialValues = {
	isCart: false,
	productIndex: 0,
	sendToCart: (count: number) => {},
};

const AppContext = createContext(initialValues);

export default function App() {
	const [isMenu, setIsMenu] = useState(false);
	const [isCart, setIsCart] = useState(false);
	const [productIndex, setProductIndex] = useState(0);

	function changeProductIndex(param: 'minus' | 'plus') {
		const maxIndex = productData.length;
		if (param.toLowerCase() === 'plus') {
			setProductIndex((productIndex) => (productIndex + 1 >= maxIndex ? 0 : productIndex + 1));
		}
		if (param.toLowerCase() === 'minus') {
			setProductIndex((productIndex) => (productIndex - 1 < 0 ? maxIndex - 1 : productIndex - 1));
		}
	}

	// get the value of count with render props
	const [countFromCounter, setCountFromCounter] = useState(1);

	function sendToCart(count: number) {
		console.log(count);
	}

	return (
		<div className='w-full h-screen'>
			<div className='md:max-w-screen-lg mx-auto'>
				<AppContext.Provider
					value={{ isCart, sendToCart, isMenu, productIndex, changeProductIndex, productData, countFromCounter }}
				>
					<Header setToggleMenu={() => setIsMenu(!isMenu)} setIsCart={() => setIsCart(!isCart)} />
					<ProductDisplay>
						<Cart />
					</ProductDisplay>
					<ProductDetails>
						<Counter>{(countFromCounter: number) => {setCountFromCounter(countFromCounter); return <></>}}</Counter>
					</ProductDetails>
				</AppContext.Provider>
			</div>
		</div>
	);
}

export { AppContext };
