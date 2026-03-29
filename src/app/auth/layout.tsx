export default function AuthLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="w-screen h-screen flex flex-col items-center justify-center p-6">
         <div className="flex flex-col justify-center gap-4 bg-white p-5 rounded-2xl w-full h-full sm:w-125 sm:h-auto">
            {children}
         </div>
      </div>
   );
}
