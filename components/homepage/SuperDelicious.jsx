import { getHighRatedRecipies } from "@/utils/getRecipies";
import PopularSIngle from "./PopularSIngle";

export default function SuperDelicious() {

   const popularRecipies = getHighRatedRecipies().slice(0, 3);

  return (
   <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
         {popularRecipies.map((recipe, i) => (
            <PopularSIngle key={i} recipe={recipe} />
         ))}
      </div>
   </section>
  )
}
