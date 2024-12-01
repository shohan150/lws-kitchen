import { getHighRatedRecipies } from "@/utils/getRecipies";
import Star from "../svg/Star";

export default function SuperDelicious() {

   const popularRecipies = getHighRatedRecipies().slice(0, 3);

  return (
   <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
         {popularRecipies.map((recipe, i) => (
            <div key={i}>
               <img src={`/thumbs/${recipe.thumbnail}`} alt={recipe.title} className="w-full h-[300px] object-cover rounded-lg mb-4" />
               <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
               <div className="flex items-center text-yellow-500 mb-2">
                  {
                     recipe?.rating?.average_rating >= 1 && Array.from({ length: recipe?.rating.average_rating }, (_, index) => <Star key={index} />
                  )}
               </div>
               <p className="text-gray-600">{recipe.cooking_time}</p>
            </div>
         ))}
      </div>
   </section>
  )
}
