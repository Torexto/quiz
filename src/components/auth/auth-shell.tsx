import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  children: ReactNode;
};

export function AuthShell({ title, children }: AuthShellProps) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col justify-center gap-4 bg-white p-5 rounded-2xl w-full h-full sm:w-125 sm:h-auto">
        <h1 className="text-2xl font-semibold text-center text-cyan-500">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
