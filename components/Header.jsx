import Image from "next/image"
import Link from "next/link"
import logo from "../template/assets/lws-kitchen.png"
export default function Header() {
  return (
   <header class="w-full mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav class="flex justify-between items-center">
      <Link href="/" class="text-3xl font-bold">
         <Image src={logo} alt="logo" class="h-10 w-28" />
      </Link>
      <ul class="hidden md:flex space-x-6">
         <li><Link href="/" class="hover:text-orange-500">Home</Link></li>
         <li><Link href="/category" class="hover:text-orange-500">Categories</Link></li>
         <li><Link href="/recipes" class="hover:text-orange-500">Latest Recipes</Link></li>
      </ul>
      <div class="flex items-center space-x-4">
         <Link href="#" class="hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
         </Link>
      </div>
      </nav>
   </header>
  )
}
