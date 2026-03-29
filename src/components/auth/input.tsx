import type { ComponentProps } from "react";
import { forwardRef, useId } from "react";

type InputProps = {
  label: string;
} & ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col">
        <label htmlFor={inputId} className="text-zinc-300 text-xs mx-2">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`bg-zinc-300 placeholder:text-zinc-400 text-zinc-600 py-2 px-3 rounded-full ${className ?? ""}`}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
