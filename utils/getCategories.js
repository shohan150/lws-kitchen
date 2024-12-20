import categories from "../data/categories.json";
import recipes from "../data/recipes.json";

export function getCategory(id) {
  const category = categories.find((category) => category.id === id);  

  return category.name;
}

export function getCategoryPosts(id) {
   const categoryPosts = recipes.filter((recipe) => recipe.category_id === id);

   const sortedCategoryPosts = categoryPosts.sort((a, b) => new Date(b.published_date) - new Date(a.published_date)).slice(0, 4);

   return sortedCategoryPosts;
}

export function getCategoryId(name) {
  const categoryId = categories.find((category) => category.name === name);

  return categoryId.id; 
}

export function getTopCategories() {
   const recipeCounts = recipes.reduce((counts, recipe) => {
      const categoryId = recipe.category_id;
      counts[categoryId] = (counts[categoryId] || 0) + 1;
      return counts;
    }, {});
  
    // Step 2: Map counts to categories
    const categoriesWithCounts = categories.map((category) => ({
      id: category.id,
      name: category.name,
      image: category.image,
      recipeCount: recipeCounts[category.id] || 0, // Default to 0 if no recipes
    }));
  
    // Step 3: Sort categories by recipe count in descending order
    const sortedCategories = categoriesWithCounts.sort(
      (a, b) => b.recipeCount - a.recipeCount
    );
  
    // Step 4: Return the top 6 categories
    return sortedCategories.slice(0, 6);
   
}