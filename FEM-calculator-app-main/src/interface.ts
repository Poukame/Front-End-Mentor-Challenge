export interface IOperations {
	[key: string]: (a: number, b: number) => number;
}

export interface IPropsKeyboard {
	getValue: (label: string) => void;
}

export interface IKeyButton {
	label: string;
	gridArea: string;
	className?: string;
	getValue: (label: string) => void;
}

export interface IPropsDisplay {
    currentValue: string
  }

export interface ILayoutProps {
    children: React.ReactNode;
  }

export interface IThreePositionSwitchProps {
	onPositionChange: (position: number) => void;
}