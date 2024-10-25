// Props
export interface IPropsHeader {setToggleMenu:()=>void, setIsCart:()=> void}
export type WithChildren<T = {}> = T & { children?: React.ReactNode };
export interface CounterProps {
	children: (newCount:number) => number,
  calcPrice: number,
  productId: number,
  calcUnitPriceDiscount:number
  }

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
	total?: number,
	count?: number,
	calcUnitPriceDiscount?: number
}