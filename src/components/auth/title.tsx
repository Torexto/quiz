type TitleProps = { children: React.ReactNode };

export default function Title({ children }: TitleProps) {
   return (
      <h1 className="text-2xl font-semibold text-center text-cyan-500">
         {children}
      </h1>
   );
}
