type ButtonProps = {
   children: React.ReactNode;
   onClick?: () => void;
   type?: "submit" | "button";
};

export function Button({ children, onClick, type }: ButtonProps) {
   return (
      <button
         onClick={onClick}
         type={type}
         className="bg-cyan-500 p-3 rounded-full cursor-pointer text-white"
      >
         {children}
      </button>
   );
}
