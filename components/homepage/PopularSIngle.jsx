import { getCategory } from "@/utils/getCategories";
import Link from "next/link";
import Star from "../svg/Star";

export default function PopularSIngle({recipe}) {
   const categoryName = getCategory(recipe.category_id);
  return (
   <div>
      <Link href={`/${categoryName}/${recipe.title}`}>
         <img src={`/thumbs/${recipe.thumbnail}`} alt={recipe.title} className="w-full h-[300px] object-cover rounded-lg mb-4" />
         <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
         <div className="flex items-center text-yellow-500 mb-2">
            {
               recipe?.rating?.average_rating >= 1 && Array.from({ length: recipe?.rating.average_rating }, (_, index) => <Star key={index} />
            )}
         </div>
         <p className="text-gray-600">{recipe.cooking_time}</p>
      </Link>
   </div>
  )
}
