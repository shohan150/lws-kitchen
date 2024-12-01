import recipies from "../data/recipes.json";


export function getRecipe(title){
   let convertedTitle = title.replace(/%20/g, ' ');
   convertedTitle = convertedTitle.replace(/%27/g, "'");
   convertedTitle = convertedTitle.replace(/%22/g, '"');
   convertedTitle = convertedTitle.replace(/%23/g, '#');
   convertedTitle = convertedTitle.replace(/%24/g, '$');
   convertedTitle = convertedTitle.replace(/%25/g, '%');
   convertedTitle = convertedTitle.replace(/%26/g, '&');
   convertedTitle = convertedTitle.replace(/%2F/g, '/');
   convertedTitle = convertedTitle.replace(/%28/g, '(');
   convertedTitle = convertedTitle.replace(/%29/g, ')');
   convertedTitle = convertedTitle.replace(/%2A/g, '*');
   convertedTitle = convertedTitle.replace(/%2B/g, '+');
   convertedTitle = convertedTitle.replace(/%2C/g, ',');
   convertedTitle = convertedTitle.replace(/%2D/g, '-');
   convertedTitle = convertedTitle.replace(/%2E/g, '.');
   convertedTitle = convertedTitle.replace(/%2F/g, '/');
   convertedTitle = convertedTitle.replace(/%3A/g, ':');
   convertedTitle = convertedTitle.replace(/%3B/g, ';');
   convertedTitle = convertedTitle.replace(/%3D/g, '=');

   console.log("searched title :",convertedTitle);
   

   return recipies.find((recipe) => recipe.title === convertedTitle);
}

export function getHighRatedRecipies() {
   return recipies
      .filter((recipe) => recipe.rating.average_rating >= 4)
      .sort((a, b) => b.rating.average_rating - a.rating.average_rating);
}

export function getLatestRecipies() {
   return recipies.sort((a, b) => new Date(b.published_date) - new Date(a.published_date)).slice(0, 4);
}