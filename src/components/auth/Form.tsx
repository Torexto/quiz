import type React from "react";

type FormProps = {
   children: React.ReactNode;
   onSubmit: () => void;
};

export default function Form({ children, onSubmit }: FormProps) {
   return (
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
         {children}
      </form>
   );
}
