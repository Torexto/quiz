type FieldErrorProps = {
   message?: string;
};

export function FieldError({ message }: FieldErrorProps) {
   if (!message) {
      return null;
   }

   return <p className="text-red-500 text-sm">{message}</p>;
}
