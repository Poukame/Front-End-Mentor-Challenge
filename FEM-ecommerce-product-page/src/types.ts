// Props
export interface IPropsHeader {isMenu: boolean, setToggleMenu:()=>void}
export type WithChildren<T = {}> = T & { children?: React.ReactNode };
export interface CounterProps {
	children: (countFromCounter: number) => React.ReactNode;
  }