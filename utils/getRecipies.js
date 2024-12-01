import recipies from "../data/recipes.json";


export function getRecipe(id){
   return recipies.find((recipe) => recipe.id === id);
}

export function getHighRatedRecipies() {
   return recipies
      .filter((recipe) => recipe.rating.average_rating >= 4)
      .sort((a, b) => b.rating.average_rating - a.rating.average_rating);
}

export function getLatestRecipies() {
   return recipies.sort((a, b) => new Date(b.published_date) - new Date(a.published_date)).slice(0, 4);
}