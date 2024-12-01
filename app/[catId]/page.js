
import ContentDisplay from "@/components/ContentDisplay";

const CategoryPage = ({ params: { catId } }) => {

    return(
      <main class="container mx-auto px-4 py-8 mt-[100px]">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold mb-2">
            Desserts <span class="text-gray-500 text-2xl font-normal">(98 Recipes)</span>
          </h1>
          <p class="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
            is a recipe I created after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-8.jpg" alt="Decadent Raspberry and Cream Cake"
            class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Decadent Raspberry and Cream Cake</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-7.jpg" alt="Tripple Chocolate Mousse Cake" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Tripple Chocolate Mousse Cake</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-6.jpg" alt="Cranberry Curd Layered Sponge Cake"
            class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Cranberry Curd Layered Sponge Cake</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-5.jpg" alt="Orange and Lemon Curd Tartlets" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Orange and Lemon Curd Tartlets</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-4.jpg" alt="Creamt Chocolate Nutella Fudge Cake"
            class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Creamt Chocolate Nutella Fudge Cake</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-3.jpg" alt="Homemade Mixed Berries Wedding Cake"
            class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Homemade Mixed Berries Wedding Cake</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-2.jpg" alt="Black Forest Birthday Cake" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Black Forest Birthday Cake</h2>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="./assets/thumbs/thumb-1.jpg" alt="Double Thick Layered Sponge Cake"
            class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="font-semibold text-lg mb-2">Double Thick Layered Sponge Cake</h2>
          </div>
        </div>
        <!-- Repeat the above div structure for the remaining dessert items -->
      </div>
    </main>
    )
};

export default CategoryPage;
