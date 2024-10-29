interface ILayoutProps {
	children: React.ReactNode;
}

function Header({ children }: ILayoutProps) {
	return (
		<div className='flex justify-between items-center'>
			<h1 className='title text-[2rem]'>calc</h1>
			<div className="flex gap-4 items-end">
			<p className='title uppercase text-sm'>Theme</p>
			{children}
			</div>
		</div>
	);
}

export default Header;
