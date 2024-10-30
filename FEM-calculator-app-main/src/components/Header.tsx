import { ILayoutProps } from "../interface";

function Header({ children }: ILayoutProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="title text-[2rem]">calc</h1>
      <div className="flex items-end gap-4">
        <p className="title text-sm uppercase">Theme</p>
        {children}
      </div>
    </div>
  );
}

export default Header;
