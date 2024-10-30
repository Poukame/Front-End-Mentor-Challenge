import { IPropsDisplay } from "../interface";

function Display({currentValue}:IPropsDisplay) {
  return (
    <div
      className="screen flex justify-end rounded-lg px-4 py-6 text-4xl"
      aria-live="polite"
    >
      {currentValue || 0}
    </div>
  );
}

export default Display;
