import Image from "next/image"
import Link from "next/link"
import image from "../../template/assets/tir.jpg"
export default function HeroSection() {
  return (
   <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
         <Image src={image} alt="Mighty Super Cheesecake" className="w-full h-[450px] object-cover rounded-lg" />
      </div>
      <div>
         <h1 className="text-4xl font-bold mb-4">Decadent Tiramisu Delight</h1>
         <p className="text-gray-600 mb-4">
            Indulge in the ultimate Italian dessert experience with our velvety smooth tiramisu. Layers of
            coffee-soaked ladyfingers and creamy mascarpone filling create a heavenly treat that's sure to impress.
         </p>
         <Link href="/blog-details/1"
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">View Recipe</Link>
      </div>
      </div>
   </section>
  )
}
