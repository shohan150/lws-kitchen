import { getCategoryPosts } from "@/utils/getCategories";

export default function MayAlsoLike({catId}) {

   const recipies = getCategoryPosts(catId).slice(0, 3);

  return (
   <section class="my-12">
      <h2 class="text-3xl font-bold mb-8">You might also like</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

         {recipies.map((recipe, i) => (
            <div key={i}>
               <img src={`/thumbs/${recipe.thumbnail}`} alt={recipe.title} class="w-full h-60 object-cover rounded-lg mb-2" />
               <h3 class="font-semibold">{recipe.title}</h3>
            </div>
         ))}

      </div>
   </section>
  )
}
