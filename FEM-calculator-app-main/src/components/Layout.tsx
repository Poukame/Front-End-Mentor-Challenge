
interface ILayoutProps {
    children: React.ReactNode;
  };

function Layout({ children }:ILayoutProps) {
	return <div className="flex flex-col gap-4 max-w-md mx-auto">{children}</div>;
}

export default Layout;
