"use client";

import QuizSelector from "@/components/dashboard/QuizSelector";

export default function QuizzesPage() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {[1, 2, 3, 4].map((i) => (
            <QuizSelector
               key={i}
               title={i.toString()}
               description={i.toString()}
               isActive={i % 2 === 0}
               openAction={() => {}}
            />
         ))}
      </div>
   );
}
