import { IKeyButton } from "../interface";

function KeyButton({ label, gridArea, className, getValue }: IKeyButton) {
	return (
		<button
			style={{ gridArea: gridArea }}
			className={`place-content-center rounded-lg text-center ${className ?? ''}`}
			onClick={() => getValue(label)}
		>
			{label}
		</button>
	);
}

export default KeyButton;
