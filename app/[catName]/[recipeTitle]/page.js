import BlogCommonContent from "@/components/BlogCommonContent";
import MayAlsoLike from "@/components/MayAlsoLike";
import { getRecipe } from "@/utils/getRecipies";

export default function Recipe({ params: { recipeTitle } }) {
  
  const recipe = getRecipe(recipeTitle);  

  const {title, author, description, thumbnail, published_date, cooking_time, rating, category_id} = recipe;

  return (
    <main class="container mx-auto px-4 py-8 mt-20">
      <article>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <div class="flex items-center space-x-4 mb-6">
          <img src="/avater.png" alt={author} class="w-8 h-8 rounded-full" />
          <span class="text-gray-600">{author}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">{cooking_time}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">getFormattedDate(published_date)</span>
        </div>
        <div class="flex justify-between items-center mb-8">
          <div class="flex space-x-4">
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Save
            </button>
          </div>
        </div>
        <img src={`/thumbs/${thumbnail}`} alt="Cooking Image" class="w-full h-auto mb-8 rounded-lg" />
        <p class="text-gray-600 mb-8">
          One thing I learned living in the Catskills section of Brooklyn, NY was how to cook a good Italian meal. Here
          is a recipe I created after having this dish in a restaurant. Enjoy!
        </p>

        <p class="mb-8 border border-gray-600 rounded-lg p-4">
          {description}
        </p>

        <BlogCommonContent />

      </article>

      <MayAlsoLike catId={category_id} />
    </main>
  )
}
