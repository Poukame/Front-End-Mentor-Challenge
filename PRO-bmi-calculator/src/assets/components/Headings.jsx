import clsx from 'clsx';

export function Heading({ className, level = 2, ...props }) {
	let Element = `h${level}`;

	let style = {
		h1: 'mb-6 capitalize text-5xl text-center tracking-tighter font-semibold text-main-gunmetal',
		h2: 'mb-8 text-3xl font-semibold tracking-tighter text-main-gunmetal',
		h3: 'mb-6 text-2xl sm:text-3xl font-semibold tracking-tighter text-main-gunmetal',
		h4: 'text-xl font-semibold tracking-tighter text-main-gunmetal'
	};

	return <Element {...props} className={clsx(className, style[Element])} />;
}
