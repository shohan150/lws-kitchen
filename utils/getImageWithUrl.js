function getRecipeImgURL(path) { 
   return new URL(`/assets/thumbs/${path}`, import.meta.url).href; 
 }
 
 export { getRecipeImgURL };
 