import clsx from "clsx";

type ButtonProps = {
   children: React.ReactNode;
   onClick: () => void;
   className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
   return (
      <button
         type="button"
         onClick={onClick}
         className={clsx(
            "p-2 hover:bg-app-hover rounded-lg transition-colors cursor-pointer",
            className,
         )}
      >
         {children}
      </button>
   );
}
