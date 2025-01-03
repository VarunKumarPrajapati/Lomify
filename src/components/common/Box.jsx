import { twMerge } from "tailwind-merge";

export default function Box({ children, className }) {
  return (
    <div
      className={twMerge(
        "w-full h-fit lg:rounded-lg bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
}