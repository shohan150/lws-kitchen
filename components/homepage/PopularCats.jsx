import { getTopCategories } from "@/utils/getCategories";

export default function PopularCats() {
   const cats = getTopCategories();
  return (
   <section class="mb-16">
      <div class="flex justify-between items-top">
      <h2 class="text-3xl font-bold mb-8">Popular Categories</h2>
      <a href="./category.html" class="text-orange-500">View All</a>
      </div>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">

         {
            cats.map((cat) => (
               <div key={cat.id} class="cursor-pointer text-center group">
                  <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                     <img
                     src={`${cat.image}`}
                     alt="Breakfast"
                     class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <p class="transition-transform duration-300 group-hover:scale-105">{cat.name}</p>
               </div>
            ))
         }
      </div>
   </section>
  )
}
