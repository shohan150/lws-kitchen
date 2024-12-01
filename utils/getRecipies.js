import recipies from "../data/recipes.json";

export function getHighRatedRecipies() {
   return recipies
      .filter((recipe) => recipe.rating.average_rating >= 4)
      .sort((a, b) => b.rating.average_rating - a.rating.average_rating);
}