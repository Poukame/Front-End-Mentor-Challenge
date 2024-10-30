import { ILayoutProps } from "../interface";

function Layout({ children }: ILayoutProps) {
  return <div className="mx-auto flex max-w-md flex-col gap-4">{children}</div>;
}

export default Layout;
