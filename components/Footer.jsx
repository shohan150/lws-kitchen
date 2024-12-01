import Image from "next/image"
import Link from "next/link"
import logo from "../template/assets/lws-kitchen.png"

export default function Footer() {
  return (
   <footer class="bg-gray-100 py-8">
      <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
         <div>
            <Link href="/index.html" class="text-3xl font-bold">
            <Image src={logo} alt="logo" class="h-10 w-28" />
            </Link>
            <p class="text-gray-600 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            </p>
         </div>
         <div>
            <h4 class="font-semibold mb-4">LWS Kitchen</h4>
            <ul class="space-y-2">
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">About us</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Careers</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Contact us</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Feedback</Link></li>
            </ul>
         </div>
         <div>
            <h4 class="font-semibold mb-4">Legal</h4>
            <ul class="space-y-2">
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Terms</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Conditions</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Cookies</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Copyright</Link></li>
            </ul>
         </div>
         <div>
            <h4 class="font-semibold mb-4">Follow</h4>
            <ul class="space-y-2">
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Facebook</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Twitter</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Instagram</Link></li>
            <li><Link href="#" class="text-gray-600 hover:text-orange-500">Youtube</Link></li>
            </ul>
         </div>
      </div>
      </div>
   </footer>
  )
}