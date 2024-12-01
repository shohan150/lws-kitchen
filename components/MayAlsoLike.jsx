import { getCategory, getCategoryPosts } from "@/utils/getCategories";
import Link from "next/link";

export default function MayAlsoLike({catId, title}) {

   const categoryName = getCategory(catId);

   const recipies = getCategoryPosts(catId).slice(0, 3);

   if(recipies.length <= 1 && recipies[0].title === title ) return null;

  return (
   <section class="my-12">
      <h2 class="text-3xl font-bold mb-8">You might also like</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

         {recipies.map((recipe, i) => (
            recipe.title !== title && <div key={i}>
               <Link href={`/${categoryName}/${recipe.title}`}>
                  <img src={`/thumbs/${recipe.thumbnail}`} alt={recipe.title} class="w-full h-60 object-cover rounded-lg mb-2" />
                  <h3 class="font-semibold">{recipe.title}</h3>
               </Link>
            </div>
         ))}

      </div>
   </section>
  )
}
