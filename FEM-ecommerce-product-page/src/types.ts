// Props
export interface IPropsHeader {setToggleMenu:()=>void, setIsCart:()=> void}
export interface CounterProps {
  children: (newCount:number) => React.ReactNode,
  calcPrice: number,
  productId: number,
  calcUnitPriceDiscount:number
  }

export interface IProductDisplayProps {
	children?: React.ReactNode,
	height?: number,
	width?: number,
}

//Data Types
export interface IProductData {
		id: number,
		brand: string,
		name: string,
		description: string,
		regularPrice: number,
		isDiscount: boolean,
		discountValue: number,
		imageUrl: string,
		thumbUrl: string,
}

export interface IProductsCarts extends IProductData {
	total: number,
	count: number,
	calcUnitPriceDiscount: number
}


// App Context Init
export interface IAppContext {
	isCart: boolean;
	sendToCart: (count: number, productId: number, calcPrice: number, calcUnitPriceDiscount: number) => void;
	isMenu: boolean;
	productIndex: number;
	changeProductIndex: (param: 'plus' | 'minus') => void;
	productData: IProductData[];
	cartItems: IProductsCarts[];
	deleteFromCart: (id: number) => void;
	cartRef: React.MutableRefObject<HTMLDivElement | null>;
	cartIconRef: React.MutableRefObject<HTMLButtonElement | null>;
	toggleLightBox: boolean;
	toggleLightBoxFn: () => void;
  }