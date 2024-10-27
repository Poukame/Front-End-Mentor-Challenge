import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import ProductDetails from './components/ProductDetails';
import LightBox from './components/LightBox';
import LayoutWrapper from './components/LayoutWrapper';
import Cart from './components/Cart';
import { useState, createContext, useRef, useEffect } from 'react';
import { productData } from './assets/productData';
import { IProductsCarts, IAppContext } from './types';

const AppContext = createContext<IAppContext>({
	isCart: false,
	sendToCart: () => {},
	isMenu: false,
	productIndex: 0,
	changeProductIndex: () => {},
	productData: [],
	cartItems: [],
	deleteFromCart: () => {},
	cartRef: { current: null },
	cartIconRef: { current: null },
	toggleLightBox: false,
	toggleLightBoxFn: () => {},
});

export default function App() {
	const cartRef = useRef<HTMLDivElement | null>(null);
	const cartIconRef = useRef<HTMLButtonElement | null>(null);
	const [isMenu, setIsMenu] = useState(false);
	const [isCart, setIsCart] = useState(false);
	const [toggleLightBox, setToggleLightBox] = useState(false)
	const [productIndex, setProductIndex] = useState(0);
	const [cartItems, setCartItems] = useState<IProductsCarts[]>([]);

	useEffect(() => {
		const handleClickOutside = (event:MouseEvent) => {
			if (
				cartRef.current &&
				!cartRef.current.contains(event.target as Node) &&
				cartIconRef.current &&
				!cartIconRef.current.contains(event.target as Node)
			) {
				setIsCart(false);
			}
		};

		if (isCart) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isCart]);

	function changeProductIndex(param: 'minus' | 'plus') {
		const maxIndex = productData.length;
		setProductIndex((productIndex) => {
			const step = param === 'plus' ? 1 : -1;
			const newIndex = (productIndex + step + maxIndex) % maxIndex;
			return newIndex;
		});
	}

	function deleteFromCart(id: number) {
		setCartItems((prev) => {
			if (prev.filter((el) => el.id !== id).length === 0) {
				setIsCart(false);
				return prev.filter((el) => el.id !== id);
			} else {
				return prev.filter((el) => el.id !== id);
			}
		});
	}


	function sendToCart(count: number, productId: number, calcPrice: number, calcUnitPriceDiscount: number) {
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
				calcUnitPriceDiscount: calcUnitPriceDiscount,
			};

			return [...prev, newProduct];
		});
	}
 
	function toggleLightBoxFn() {
		setToggleLightBox(!toggleLightBox)
	}

	return (
		<div className='w-full h-screen'>
			<div className='md:max-w-screen-lg mx-auto'>
				<AppContext.Provider
					value={{
						isCart,
						sendToCart,
						isMenu,
						productIndex,
						changeProductIndex,
						productData,
						cartItems,
						deleteFromCart,
						cartRef,
						cartIconRef,
						toggleLightBox,
						toggleLightBoxFn
					}}
				>
					{toggleLightBox && <LightBox/>}
					<Header setToggleMenu={() => setIsMenu(!isMenu)} setIsCart={() => setIsCart(!isCart)} />
					<LayoutWrapper>
						<ProductDisplay>
							<Cart />
						</ProductDisplay>
						<ProductDetails />
					</LayoutWrapper>
				</AppContext.Provider>
			</div>
		</div>
	);
}

export { AppContext };
