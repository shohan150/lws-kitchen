import { getCategory } from "@/utils/getCategories";
import { getLatestRecipies } from "@/utils/getRecipies";

export default function LatestRecipies() {
   const latestRecipies = getLatestRecipies();

  return (
   <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div class="grid md:grid-cols-4 gap-8">
         {
            latestRecipies.map((recipe, i) => (
               <div key={i}>
               <img
                  src={`/thumbs/${recipe.thumbnail}`}
                  alt="Strawberry Cream" class="w-full h-[300px] object-cover rounded-lg mb-4" />
               <h3 class="text-lg font-semibold mb-2">{recipe.title}</h3>
               <p class="text-gray-600">{getCategory(recipe.category_id)}</p>
            </div>
            ))
         }
      </div>
   </section>
  )
}
