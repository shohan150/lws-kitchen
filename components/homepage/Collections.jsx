import Link from "next/link";

export default function Collections() {
  return (
   <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
      <div class="grid md:grid-cols-2 gap-8">
      <div
         class="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
         <img
            src="/thumbs/thumb-9.jpg"
            alt="Sushi Combos"
            class="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
         <div
            class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h3 class="text-xl font-semibold mb-2">10 Must-Try Chicken Recipes</h3>
            <Link href="/Chicken/10%20Must-Try%20Chicken%20Recipes" class="text-orange-300 hover:underline">View Collection</Link>
         </div>
      </div>
      <div
         class="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
         <img
            src="/thumbs/thumb-5.jpg"
            class="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
         <div
            class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h3 class="text-xl font-semibold mb-2">Refreshing and Nutritious Smoothie Recipes</h3>
            <a href="http://localhost:3000/Smoothies/Refreshing%20and%20Nutritious%20Smoothie%20Recipes" class="text-orange-300 hover:underline">View Collection</a>
         </div>
      </div>
      </div>
   </section>
  )
}
