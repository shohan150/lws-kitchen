import Image from "next/image"
import Link from "next/link"
import image from "../../template/assets/thumbs/thumb-1.jpg"
export default function HeroSection() {
  return (
   <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
         <Image src={image} alt="Mighty Super Cheesecake" className="w-full h-[450px] object-cover rounded-lg" />
      </div>
      <div>
         <h1 className="text-4xl font-bold mb-4">Waffle Recipes for Every Occasion</h1>
         <p className="text-gray-600 mb-4">
         Waffles are a breakfast favorite that can be sweet, savory, or both! This blog explores the best waffle recipes for every taste, from classic Belgian waffles with maple syrup to savory options like cheddar and herb waffles. 
         </p>
         <Link href="/Waffles/Waffle%20Recipes%20for%20Every%20Occasion"
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">View Recipe</Link>
      </div>
      </div>
   </section>
  )
}
